(ns semente.elasticsearch
  (:require [clj-http.client :as http]
            [clojure.data.json :as json]))

(def endpoint "https://search-semente-mbk7y7yizywtxbov5s64to2gdm.eu-central-1.es.amazonaws.com")

(defn doc-url [name]
  (str endpoint "/edits/_doc/" name))

(defn save-doc [name contents]
  (http/put (doc-url name)
            {:body (json/write-str contents)
             :content-type "application/json"}))

(defn load-doc [name]
  (try
    (-> name
        doc-url
        http/get
        :body
        json/read-str
        (get "_source"))
    (catch Exception e nil)))

(comment

  (save-doc "xyzzy" {:corpo "nunca"})

  (load-doc "xyzzy")

  (load-doc "not-there")

  )
