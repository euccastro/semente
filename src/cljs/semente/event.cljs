(ns semente.event
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :editor-state-changed
 (fn [db [_ editor-state]]
   (println "editor state si" (pr-str editor-state))
   (assoc db :editor-state editor-state)))
