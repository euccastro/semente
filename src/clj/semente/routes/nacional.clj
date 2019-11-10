(ns semente.routes.nacional
  (:require
   [semente.layout.nacional :refer (pagina-nacional)]
   [semente.middleware :as middleware]))


(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional" {:get (fn [_] (pagina-nacional))}]])
