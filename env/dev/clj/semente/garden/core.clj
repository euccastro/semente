(ns semente.garden.core
  (:require
   [garden-watcher.core :as gwatcher]
   [garden-watcher.def :refer [defstyles]]
   [garden.units :refer [px]]
   [mount.core :as mount]
   [semente.style-constants :as style]))

(mount/defstate ^{:on-reload :noop} watcher
  :start
  (gwatcher/start-garden-watcher! '[semente.garden.core])
  :stop
  (gwatcher/stop-garden-watcher! watcher))

(def borde-externo (str "solid 1px " style/external-border-color))

(defstyles semente
  [:nav [:ul {:margin-top 0 :margin-bottom 0}]]
  [:h1:first-child {:margin-top 0}]
  [:#fondo-nacional {:background-color style/background-color-nacional}]
  [:header :nav :main :footer
   {:background-color :white
    :border-left borde-externo
    :border-right borde-externo
    :margin-top 0
    :margin-bottom 0
    :max-width (px 960)
    :margin-left :auto
    :margin-right :auto}]
  ;; [:.fondo-nacional {:display :flex
  ;;                    :flex-direction :column
  ;;                    :align-items :center
  ;;                    :background-color style/nacional-background-color}]
  [:h1 {:color :red}])
