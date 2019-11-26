(ns semente.prosemirror
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   ["prosemirror-commands" :refer (baseKeymap toggleMark)]
   ["prosemirror-example-setup" :refer (exampleSetup)]
   ["prosemirror-history" :refer (undo redo history)]
   ["prosemirror-keymap" :refer (keymap)]
   ["prosemirror-model" :refer (Schema)]
   ["prosemirror-schema-basic" :refer (schema)]
   ["prosemirror-schema-list" :refer (addListNodes)]
   ["prosemirror-state" :refer (EditorState)]
   ["prosemirror-view" :refer (EditorView)]))

(rf/reg-sub
 :editor-state
 (fn [db _]
   (:editor-state db)))

(defn mark-type [^EditorState editor-state mark-name]
  (j/get-in editor-state [:schema :marks mark-name]))

(rf/reg-sub
 :mark-available
 :<- [:editor-state]
 (fn [^EditorState editor-state [_ mark-name]]
   ((toggleMark (mark-type editor-state mark-name))
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

(rf/reg-event-fx
 :toggle-mark
 (fn [{{:keys [editor-state]} :db} [_ mark-name]]
   (let [mt (mark-type editor-state mark-name)
         command (toggleMark mt)]
     {:prosemirror-command [command editor-state]})))

(rf/reg-fx
 :prosemirror-command
 (fn [[command editor-state]]
   (command editor-state #(rf/dispatch [:prosemirror-txn %]))))

(comment

  @xxx
  (def $from (second @xxx))
  (.-marks $from)
  (def editor-state (last @xxx))
  (.rangeHasMark (.-doc es) from to )
  (def editor-state (initial-state))
  (def mark-name :strong)
  (def mt (mark-type editor-state :strong))
  )

(defn initial-schema []
  (let [nodes (addListNodes (j/get-in schema [:spec :nodes])
                            "paragraph+"
                            "block")
        image (j/call nodes :get "image")]
    (Schema.
     (clj->js
      {:nodes (-> nodes
               (j/call :remove "code_block")
               (j/call :remove "horizontal_rule")
               (j/call :update "image" (-> image
                                           (js->clj :keywordize-keys true)
                                           (assoc :inline false)
                                           (assoc :group :block)
                                           (assoc :marks "")
                                           clj->js)))
       :marks (-> (.-marks (.-spec schema))
                  (.remove "code"))}))))

(defn initial-state []
  (.create
   EditorState
   (let [is (initial-schema)]
     #js {"schema" is
          "plugins" (exampleSetup #js{"schema" is
                                      "menuBar" false})})))

(defonce editor-view (atom nil))

(defn dispatch-prosemirror-transaction [txn]
  (let [^EditorView ev @editor-view]
    (when ev
      (let [^EditorState new-state
            (j/call-in ev [:state :apply] txn)]
        (j/call ev :updateState new-state)
        (rf/dispatch [:editor-state-changed new-state])))))

(rf/reg-event-fx
 :prosemirror-txn
 (fn [_ [_ txn]]
   {:prosemirror-txn txn}))

(rf/reg-fx
 :prosemirror-txn
 dispatch-prosemirror-transaction)

(defn editor [initial-editor-state]
  (println "renderizando editor")
  (r/create-class
   {:display-name "prosemirror-editor"
    :should-component-update (constantly false)
    :component-will-unmount
    (fn [_]
      (println "unmounting!")
      (when-let [^EditorView ev @editor-view]
        (.destroy ev)
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
                "dispatchTransaction" dispatch-prosemirror-transaction})))}])}))

(defn mark-menu-item [mark-id icon-name]
  (let [available @(rf/subscribe [:mark-available mark-id])
        active @(rf/subscribe [:mark-active mark-id])]
    [:i
     {:class ["material-icons-round"
              (cond active "active"
                    available "available"
                    :else "unavailable")]
      :on-mouse-down
      (fn [e]
        (j/call e :preventDefault)
        (j/call e :stopPropagation)
        (rf/dispatch [:toggle-mark mark-id]))}
     icon-name]))

(defn menubar [editor-state]
  [:div
   [mark-menu-item :strong "format_bold"]
   [mark-menu-item :em "format_italic"]])

(defn editor-container []
  (let [es @(rf/subscribe [:editor-state])]
    [:div
     [menubar es]
     [editor es]]))
