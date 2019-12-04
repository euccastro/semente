(ns semente.routes.home
  (:require
   [clojure.java.io :as io]
   [ring.util.http-response :as response]
   [semente.layout :as layout]
   [semente.middleware :as middleware]))

(defn home-page [request]
  (layout/render request "home.html"))

(defn save-image [request]
  ;; para ver o throbber quando provo localmente
  (Thread/sleep 3000)
  (-> "mock-db-id"
      response/ok
      (response/content-type "text/plain; charset=utf-8")))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/save-image" {:post save-image}]
   ["/docs" {:get (fn [_]
                    (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                        (response/header "Content-Type" "text/plain; charset=utf-8")))}]])

