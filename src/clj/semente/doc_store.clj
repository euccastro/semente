(ns semente.doc-store
  (:require [amazonica.aws.s3 :as s3]))


(defn string->input-stream [s]
  (java.io.ByteArrayInputStream. (.getBytes s)))

(defn put-public [k contents]
  (s3/put-object {:bucket-name "semente-publico"
                  :key k
                  :input-stream (string->input-stream contents)
                  :canned-acl :public-read}))

(defn put-private [k contents]
  (s3/put-object :bucket-name "semente-privado"
                 :key k
                 :input-stream (string->input-stream contents)))

(defn get-string [bucket-name k]
  (-> (s3/get-object :bucket-name bucket-name
                     :key k)
      :input-stream
      slurp))

(defn stores []
  {:public {:store-fn put-public
            :fetch-fn #(get-string "semente-publico" %)}
   :private {:store-fn put-private
             :fetch-fn #(get-string "semente-privado" %)}})
