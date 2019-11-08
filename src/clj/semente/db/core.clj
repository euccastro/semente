(ns semente.db.core
  (:require
   [clojure.edn]
   [clojure.java.io :as io]
   [crux.api :as crux]
   [mount.core :refer [defstate]]
   [semente.config :refer [env]])
  (:import (crux.api ICruxAPI)))

(defn initialize-test-data
  [path crux]
  (->> path io/resource slurp clojure.edn/read-string (crux/submit-tx crux)))

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

(defn user-entity [crux username]
  (crux/entity (crux/db crux) (username->crux-id username)))

(comment
  (some-> env :crux-initial-data-path)
 )
