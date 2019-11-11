(ns semente.garden.core
  (:require
   [garden-watcher.core :as gwatcher]
   [garden-watcher.def :refer [defstyles]]
   [garden.selectors :refer [& after]]
   [garden.units :refer [px]]
   [mount.core :as mount]
   [semente.style-constants :as style]))

(mount/defstate ^{:on-reload :noop} watcher
  :start
  (gwatcher/start-garden-watcher! '[semente.garden.core])
  :stop
  (gwatcher/stop-garden-watcher! watcher))

(def borde-externo (str "solid 1px " style/external-border-color))

(def horiz-padding (px 32))

(defstyles semente
  [:body {:font-family "dejavu_serif, serif"}]
  [:#nacional-background {:background-color style/background-color-nacional}]
  [:#page
   {:box-sizing :border-box
    :background-color :white
    :border-left borde-externo
    :border-right borde-externo
    :max-width (px 960)
    :margin-left :auto
    :margin-right :auto}]
  [:#logos {:padding [[(px 24) horiz-padding]]
            :display :flex
            :justify-content :space-between
            :align-items :flex-end
            :flex-wrap :wrap}]
  [:#contedor-social {:padding-left (px 24)
                      :padding-right (px 12)
                      :margin-top (px 12)}]
  [:a.social {:margin-left (px 2)
              :border-radius (px 4)
              :padding-top (px 3)
              :padding-left (px 4)
              :padding-right (px 3)}
   [:&:active {:background-color style/semente-blue}]]
  [:a [:svg:hover [:path.socialpath {:fill style/semente-blue}]]]
  [:a [:svg:active [:path.socialpath {:fill :white}]]]
  [:header
   [:img {:padding-left (px 24)
          :padding-right (px 40)
          :max-width (px 400)}]
   [:.destacado {:display :block
                 :margin [[(px 0) horiz-padding (px 18) horiz-padding]]
                 :padding [[(px 24) (px 24)]]
                 :color :white
                 :text-align :center
                 :text-decoration :none
                 :font-size (px 48)
                 :font-weight :bold
                 :background-color style/semente-blue}]]
  [:nav
   [:ul {:background-color style/nav-grey
         :margin (px 0)
         :padding (px 0)
         :display :flex
         :justify-content :space-around
         :align-items :stretch
         :flex-wrap :wrap}
    [:li {:list-style-type :none
          :padding [[(px 12) (px 12)]]}
     [:a {:text-decoration :none
          :color style/semente-blue}]]]]
  [:a.social {:display :inline-block}]
  [:main {:padding [[(px 12) horiz-padding]]}]
  [:article {:overflow :hidden}
   [:h1 {:font-family "Ubuntu, sans-serif"
         :color style/semente-blue}]])
