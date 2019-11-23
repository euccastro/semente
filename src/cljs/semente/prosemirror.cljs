(ns semente.prosemirror
  (:require
   [reagent.core :as r]
   ["prosemirror-commands" :refer (baseKeymap)]
   ["prosemirror-history" :refer (undo redo history)]
   ["prosemirror-keymap" :refer (keymap)]
   ["prosemirror-model" :refer (Schema)]
   ["prosemirror-schema-basic" :refer (schema)]
;   ["prosemirror-schema-list" :refer (addListNodes)]
   ["prosemirror-state" :refer (EditorState)]
   ["prosemirror-view" :refer (EditorView)]))

(defn initial-state []
  (.create EditorState #js{"schema" schema}))

(defn editor [initial-editor-state
              on-editor-state-change]
  (let [editor-state (atom initial-editor-state)
        editor-view (atom nil)]
    (r/create-class
     {:display-name "prosemirror-editor"
      :should-component-update (constantly false)
      :component-will-unmount
      (fn [_]
        (println "unmounting!")
        (when-let [^EditorView ev @editor-view]
          (.destroy ev)))
      :reagent-render
      (fn [initial-editor-state
           on-editor-state-change]
        [:div
         {:ref
          (fn [dom-el]
            (reset!
             editor-view
             (EditorView.
              dom-el
              #js{"state" @editor-state
                  "dispatchTransaction"
                  (fn [tx]
                    (let [^EditorState new-state (.apply @editor-state tx)
                          ^EditorView ev @editor-view]
                      (reset! editor-state new-state)
                      (when ev
                        (.updateState ev new-state))
                      (on-editor-state-change new-state)))})))}])})))
