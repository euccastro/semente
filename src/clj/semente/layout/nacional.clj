(ns semente.layout.nacional
  (:require
   [semente.layout :as l]
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image link-to]]))

;; XXX provar CSRF

(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"
                    :width 24
                    :height 24}
    [:path.socialpath {:fill :lightgrey
                       :d path}]]])

(defn test-article []
  [:article.frontpage
   [:a.scope {:href "/nacional"} "nacional"]
   [:h1 "Primavera generosa"]
   [:p.published "Publicado a 25 Abril, 2019"]
   [:div.img-container
    [:img {:src "img/artigo-prova.jpg"}]]
   [:p.prose "Muito celebramos a chegada da primavera, porque é muito o que a natureza nos dá neste mudar estacional."]
   [:p.prose "Desfrutamos da luz, da maravilha das flores e do seu cheirar, das árvores tornando verdes, dos novos fruitos, da quenturinha do sol roçando a pele..."]])

(defn pagina-nacional
  []
  (l/ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     ;; https://github.com/necolas/normalize.css
     (include-css "css/normalize.css"
                  "https://fonts.googleapis.com/css?family=Ubuntu"
                  "css/font.css"
                  "css/semente.css")]
    [:body#nacional-background
     [:div#page
      [:header
       ;; Liga comportamento do logo principal co dos logos sociais quando
       ;; reduzimos o largo da tela.
       [:div#logos
        (image "img/logo-nacional.svg")
        ;; Fai que todos os logos sociais saltem ao mesmo tempo embaixo do logo
        ;; da Semente quando reduzimos a tela.
        [:div#contedor-social
         (social-icon "#twitter" style/twitter-path)
         (social-icon "#facebook" style/facebook-path)
         (social-icon "#youtube" style/youtube-path)]]
       [:a.destacado {:href "#destacado"} "as nossas festas no calendário!"]]
      [:nav
       (for [caption ["projeto" "pedagogia" "sementes" "novas" "associa-te" "contato"]]
         (link-to (str "#" caption) caption))]
      [:main
       [:div#principal
        (test-article)
        (test-article)
        (test-article)
        (test-article)
        (test-article)
        (test-article)
        (test-article)]]
      [:footer [:p "© 2019 Projeto Educativo Semente"]
       (image "img/ramalho.svg")]]
     (l/recarrega-css)]]))
