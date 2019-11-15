(ns semente.db.core
  (:require
   [clojure.edn]
   [clojure.java.io :as io]
   [crux.api :as crux]
   [crux.codec]
   [mount.core :refer [defstate]]
   [semente.config :refer [env]])
  (:import (crux.api ICruxAPI)))

(defn initialize-test-data
  [path crux]
  (->> path
       io/resource
       slurp
       (clojure.edn/read-string {:readers {'crux/id crux.codec/id-edn-reader}})
       (crux/submit-tx crux)))

(defstate ^crux.api.ICruxAPI crux
  :start (let [crux (-> env :crux-config clojure.edn/read-string crux/start-node)]
           (some-> :crux-initial-data-path env (initialize-test-data crux))
           crux)
  :stop (.close crux))

(defn- username->crux-id [username]
  (keyword "user.id" username))

(defn create-user [crux username hashed-password]
  ;; XXX validar, quando exponhamos esta funcionalidade a utentes.
  (crux/submit-tx
   crux
   [[:crux.tx/cas
     nil
     {:crux.db/id (username->crux-id username)
      :user/username username
      :user/pass-hash hashed-password}]]))

(defn entity [crux id]
  (crux/entity (crux/db crux) id))

(defn user-entity [crux username]
  (entity crux (username->crux-id username)))

(defn get-articles [crux]
  (map (fn [[id]] (entity crux id))
       (crux/q (crux/db crux)
               {:find ['id]
                :where [['id :article/title]]})))

(defn unix-name->article [crux scope unix-name]
  (ffirst
   (crux/q (crux/db crux)
           {:find '[id]
            :where '[[id :article/scope scope]
                     [id :article/unix-names unix-name]]
            :args [{'scope scope
                    'unix-name unix-name}]})))

(comment

  (unix-name->article crux :scope/nacional "primavera-generosa")

  (def scope :scope/nacional)
  (def unix-name "primavera-generosa")

  (crux/q (crux/db crux)
          {:find '[id]
           :where '[[id :article/scope scope]
                    [id :article/unix-names unix-name]]
           :args [{'scope scope
                   'unix-name unix-name}]})

  (some-> env :crux-initial-data-path)
  (map first (crux/q (crux/db crux)
                     {:find ['id]
                      :where [['id :article/title]]}))

  (get-articles crux)


 )
