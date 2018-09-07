(ns db
  (:require [cemerick.friend.credentials :as creds]
            [datomic.client.api :as d]
            [semente.datomic :as sd]))

(def schema
  [
   ;; utente

   {:db/ident :user/name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome (só minúsculas ASCII)"}

   {:db/ident :user/password-hash
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Hash bcryptada da senha"}

   {:db/ident :user/email
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Endereço de email"}

   {:db/ident :user/permission
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}

   {:db/ident :permission/scope
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "Âmbito no que tem efecto este permisso"}

   {:db/ident :permission/privilege
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "Privilégio que confer este permisso"}

   {:db/ident :permission/display-name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome deste permisso para consumo humano, em minúsculas"}

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
  [{:db/id "national"
    :db/ident :scope/national
    :scope/display-name "nacional"
    :permission/display-name "permisso de âmbito nacional"}
   {:db/ident :permission.privilege/unobtainium
    :permission/display-name "encher água com umha peneira"}
   {:db/id "admin"
    :db/ident :permission.privilege/admin
    :permission/display-name "privilégio de administraçom"}
   {:db/id "edit"
    :db/ident :permission.privilege/edit
    :permission/display-name "privilégio de ediçom"}
   {:db/ident :permission/national-editor
    :permission/display-name "permisso de ediçom de conteúdos nacionais"
    :permission/scope "national"
    :permission/privilege "edit"}
   {:db/ident :permission/national-admin
    :permission/display-name "permisso de administraçom nacional"
    :permission/scope "national"
    :permission/privilege "admin"}])


(def eu [{:user/name "estevo"
          :user/email "euccastro@gmail.com"
          :user/password-hash (creds/hash-bcrypt "abcd")
          :user/permission [:permission/national-admin
                            :permission/national-editor]}])

(defn init []
  (let [conn (sd/conn*)]
    (doseq [data [schema bootstrap-data eu]]
      (d/transact conn {:tx-data data}))))

(defn reset []
  (let [client (sd/client)]
    (d/delete-database client {:db-name "semente"})
    (d/create-database client {:db-name "semente"}))
  (init))

(comment
  (def client (sd/client))
  (def conn (sd/conn*))
  (reset)
  (init)
  )
