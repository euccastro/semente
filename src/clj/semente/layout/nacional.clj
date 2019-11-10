(ns semente.layout.nacional
  (:require
   [semente.layout :as l]
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [unordered-list image]]))

;; XXX provar CSRF

(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"
                    :width 32
                    :height 32}
    [:path.socialpath {:fill style/semente-blue
                       :d path}]]])

(defn test-article []
  [:article
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
                  "css/semente.css")]
    [:body#fondo-nacional
     [:header
      [:div.logos
       (image "img/logo-nacional.svg")
       (social-icon "#twitter" style/twitter-path)
       (social-icon "#facebook" style/facebook-path)
       (social-icon "#youtube" style/youtube-path)]
      [:div.destacado "Aqui iria, opcionalmente, o elemento forte."]]
     [:nav
      (unordered-list ["Projeto" "Pedagogia" "Sementes" "Novas" "Associa-te" "Contato"])]
     [:main
      (test-article)
      (test-article)
      (test-article)
      (test-article)
      (test-article)
      (test-article)
      (test-article)]
     [:footer "© 2019 Projeto Educativo Semente"
      (image "img/ramalho.svg")]
     (l/recarrega-css)]]))
