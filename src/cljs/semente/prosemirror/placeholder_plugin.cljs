(ns semente.prosemirror.placeholder-plugin
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-state" :refer (Plugin Transaction)]
   ["prosemirror-view" :refer (Decoration DecorationSet)]
   [re-frame.core :as rf]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [reagent.core :as r]))

(defn- find-placeholder [decos id]
  (j/call decos :find
          nil
          nil
          #(= (j/get % :id)
              id)))

(declare placeholder-plugin)

(defn- editor-state->decos [^EditorState state]
  (j/call placeholder-plugin :getState state))

(defn- remove-deco [decos id]
  (j/call decos :remove
          (find-placeholder decos id)))

(defn spinner []
  [:div.lds-ellipsis-container
   [:div.lds-ellipsis
    {:spellCheck false
     :contentEditable false}
    "subindo..."
    [:div] [:div] [:div] [:div]]])

(defn placeholder-comp [src]
  [:div
   [:img {:src src
          :title "placeholder!"
          :draggable false
          :style {:z-index -1
                  :display :block
                  :margin :auto}}]
   [spinner]])

(def placeholder-plugin
  (Plugin.
   #js{"state"
       #js {"init" (fn []
                     (j/get DecorationSet :empty))
            "apply" (fn [^Transaction tr
                         ^DecorationSet s]
                      (let [action (j/call tr :getMeta placeholder-plugin)]
                        (cond-> (j/call s :map (j/get tr :mapping) (j/get tr :doc))
                          (and action (j/get action :add))
                          (j/call :add
                                  (j/get tr :doc)
                                  #js[(j/call Decoration :widget
                                              (j/get-in action [:add :pos])
                                              (let [ph (j/call js/document :createElement "placeholder")]
                                                (r/render [placeholder-comp (j/get-in action [:add :src])] ph)
                                                ph)
                                              #js{"id" (j/get-in action [:add :id])})])
                          (and action (j/get action :remove))
                          (remove-deco (j/get-in action [:remove :id])))))}
       "props" #js{"decorations" editor-state->decos}}))


(defn find-placeholder-pos [^EditorState state id]
  (let [found (-> state editor-state->decos (find-placeholder id))]
    (when (> (j/get found :length) 0)
      (j/get-in found [0 :from]))))

(defn find-image-insert-point [tr]
  (j/get-in tr [:selection :from]))

(defn handle-files [files]
  (loop [tr (j/get-in @editor-view [:state :tr])
         i 0]
    (if (= i (j/get files :length))
      (j/call @editor-view :dispatch tr)
      (let [f (aget files i)
            id (j/obj)
            tr (j/call tr :setMeta placeholder-plugin
                       #js{"add" #js{"id" id
                                     "src" (j/call js/URL :createObjectURL f)
                                     "pos" (j/call-in tr [:selection :$from :after] 1)}})]
        (recur tr (inc i))))))

(rf/reg-fx
 :handle-files
 handle-files)
