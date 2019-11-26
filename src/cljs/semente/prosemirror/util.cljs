(ns semente.prosemirror.util
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-state" :refer (EditorState)]
   [re-frame.core :as rf]
   [semente.prosemirror.shared-state :refer (editor-view)]))

(defn mark-type [^EditorState editor-state mark-name]
  (j/get-in editor-state [:schema :marks mark-name]))

(defn dispatch-prosemirror-transaction [txn]
  (let [^EditorView ev @editor-view]
    (when ev
      (let [^EditorState new-state
            (j/call-in ev [:state :apply] txn)]
        (j/call ev :updateState new-state)
        (rf/dispatch [:editor-state-changed new-state])))))
