(ns semente.routes.nacional
  (:require
   [semente.db.core :as db]
   [semente.layout.nacional :as layout]
   [semente.middleware :as middleware]))

(def db #(db/entity db/crux %))

(defn nacional-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional"
    {:get (fn [_]
            (layout/frontpage (db/get-articles db/crux) db))}]
   ["/nacional/artigo/:unix-name"
    {:get (fn [{{:keys [unix-name]} :path-params}]
            (layout/article (db (db/unix-name->article db/crux :scope/nacional unix-name)) db))}]])


(comment

  req

  (def id "primavera-generosa")
  )
