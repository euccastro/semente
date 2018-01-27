(ns semente.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]
            [semente.style-constants :as style]))

(def base

  [

   [:body
    {:font-size "100%"
     :font-family "dejavu_serif, serif"}]

   [:h1 {:color style/verde-semente
         :font-family "Ubuntu, sans-serif"}]

   [:a:link
    {:text-decoration "none"
     :color style/azul-semente}]

   [:.navitem
    {:flex-grow 1
     :font-size "80%"
     :padding "0.5em 0.5em"
     :text-align "center"}]

   [:a.navitem
    [:&:link
     {:color style/azul-semente}]
    [:&:visited
     {:color style/azul-semente}]
    [:&:hover
     {:color "white"
      :background-color style/azul-semente}]
    [:&:active
     {:color style/verde-semente
      :background-color "white"}]]

   [:a.social {:text-align "center"
               :border-radius "4px"
               :margin "ipx 2px"
               :padding "3px"}
    [:&:hover {:background-color style/azul-semente}]
    [:&:active {:background-color "white"}]]

   [:svg.socialsvg
    {:width "24px"
     :height "24px"
     :text-align "center"}]

   [:a [:svg:hover [:path.socialpath {:fill "white"}]]]

   [:a [:svg:active [:path.socialpath {:fill style/verde-semente}]]]

   [:footer
    [:div.barra
     {:display "flex"
      :flex-direction "row-reverse"
      :padding "0.5rem 5% 0rem 5%"
      :background-color style/gris-nav}]
    [:img
     {:background-color style/gris-nav
      :height "2.5rem"}]]

   [:.quemsomosimg
    {:padding "0.7em 1.2em 2em 1.2em"}]

   [:.ondetou
    {:background-color "white"
     :color style/azul-semente
     :font-weight "bold"}]

   [:#fondo
    {:display :flex
     :padding 0
     :margin 0
     :flex-direction :column
     :align-items :center
     :background-color style/cor-fondo-nacional}]

   [:#caixa-central
    {:flex "1 1 960px"
     :width "100%"
     :margin 0
     ;;:min-width "550px"
     :max-width "960px"
     :background-color :white
     :border-style "solid"
     :border-width "1px"
     :border-color style/cor-borde-exterior}]

   [:header
    {:display :flex
     :padding "10px 40px"
     :justify-content :left
     :align-items :flex-end}]

   [:#logo-semente
    {:width "300px"
     :height "100px"}]

   [:#pai-iconos-e-procura
    {:display :flex
     :width "70%"
     :padding "0em 0em 0em 0em"
     :flex-wrap :wrap
     :justify-content :flex-end}]

   [:#caixa-procura-form
    {:display :flex
     :flex-direction :row
     :align-items :center
     :margin-bottom 0
     :margin-right 10}]

   [:#caixa-procura-div
    {:vertical-align :middle
     :width 200
     :position :relative}]

   [:#caixa-procura-input
    {:border :none
     :background-color style/gris-nav
     :transition "box-shadow 0.2s ease-in-out"
     :padding "4px 24px 4px 10px"
     :border-radius "100px"
     :font-size "80%"
     :font-family "Ubuntu, sans-serif"
     :color style/azul-semente
     :width "100%"
     :outline :none
     :appearance :none
     :-webkit-appearance :none
     :-moz-appearance :none}
    [:&:hover {:box-shadow (str "inset 0 0 0 1px " style/azul-semente)}]
    [:&:focus {:box-shadow (str "inset 0 0 0 1px " style/verde-semente)}]]

   [:#botom-procura
    {:position :absolute
     :left 173
     :width 24
     :height 18
     :z-index 1
     :border :none
     :outline :none
     :appearance :none
     :-webkit-appearance :none
     :-moz-appearance :none
     :background :none}]

   [:#icono-procura
    {:margin "2px 0px 0px 0px"}]

   [:#fondo-navegacom
    {:color style/azul-semente
     :background-color style/gris-nav
     :display :flex
     :justify-content :space-around
     :align-items :stretch
     :flex-wrap :wrap}]

   [:#paddings-corpo
    {:flex-grow 5
     :padding-left "5%"
     :padding-right "5%"
     :padding-bottom "1rem"
     :padding-top "1rem"
     :font-size "90%"}]

   [:#contedor-texto-pe
    {:font-size "small"
     :font-weight "light"
     :color style/verde-semente
     :padding-top "1rem"
     :padding-bottom "1rem"
     :display :flex
     :justify-content :center}
    ]

   [:a {:color style/azul-semente}]

   ])

