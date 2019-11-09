(ns semente.garden.core
  (:require
   [garden-watcher.core :as gwatcher]
   [garden-watcher.def :refer [defstyles]]
   [mount.core :as mount]))

(mount/defstate ^{:on-reload :noop} watcher
  :start
  (gwatcher/start-garden-watcher! '[semente.garden.core])
  :stop
  (gwatcher/stop-garden-watcher! watcher))

(defstyles jardim
  [:h1 {:color "orange"}]
  [:h2 {:color "blue"}]
  [:h3 {:color "green"}])
