(ns semente.http-server
  (:require [aleph.http :as http]
            [reitit.ring :as rring]
            [ring.middleware.defaults :as ring-defaults]))

(defn handler [_]
  {:status 200
   :headers {"content/type" "text/plain"}
   :body "Olo!!"})

(defn handler2 [_]
  {:status 200
   :headers {"content/type" "text/plain"}
   :body "OlA!!"})

(defn not-found [_]
  (println "not found!")
  {:status 404
   :body "Not found!"})

(def router
  (rring/router [["/olo" {:get handler}]
                 ["/ola" {:get handler2}]]))

(def rhandler (rring/ring-handler
               router
               (rring/create-default-handler {:not-found (constantly {:status 404 :body "Nom encontrado."})})
               {:middleware [[ring-defaults/wrap-defaults
                              (assoc ring-defaults/site-defaults :static {:resources "pub"})]]}))

(defonce server (atom nil))

(def hnd (rring/create-resource-handler {:path "/"
                                         :not-found-handler
                                         (constantly {:status 404 :body "Nara"})}))

(defn swap-server! [thunk]
  (swap! server
         (fn [old]
           (when old
             (.close old)
             (.wait-for-close old))
           (thunk))))

(defn stop-server! []
  (swap-server! (fn [] nil)))

(defn restart-server! []
  (swap-server! #(http/start-server #'rhandler {:port 62000})))

(defn -main []
  (restart-server!))

(comment
  (stop-server!)
  (restart-server!)
  (rhandler {:request-method :get :uri "/provasntese"})

  (hnd {:request-method :get :uri "prova"})
  )
