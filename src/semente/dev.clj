(ns semente.dev
  (:require [aleph.http :as http]
            [semente.core :refer (ring-handler)]))

(defn -main []
  (println "about to start server")
  (http/start-server ring-handler {:port 8080})
  (println "server started"))
