(ns semente.prosemirror.image
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     node-type)]))

(def schema-changes
  {:inline false
   :attrs #js{"src" #js{}
              "db_id" #js{"default" nil}
              "desc" #js{"default" "muda-me!"}}
   :group :block
   :marks ""})

(defn throbber []
  [:div.lds-ellipsis-container
   [:div.lds-ellipsis
    {:spellCheck false
     :contentEditable false}
    "subindo..."
    [:div] [:div] [:div] [:div]]])

(defn image-parent [node-atom]
  (let [{:keys [src db_id desc]}
        (j/lookup (j/get @node-atom :attrs))]
    [:div.editor-image
     [:img {:src src
            :alt desc
            :title desc
            :draggable false
            :style {:z-index -1
                    :display :block
                    :margin :auto}}]
     (when-not db_id
       [throbber])]))

(defn node-view [node & _]
  (let [dom-node (-> (.createElement js/document "div"))
        ratom (r/atom node)]
    (r/render [image-parent ratom]
              dom-node)
    #js{"dom" dom-node
        "update" #(swap! ratom %)
        "ignoreMutation" (constantly true)}))

(defn handle-files [files]
  (loop [tr (j/get-in @editor-view [:state :tr])
         i 0]
    (if (= i (j/get files :length))
      (j/call @editor-view :dispatch tr)
      (let [f (aget files i)
            insert-pos (j/call-in tr [:selection :$from :after] 1)
            url (j/call js/URL :createObjectURL f)
            ;; XXX clear empty paragraph
            ;; XXX move cursor past insert-pos?
            tr (j/call tr :insert
                       insert-pos
                       (j/call
                        (node-type (current-editor-state)
                                   :image)
                        :create
                        #js{"src" url}))]
        (recur tr (inc i))))))

(rf/reg-fx
 :handle-files
 handle-files)
