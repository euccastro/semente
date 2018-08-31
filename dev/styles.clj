(ns styles
  (:require [garden.color :refer (rgba)]
            [garden.core :as g]
            [garden.def :refer (defstyles)]
            [garden.units :refer (px)]
            [clojure.java.io :as io]))

(defstyles semente
  [:body
   {:font-family "dejavu_serif, serif"}]
  [:.public-DraftStyleDefault-block
   {:padding 6}]
  [:i.draft-icon
   {:cursor "pointer"
    :color (rgba 0 0 0 0.54)}
   [:&:hover {:color (rgba 0 0 0 0.9)}]
   [:&:active {:color (rgba 255 255 255 1.0)
               :background-color (rgba 0 0 0 0.54)}]
   [:&.applied {:background-color (rgba 0 0 0 0.26)}]
   ]
  )

(defn write-styles [file pp]
   (g/css {:pretty-print? pp :output-to file} semente))

(comment
  (write-styles "target/public/res/css/garden.css" true)
  )
