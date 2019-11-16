(ns semente.layout.nacional
  (:require
   [clojure.spec.alpha :as s]
   [clojure.string :as str]
   [semente.layout :as l]
   ;; polos specs
   semente.model.article
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image link-to]]))

;; XXX provar CSRF

;; mover a layout.core para compartilhar coa renderizaçom de páginas locais
(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"
                    :width 24
                    :height 24}
    [:path.socialpath {:fill :lightgrey
                       :d path}]]])

(defn- scope->display-name [x]
  ;; XXX obter de BD
  (get {"amaia" "amaía"
        "ponte-vedra" "ponte vedra"}
       x
       x))


(defn- article-type->display-name [x]
  ;; XXX obter de BD
  (get {"dia-a-dia" "dia a dia"
        "nova" "novas"}
       x
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

(defn render-image [{:keys [image/src
                            image/extension
                            image/description]}]
  ;; XXX: fazer novo estilo que nom limite a altura da image, e usá-lo para
  ;; imagens do artigo principal.
  [:div.img-container
   [:img {:src (str "/img/conteudo/" src "." extension)
          :alt description}]])

(defn render-article-link [{:keys [article.link/url
                                   article.link/body]}]
  [:a {:href url} body])

(defn render-paragraph-item [x]
  (cond
    (string? x) x
    (s/valid? :article/link x) (render-article-link x)
    (or (s/valid? :article/em-span x)
        (s/valid? :article/strong-span x)) x
    :else [:span.bad (pr-str x)]))

(defn article->summary-hiccup
  [{:keys [article/publish-time
           article/title
           article/unix-names
           article/main-image
           article/summary]
    :as article}
   db]
  (let [scope (-> article :article/scope name)
        url (str "/" scope "/artigo/" (last unix-names))]
    [:article.frontpage
     [:a.scope {:href (str "/" scope)} (scope->display-name scope)]
     [:h1 (link-to url title)]
     [:p.published (str "Publicado a " (inst->display-string publish-time))]
     (link-to url (render-image (db main-image)))
     [:p.prose summary [:a.read-more {:href url} " [&nbsp;lêr&nbsp;mais&nbsp;]"]]]))

(defn article->full-hiccup
  [{:keys [article/publish-time
           article/title
           article/unix-names
           article/body]
    :as article}
   db]
  (let [scope (-> article :article/scope name)
        art-type (-> article :article/type name)]
    [:article.frontpage
     ;; renomear estilo a scope ou type
     [:a.scope {:href (str "/" scope "/" art-type)} (article-type->display-name art-type)]
     [:h1 title]
     [:p.published (str "Publicado a " (inst->display-string publish-time))]
     (for [[k & [v :as rest]] body]
       (case k
         (:p) [:p.prose (map render-paragraph-item rest)]
         (:image) (render-image (db v))
         (str "bad body element: " (pr-str body))))]))

(comment

  (vec (for [[k :as body] [[:um 1] [:dous 2]]]
         [k :then body]))

  )

(defn nacional-page
  [contents]
  (l/ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     [:meta {:charset :utf-8}]
     [:meta {:name :viewport :content "width=device-width,initial-scale=1"}]
     ;; https://github.com/necolas/normalize.css
     (include-css "/css/normalize.css"
                  "https://fonts.googleapis.com/css?family=Ubuntu"
                  "/css/font.css"
                  "/css/semente.css")]
    [:body#nacional-background
     [:div#page
      [:header
       ;; Liga comportamento do logo principal co dos logos sociais quando
       ;; reduzimos o largo da tela.
       [:div#logos
        (image "/img/logo-nacional.svg")
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
       [:div#principal contents]]
      [:footer [:p "© 2019 Projeto Educativo Semente"]
       (image "/img/ramalho.svg")]]
     (l/recarrega-css)]]))


(defn article
  [artigo db]
  (nacional-page (article->full-hiccup artigo db)))

(defn frontpage
  [artigos db]
  (nacional-page (map #(article->summary-hiccup % db) artigos)))
