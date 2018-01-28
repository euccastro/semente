(ns semente.comum
  (:require [rum.core :as rum]
            [semente.style-constants :as style]))

(rum/defc icono-social [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"}
    [:path.socialpath {:fill style/azul-semente
                       :d path}]]])

(rum/defc cabecalho []
  [:header
   [:img#logo-semente {:src "/img/logo-nacional.svg"}]
   [:div#pai-iconos-e-procura
    [:form#caixa-procura-form {:on-submit (fn [& _] false)}
     [:div#caixa-procura-div
      [:input#caixa-procura-input {:type :search}]
      [:button#botom-procura {:type :submit}
       [:svg#icono-procura {:viewBox "0 0 40 40"
                            :width 14
                            :height 14}
        [:path {:fill style/azul-semente
                :fill-rule :evenodd
                :d style/search-icon-path}]]]]]
    (icono-social "#twitter" style/twitter-path)
    (icono-social "#facebook" style/facebook-path)
    (icono-social "#youtube" style/youtube-path)]])

(defn item-nav [escolhido ligacom texto]
  (if (= escolhido ligacom)
    [:div.navitem.ondetou texto]
    [:a.navitem {:href ligacom} texto]))

(rum/defc navegacom [escolhido]
  [:nav
   [:div#fondo-navegacom
    (item-nav escolhido "/nacional/quem-somos" "quem somos")
    (item-nav escolhido "/nacional/principios" "principios")
    (item-nav escolhido "/nacional/recursos" "recursos")
    (item-nav escolhido "/nacional/contacto" "contacto")
    (item-nav escolhido "/nacional/associa-te" "associa-te")]])

(rum/defc pe []
  [:footer {:style {:clear :both}}
   [:div.barra
    [:img {:src "/img/ramalho.svg"}]]
   [:div#contedor-texto-pe
    [:div "Hosting por " [:a {:href "https://www.dinahosting.com"}
                          "Dinahosting"]]]])

(rum/defc pagina [path corpo]
  [:div#fondo
   [:div#caixa-central
    (cabecalho)
    (navegacom path)
    [:main#paddings-corpo
     corpo]
    (pe)]])

