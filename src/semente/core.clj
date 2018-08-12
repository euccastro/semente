(ns semente.core
  (:require [amazonica.aws.s3 :as s3]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as wflows]
            [cemerick.friend.credentials :as creds]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [com.rpl.specter :as s]
            [compojure.core :refer (defroutes GET POST)]
            [compojure.route :refer (resources not-found)]
            [datomic.client.api :as d]
            [datomic.ion.lambda.api-gateway :as apigw]
            digest
            [net.icbink.expand-headers.core :refer (wrap-expand-headers)]
            [ring.middleware.keyword-params :refer (wrap-keyword-params)]
            [ring.middleware.params :refer (wrap-params)]
            [ring.middleware.session :refer (wrap-session)]
            [ring.middleware.session.cookie :refer (cookie-store)]
            [rum.core :as rum]
            [semente.elasticsearch :as es]))

(def conn
  (memoize
   (fn []
     (d/connect
      (d/client {:server-type :ion
                 :region "eu-central-1"
                 :system "deitomique"
                 :query-group "deitomique"
                 :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
                 :proxy-port 8182})
      {:db-name "semente"}))))

(def init-permission-hierarchy
  (memoize
   (fn [p]
     (let [m (d/pull (d/db (conn))
                     '[{:permission/privilege [:db/ident]}
                       {:permission/scope [:db/ident]}]
                     p)]
       (some->> (get-in m [:permission/privilege :db/ident]) (derive p))
       (some->> (get-in m [:permission/scope :db/ident]) (derive p))))))

(defn init-permission-hierarchies [ps]
  (dorun (map init-permission-hierarchy ps)))

(comment
  ;; to set a password:
  (d/transact conn {:tx-data [[:db/add [:user/name "estevo"] :user/password-hash (creds/hash-bcrypt "abcd")]]})
  )

(defn load-credentials [username]
  (when-let [m (d/pull (d/db (conn))
                       '[:user/password-hash {:user/permission [:db/ident]}]
                       [:user/name username])]
    {:username username
     :password (:user/password-hash m)
     :roles (doto (into #{} (map :db/ident (:user/permission m)))
              init-permission-hierarchies)}))

(rum/defc login-form []
  [:html
   [:head [:meta {:charset "UTF-8"}]]
   [:body
    [:form {:action "/login" :method "post"}
     [:div
      [:div "utente"]
      [:input {:type "text" :name "username"}]]
     [:div
      [:div "senha"]
      [:input {:type "password" :name "password"}]]
     [:div
      [:input {:type "submit"}]]]]])

(rum/defc edit [doc-name contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/css/Draft.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/css/prova.css"}]]
   [:body
    [:#app "Aqui iriam as tuas movidorras."]
    [:script {:src "/cljs-out/dev-main.js" :type "text/javascript"}]
    [:script {:type "text/javascript"
              :dangerouslySetInnerHTML {:__html
                                        (str "semente.webmain.main("
                                             (pr-str doc-name)
                                             ", "
                                             (or contents "null")
                                             ");")}}]]])

(defn merge-style [start end style]
  (fn [xf]
    (fn
      ([] (xf))
      ([result] (xf result))
      ([result [input-start input-end input-styles]]
       (let [xf-maybe
             (fn [result start end styles]
               (if (< start end)
                 (xf result [start end styles])
                 result))]
         (-> result
             (xf-maybe input-start
                       (min start input-end)
                       input-styles)
             (xf-maybe (max start input-start)
                       (min end input-end)
                       (conj input-styles style))
             (xf-maybe (max end input-start)
                       input-end
                       input-styles)))))))

(def block-style->tag
  {"BOLD" :strong
   "ITALIC" :em})

(defn add-span [spans next]
  (let [start (:offset next)
        end (+ start (:length next))
        style (-> next :style block-style->tag)]
    (into [] (merge-style start end style) spans)))

(defn render-text [{:keys [text] :as block}]
  (println "block si")
  (prn block)
  (println)
  (let [spans (reduce add-span
                      [[0 (.length text) []]]
                      (:inlineStyleRanges block))]
    (for [[start end styles] spans]
      (reduce (fn [x style] [style x]) (subs text start end) styles))))

(defn content-state->hiccup [content-state]
  (println "content state si")
  (prn content-state)
  (println)
  (for [b (:blocks content-state)]
    (if (= (:type b) "unstyled")
      [:p {:key (:key b)} (render-text b)]
      [:pre {:key (:key b)} (with-out-str (clojure.pprint/pprint b))])))

(rum/defc view [contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]]
   [:body (content-state->hiccup contents)]])

(defn put-public [k content-type size contents]
  (s3/put-object {:bucket-name "datomique.icbink.org"
                  :key k
                  :metadata {:content-type content-type
                             :content-size size}
                  :input-stream (io/input-stream contents)
                  :canned-acl :public-read}))

(defroutes ring-handler
  (POST "/guarda" [name contents & etc]
        (let [blobs (filter (fn [[k _]] (str/starts-with? k "blob:")) etc)
              filenames (into {} (pmap (fn [[k v]]
                                         [k (str "img/"
                                                 (digest/sha-256 (:tempfile v))
                                                 "." (last (str/split (:content-type v) #"/")))])
                                       blobs))]
          (dorun (pmap (fn [[k {:keys [content-type size tempfile]}]]
                         (put-public (filenames k) content-type size tempfile))
                       blobs))
          (es/save-doc name {:contents (->> contents
                                            json/read-str
                                            (s/transform ["entityMap" s/MAP-VALS "data" "url"]
                                                         #(str "https://datomique.icbink.org/res/" (filenames %)))
                                            json/write-str)})))
  (GET "/login" []
       (rum/render-static-markup (login-form)))
  (GET "/prova" [] (friend/authorize #{:permission.privilege/admin} "Olá!"))
  (GET "/edit/:id" [id]
       (rum/render-static-markup (edit id (get (es/load-doc id) "contents"))))
  (GET "/view/:id" [id]
       (some-> id
               es/load-doc
               (get "contents")
               (json/read-str :key-fn keyword)
               view
               rum/render-static-markup))
  (resources "/")
  (not-found "U-lo?"))

(comment
  ;; auth stuff
  (def conv {"blob:http://localhost:9500/2f3b2a63-b3ce-4b7a-a5ea-4eb5af284799" "CONVERTERED!"})
  (require '[com.rpl.specter :as s])
  (clojure.pprint/pprint
   )
  (str/split "um/dous" #"/")
  (and (= request-method :get) (= uri "/login"))
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (rum/render-static-markup (login-form))}
  (friend/authorized? #{::admin ::user} friend/*identity*)
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Olá amo! 3"}
  :else
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (str "Olá plebeio! 7" uri)}
  )

(def ring-app
  (-> ring-handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn load-credentials)
                            :workflows [(wflows/interactive-form)]})
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      wrap-keyword-params
      wrap-params
      wrap-expand-headers))

(def webroot (apigw/ionize ring-app))
