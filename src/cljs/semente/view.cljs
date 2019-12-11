(ns semente.view
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.view :refer (editor-container)]))

(defn root-component []
  [:div
   [:form
    [:div
     [:label {:for "data"} "data"]
     [:input.data {:type "date"
                   :name "data"
                   :default-value (-> (js/Date.)
                                      .toISOString
                                      (.substring 0 10))}]]
    [:div
     [:label {:for "autora"} "autor/a"]
     [:input.autora {:type "text"
                     :name "autor/a"
                     :default-value (j/get js/window :autora)}]]
    [editor-container]]])
