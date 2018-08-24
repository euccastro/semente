(ns ^:figwheel-hooks semente.webmain
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require cljsjs.draft-js
            [rum.core :as rum]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.object :as gobj]))


;; XXX: only works well with a single editor. I really want to attach it to the
;; state but not make it a local stateful thing, since I'm rendering immediately
;; when this changes (on-change)
;; I probably want to add this to the state on creation or will-mount.
(defonce editor-state-atom (atom (.createEmpty js/Draft.EditorState)))

;(def editor-ref-atom (atom nil))

(def url->blob (atom {}))

(defn save-doc [name contents]
  (let [blob-uris (for [m (array-seq (js/Object.values (gobj/get contents "entityMap")))]
                    (.-url (.-data m)))
        u->b @url->blob
        blobs (for [uri blob-uris
                    :let [blob (u->b uri)]
                    :when blob]
                [uri blob])]
    (go (println (<! (http/post "/guarda"
                                {:multipart-params
                                 (into [["name" name]
                                        ["contents" (.stringify js/JSON contents)]]
                                       blobs)}))))))

(def create-blob-url (memoize js/URL.createObjectURL))

(defn register-blob [blob]
  (let [url (create-blob-url blob)]
    (swap! url->blob assoc url blob)
    url))

(defn stringify-keys [x]
  (if (map? x)
    (into {} (for [[k v] x] [(name k) (stringify-keys v)]))
    x))

(rum/defc image [url]
  [:img {:src url}])

(defn native-image [props]
  (let [block (.-block props)
        content-state (.-contentState props)
        entity (.getEntity content-state (.getEntityAt block 0))
        url (.-url (.getData entity))]
    (image url)))

(defn toggle-inline-style [editor-state style]
  (js/Draft.RichUtils.toggleInlineStyle editor-state style))

(rum/defcs editor [state name contents]
  (let [add-image (fn [editor-state blob]
                    (let [content-state (.getCurrentContent editor-state)
                          cs-with-entity (.createEntity content-state "IMAGE" "IMMUTABLE" (clj->js {:url (register-blob blob)}))
                          entity-key (.getLastCreatedEntityKey cs-with-entity)
                          es-with-entity (js/Draft.EditorState.set editor-state (clj->js {:currentContent cs-with-entity}))]
                      (js/Draft.AtomicBlockUtils.insertAtomicBlock es-with-entity entity-key " ")))
        on-change (fn [editor-state]
                    (reset! editor-state-atom editor-state)
                    (.forceUpdate (:rum/react-component state)))
        raw-contents (js/Draft.convertToRaw (.getCurrentContent @editor-state-atom))
        current-style (set (array-seq (.toArray (.getCurrentInlineStyle @editor-state-atom))))]
    [:div
     [:div {:style {:margin-bottom "4px"}}
      [:span {:style (cond-> {:border "1px solid black"
                              :padding "0 4px 0 4px"
                              :cursor "pointer"}
                       (do (prn current-style)
                           (current-style "BOLD"))
                       (assoc :background-color "orange"))
              :on-mouse-down (fn [e]
                               ;; Don't steal focus from main editor.
                               (.preventDefault e))
              :on-click (fn [_]
                          (on-change
                           (toggle-inline-style @editor-state-atom
                                                "BOLD")))}
       [:b "B"]]]
     [:div {:style {:border "1px solid black"}}
      (js/React.createElement
       js/Draft.Editor
       (clj->js {:onChange on-change
                 ;:ref (partial reset! editor-ref-atom)
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
                                       "not-handled"))
                 :handleDroppedFiles (fn [selection-state files]
                                       (println "got dropped files!")
                                       (js/console.log selection-state)
                                       (js/console.log files))
                 :handlePastedFiles (fn [blobs]
                                      (println "got pasted FILES!" (.-length blobs))
                                      (on-change (reduce add-image @editor-state-atom (array-seq blobs)))
                                      "handled")
                 :blockRendererFn (fn [block]
                                    (println "block render" (.getType block))
                                    (if (= (.getType block) "atomic")
                                      (clj->js {:component native-image
                                                :editable false})))}))]
     [:div {:style {:padding 12}}
      [:button {:on-click (fn [_] (save-doc name raw-contents))} "Guardar"]]
     [:div {:style {:padding 12}}
      [:pre (.stringify js/JSON
                        (.getCurrentInlineStyle @editor-state-atom)
                        nil
                        2)]]
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

(defn ^:export main [section contents]
  (defonce +section+ section)
  (when contents
    (println "contents si" (pr-str contents))
    (reset!
     editor-state-atom
     (js/Draft.EditorState.createWithContent
      (js/Draft.convertFromRaw contents))))
  (reload))
