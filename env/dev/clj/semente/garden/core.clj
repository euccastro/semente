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

(defstyles semente
  [:.fondo-nacional {:background-color :green}]
  [:nav [:ul {:margin-top 0 :margin-bottom 0}]]
  [:h1:first-child {:margin-top 0}]
  [:header :nav :main :footer
   {:background-color :white
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
