(ns semente.prosemirror.image
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.shared-state :refer (editor-view)]
   [semente.prosemirror.util :refer (current-editor-state
                                     node-type)]))


;; (defn spinner []
;;   [:div.lds-ellipsis-container
;;    [:div.lds-ellipsis
;;     {:spellCheck false
;;      :contentEditable false}
;;     "subindo..."
;;     [:div] [:div] [:div] [:div]]])

;; (defn placeholder-comp [src]
;;   [:div
;;    [:img {:src src
;;           :title "placeholder!"
;;           :draggable false
;;           :style {:z-index -1
;;                   :display :block
;;                   :margin :auto}}]
;;    [spinner]])

;; // :: NodeSpec An inline image (`<img>`) node. Supports `src`,
;; // `alt`, and `href` attributes. The latter two default to the empty
;; // string.
;; image: {
;;         inline: true,
;;         attrs: {
;;                 src: {},
;;                 alt: {default: null},
;;                 title: {default: null}
;;                 },
;;         group: "inline",
;;         draggable: true,
;;         parseDOM: [{tag: "img[src]", getAttrs(dom) {
;;                                                     return {
;;                                                             src: dom.getAttribute("src"),
;;                                                             title: dom.getAttribute("title"),
;;                                                             alt: dom.getAttribute("alt")
;;                                                             }
;;                                                     }}],
;;         toDOM(node) { let {src, alt, title} = node.attrs; return ["img", {src, alt, title}] }
;;                      },

(def schema-changes
  {:inline false
   :attrs #js{"src" #js{}
              "db_id" #js{"default" nil}
              "alt" #js{"default" nil}
              "title" #js{"default" nil}}
   :group :block
   :marks ""})

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
