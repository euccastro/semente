(ns semente.http-server
  (:require [aleph.http :as http]
            [reitit.ring :as rring]
            [ring.middleware.defaults :as ring-defaults]))

(defn handler [_]
  {:status 200
   :headers {"content-type" "text/html"}
   :body "Olo!!"})

(defn handler2 [_]
  {:status 200
   :headers {"content-type" "text/html"}
   :body "OlA!!"})

(defn not-found [_]
  (println "not found!")
  {:status 404
   :body "Not found!"})

(def router
  (rring/router [["/olo" {:get handler}]
                 ["/ola" {:get handler2}]]))

(def not-found-handler
  (rring/create-default-handler {:not-found (constantly {:status 404
                                                         :headers {"content-type" "text/html"}
                                                         :body "Nom encontrado."})}))

(def rhandler (rring/ring-handler
               router
               not-found-handler
               {:middleware [[ring-defaults/wrap-defaults
                              (assoc ring-defaults/site-defaults :static {:resources "pub"})]]}))

(defonce server (atom nil))

(defn swap-server! [thunk]
  (swap! server
         (fn [old]
           (when old
             (.close old)
             (.wait-for-close old))
           (thunk))))

(defn stop-server! []
  (swap-server! (constantly nil)))

(defn restart-server! []
  (swap-server! #(http/start-server #'rhandler {:port 62000})))

(defn -main []
  (println "Arrancando Aleph...")
  (restart-server!)
  (println "Escoitando no porto 62000 (redirigido desde 80)"))

(comment
  (stop-server!)
  (restart-server!)
  (not-found-handler {:request-method :get :uri "heheheh"})
  (rhandler {:request-method :get :uri "/olo"})
  )
