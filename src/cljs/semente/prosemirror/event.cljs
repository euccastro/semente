(ns semente.prosemirror.event
  (:require
   [re-frame.core :as rf]
   [semente.prosemirror.util :refer (mark-type)]
   ["prosemirror-commands" :refer (toggleMark)]))

(rf/reg-event-db
 :editor-state-changed
 (fn [db [_ editor-state]]
   (assoc db :editor-state editor-state)))

(rf/reg-event-fx
 :toggle-mark
 (fn [{{:keys [editor-state]} :db} [_ mark-name]]
   (let [mt (mark-type editor-state mark-name)
         command (toggleMark mt)]
     {:prosemirror-command [command editor-state]})))

(rf/reg-event-fx
 :prosemirror-txn
 (fn [_ [_ txn]]
   {:prosemirror-txn txn}))
