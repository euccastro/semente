(ns semente.routes.nacional
  (:require
   [semente.db.core :as db]
   [semente.layout.nacional :refer (pagina-nacional)]
   [semente.middleware :as middleware]))


(defn nacional-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional" {:get (fn [_] (pagina-nacional (db/get-articles db/crux)
                                               #(db/entity db/crux %)))}]])
