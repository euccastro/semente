(ns semente.routes.nacional
  (:require
   [semente.layout.nacional :refer (pagina-nacional
                                    pagina-nacional-autogen)]
   [semente.middleware :as middleware]))


(defn nacional-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional" {:get (fn [_] (pagina-nacional))}]
   ["/nacional-autogen" {:get (fn [_] (pagina-nacional-autogen))}]])
