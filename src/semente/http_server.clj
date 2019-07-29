(ns semente.http-server
  (:require [aleph.http :as http]
            [reitit.ring :as rring]
            [ring.middleware.defaults :as ring-defaults])
  (:import [io.netty.handler.ssl SslContextBuilder]
           [java.io File]))

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

(defonce servers (atom {}))

(defn start-servers [https?]
  (cond-> {:http (http/start-server #'rhandler {:port 62000})}
    https? (assoc :https
                  (http/start-server
                   #'rhandler
                   {:port 62443
                    :ssl-context (.build (SslContextBuilder/forServer
                                          ;; DOMINIOSEMENTE
                                          (File. "/etc/letsencrypt/live/semente.xyz/fullchain.pem")
                                          (File. "/etc/letsencrypt/live/semente.xyz/privkey.pem")))}))))

(defn stop-servers [m]
  (let [futures (for [server [:http :https]
                      :let [old-server (server m)]
                      :when old-server]
                  (future
                    (.close old-server)
                    (.wait-for-close old-server)))]
    (dorun (map deref (doall futures)))))

(defn swap-servers! [thunk]
  (swap! servers
         (fn [old]
           (stop-servers old)
           (thunk))))

(defn restart-servers! [https?]
  (swap-servers! #(start-servers https?)))

(defn stop-servers! []
  (swap-servers! (constantly {})))

(defn -main []
  (println "Arrancando Aleph...")
  (restart-servers! true)
  (println "Escoitando no porto 62000 (redirigido desde 80)"))

(comment
  (stop-servers!)
  (restart-servers! false)
  (not-found-handler {:request-method :get :uri "heheheh"})
  (rhandler {:request-method :get :uri "/olo"})
  )
