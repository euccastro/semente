(ns semente.layout
  (:require
   hiccup.core
   [hiccup.form :as form]
   [hiccup.page :refer [include-css]]
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
  (ok (hiccup.core/html h)))

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

(defn nacional
  []
  (ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     (include-css "css/semente.css")]
    [:body
     [:header
      [:div
       [:img {:src "img/logo-nacional.svg"}]
       (social-icon "#twitter" style/twitter-path)
       (social-icon "#facebook" style/facebook-path)
       (social-icon "#youtube" style/youtube-path)]
      [:div.destacado "Aqui iria, opcionalmente, o elemento forte."]]
     [:nav
      [:ul
       [:li "Projeto"]
       [:li "Pedagogia"]
       [:li "Sementes"]
       [:li "Novas"]
       [:li "Associa-te"]
       [:li "Contato"]]]
     [:main
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]
      [:article
       [:h1 "Isto é o cabeçalho dum artigo"]
       [:p "Este é o corpo do artigo"]
       [:div "Aqui iria umha image ligada ao artigo"]]]
     [:footer "© 2019 Projeto Educativo Semente"
      [:img {:src "img/ramalho.svg"}]]
     (recarrega-css)]]))
