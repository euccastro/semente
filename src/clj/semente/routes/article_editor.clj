(ns semente.routes.article-editor
  (:require
   [ring.util.http-response :as response]
   [semente.middleware :as middleware]))

(defn save-image-from-file [request]
  ;; para ver o throbber quando provo localmente
  (Thread/sleep 3000)
  (-> "mock-db-id"
      response/ok
      (response/content-type "text/plain; charset=utf-8")))

(defn save-image-from-url [request]
  ;; para ver o throbber quando provo localmente
  (Thread/sleep 3000)
  (-> "mock-db-id"
      response/ok
      (response/content-type "text/plain; charset=utf-8")))

(defn article-editor-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/save-image-from-file" {:post save-image-from-file}]
   ["/save-image-from-url" {:post save-image-from-url}]])
