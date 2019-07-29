(ns semente.core
  (:require [aleph.http :as http]))

(defn handler [_]
  {:status 200
   :headers {"content/type" "text/plain"}
   :body "Olu!!"})

(defonce server (atom nil))

(defn restart-server! []
  (swap! server
         (fn [old]
           (when old
             (.close old)
             (.wait-for-close old))
           (http/start-server #'handler {:port 8080}))))

(comment

  (restart-server!)
  )
;; => nil
