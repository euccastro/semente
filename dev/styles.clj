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
    :position "relative"
    :display "inline-block"
    :color (rgba 0 0 0 0.54)}
   [:&:hover {:color (rgba 0 0 0 0.9)}
    [:.tooltip {:visibility "visible"
                :opacity 1}]]
   [:&:active {:color (rgba 255 255 255 1.0)
               :background-color (rgba 0 0 0 0.54)}]
   [:&.applied {:background-color (rgba 0 0 0 0.26)}]
   [:.tooltip {:visibility "hidden"
               :font-family "sans serif"
               :font-size "small"
               :background-color (rgba 50 50 50 0.8)
               :color (rgba 255 255 255 1.0)
               :text-align "center"
               :padding [[(px 4) (px 6)]]
               :border-radius (px 6)
               :position "absolute"
               :z-index 2
               :bottom "-150%"
               :left "-50%"
               :opacity 0
               :transition [[:opacity "0.3s"]]}]])

(defn write-styles [file pp]
   (g/css {:pretty-print? pp :output-to file} semente))

(comment
  (write-styles "target/public/res/css/garden.css" true)
  )
