(ns ^:figwheel-hooks semente.webmain
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require cljsjs.draft-js
            [rum.core :as rum]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

;; XXX: only works well with a single editor. I really want to attach it to the
;; state but not make it a local stateful thing, since I'm rendering immediately
;; when this changes (on-change)
;; I probably want to add this to the state on creation or will-mount.
(def editor-state-atom (atom (.createEmpty js/Draft.EditorState)))

(defn save-doc [name contents]
  (go (println (<! (http/post "http://localhost:9500/guarda"
                              {:form-params {:name name :contents contents}})))))

(rum/defcs editor [state name contents]
  (let [on-change (fn [editor-state]
                    (reset! editor-state-atom editor-state)
                    (.forceUpdate (:rum/react-component state)))
        raw-contents (js/Draft.convertToRaw (.getCurrentContent @editor-state-atom))]
    [:div
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
     [:div {:style {:padding 12}}
      [:button {:on-click (fn [e] (save-doc name (.stringify js/JSON raw-contents)))} "Guardar"]]
     [:div {:style {:padding 12}}
      [:pre (.stringify js/JSON
                        raw-contents
                        nil
                        2)]]]))


(rum/defc edit-page [name]
  [:div [:h2 name] (editor name)])

(declare +section+)

(defn ^:after-load reload []
  (rum/mount (edit-page +section+) (.getElementById js/document "app")))

(defn main [section contents]
  (defonce +section+ section)
  (when contents
    (println "contents si" (pr-str contents))
    (reset!
     editor-state-atom
     (js/Draft.EditorState.createWithContent
      (js/Draft.convertFromRaw contents))))
  (reload))
