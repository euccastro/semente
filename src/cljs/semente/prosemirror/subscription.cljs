(ns semente.prosemirror.subscription
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [semente.prosemirror.util :refer (current-editor-state
                                     mark-type
                                     node-type
                                     node-type?)]
   ["prosemirror-commands" :refer (toggleMark)]
   ["prosemirror-model" :refer (Node)]
   ["prosemirror-state" :refer (EditorState
                                Selection)]))


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
 :selection
 :<- [:editor-state]
 (fn [^EditorState editor-state _]
   (j/get editor-state :selection)))

(rf/reg-sub
 :selected-block-type
 :<- [:selection]
 (fn [^Selection selection [_ type-id attrs]]
   (let [{:keys [$from to node]} (j/lookup selection)
         nt (node-type (current-editor-state) type-id)
         js-attrs (clj->js attrs)]
     (if node
       (j/call node :hasMarkup nt js-attrs)
       (when (<= to (j/call $from :end))
         (some->
          (j/call $from :node 1)
          (j/call :hasMarkup
                  nt
                  js-attrs)))))))

(rf/reg-sub
 :selection-empty
 :<- [:selection]
 (fn [^Selection selection _]
   (j/get selection :empty)))

(rf/reg-sub
 :selected-image
 :<- [:selection]
 (fn [^Selection selection _]
   (let [^Node node (j/get selection :node)]
     (when (and node (node-type? node "image"))
       (let [{:keys [src desc db_id] :as m} (j/lookup (j/get node :attrs))]
         m)))))


(rf/reg-sub
 :dialog
 (fn [db _]
   (:dialog db)))
