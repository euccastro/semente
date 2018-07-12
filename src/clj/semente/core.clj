(ns semente.core
  (:require
   [clojure.data.json :as json]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.pprint :as pp]
   [datomic.client.api :as d]
   [datomic.ion.lambda.api-gateway :as apigw]))

(def get-conn
  (memoize #(d/connect
             (d/client {:server-type :ion
                        :region "eu-central-1"
                        :system "deitomique"
                        :query-group "deitomique"
                        :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
                        :proxy-port 8182})
             {:db-name "semente"})))


(defn webroot*
  "Lambda ion that returns sample database items matching type."
  [{:keys [headers body]}]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Olá mundo!"})

(def webroot
  (apigw/ionize webroot*))
