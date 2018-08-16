(ns dev
  (:require [hawk.core :as hawk]))

(defn -main []
  (println "installing watch for garden files...")
  (hawk/watch! [{:paths ["dev/styles.clj"]
                 :handler (fn [ctx e]
                            (println "writing new css")
                            (require 'styles :reload)
                            (styles/write-styles "resources/public/res/css/garden.css")
                            ctx)}]))
