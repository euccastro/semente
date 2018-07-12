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
  [
   ;; utente

   {:db/ident :user/name
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
    :db/cardinality :db.cardinality/one}

   ;; âmbito

   {:db/ident :scope/display-name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome do âmbito para mostrar, em minúsculas"}

   {:db/ident :scope/about
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "ID do elemento elasticsearch onde está o texto da secçom de Quem Somos para este âmbito"}

   {:db/ident :scope/logo-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "ID do URI onde está o logo do âmbito"}

   {:db/ident :scope/facebook-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Facebook deste âmbito, se houver"}

   {:db/ident :scope/youtube-url
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI do canal de YouTube deste âmbito, se houver"}

   {:db/ident :scope/twitter-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Twitter deste âmbito, se houver"}

   {:db/ident :scope/centers
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true
    :db/doc "Centros deste âmbito"}])

(def bootstrap-data
  [{:db/ident :scope/national
    :scope/display-name "nacional"}
   {:db/ident :permission.privilege/admin}])


(def eu {:user/name "estevo"
         :user/email "euccastro@gmail.com"
         :user/permission [{:permission/scope :scope/national
                            :permission/privilege :permission.privilege/admin}]})
(comment
  (d/transact conn {:tx-data })

  (d/q '[:find ?n
         :where
         [?p :permission/privilege :permission.privilege/admin]
         [?u :user/permission ?p]
         [?u :user/name ?n]]
       (d/db conn)))
*1
