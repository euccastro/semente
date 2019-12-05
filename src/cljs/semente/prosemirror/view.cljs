(ns semente.prosemirror.view
  (:require
   [applied-science.js-interop :as j]
   [clojure.string :as str]
   ["prosemirror-model" :refer (Fragment Node Slice)]
   ["prosemirror-view" :refer (EditorView)]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.image :as image]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (dispatch-prosemirror-transaction
                                     node-type?)]))


(defn- heading? [^Node n]
  (= (j/get-in n [:type :name]) "heading"))

(declare replace-fragment-headings)

(defn- replace-node-headings [^Node n]
  (if (and (heading? n)
           (not= (j/get-in n [:attrs :level]) 2))
    (j/call-in n [:type :createChecked] #js{"level" 2} (j/get n :content) (j/get n :marks))
    (j/call n :copy (replace-fragment-headings (j/get n :content)))))

(defn fragment-children [^Fragment fragment]
  (map (partial j/call fragment :child)
       (range 0 (j/get fragment :childCount))))

(defn map-fragment [f ^Fragment fragment]
  (j/call Fragment
          :fromArray
          (clj->js
           (vec (map f (fragment-children fragment))))))

(defn- replace-fragment-headings [^Fragment f]
  (map-fragment replace-node-headings f))

(defn- replace-headings
  "Convirte todos os headings a h2"
  [^Slice slice]
  (Slice. (replace-fragment-headings (j/get slice :content))
          (j/get slice :openStart)
          (j/get slice :openEnd)))

(comment

  (j/get-in img [:attrs :src])

  (j/get-in dom-event* [:clipboardData :items :length])
  (.-length (:types dom-event*))
  )

(defn register-images
  [slice]
  (doseq [node (-> slice (j/get :content) fragment-children)
          :let [src (j/get-in node [:attrs :src])]
          :when (and (node-type? node "image")
                     (empty? (j/get-in node [:attrs :db_id]))
                     (or (str/starts-with? src "http://")
                         (str/starts-with? src "https://")))]
    (println "registering image")
    (rf/dispatch [:register-img-url {:url src}])))

(defn- transform-pasted
  [^Slice slice]
  (register-images slice)
  (replace-headings slice))

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
            #js{"dispatchTransaction" dispatch-prosemirror-transaction
                "nodeViews" #js{"image" image/node-view}
                "state" initial-editor-state
                "transformPasted" transform-pasted})))
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

(defn image-desc-input [{:keys [src desc] :as wat}]
  [:div
   [:label {:for "image-desc-input"} "descriçom"]
   [:input {:type "text"
            :id "image-desc-input"
            :value desc
            :on-change #(rf/dispatch
                         [:img-desc-change
                          {:src src
                           :desc (j/get-in % [:target :value])}])}]])

(defn editor-container []
  (let [es @(rf/subscribe [:editor-state])
        dialog-spec @(rf/subscribe [:dialog])
        selected-image @(rf/subscribe [:selected-image])]
    [:div
     [:input#file-input {:type "file"
                         :accept "image/*"
                         :multiple true
                         :style {:display :none}
                         :on-change (fn [e]
                                      (let [files (j/get-in e [:target :files])]
                                        (when (> (j/get files :length) 0)
                                          (rf/dispatch [:files-selected files]))))}]
     (cond
       selected-image [image-desc-input selected-image]
       dialog-spec [dialog dialog-spec]
       :else [menubar])
     [editor es]]))
