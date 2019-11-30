(ns semente.prosemirror.view
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-model" :refer (Fragment Node Slice)]
   ["prosemirror-view" :refer (EditorView)]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (dispatch-prosemirror-transaction)]))

(defn- heading? [^Node n]
  (= (j/get-in n [:type :name]) "heading"))

(declare replace-fragment-headings)

(defn- replace-node-headings [^Node n]
  (if (and (heading? n)
           (not= (j/get-in n [:attrs :level]) 2))
    (j/call-in n [:type :createChecked] #js{"level" 2} (j/get n :content) (j/get n :marks))
    (j/call n :copy (replace-fragment-headings (j/get n :content)))))

(defn- replace-fragment-headings [^Fragment f]
  (j/call Fragment
          :fromArray
          (clj->js
           (vec
            (map #(replace-node-headings (j/call f :child %))
                 (range 0 (j/get f :childCount)))))))

(defn- replace-headings
  "Convirte todos os headings a h2"
  [^Slice slice]
  (Slice. (replace-fragment-headings (j/get slice :content))
          (j/get slice :openStart)
          (j/get slice :openEnd)))

(defn- editor [_]
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
                "dispatchTransaction" dispatch-prosemirror-transaction
                "transformPasted" replace-headings})))
        :on-focus #(rf/dispatch [:clear-dialog])}])}))

(defn- menu-item [{:keys [active available icon-name event]}]
  [:i
   (cond->
       {:class ["material-icons-round"
                (cond active "active"
                      available "available"
                      :else "unavailable")]
        :on-mouse-down
        (fn [e]
          (j/call e :preventDefault)
          (j/call e :stopPropagation)
          (when (and available event)
            (rf/dispatch event)))})
   icon-name])

(defn- mark-menu-item [mark-id icon-name]
  (let [available @(rf/subscribe [:mark-available mark-id])
        active @(rf/subscribe [:mark-active mark-id])]
    [menu-item {:active active
                :available available
                :icon-name icon-name
                :event [:toggle-mark mark-id]}]))

(defn- link-menu-item []
  (let [available (not @(rf/subscribe [:selection-empty]))
        active @(rf/subscribe [:mark-active :link])]
    [menu-item
     {:active active
      :available available
      :icon-name "link"
      :event (if active
               [:toggle-mark :link]
               [:set-dialog {:fields [{:id "href" :caption "URL"}
                                      {:id "title" :caption "Título"}]
                             :event [:toggle-mark :link]}])}]))

(defn- block-type-menu-item [command-args icon-name event-key]
  [menu-item {:active @(rf/subscribe (into [:selected-block-type]
                                           command-args))
              :available true
              :icon-name icon-name
              :event (into [event-key]
                           command-args)}])

(defn- change-block-type-menu-item [command-args icon-name]
  [block-type-menu-item command-args icon-name :set-block-type])

(defn- wrap-menu-item [command-args icon-name]
  [block-type-menu-item command-args icon-name :wrap-in])

(defn- image-menu-item []
  [:label {:for "file-input"}
   [menu-item {:active false
               :available true
               :icon-name "image"
               :event nil}]])

(defn menubar []
  [:div
   [mark-menu-item :strong "format_bold"]
   [mark-menu-item :em "format_italic"]
   [link-menu-item]
   [change-block-type-menu-item [:paragraph] "notes"]
   [change-block-type-menu-item [:heading {:level 2}] "title"]
   [wrap-menu-item [:blockquote] "format_quote"]
   [block-type-menu-item [:bullet_list] "format_list_bulleted" :wrap-in-list]
   [block-type-menu-item [:ordered_list] "format_list_numbered" :wrap-in-list]
   [image-menu-item]])

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
     [:input#file-input {:type "file"
                         :accept "image/*"
                         :style {:display :none}
                         :on-change #(rf/dispatch [:files-selected])}]
     (if dialog-spec
       [dialog dialog-spec]
       [menubar])
     [editor es]]))
