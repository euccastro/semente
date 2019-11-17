(ns semente.layout.article-editor
  (:require
   [clojure.spec.alpha :as s]
   [clojure.string :as str]
   [semente.layout :as l]
   ;; polos specs
   semente.model.article
   [semente.style-constants :as style]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image link-to]]))

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
                  "/css/font.css"
                  "/css/semente.css")]
    ;; extraer
    [:body#nacional-background
     [:div#page
      [:div#app]]
     (l/js-app)]]))
