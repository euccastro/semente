(ns ^:figwheel-hooks semente.webmain
  (:require cljsjs.draft-js
            [rum.core :as rum]))

;; XXX: only works well with a single editor. I really want to attach it to the
;; state but not make it a local stateful thing, since I'm rendering immediately
;; when this changes (on-change)
;; I probably want to add this to the state on creation or will-mount.
(def editor-state-atom (atom (.createEmpty js/Draft.EditorState decorator)))

(rum/defcs stateful [state]
  (let [on-change (fn [editor-state]
                    (reset! editor-state-atom editor-state)
                    (.forceUpdate (:rum/react-component state)))
        raw-contents (js/Draft.convertToRaw (.getCurrentContent @editor-state-atom))]
    [:div
     [:div
      [:button {:on-click (fn [e]
                            (on-change (.toggleInlineStyle
                                        js/Draft.RichUtils
                                        @editor-state-atom
                                        "BOLD")))}
       "Clica-me!"]]
     [:div {:style {:border "1px solid black"}}
      (js/React.createElement
       js/Draft.Editor
       (clj->js {:onChange on-change
                 :editorState @editor-state-atom
                 :handleKeyCommand (fn [command editor-state]
                                     (if-let [new-state (.handleKeyCommand
                                                         js/Draft.RichUtils
                                                         editor-state
                                                         command)]
                                       (do
                                         (println "RESETTING")
                                         (on-change new-state)
                                         "handled")
                                       "not-handled"))}))]
     [:div {:style {:padding 20}} [:pre (.stringify js/JSON
                                                     raw-contents
                                                     nil
                                                     2)]]]))

(defn ^:after-load reload []
  (rum/mount (stateful) (.getElementById js/document "app")))

(defn main []
  (reload))
