(ns semente.http-server
  (:require [aleph.http :as http]))

(defn handler [_]
  {:status 200
   :headers {"content/type" "text/plain"}
   :body "Olu!!"})

(defonce server (atom nil))

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
  (swap-server! #(http/start-server #'handler {:port 8080})))

(defn -main []
  (restart-server!))

(comment
  (stop-server!)
  (restart-server!)
  )
;; => nil
