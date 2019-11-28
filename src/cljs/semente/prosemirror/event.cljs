(ns semente.prosemirror.event
  (:require
   [re-frame.core :as rf]
   [semente.prosemirror.util :refer (mark-type node-type)]
   ["prosemirror-commands" :refer (setBlockType toggleMark)]))

(rf/reg-event-db
 :editor-state-changed
 (fn [db [_ editor-state]]
   (assoc db :editor-state editor-state)))

(rf/reg-event-fx
 :toggle-mark
 (fn [{{:keys [editor-state]} :db} [_ mark-id attrs]]
   (let [mt (mark-type editor-state mark-id)
         command (toggleMark mt (clj->js attrs))]
     {:prosemirror-command [command editor-state]})))

(rf/reg-event-fx
 :set-block-type
 (fn [{{:keys [editor-state]} :db} [_ node-id attrs]]
   (let [nt (node-type editor-state node-id)
         command (setBlockType nt (clj->js attrs))]
     {:prosemirror-command [command editor-state]})))

(rf/reg-event-fx
 :prosemirror-txn
 (fn [_ [_ txn]]
   {:prosemirror-txn txn}))

(rf/reg-event-db
 :set-dialog
 (fn [db [_ dialog-spec]]
   (assoc db :dialog dialog-spec)))

(rf/reg-event-db
 :clear-dialog
 (fn [db _]
   (dissoc db :dialog)))

(rf/reg-event-fx
 :focus-editor
 (fn [_ _]
   {:focus-editor nil}))
