(ns semente.routes.nacional
  (:require
   [semente.db.core :as db]
   [semente.layout :refer (ok error-page)]
   [semente.layout.article-editor :refer (article-editor)]
   [semente.layout.nacional :refer (article frontpage)]
   [semente.middleware :as middleware]))

(def db #(db/entity db/crux %))

(defn- unix-name->article [unix-name]
  (db/unix-name->article db/crux :scope/nacional unix-name))

(defn nacional-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional"
    {:get (fn [_]
            (frontpage (db/get-articles db/crux) db))}]
   ["/nacional/artigo"
    {:get (fn [{:keys [query-string]}]
            (if (= query-string "novo")
              (article-editor)
              (error-page
               {:status 404
                :title "Que me queres?"
                :message "Se queres acrescentar um novo artigo, prova /nacional/artigo?novo"})))}]
   ["/nacional/artigo/:unix-name"
    {:get (fn [{{:keys [unix-name]} :path-params}]
            (let [article (some-> unix-name
                                  unix-name->article
                                  db
                                  (article db))]
              (or article (error-page
                           {:status 404
                            :title "Artigo nom encontrado"
                            :message "Nom hai um artigo com esse URL."}))))}]])


(comment

  req

  (def id "primavera-generosa")
  )
