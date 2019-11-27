(ns semente.prosemirror.effect
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (dispatch-prosemirror-transaction)]))

(rf/reg-fx
 :prosemirror-command
 (fn [[command editor-state]]
   (command editor-state #(rf/dispatch [:prosemirror-txn %]))))

(rf/reg-fx
 :prosemirror-txn
 dispatch-prosemirror-transaction)

(rf/reg-fx
 :focus-editor
 (fn [_]
   (j/call @editor-view :focus)))
