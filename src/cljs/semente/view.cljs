(ns semente.view
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.view :refer (editor-container)]))

(defn root-component []
  [:div
   [:div
    [:label {:for "data"} "data"]
    [:input.data {:type "date"
                  :name "data"
                  :default-value (-> (js/Date.)
                                     .toISOString
                                     (.substring 0 10))}]]
   [editor-container]])
