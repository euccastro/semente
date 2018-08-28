(ns ^:figwheel-hooks semente.webmain
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require cljsjs.draft-js
            [rum.core :as rum]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.object :as gobj]))

(set! *warn-on-infer* true)


(defn dget [o & attrs]
  (reduce gobj/get o attrs))

(rum/defc link [url contents]
  [:a {:href url} contents])

(defn link-strategy
  [^js/Draft.ContentBlock content-block
   callback
   ^js/Draft.ContentState content-state]
  (.findEntityRanges content-block
                     (fn [^js/Draft.CharacterMetadata cmd]
                       (boolean
                        (some-> (.getEntity cmd)
                                (#(.getEntity content-state %))
                                (.getType)
                                (=  "LINK"))))
                     (fn [start end]
                       (callback start end))))

(defn link-component [^js/Draft.DraftDecoratorComponentProps props]
  (let [^js/Draft.ContentState content-state  (gobj/get props "contentState")
        ^js/Draft.DraftEntityInstance entity (.getEntity content-state (gobj/get props "entityKey"))]
    (link (gobj/get (.getData entity) "url")
          (gobj/get props "children"))))

(def decorator
  (js/Draft.CompositeDecorator.
   (clj->js
    [{:strategy (fn [& args] (apply link-strategy args))
      :component (fn [& args] (apply link-component args))}])))

(defonce app-state
  (atom {}))

(def url->blob (atom {}))

(defn save-doc [name contents]
  (let [blob-uris (for [m (array-seq (js/Object.values (gobj/get contents "entityMap")))
                        :when (= (gobj/get m "type") "IMAGE")]
                    (dget m "data" "url"))
        u->b @url->blob
        blobs (for [uri blob-uris
                    :let [blob (u->b uri)]
                    :when blob]
                [uri blob])]
    (println "blobs si" (pr-str blobs))
    (go (println (<! (http/post "/guarda"
                                {:multipart-params
                                 (into [["name" name]
                                        ["contents" (.stringify js/JSON contents)]]
                                       blobs)}))))
    nil))

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

(defn native-image [^js/Draft.DraftDecoratorComponentProps props]
  (let [block ^js/Draft.ContentBlock (.-block props)
        content-state ^js/Draft.ContentState (.-contentState props)
        entity (.getEntity content-state (.getEntityAt block 0))
        url (gobj/get (.getData entity) "url")]
    (image url)))

(defn toggle-inline-style [editor-state style]
  (js/Draft.RichUtils.toggleInlineStyle editor-state style))

(defn create-entity [^js/Draft.EditorState editor-state entity-type mutability data]
  (let [^js/Draft.ContentState content-state (.getCurrentContent editor-state)
        cs-with-entity (.createEntity content-state entity-type mutability (clj->js data))]
    (.getLastCreatedEntityKey cs-with-entity)))


(defn set-entity-in-selection [editor-state ?entity-key]
  (js/Draft.RichUtils.toggleLink
   editor-state
   (.getSelection editor-state)
   ?entity-key))

(defn add-entity-to-selection [editor-state & args]
  (set-entity-in-selection editor-state
                           (apply create-entity editor-state args)))

(defn remove-entities-from-selection [editor-state]
  (set-entity-in-selection editor-state nil))

(rum/defc link-editor < rum/reactive [on-change]
  (let [{:keys [^js/Draft.EditorState editor-state
                link-text]} (rum/react app-state)
        bye #(swap! app-state assoc :editing-link? false :link-text "")
        apply-link #(do (bye)
                        (on-change (add-entity-to-selection
                                    editor-state
                                    "LINK"
                                    "MUTABLE"
                                    {:url link-text})))]
    [:div
     "URL:"
     [:input {:type "text"
              :placeholder "Entra o URL da ligaçom e preme ENTER"
              :value (or link-text "")
              :on-key-down (fn [e]
                             (case (.-key e)
                               "Enter" (do
                                         (.preventDefault e)
                                         (apply-link))
                               "Escape" (do
                                          (.preventDefault e)
                                          (bye))
                               nil))
              :on-change (fn [e]
                           (swap! app-state assoc :link-text (.-value (.-target e))))}]
     [:button {:on-click apply-link} "Ligar"]
     [:button {:on-click bye} "Cancelar"]]))

(defn add-image [editor-state blob]
  ;; XXX: factor out insert-entity-block or something
  (let [content-state (.getCurrentContent editor-state)
        cs-with-entity (.createEntity content-state "IMAGE" "IMMUTABLE" (clj->js {:url (register-blob blob)}))
        entity-key (.getLastCreatedEntityKey cs-with-entity)
        es-with-entity (js/Draft.EditorState.set editor-state (clj->js {:currentContent cs-with-entity}))]
    (js/Draft.AtomicBlockUtils.insertAtomicBlock es-with-entity entity-key " ")))

(def header-cycle
  {"unstyled" "header-one"
   "header-one" "header-two"
   "header-two" "header-three"
   "header-three" "unstyled"})
(rum/defc toolbar [editor-state on-change current-style]
  [:div
   [:span {:style {:border "1px solid black"
                   :padding "0 4px 0 4px"
                   :cursor "pointer"}
           :on-mouse-down (fn [e]
                            ;; Don't steal focus from main editor.
                            (.preventDefault e))
           :on-click (fn [e]
                       (on-change (js/Draft.RichUtils.toggleBlockType
                                   editor-state
                                   (get header-cycle
                                        (js/Draft.RichUtils.getCurrentBlockType editor-state)
                                        "header-one")))
                       (.preventDefault e))}
    "H"]
   [:span {:style (cond-> {:border "1px solid black"
                           :padding "0 4px 0 4px"
                           :cursor "pointer"}
                    (current-style "BOLD")
                    (assoc :background-color "orange"))
           :on-mouse-down (fn [e]
                            ;; Don't steal focus from main editor.
                            (.preventDefault e))
           :on-click (fn [e]
                       (on-change
                        (toggle-inline-style editor-state
                                             "BOLD"))
                       (.preventDefault e))}
    [:b "B"]]
   [:span {:style {:border "1px solid black"
                   :padding "0 4px 0 4px"
                   :cursor "pointer"}
           :on-mouse-down (fn [e]
                            ;; Don't steal focus from main editor.
                            (.preventDefault e))
           :on-click (fn [e]
                       #_(on-change (add-entity-to-selection
                                     editor-state
                                     "LINK"
                                     "MUTABLE"
                                     {:url "https://www.google.com"}))
                       (swap! app-state assoc :editing-link? true))}
    "8"]
   [:span {:style {:border "1px solid black"
                   :padding "0 4px 0 4px"
                   :cursor "pointer"}
           :on-mouse-down (fn [e]
                            ;; Don't steal focus from main editor.
                            (.preventDefault e))
           :on-click (fn [e]
                       (on-change (remove-entities-from-selection
                                   editor-state)))}
    "3"]
   [:label
    [:input#aidi {:type "file"
                  :accept "image/png, image/jpeg"
                  :name "nome"
                  :style {:display "none"}
                  :multiple true
                  :on-change (fn [e]
                               (println "change" (pr-str e))
                               (on-change (reduce add-image editor-state (array-seq (.-files (.-target e)))))
                               (.preventDefault e))
                  :on-input (fn [e] (println "input" (pr-str e)))}]
    [:span {:style {:border "1px solid black"
                    :padding "0 4px 0 4px"
                    :cursor "pointer"}}
     "^"]]])

(rum/defcs editor < rum/reactive
  [state]
  (let [{:keys [doc-name
                ^js/Draft.EditorState editor-state
                editing-link?
                link-text]} (rum/react app-state)
        on-change (fn [editor-state]
                    (swap! app-state assoc :editor-state editor-state)
                    (.forceUpdate (:rum/react-component state)))
        raw-contents (js/Draft.convertToRaw (.getCurrentContent editor-state))
        current-style (set (array-seq (.toArray (.getCurrentInlineStyle editor-state))))]
    [:div
     [:div {:style {:margin-bottom "4px"}}
      (if editing-link?
        (link-editor on-change)
        (toolbar editor-state on-change current-style))]
     [:div {:style {:border "1px solid black"}}
      (js/React.createElement
       js/Draft.Editor
       (clj->js {:onChange on-change
                 ;:ref (partial reset! editor-ref-atom)
                 :editorState editor-state
                 :handleKeyCommand (fn [command editor-state]
                                     (if-let [new-state (.handleKeyCommand
                                                         js/Draft.RichUtils
                                                         editor-state
                                                         command)]
                                       (do
                                         (on-change new-state)
                                         "handled")
                                       "not-handled"))
                 :handleDroppedFiles (fn [selection-state files]
                                       (on-change (reduce add-image editor-state (array-seq files)))
                                       "handled")
                 :handlePastedFiles (fn [blobs]
                                      (on-change (reduce add-image editor-state (array-seq blobs)))
                                      "handled")
                 :blockRendererFn (fn [block]
                                    (if (= (.getType block) "atomic")
                                      (clj->js {:component native-image
                                                :editable false})))}))]
     [:div {:style {:padding 12}}
      [:button {:on-click (fn [_] (save-doc doc-name raw-contents))} "Guardar"]]
     #_[:div {:style {:padding 12}}
      [:pre (.stringify js/JSON
                        (.getCurrentInlineStyle @editor-state-atom)
                        nil
                        2)]]
     [:div {:style {:padding 12}}
      [:pre (.stringify js/JSON
                        raw-contents
                        nil
                        2)]]]))



(defn ^:after-load reload []
  (rum/mount (editor) (.getElementById js/document "app")))

(defn ^:export main [doc-name contents]
  (swap! app-state assoc
         :doc-name doc-name
         :editor-state
         (if contents
           (js/Draft.EditorState.createWithContent
            (js/Draft.convertFromRaw contents)
            decorator)
           (js/Draft.EditorState.createEmpty decorator)))
  (reload))
