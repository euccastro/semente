(ns semente.dev
  (:require [aleph.http :as http]
            semente.core))

(defn -main []
  (println "about to start server")
  (let [ret
        (http/start-server #'semente.core/ring-app {:port 8080})]
    (println "server started")
    ret))

(comment
  (def server (-main))
  )
