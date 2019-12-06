(ns semente.prosemirror.image.effect
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     node-type
                                     node-type?)]))

(defn handle-files [files]
  (loop [tr (j/get-in @editor-view [:state :tr])
         i (dec (j/get files :length))]
    (if (= i -1)
      (j/call @editor-view :dispatch tr)
      (let [f (aget files i)
            insert-pos (j/call-in tr [:selection :$from :after] 1)
            url (j/call js/URL :createObjectURL f)
            tr (j/call tr :insert
                       insert-pos
                       (j/call
                        (node-type (current-editor-state)
                                   :image)
                        :create
                        #js{"src" url
                            "file" f}))]
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
                               (j/select-keys [:src :db_id :desc :file])
                               js->clj
                               f
                               clj->js)))))
    (j/call ev :dispatch tr)))


(rf/reg-fx
 :handle-files
 handle-files)

(rf/reg-fx
 :assoc-image-attrs
 (fn [[src k v]]
   (update-image-attrs src #(assoc % k v))))
