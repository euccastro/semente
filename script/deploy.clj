(ns deploy
  (:require [figwheel.main :as fw]))

(defn -main []
  (fw/-main "-bo" "prod"))
