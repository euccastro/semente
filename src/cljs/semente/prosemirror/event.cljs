(ns semente.prosemirror.event
  (:require
   [re-frame.core :as rf]
   [semente.prosemirror.util :refer (mark-type node-type current-editor-state)]
   ["prosemirror-schema-list" :refer (liftListItem wrapInList)]
   ["prosemirror-commands" :refer (lift setBlockType toggleMark wrapIn)]))

(rf/reg-event-db
 :editor-state-changed
 (fn [db [_ editor-state]]
   (assoc db :editor-state editor-state)))

(rf/reg-event-fx
 :toggle-mark
 (fn [_ [_ mark-id attrs]]
   (let [mt (mark-type (current-editor-state) mark-id)
         command (toggleMark mt (clj->js attrs))]
     {:prosemirror-commands [command]})))

(defn- node-command [cmd-builder]
  (fn [_ [_ node-id attrs]]
    (let [es (current-editor-state)
          nt (node-type es node-id)
          command (cmd-builder nt (clj->js attrs))]
      ;; As primeiras duas operaçons som para "normalizar" o estado a parágrafo
      ;; simples, para que prosemirror aceite mudar ao tipo que pedimos.
      {:prosemirror-commands [lift
                              (setBlockType (node-type es :paragraph))
                              command]})))

(rf/reg-event-fx
 :set-block-type
 (node-command setBlockType))

(rf/reg-event-fx
 :wrap-in
 (node-command wrapIn))

(rf/reg-event-fx
 :wrap-in-list
 (node-command wrapInList))

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
 (constantly {:focus-editor nil}))

(rf/reg-event-fx
 :files-selected
 (fn [_ [_ files]]
   {:handle-files files}))
