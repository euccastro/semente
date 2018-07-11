(ns semente.nacional
  (:require [rum.core :as rum]
            [semente.comum :as comum]))


(rum/defc quem-somos [quem-somos]
  (comum/pagina
   "/nacional/quem-somos"
   [:div
    [:h1 "Quem somos"]
    [:div { :dangerouslySetInnerHTML {:__html quem-somos}}]]))

(rum/defc principios []
  (comum/pagina
   "/nacional/principios"
   [:div
    [:h1 "Princípios"]
    [:ol
     [:li "Semos malos"]
     [:li "Semos duros"]
     [:li "Semos los mas cojonudos"]
     [:strong "Semos SEMENTE!"]]]))
