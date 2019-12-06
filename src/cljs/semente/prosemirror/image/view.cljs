(ns semente.prosemirror.image.view
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.image.const :refer (failed-db-id)]
   [semente.prosemirror.shared-state :refer (editor-view
                                             orphan-components)]
   [semente.prosemirror.util :refer (node-type?)]))

(defn failed [src file]
  [:div.image-failed-parent
   {:on-click
    #(rf/dispatch (if file
                    [:upload-img {:url src :file file}]
                    [:register-img-url {:url src}]))}
   [:div.image-failed-container
    [:div.caption "problema subindo imagem" [:br] "clica aqui para tentar de novo"]
    [:div.icon [:i.material-icons-round "sync_problem"]]]])

(defn throbber []
  [:div.lds-ellipsis-container
   [:div.lds-ellipsis
    {:spellCheck false
     :contentEditable false}
    "subindo..."
    [:div] [:div] [:div] [:div]]])

(defn image-parent [node-atom]
  (let [{:keys [src db_id desc file]}
        (j/lookup (j/get @node-atom :attrs))]
    [:div.editor-image
     [:img {:src src
            :alt desc
            :title desc
            :draggable false
            :style {:z-index -1
                    :display :block
                    :margin :auto}}]
     (cond
       (not db_id) [throbber]
       (= db_id failed-db-id) [failed src file])]))

(defn node-view [node & _]
  (let [dom-node (-> (.createElement js/document "div"))
        ratom (r/atom node)]
    (r/render [image-parent ratom]
              dom-node)
    (swap! orphan-components
           assoc
           dom-node
           [image-parent ratom])
    #js{"dom" dom-node
        "update" (fn [node]
                   (if (node-type? node "image")
                     (do (reset! ratom node)
                         true)
                     false))
        "destroy" #(swap! orphan-components dissoc dom-node)
        "ignoreMutation" (constantly true)}))

(comment

  ;; selecciona umha imagem e corre isto para aceder a ela programaticamente
  (def img (j/get-in @editor-view [:state :selection :node]))
  (let [{:keys [db_id src desc file]} (j/lookup (j/get img :attrs))]
    (def db_id db_id)
    (def src src)
    (def desc desc)
    (def file file))
  (rf/dispatch [:img-upload-failed src])

  )
