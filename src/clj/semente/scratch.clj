(ns semente.scratch
  (:require [datomic.client.api :as d]))

(def cfg {:server-type :ion
          :region "eu-central-1"
          :system "deitomique"
          :query-group "deitomique"
          :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
          :proxy-port 8182})

(def client (d/client cfg))

(d/create-database client {:db-name "semente"})

(def conn (d/connect client {:db-name "semente"}))

(def schema
  [{:db/ident :user/name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome (só minúsculas ASCII)"}

   {:db/ident :user/email
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Endereço de email"}

   {:db/ident :user/permission
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true}

   {:db/ident :permission/scope
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/ident :permission/privilege
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}])

(def bootstrap-data
  [{:db/ident :scope/national}
   {:db/ident :permission.privilege/admin}])

(def eu {:user/name "estevo"
         :user/email "euccastro@gmail.com"
         :user/permission [{:permission/scope :scope/national
                            :permission/privilege :permission.privilege/admin}]})

(d/transact conn {:tx-data [eu]})

(d/q '[:find ?n
       :where
       [?p :permission/privilege :permission.privilege/admin]
       [?u :user/permission ?p]
       [?u :user/name ?n]]
     (d/db conn))
