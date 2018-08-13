(ns semente.scratch
  (:require [datomic.client.api :as d]))

(def es "https://search-semente-mbk7y7yizywtxbov5s64to2gdm.eu-central-1.es.amazonaws.com")
(require '[clj-http.client :as client])

(print (:body (client/put (str es "/edits/_doc/xyz?pretty") {:body "{\"a\": \"hello\"}"
                                                             :content-type "application/json"})))


(print (:body (client/get (str es "/edits/_doc/xyz?pretty"))))

(defn doc-url [name]
  (str es "/edits/_doc/" name))

(defn save-doc [name contents]
  (client/put (doc-url name)
              {:body (json/write-str contents)
               :content-type "application/json"}))

(defn load-doc [name]
  (-> name
      doc-url
      client/get
      :body
      json/read-str
      (get "_source")))

(load-doc "xyz")

;; ----------------


(def cfg {:server-type :ion
          :region "eu-central-1"
          :system "deitomique"
          :query-group "deitomique"
          :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
          :proxy-port 8182})

(def client (d/client cfg))

(d/delete-database client {:db-name "semente"})
(d/create-database client {:db-name "semente"})

(def conn (d/connect client {:db-name "semente"}))



(def bootstrap-data
  [{:db/ident :scope/national
    :scope/display-name "nacional"}
   {:db/ident :permission.privilege/admin}])


(def eu [{:user/name "estevo"
          :user/email "euccastro@gmail.com"
          :user/permission [{:db/ident :permission/national-admin
                             :permission/scope :scope/national
                             :permission/privilege :permission.privilege/admin}]}])

(require '[semente.core :as sc])

(sc/load-credentials "estevo")
(comment
  (derive ::a ::b)
  (isa? ::a ::b)
  (d/transact conn {:tx-data schema})
  (d/transact conn {:tx-data *1})

  (def username "estevo")
  (d/pull (d/db conn) '[{:user/permission [:db/ident]}] [:user/name username])
  (d/pull (d/db conn) '[*] [:user/name "estevo"])
  (require
   '[cemerick.friend.credentials :as creds])
  (d/transact conn {:tx-data [[:db/add [:user/name "estevo"] :user/password-hash (creds/hash-bcrypt "abcd")]]})

  (d/q '[:find ?n
         :where
         [?p :permission/privilege :permission.privilege/admin]
         [?u :user/permission ?p]
         [?u :user/name ?n]]
       (d/db conn)))
*1

{:server-port 8080
 :server-name "127.0.0.1"
 :uri "semente.gal/prova"
 :scheme :http
 :request-method :get
 :headers {}
 :remote-addr "8.1.2.3"}

(def get-conn
  (memoize #(d/connect
             (d/client {:server-type :ion
                        :region "eu-central-1"
                        :system "deitomique"
                        :query-group "deitomique"
                        :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
                        :proxy-port 8182})
             {:db-name "semente"})))

(comment
  (def users {"root" {:username "root"
                      :password (creds/hash-bcrypt "admin_password")
                      :roles #{::admin}}
              "jane" {:username "jane"
                      :password (creds/hash-bcrypt "user_password")
                      :roles #{::user}}}))

(def log (atom []))

(defn dup [xs]
  (conj xs (first xs)))

(defn wrap-add-cookie [handler]
  (fn [req]
    (update-in (handler req) [:headers "Set-Cookie"] dup)))

(defn ring-handler
  [{:keys [headers body uri params session]}]
  (if (= uri "/favicon.ico")
    {:status 404
     :body "Not found!"}
    (do
      (swap! log conj uri)
      (let [count (get session :counter 0)]
        {:status 200
         :headers {"Content-Type" "text/plain"
                   "p-ro-va-heaDers" ["a" "b" "c" "d" "e"]}
         :body (str "Olá " count "-" (pr-str @log) "!")
         :session (assoc session :counter (inc count))}))))

(def ring-app
  (-> ring-handler
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      wrap-keyword-params
      wrap-params
      wrap-add-cookie
      wrap-expand-headers))

(comment
  (def ring-app
    (-> ring-handler
        (wrap-defaults site-defaults)))
  (def ring-app
    (-> ring-handler
        (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn users)
                              :workflows [(wflows/interactive-form)]})
        (wrap-defaults site-defaults))))


(comment
  (clojure.pprint/pprint
   (ring-app {:server-port 8088
              :server-name "127.0.0.1"
              :uri "http://semente.gal/ola"
              :scheme :http
              :request-method :get
              :headers {}
              :remote-addr "8.1.2.3"})

   )

  )

(ns semente.core
  (:require
   [clojure.data.json :as json]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.pprint :as pp]
   [datomic.client.api :as d]
   [datomic.ion.lambda.api-gateway :as apigw]
   [cemerick.friend :as friend]
   ;; [cemerick.friend.workflows :as wflows]
   ;; [cemerick.friend.credentials :as creds]
   [ring.middleware.keyword-params :refer (wrap-keyword-params)]
   [ring.middleware.params :refer (wrap-params)]
   [ring.middleware.session :refer (wrap-session)]
   [ring.middleware.session.cookie :refer (cookie-store)]
   [clojure.string :as str]
   [net.icbink.expand-headers.core :refer (wrap-expand-headers)]))
