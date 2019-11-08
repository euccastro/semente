(ns semente.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[semente started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[semente has shut down successfully]=-"))
   :middleware identity})
