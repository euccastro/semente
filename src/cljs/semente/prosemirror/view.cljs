(ns semente.prosemirror.view
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-history" :refer (undo redo history)]
   ["prosemirror-view" :refer (EditorView)]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (dispatch-prosemirror-transaction)]))

(defn editor [_]
  (println "renderizando editor")
  (r/create-class
   {:display-name "prosemirror-editor"
    :should-component-update (constantly false)
    :component-will-unmount
    (fn [_]
      (println "unmounting!")
      (when-let [^EditorView ev @editor-view]
        (j/call ev :destroy)
        (reset! editor-view nil)))
    :reagent-render
    (fn [initial-editor-state]
      [:div
       {:ref
        (fn [dom-el]
          (reset!
           editor-view
           (EditorView.
            dom-el
            #js{"state" initial-editor-state
                "dispatchTransaction" dispatch-prosemirror-transaction})))
        :on-focus #(rf/dispatch [:clear-dialog])}])}))

(defn menu-item [active available icon-name event]
  [:i
   {:class ["material-icons-round"
            (cond active "active"
                  available "available"
                  :else "unavailable")]
    :on-mouse-down
    (fn [e]
      (j/call e :preventDefault)
      (j/call e :stopPropagation)
      (rf/dispatch event))}
   icon-name])

(defn mark-menu-item [mark-id icon-name]
  (let [available @(rf/subscribe [:mark-available mark-id])
        active @(rf/subscribe [:mark-active mark-id])]
    [menu-item active available icon-name [:toggle-mark mark-id]]))

(defn link-menu-item []
  (let [available (not @(rf/subscribe [:selection-empty]))
        active @(rf/subscribe [:mark-active :link])]
    [menu-item
     active
     available
     "link"
     (if active
       [:toggle-mark :link]
       [:set-dialog {:fields [{:id "href" :caption "URL"}
                              {:id "title" :caption "Título"}]
                     :event [:toggle-mark :link]}])]))

(defn menubar []
  [:div
   [mark-menu-item :strong "format_bold"]
   [mark-menu-item :em "format_italic"]
   [link-menu-item]])

(defn dialog [_]
  (let [values (r/atom {})
        focused (atom false)]
    (fn [{:keys [fields event]}]
      [:div
       (doall
        (for [[i {:keys [id caption]}] (map-indexed vector fields)]
          [:span {:key id}
           [:label {:for id} caption]
           [:input (cond-> {:id id
                              :name id
                              :value (get @values id "")
                              :on-change #(swap! values assoc id (j/get-in % [:target :value]))
                              :type "text"}
                     ;; dar foco, só umha vez, ao primeiro input
                     (= i 0) (assoc :ref (fn [el]
                                           (swap! focused (fn [old]
                                                            (when-not old
                                                              (j/call el :focus))
                                                            true)))))]]))
       [:button {:type :button
                 :on-click (fn []
                             ;; XXX: validaçom
                             (rf/dispatch (conj event @values))
                             (rf/dispatch [:focus-editor]))}
        "Aplicar"]
       [:button {:type :button :on-click #(rf/dispatch [:clear-dialog])}
        "Cancelar"]])))

(defn editor-container []
  (let [es @(rf/subscribe [:editor-state])
        dialog-spec @(rf/subscribe [:dialog])]
    [:div
     (if dialog-spec
       [dialog dialog-spec]
       [menubar])
     [editor es]]))
