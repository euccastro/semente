(ns semente.prosemirror.image
  (:require
   [ajax.core :refer (raw-response-format)]
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     node-type
                                     node-type?)]))

;; Valor especial de attrs -> db_id para marcar umha imagem que nom conseguimos
;; subir.
(def failed-db-id "<failed>")

(def image-node-spec
  (clj->js
   {:inline false
    :attrs #js{"src" #js{}
               "db_id" #js{"default" nil}
               "desc" #js{"default" nil}}
    :group :block
    :marks ""
    :draggable true
    :parseDOM
    #js[#js{"tag" "img[src]"
            "getAttrs"
            (fn [dom-el]
              #js{"src" (j/call dom-el :getAttribute "src")
                  "desc" (let [alt (j/call dom-el :getAttribute "alt")]
                           (if (seq alt)
                             alt
                             (j/call dom-el :getAttribute "title")))
                  "db_id" (j/call dom-el :getAttribute "data-db_id")})}]
    :toDOM
    (fn [node]
      (let [{:keys [src desc db_id]} (j/lookup (j/get node :attrs))]
        #js["img" #js{"src" src
                      "alt" desc
                      "title" desc
                      "data-db_id" db_id}]))}))

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
        "update" (fn [node]
                   (if (node-type? node "image")
                     (do (reset! ratom node)
                         true)
                     false))
        "ignoreMutation" (constantly true)}))

(defn handle-files [files]
  (loop [tr (j/get-in @editor-view [:state :tr])
         i (dec (j/get files :length))]
    (if (= i -1)
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
        (rf/dispatch [:upload-img {:url url :file f}])
        (recur tr (dec i))))))


(defn- update-image-attrs [url f]
  (let [ev @editor-view
        tr (j/get-in ev [:state :tr])]
    (j/call-in ev [:state :doc :forEach]
               (fn [node offset _] ()
                 (when (and (node-type? node "image")
                            (= (j/get-in node [:attrs :src])
                               url))
                   (j/call tr :setNodeMarkup
                           offset
                           nil
                           (-> (j/get node :attrs)
                               (j/select-keys [:src :db_id :desc])
                               js->clj
                               f
                               clj->js)))))
    (j/call ev :dispatch tr)))

(rf/reg-event-fx
 :files-selected
 (fn [_ [_ files]]
   {:handle-files files}))

(rf/reg-fx
 :handle-files
 handle-files)

(rf/reg-fx
 :assoc-image-attrs
 (fn [[src k v]]
   (update-image-attrs src #(assoc % k v))))

(rf/reg-event-fx
 :img-desc-change
 (fn [_ [_ {:keys [src desc]}]]
   {:assoc-image-attrs [src :desc desc]}))

(rf/reg-event-fx
 :img-upload-failed
 (fn [_ [_ url]]
   {:assoc-image-attrs [url :db_id failed-db-id]}))

(rf/reg-event-fx
 :img-uploaded
 (fn [_ [_ url db-id]]
   (println "IMAGE UPLOADED" db-id)
   {:assoc-image-attrs [url :db_id db-id]}))

(rf/reg-event-fx
 :upload-img
 (fn [_ [_ {:keys [file url tries-left]
            :or {tries-left 3}
            :as args}]]
   {:http-xhrio {:method :post
                 :uri "/save-image"
                 :body (doto (js/FormData.)
                         (.append "file" file url))
                 :timeout 30000
                 :response-format (raw-response-format)
                 :on-success [:img-uploaded url]
                 :on-failure (if (= tries-left 0)
                               [:img-upload-failed url]
                               [:upload-img
                                (update args :tries-left dec)])}}))
