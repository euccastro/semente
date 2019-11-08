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

(comment
  (some-> env :crux-initial-data-path)
  (crux/entity (crux/db crux) :prova/id)
 )
