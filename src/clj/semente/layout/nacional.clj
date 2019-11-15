(ns semente.layout.nacional
  (:require
   [semente.layout :as l]
   [semente.string-util :refer (unixify)]
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

(defn scope->visible-name [x]
  ;; XXX obter de BD
  (case x
    ("amaia") "amaía"
    ("ponte-vedra") "ponte vedra"
    x))

(def month->str
  ["Janeiro" "Fevereiro" "Março" "Abril" "Maio" "Junho" "Julho" "Agosto" "Setembro" "Outubro" "Novembro" "Dezembro"])

(defn inst->display-string [^java.util.Date t]
  (str (.getDate t)
       " de " (month->str (.getMonth t))
       ", " (+ 1900 (.getYear t))))

(comment
  (def t #inst "2015-12-31T20:20:59.999-00:00")
  (.getDate t)
  (.getMonth t)
  (.getYear t)
  (inst->display-string t)
  )

(defn article->summary-hiccup
  [{:keys [article/publish-time
           article/title
           article/main-image
           article/summary]
    :as article}
   db]
  (let [id (unixify title)
        scope (-> article :article/scope name)
        url (str "/" scope "/artigo/" id)
        image-map (db main-image)]
    [:article.frontpage
     [:a.scope {:href (str "/" scope)} (scope->visible-name scope)]
     [:h1 (link-to url title)]
     [:p.published (str "Publicado a " (inst->display-string publish-time))]
     (link-to
      url
      [:div.img-container
       [:img {:src (str "img/conteudo/"
                        (:image/src image-map)
                        "."
                        (:image/extension image-map))
              :alt (:description main-image)}]])
     [:p.prose summary [:a.read-more {:href url} " [&nbsp;lêr&nbsp;mais&nbsp;]"]]]))

(defn pagina-nacional
  [artigos db]
  (l/ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     [:meta {:charset :utf-8}]
     [:meta {:name :viewport :content "width=device-width,initial-scale=1"}]
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
        (map #(article->summary-hiccup % db) artigos)]]
      [:footer [:p "© 2019 Projeto Educativo Semente"]
       (image "img/ramalho.svg")]]
     (l/recarrega-css)]]))
