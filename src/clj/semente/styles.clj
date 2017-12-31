(ns semente.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(def base
  [[:div#prova
    {:background-color :green}]])
