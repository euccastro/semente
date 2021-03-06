(ns semente.prosemirror.util
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-state" :refer (EditorState)]
   [re-frame.core :as rf]
   [semente.prosemirror.shared-state :refer (editor-view)]))

(defn mark-type [^EditorState editor-state mark-id]
  (j/get-in editor-state [:schema :marks mark-id]))

(defn node-type [^EditorState editor-state node-id]
  (j/get-in editor-state [:schema :nodes node-id]))

(defn dispatch-prosemirror-transaction [txn]
  (let [^EditorView ev @editor-view]
    (when ev
      (let [^EditorState new-state
            (j/call-in ev [:state :apply] txn)]
        (j/call ev :updateState new-state)
        (rf/dispatch [:editor-state-changed new-state])))))

(defn node-type? [node type-name]
  (= (j/get-in node [:type :name]) type-name))

(defn current-editor-state []
  (j/get @editor-view :state))

(comment


  (j/call-in (current-editor-state)
             [:doc :child]
             1)
  (def img *1)
  (j/get-in img [:attrs :src])
  )
