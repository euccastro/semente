(ns dev
  (:require [hawk.core :as hawk]
            semente.styles))

(defn -main []
  (println "installing watch for garden files...")
  (hawk/watch! [{:paths ["dev/semente/styles.clj"]
                 :handler (fn [ctx e]
                            (println "writing new css")
                            (require 'semente.styles :reload)
                            (semente.styles/write-styles "resources/public/res/css/garden.css")
                            ctx)}]))
