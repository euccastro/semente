(ns semente.garden.core
  (:require
   [garden-watcher.core :as gwatcher]
   [garden-watcher.def :refer [defstyles]]
   [garden.stylesheet :refer [at-media]]
   [garden.units :refer [em px]]
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

  ;; fondo e marco da página
  [:body {:font-family "dejavu_serif, serif"}
   [:footer {:text-align :center
             :display :flex
             :align-items :center
             :justify-content :flex-end
             :font-size (px 14)
             :background-color style/nav-grey}
    [:p {:color :grey
         :margin-left (px 50)
         :flex-grow 1}]]]
  [:#nacional-background {:background-color style/background-color-nacional}]
  [:#page
   {:box-sizing :border-box
    :background-color :white
    :border-left borde-externo
    :border-right borde-externo
    :border-bottom borde-externo
    :max-width (px 1200)
    :margin-left :auto
    :margin-right :auto}]

  ;; logos
  [:#logos {:padding [[(px 24) horiz-padding]]
            :display :flex
            :justify-content :space-between
            :align-items :flex-end
            :flex-wrap :wrap}]
  (at-media {:max-width (px 400)}
            [:#logos
             {:padding [[(px 24) (px 7)]]}])
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

  ;; navegaçom
  [:nav
   {:background-color style/nav-grey
    :margin (px 0)
    :padding (px 0)
    :display :flex
    :justify-content :space-around
    :align-items :stretch
    :flex-wrap :wrap}
    [:a {:text-decoration :none
         :flex-grow 1
         :text-align :center
         :padding [[(px 12) (px 12)]]}
     [:&:link
      {:color style/semente-blue}]
     [:&:visited
      {:color style/semente-blue}]
     [:&:hover
      {:color :white
       :background-color style/semente-blue}]
     [:&:active
      {:color style/semente-blue
       :background-color :white}]]]
  [:a.social {:display :inline-block}]

  ;; conteúdo
  [:main {:padding [[(px 32) horiz-padding]]}]
  [:div#principal
   {:display :grid
    :grid-template-columns "repeat(auto-fit, minmax(260px, 1fr))"
    :grid-column-gap (px 32)
    :grid-row-gap (px 32)
    :justify-items :stretch
    :align-items :stretch
    :grid-auto-flow :row}]
  ;; artigos
  [:article
   [:a.scope {:font-family "Ubuntu, sans-serif"
              :text-decoration :none
              :font-size (px 20)
              :color style/semente-green
              :margin-bottom (px 0)
              :padding-bottom (px 0)}]
   [:h1 {:font-size (px 24)
         :margin [[(px 6) (px 0)]]
         :padding-top (px 0)}
    [:a {:text-decoration :none
         :color style/semente-blue}]]
   [:p.published {:font-family "Ubuntu, sans-serif"
                  :margin-top (px 0)
                  :padding-top (px 0)
                  :color style/semente-green
                  :font-size (px 12)
                  :font-style :italic}]
   [:.img-container
    ;; Foi o único jeito que encontrei para que a image se ajustasse ao marco.
    {:display :flex
     :flex-direction :column}
    [:img {:max-height (px 200)
           :object-fit :cover}]]
   [:p.prose {:font-size (px 14)}
    [:a.read-more {:margin-left (px 6)
                   :font-family "Ubuntu, sans-serif"
                   :text-decoration :none
                   :color style/semente-green
                   :font-style :italic
                   :font-size (em 0.9)}]]

   ;; artigo destacado
   [:&:first-child {:grid-column-start 1
                    :grid-column-end -1
                    :grid-row-start 1
                    :grid-row-end 1}
    [:a.scope {:font-size (px 24)}]
    [:h1 {:font-size (px 36)}]
    [:p.published {:font-size (px 14)}]
    [:.img-container [:img {:max-height (px 400)}]]
    [:p.prose {:font-size (px 16)}]]])
