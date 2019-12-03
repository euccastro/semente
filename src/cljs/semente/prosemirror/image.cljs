(ns semente.prosemirror.image
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     node-type)]))


(defn throbber []
  [:div.lds-ellipsis-container
   [:div.lds-ellipsis
    {:spellCheck false
     :contentEditable false}
    "subindo..."
    [:div] [:div] [:div] [:div]]])

(defn image-parent [src]
  [:div.editor-image
   [:img {:src src
          :title "placeholder!"
          :draggable false
          :style {:z-index -1
                  :display :block
                  :margin :auto}}]
   [throbber]])

(def schema-changes
  {:inline false
   :attrs #js{"src" #js{}
              "db_id" #js{"default" nil}
              "alt" #js{"default" nil}
              "title" #js{"default" nil}}
   :group :block
   :marks ""})

(defn node-view [node & _]
  (let [dom-node (-> (.createElement js/document "div"))]
    (r/render [image-parent (j/get-in node [:attrs :src])]
              dom-node)
    #js{"dom" dom-node
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
