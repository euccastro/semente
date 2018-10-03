(ns semente.elasticsearch
  (:require [clj-http.client :as http]
            [clojure.data.json :as json]))

(def endpoint "https://vpc-es-deitomique-a7235usfbeatgjhiba5f4y32za.eu-central-1.es.amazonaws.com")

(defn doc-url [index name]
  (format "%s/%s/_doc/%s" endpoint index name))

(defn save-doc [index name contents]
  (http/put (doc-url index name)
            {:body (json/write-str contents)
             :content-type "application/json"}))

(defn load-doc [index name]
  (try
    (-> (doc-url index name)
        http/get
        :body
        json/read-str
        (get "_source"))
    (catch Exception e nil)))

(defn add-index [index]
  (http/put (format "%s/%s?pretty" endpoint index)
            {:body (json/write-str {:settings {:analysis {:analyzer {:default {:type "galician"}}}}})
             :content-type "application/json"}))

(comment

  (def resp (http/delete (str endpoint "/edits?pretty")))
  (def resp (http/put (str endpoint "/tarefas?pretty")
                      {:body (json/write-str {:settings {:analysis {:analyzer {:default {:type "galician"}}}}})
                       :content-type "application/json"}))
  (def resp (http/put (str endpoint "/prova/_doc/1?pretty")
                      {:body (json/write-str {:conteudo "A naçom existe e a canción segue!"})
                       :content-type "application/json"}))

  (def resp (-> (http/get (str endpoint "/prova/_doc/1"))
                :body
                (json/read-str :key-fn keyword)
                :hits
                :hits))
  (def resp (-> (http/get (str endpoint "/prova/_search")
                          {:body (json/write-str {:query {:match {:conteudo "cançom"}}})
                           :content-type "application/json"})
                :body
                (json/read-str :key-fn keyword)
                :hits
                :hits))
  (clojure.pprint/pprint resp)
  (save-doc "xyzzy" {:corpo "nunca"})

  (load-doc "xyzzy")

  (load-doc "not-there")

  (load-doc "tarefas" 17363487625838697)

  )
