(ns semente.layout.nacional
  (:require
   [semente.layout :as l]
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image
                           link-to
                           unordered-list ]]))

;; XXX provar CSRF

(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"
                    :width 24
                    :height 24}
    [:path.socialpath {:fill style/nav-grey
                       :d path}]]])

(defn test-article []
  [:article.frontpage
   [:h1 "Primavera generosa"]
   [:p "Muito celebramos a chegada da primavera, porque é muito o que a natureza nos dá neste mudar estacional."]
   [:p "Desfrutamos da luz, da maravilha das flores e do seu cheirar, das árvores tornando verdes, dos novos fruitos, da quenturinha do sol roçando a pele e do convite a estar mais tempo no quintal. Todo isto, imo-lo desfrutando juntas, mas na Semente a primavera também se deixou ver, com atividades mui gostosas e com muito ambiente."]
   [:p "A primeira celebraçom assi que chegou a primavera foi o 25 de abril, comemorando este dia com um concerto bem fermoso para toda a família da Semente. Guadi e a sua banda quigéron acompanhar-nos numha manhá lindíssima, cheia de vida e que nom vai ser doada de esquecer. Os bailes e as emoçons ali vividas fam-nos sentir mui afortunadas. E assim celebramos que somos a geraçom das 1000 primaveras mais."]
   [:p "25 de abril, sempre!"]
   (image "img/artigo-prova.jpg")])

(defn pagina-nacional
  []
  (l/ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     ;; https://github.com/necolas/normalize.css
     (include-css "css/normalize.css"
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
       (unordered-list
        (for [caption ["projeto" "pedagogia" "sementes" "novas" "associa-te" "contato"]]
          (link-to (str "#" caption) caption)))]
      [:main
       (test-article)
       (test-article)
       (test-article)
       (test-article)
       (test-article)
       (test-article)
       (test-article)]
      [:footer "© 2019 Projeto Educativo Semente"
       (image "img/ramalho.svg")]]
     (l/recarrega-css)]]))
