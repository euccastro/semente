(ns semente.nacional
  (:require [rum.core :as rum]
            [semente.style-constants :as style]))


(rum/defc icono-social [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"}
    [:path.socialpath {:fill style/azul-semente
                       :d path}]]])

(rum/defc cabecalho []
  [:header
   [:img#logo-semente {:src "img/logo-nacional.svg"}]
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

(rum/defc navegacom []
  [:nav
   [:div#fondo-navegacom
    [:div.navitem.ondetou "quem somos"]
    [:a.navitem {:href "#ppios"} "princípios"]
    [:a.navitem {:href "#hist"} "história"]
    [:a.navitem {:href "#rec"} "recursos"]
    [:a.navitem {:href "#loja"} "loja online"]
    [:a.navitem {:href "#cont"} "contato"]
    [:a.navitem {:href "#assoc"} "assócia-te"]]])

(rum/defc corpo [quem-somos]
  [:main#paddings-corpo
   [:h1 "Quem somos"]
   [:div { :dangerouslySetInnerHTML {:__html quem-somos}}]])

(rum/defc pe []
  [:footer {:style {:clear :both}}
   [:div.barra
    [:img {:src "img/ramalho.svg"}]]
   [:div#contedor-texto-pe
    [:div "Hosting por " [:a {:href "https://www.dinahosting.com"}
                          "Dinahosting"]]]])

(rum/defc nacional [quem-somos]
  [:div#fondo
   [:div#caixa-central
    (cabecalho)
    (navegacom)
    (corpo quem-somos)
    (pe)]])
