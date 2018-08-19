(ns semente.s3
  (:require [amazonica.aws.s3 :as s3]
            [clojure.java.io :as io]))

(defn put-public [k contents {:keys [content-type size]}]
  (s3/put-object
   (cond-> {:bucket-name "datomique.icbink.org"
            :key k
            :input-stream (io/input-stream contents)
            :canned-acl :public-read}
     content-type (assoc-in [:metadata :content-type] content-type)
     size (assoc-in [:metadata :size] size))))
