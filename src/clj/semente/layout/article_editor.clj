(ns semente.layout.article-editor
  (:require
   [clojure.spec.alpha :as s]
   [clojure.string :as str]
   [semente.layout :as l]
   ;; polos specs
   semente.model.article
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image link-to]]
   [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))

;; XXX: sacar da db em base à utente autenticada
(def autora "Mariquinha do Penedo")

(defn article-editor
  []
  (l/ok-hiccup
   [:html
    [:head
     [:title "Editar Artigo - Semente"]
     ;;XXX: factor out estes elementos comuns
     [:meta {:charset :utf-8}]
     [:meta {:name :viewport :content "width=device-width,initial-scale=1"}]
     ;; https://github.com/necolas/normalize.css
     (include-css "/css/normalize.css"
                  "https://fonts.googleapis.com/css?family=Ubuntu"
                  "https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                  "/css/font.css"
                  "/css/semente.css"
                  "/css/prosemirror.css"
                  "/css/prosemirror-gapcursor.css"
                  "/css/spinner.css"
                  "/css/editor.css")]
    ;; extraer
    [:body#nacional-background
     [:script (str "window.csrfToken = \"" *anti-forgery-token* "\";"
                   "window.autora = \"" autora "\"")]
     [:div#page
      [:div#app]]
     (l/js-app)]]))
