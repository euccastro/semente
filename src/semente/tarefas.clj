(ns semente.tarefas
  (:require [cemerick.friend :as friend]
            [datomic.client.api :as d]
            [rum.core :as rum]
            [semente.datomic :as sd]))

(defn lista [slug-equipa]
  (rum/render-static-markup
   (let [tasks (d/q '[:find ?tid ?title ?author-name ?date-created
                      :in $ ?slug-equipa
                      :where
                      [?equipa :team/slug ?slug-equipa]
                      [?equipa :task-league/tasks ?tid]
                      [?tid :task/author ?author]
                      [?author :user/name ?author-name]
                      [?tid :task/title ?title ?txn]
                      [?txn :db/txInstant ?date-created]]
                    (d/db (sd/conn))
                    slug-equipa)]
     [:div
      (if (empty? tasks)
        [:div "Esta equipa nom tem tarefas em curso."]
        [:ul
         (for [[id titulo autora data] tasks]
           [:li {:key id} titulo [:p [:small (str "Criado por " autora " em " data)]]])])
      [:form {:action (str "/tarefas/" slug-equipa "/acrescenta") :method "post"}
       [:div
        [:div "Título"]
        [:input {:type "text" :name "titulo" :value ""}]
        [:input {:type "submit" :value "Acrescenta Tarefa"}]]]])))

(defn acrescenta-tarefa [slug-equipa titulo]
  (println (pr-str friend/*identity*))
  (d/transact (sd/conn)
              {:tx-data [{:task/title titulo
                          :task/author [:user/name (:current friend/*identity*)]
                          :task-league/_tasks [:team/slug slug-equipa]}
                         [:db/add "datomic.tx" :db/doc "tarefas/acrescenta-tarefa"]]})
  (ring.util.response/redirect (str "/tarefas/" slug-equipa)))


(comment

  (def txn (ffirst (d/q '[:find ?t :where [_ :user/name "Badú" ?t]] (d/db (sd/conn)))))
  (d/pull (d/db (sd/conn)) '[*] txn)
  (def slug-equipa "comissom-geral")
  )
