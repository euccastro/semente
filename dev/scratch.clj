(ns semente.scratch
  (:require [datomic.client.api :as d]))

(def cfg {:server-type :ion
          :region "eu-central-1"
          :system "deitomique"
          :query-group "deitomique"
          :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
          :proxy-port 8182})

(def client (d/client cfg))

(d/create-database client {:db-name "semente"})

(def conn (d/connect client {:db-name "semente"}))

(def schema
  [
   ;; utente

   {:db/ident :user/name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome (só minúsculas ASCII)"}

   {:db/ident :user/email
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Endereço de email"}

   {:db/ident :user/permission
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true}

   {:db/ident :permission/scope
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident :permission/privilege
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   ;; âmbito

   {:db/ident :scope/display-name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome do âmbito para mostrar, em minúsculas"}

   {:db/ident :scope/about
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "ID do elemento elasticsearch onde está o texto da secçom de Quem Somos para este âmbito"}

   {:db/ident :scope/logo-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "ID do URI onde está o logo do âmbito"}

   {:db/ident :scope/facebook-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Facebook deste âmbito, se houver"}

   {:db/ident :scope/youtube-url
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI do canal de YouTube deste âmbito, se houver"}

   {:db/ident :scope/twitter-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Twitter deste âmbito, se houver"}

   {:db/ident :scope/centers
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true
    :db/doc "Centros deste âmbito"}])

(def bootstrap-data
  [{:db/ident :scope/national
    :scope/display-name "nacional"}
   {:db/ident :permission.privilege/admin}])


(def eu {:user/name "estevo"
         :user/email "euccastro@gmail.com"
         :user/permission [{:permission/scope :scope/national
                            :permission/privilege :permission.privilege/admin}]})
(comment
  (d/transact conn {:tx-data })

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
