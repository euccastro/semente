(ns semente.styles
  (:require [garden.core :as g]
            [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]
            [clojure.java.io :as io]))

(defstyles semente
  (let [body (rule :body)]
    (body
     {:font-family "Helvetica Neue"
      :color "blue"
      :font-size   "16px"
      :line-height 1.5})))

(defn write-styles [file]
  (spit file (g/css semente)))

(comment
  (write-styles "resources/public/res/css/garden.css")
  )
