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

(defn dup [xs]
  (conj xs (first xs)))

(defn wrap-add-cookie [handler]
  (fn [req]
    (update-in (handler req) [:headers "Set-Cookie"] dup)))

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

(def webroot (apigw/ionize ring-app))

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
