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
  [:#logos {:padding "12px 24px"
            :display :flex
            :justify-content :space-between
            :align-items :flex-end
            :flex-wrap :wrap}]
  [:#contedor-social {:margin-top (px 12)}]
  [:a.social {:margin-left (px 2)
              :border-radius "4px"
              :padding-top (px 3)
              :padding-left (px 4)
              :padding-right (px 3)}
   [:&:active {:background-color style/semente-blue}]]
  [:a [:svg:hover [:path.socialpath {:fill style/semente-blue}]]]
  [:a [:svg:active [:path.socialpath {:fill :white}]]]
  [:header
   [:img {:display :inline
          :padding-right (px 40)
          :max-width (px 400)}]]
  [:nav [:ul {:margin-top 0 :margin-bottom 0}]]
  [:h1:first-child {:margin-top 0}]
  [:a.social {:display :inline-block}])
