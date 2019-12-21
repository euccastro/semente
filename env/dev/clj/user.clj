(ns user
  "Userspace functions you can run by default in your local REPL."
  (:require
   [clojure.spec.alpha :as s]
   [expound.alpha :as expound]
   [mount.core :as mount]
   [semente.auth :as auth]
   [semente.config :refer [env]]
   [semente.core :refer [start-app]]
   [semente.db.core :as db]
   [semente.garden.core]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(add-tap (bound-fn* clojure.pprint/pprint))

(defn start
  "Starts application.
  You'll usually want to run this on startup."
  []
  (mount/start-without #'semente.core/repl-server))

(defn stop
  "Stops application."
  []
  (mount/stop-except #'semente.core/repl-server))

(defn restart
  "Restarts application."
  []
  (stop)
  (start))

(defn create-user [username password]
  (db/create-user db/crux username (auth/hash-password password)))

(def ^:private app
  (memoize
   (fn []
     (start-app [])
     (semente.handler/app))))

(defn handle-ring-req [req]
  ((app) req))

(comment
  (start-app [])
  (restart)
  (create-user "utente-prova" "senhaboa")
  (def up (db/user-entity db/crux "utente-prova"))
  (auth/check-password "senhaboa" (:user/pass-hash up))
  )
