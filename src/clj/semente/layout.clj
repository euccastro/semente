(ns semente.layout
  (:require
   hiccup.core
   [hiccup.form :as form]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [unordered-list image]]
   [selmer.parser :as parser]
   [selmer.filters :as filters]
   [semente.config :refer [env]]
   [semente.style-constants :as style]
   [markdown.core :refer [md-to-html-string]]
   [ring.util.http-response :as response]
   [ring.util.anti-forgery :refer [anti-forgery-field]]
   [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))

(parser/set-resource-path!  (clojure.java.io/resource "html"))
(parser/add-tag! :csrf-field (fn [_ _] (anti-forgery-field)))
(filters/add-filter! :markdown (fn [content] [:safe (md-to-html-string content)]))

(defn ok
  [s]
  (-> s
      response/ok
      (response/content-type "text/html; charset=utf-8")))

(defn ok-hiccup
  [h]
  (ok (hiccup.core/html
       {:mode :html}
       (hiccup.page/doctype :html5)
       h)))

(defn render
  "renders the HTML template located relative to resources/html"
  [request template & [params]]
  (ok
   (parser/render-file
    template
    (assoc params
           :page template
           :csrf-token *anti-forgery-token*))))

(defn error-page
  "error-details should be a map containing the following keys:
   :status - error status
   :title - error title (optional)
   :message - detailed error message (optional)

   returns a response map with the error page as the body
   and the status specified by the status key"
  [error-details]
  {:status  (:status error-details)
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body    (parser/render-file "error.html" error-details)})

(defn recarrega-css []
  (when (:dev env)
    [:script {:type "text/javascript" :src "js/app.js"}]))

(defn login-page
  []
  (ok-hiccup
   [:html
    [:head
     (include-css "css/jardim.css")]
    [:body
     [:h1 "ola"]
     [:h2 "provando"]
     [:h3 "que aplica"]
     (form/form-to
      [:post "/login"]
      (anti-forgery-field)
      (form/text-field {:placeholder "utente"} "username")
      (form/password-field {:placeholder "senha"} "password")
      (form/submit-button "login"))
     (recarrega-css)]]))

(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"}
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

(defn nacional
  []
  (ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     ;; https://github.com/necolas/normalize.css
     (include-css "css/normalize.css"
                  "css/semente.css")]
    [:body
     [:header
      [:div
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
     (recarrega-css)]]))
