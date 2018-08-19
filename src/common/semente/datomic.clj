(ns semente.datomic
  (:require [datomic.client.api :as d]))

(defn client []
  (d/client {:server-type :ion
             :region "eu-central-1"
             :system "deitomique"
             :query-group "deitomique"
             :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
             :proxy-port 8182}))

(defn conn* []
  (d/connect (client) {:db-name "semente"}))

(def conn (memoize conn*))
