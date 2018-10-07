(ns ^:figwheel-hooks semente.webmain
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [semente.style :as style])
  (:require cljsjs.draft-js
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.dom :as gdom]
            [goog.object :as gobj]
            [rum.core :as rum]
            [semente.style :as style]))


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
                                (= "LINK"))))
                     (fn [start end]
                       (callback start end))))


(defn link-component [props]
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


(defn add-input [form attrs]
  (gdom/appendChild form
                    (gdom/createDom
                     gdom/TagName.INPUT
                     (clj->js attrs))))


(defn populate-form [form contents]
  (let [blob-uris (for [m (array-seq (js/Object.values (gobj/get contents "entityMap")))
                        :when (= (gobj/get m "type") "IMAGE")]
                    (dget m "data" "url"))
        u->b @url->blob]
    (add-input form {:type "hidden"
                     :name "contents"
                     :value (.stringify js/JSON contents)})
    (doseq [uri blob-uris
            :let [blob (u->b uri)]
            :when blob]
      (add-input form {:type "hidden"
                       :name uri
                       :value blob}))))


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
  (let [^js/Draft.ContentBlock block (gobj/get props "block")
        ^js/Draft.ContentState content-state (gobj/get props "contentState")
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


(rum/defc button-group [& children]
  (into
   [:span {:style {:padding-right "16px"}}]
   children))


(rum/defc toolbar-button [icon tooltip & [on-click highlight?]]
  [:i.material-icons.draft-icon
   (cond->
       {:key icon
        :on-mouse-down (fn [e]
                         ;; Don't steal focus from main editor.
                         (.preventDefault e))}
     highlight?
     (assoc :class "applied")
     on-click
     (assoc
      :on-click (fn [e]
                  (on-click e)
                  (.preventDefault e))))
   icon
   [:span.tooltip tooltip]])


(def header-cycle
  {"unstyled" "header-one"
   "header-one" "header-two"
   "header-two" "header-three"
   "header-three" "unstyled"})


(rum/defc toolbar [editor-state on-change current-style]
  [:div
   (button-group
    (toolbar-button "line_weight"
                    "Cabeçalho"
                    #(on-change
                      (js/Draft.RichUtils.toggleBlockType
                       editor-state
                       (get header-cycle
                            (js/Draft.RichUtils.getCurrentBlockType editor-state)
                            "header-one"))))
    (toolbar-button "format_list_bulleted"
                    "Lista"
                    #(on-change (js/Draft.RichUtils.toggleBlockType
                                 editor-state
                                 "unordered-list-item"))
                    (=  (js/Draft.RichUtils.getCurrentBlockType editor-state)
                        "unordered-list-item"))
    (toolbar-button "format_quote"
                    "Cita"
                    #(on-change (js/Draft.RichUtils.toggleBlockType
                                 editor-state
                                 "blockquote"))
                    (=  (js/Draft.RichUtils.getCurrentBlockType editor-state) "blockquote"))
    (toolbar-button "format_bold"
                    "Negrita (Ctrl+B)"
                    #(on-change
                      (toggle-inline-style editor-state
                                           "BOLD"))
                    (current-style "BOLD")))

   (button-group
    (toolbar-button "link"
                    "Ligaçom"
                    #(swap! app-state assoc :editing-link? true))
    (toolbar-button "link_off"
                    "Desligar"
                    #(on-change (remove-entities-from-selection
                                 editor-state)))
    [:label
     {:key "insert_photo"}
     [:input
      {:type "file"
       :accept "image/png, image/jpeg"
       :name "nome"
       :style {:display "none"}
       :multiple true
       :on-change (fn [e]
                    (println "change" (pr-str e))
                    (on-change (reduce add-image editor-state (array-seq (.-files (.-target e)))))
                    (set! (.-value (.-target e)) nil)
                    (.preventDefault e))
       :on-input (fn [e] (println "input" (pr-str e)))}]
     (toolbar-button "insert_photo" "Imagem")])

   (button-group
    (toolbar-button "undo"
                    "Desfazer (Ctrl+Z)"
                    #(on-change (js/Draft.EditorState.undo editor-state)))
    (toolbar-button "redo"
                    "Refazer (Maiúsc+Ctrl+Z)"
                    #(on-change (js/Draft.EditorState.redo editor-state))))])


(rum/defcs editor < rum/reactive
  [state]
  (let [{:keys [callback-url
                ^js/Draft.EditorState editor-state
                editing-link?
                link-text]} (rum/react app-state)
        on-change (fn [editor-state]
                    (swap! app-state assoc :editor-state editor-state)
                    (.forceUpdate (:rum/react-component state)))
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
                 :blockRendererFn (fn [^js/Draft.ContentBlock block]
                                    (if (= (.getType block) "atomic")
                                      (clj->js {:component native-image
                                                :editable false})))}))]
     [:div {:style {:padding 12}}
      [:form
       {:method "post"
        :action callback-url
        :enc-type "multipart/form-data"
        :on-submit (fn [e]
                     (populate-form
                      (.-target e)
                      (js/Draft.convertToRaw (.getCurrentContent editor-state))))}
       [:input {:type "hidden" :name "prova-hidden" :value "This would be the payload."}]
       [:input {:type "submit" :name "Guardar"}]]]]))



(defn ^:after-load reload []
  (rum/mount (editor) (.getElementById js/document "app")))


(defn ^:export main [callback-url contents]
  (swap! app-state assoc
         :callback-url callback-url
         :editor-state
         (if contents
           (js/Draft.EditorState.createWithContent
            (js/Draft.convertFromRaw contents)
            decorator)
           (js/Draft.EditorState.createEmpty decorator)))
  (reload))
