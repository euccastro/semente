(ns semente.prosemirror.subscription
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [semente.prosemirror.util :refer (mark-type node-type)]
   ["prosemirror-commands" :refer (toggleMark)]
   ["prosemirror-state" :refer (EditorState)]))


(rf/reg-sub
 :editor-state
 (fn [db _]
   (:editor-state db)))

(rf/reg-sub
 :mark-available
 :<- [:editor-state]
 (fn [^EditorState editor-state [_ mark-id]]
   ((toggleMark (mark-type editor-state mark-id))
    editor-state)))

(rf/reg-sub
 :mark-active
 :<- [:editor-state]
 (fn [^EditorState editor-state [_ mark-name]]
   (let [mt (mark-type editor-state mark-name)
         {:keys [from $from to empty]} (j/lookup (j/get editor-state :selection))]
     (if empty
       (boolean (j/call mt :isInSet (or (j/get editor-state :storedMarks)
                                        (j/call $from :marks))))
       (j/call-in editor-state [:doc :rangeHasMark] from to mt)))))

(rf/reg-sub
 :selected-block-type
 :<- [:editor-state]
 (fn [^EditorState editor-state [_ type-id attrs]]
   (let [{:keys [$from to node]} (j/lookup (j/get editor-state :selection))
         nt (node-type editor-state type-id)
         js-attrs (clj->js attrs)]
     (if node
       (j/call node :hasMarkup nt js-attrs)
       (and (<= to (j/call $from :end))
            (j/call (j/call $from :node 1)
                    :hasMarkup
                    nt
                    js-attrs))))))

(rf/reg-sub
 :selection-empty
 :<- [:editor-state]
 (fn [^EditorState editor-state _]
   (j/get-in editor-state [:selection :empty])))

(rf/reg-sub
 :dialog
 (fn [db _]
   (:dialog db)))
