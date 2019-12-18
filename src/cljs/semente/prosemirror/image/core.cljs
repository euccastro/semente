(ns semente.prosemirror.image.core
  (:require
   [applied-science.js-interop :as j]))

(def image-node-spec
  (clj->js
   {:inline false
    :attrs #js{"src" #js{}
               "db_id" #js{"default" nil}
               "desc" #js{"default" nil}
               "file" #js{"default" nil}}
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
                  "db_id" (j/call dom-el :getAttribute "data-db_id")
                  "file" (j/call dom-el :getAttribute "data-file")})}]
    :toDOM
    (fn [node]
      (let [{:keys [src desc db_id file]} (j/lookup (j/get node :attrs))]
        #js["img" #js{"src" src
                      "alt" desc
                      "title" desc
                      "data-db_id" db_id
                      "data-file" file}]))}))
