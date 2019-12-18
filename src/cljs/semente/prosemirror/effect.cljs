(ns semente.prosemirror.effect
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   ;; for side effects
   semente.prosemirror.image.effect
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     dispatch-prosemirror-transaction)]))

(rf/reg-fx
 :prosemirror-commands
 (fn [cmds]
   (doseq [command cmds]
     (command (current-editor-state)
              dispatch-prosemirror-transaction))))

(rf/reg-fx
 :focus-editor
 (fn [_]
   (j/call @editor-view :focus)))
