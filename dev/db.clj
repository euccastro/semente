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

   {:db/ident :user/permissions
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}

   ;; permisso

   {:db/ident :permission/key
    :db/unique :db.unique/identity
    :db/valueType :db.type/keyword
    :db/cardinality :db.cardinality/one
    :db/doc "Chave para identificar este permisso"}

   {:db/ident :permission/display-name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome deste permisso para consumo humano, em minúsculas"}

   ;; associaçom

   {:db/ident :association/slug
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome curto da associaçom para URLs etc."}

   {:db/ident :association/display-name
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome da associaçom para mostrar, em minúsculas"}

   {:db/ident :association/about-revision
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc "Número de série do elemento elasticsearch onde está o texto atual da secçom de Quem Somos para esta associaçom.

O texto está no id <association-slug>_quemsomos_<revisom>"}

   {:db/ident :association/logo-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "ID do URI onde está o logo da associaçom"}

   {:db/ident :association/facebook-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Facebook desta associaçom, se houver"}

   {:db/ident :association/youtube-url
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI do canal de YouTube desta associaçom, se houver"}

   {:db/ident :association/twitter-uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "URI da página de Twitter desta associaçom, se houver"}

   {:db/ident :association/centers
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true
    :db/doc "Centros deste âmbito"}

   ;; revisom de elementos editáveis

   {:db/ident :editable/revision
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc "Número de série da última revisom deste conteúdo"}

   ;; tarefa
   ;; (o título vai em elasticsearch, coa chave task-<datomic-id>)

   {:db/ident :task/assignee
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "A utente que tem esta tarefa assignada"}

   ;; comentário
   ;; (os conteúdos vam em elasticsearch, coa chave comment-<datomic-id>)

   {:db/ident :comment/author
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "A autora deste comentário"}

   {:db/ident :subject/comments
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/isComponent true
    :db/doc "Comentários associados a isto"}

   ;; equipa

   {:db/ident :team/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome da equipa"}

   {:db/ident :team/slug
    :db/unique :db.unique/identity
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "Nome curto da equipa para URLs etc"}

   {:db/ident :team/members
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/doc "Gente que fai parte da equipa"}

   ;; Nestes momentos um id de equipa também é o id dumha liga de tarefas, mas
   ;; podemos mudar isto no futuro.
   {:db/ident :task-league/tasks
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/doc "Tarefas que componhem esta lista"}

   ;; votos

   {:db/ident :task-vote/voter
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "Pessoa que emitiu este voto"}

   {:db/ident :task-vote/task-league
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "Liga de tarefas na qual é feito este voto"}

   {:db/ident :task-vote/task
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc "Tarefa votada"}

   {:db/ident :task-vote/score
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc "Pontuaçom deste voto"}

   ;; transaçom (meta)
   {:db/ident :txn/doc
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "documentaçom da transaçom"}

   ])

(def bootstrap-data
  [{:db/id "national"
    :association/slug "nacional"}
   {:db/id "national-editor-permission"
    :permission/key :permission/national-editor
    :permission/display-name "permisso de ediçom de conteúdos nacionais"}
   {:db/id "national-admin-permission"
    :permission/key :permission/national-admin
    :permission/display-name "permisso de administraçom nacional"}
   {:db/id "comi-geral"
    :team/slug "comissom-geral"}
   {:db/id "estevo"
    :user/name "estevo"
    :user/email "euccastro@gmail.com"
    :user/password-hash (creds/hash-bcrypt "abcd")
    :user/permissions [{:db/id "national-admin-permission"}
                       {:db/id "national-editor-permission"}]
    :team/_members "comi-geral"}
   ])

(defn cria-utente [nome email senha equipa]
  (d/transact (sd/conn*)
              {:tx-data [{:user/name nome
                          :user/email email
                          :user/password-hash (creds/hash-bcrypt senha)
                          :team/_members [:team/slug equipa]}
                         [:db/add "datomic.tx" :txn/doc (str "cria-utente " nome)]]}))


(defn init []
  (let [conn (sd/conn*)]
    (doseq [data [schema bootstrap-data]]
      (d/transact conn {:tx-data data}))))

;; apagar assi que a db semente esteja live;
(defn reset []
  (let [client (sd/client)]
    (d/delete-database client {:db-name "semente"})
    (d/create-database client {:db-name "semente"})))

(comment
  (def client (sd/client))
  (def conn (sd/conn*))
  (def data bootstrap-data)
  (reset)
  (init)
  (d/q '[:find ?n :where [_ :user/name ?n]] (d/db (sd/conn)))
  (d/pull (d/db (sd/conn)) '[{:team/members [:user/name]}] [:team/slug "comissom-geral"])
  (cria-utente "Badú" "badusinho@gmail.com" "senhadebadu" "comissom-geral")
  (cria-utente "Jesús" "oficinasemente@gmail.com" "senhadejesus" "comissom-geral")
  )
