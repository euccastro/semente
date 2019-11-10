(ns semente.routes.nacional
  (:require
   [semente.layout :as layout]
   [semente.middleware :as middleware]))


(defn nacional-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/nacional" {:get (fn [_] (layout/nacional))}]])
