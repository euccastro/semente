(ns dev
  (:require [clojure.java.io :as io]
            [hawk.core :as hawk]
            semente.stage
            styles))

(def garden-css-path "target/public/res/css/garden.css")

(defn -main []
  (println "Initializing styles...")
  (io/make-parents garden-css-path)
  (styles/write-styles garden-css-path)
  (println "Overriding stage...")
  (alter-var-root #'semente.stage/stage (constantly :dev))
  (println "Installing watch for garden files...")
  (hawk/watch! [{:paths ["dev/styles.clj"]
                 :handler (fn [ctx e]
                            (println "writing new css")
                            (require 'styles :reload)
                            (styles/write-styles garden-css-path)
                            ctx)}])
  (println "Initialization done."))
