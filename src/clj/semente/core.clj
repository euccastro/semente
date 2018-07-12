(ns semente.core
  (:require
   [clojure.data.json :as json]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.pprint :as pp]
   [datomic.client.api :as d]
   [datomic.ion.lambda.api-gateway :as apigw]
   [cemerick.friend :as friend]
   [cemerick.friend.workflows :as wflows]
   [cemerick.friend.credentials :as creds]
   [ring.middleware.defaults :refer (wrap-defaults site-defaults)]))

(def get-conn
  (memoize #(d/connect
             (d/client {:server-type :ion
                        :region "eu-central-1"
                        :system "deitomique"
                        :query-group "deitomique"
                        :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
                        :proxy-port 8182})
             {:db-name "semente"})))

(def users {"root" {:username "root"
                    :password (creds/hash-bcrypt "admin_password")
                    :roles #{::admin}}
            "jane" {:username "jane"
                    :password (creds/hash-bcrypt "user_password")
                    :roles #{::user}}})

(defn ring-handler
  [{:keys [headers body uri]}]
  (friend/authorize #{::admin}
                    {:status 200
                     :headers {"Content-Type" "text/plain"}
                     :body (str "Olá " uri "!")}
                    "Admin page"))

(def ring-app
  (-> ring-handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn users)
                            :workflows [(wflows/interactive-form)]})
      (wrap-defaults site-defaults)))

(def webroot (apigw/ionize ring-app))

(comment
  (ring-app {:server-port 8088
             :server-name "127.0.0.1"
             :uri "http://semente.gal/ola"
             :scheme :http
             :request-method :get
             :headers {}
             :remote-addr "8.1.2.3"}))
