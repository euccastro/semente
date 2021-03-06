(ns semente.layout
  (:require
   hiccup.core
   [hiccup.page :refer [include-css]]
   [selmer.parser :as parser]
   [selmer.filters :as filters]
   [semente.config :refer [env]]
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

(defn js-app []
  [:script {:type "text/javascript" :src "/js/app.js"}])

(defn recarrega-css []
  (when (:dev env) (js-app)))
