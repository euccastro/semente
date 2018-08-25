(ns styles
  (:require [garden.core :as g]
            [garden.def :refer [defstyles]]
            [clojure.java.io :as io]))

(defstyles semente
  [:body
   {:font-family "dejavu_serif, serif"
    :font-size   "20px"
    :line-height 1.5}]
  [:.public-DraftStyleDefault-block
   {:padding 6}])

(defn write-styles [file pp]
   (g/css {:pretty-print? pp :output-to file} semente))

(comment
  (write-styles "target/public/res/css/garden.css" true)
  )
