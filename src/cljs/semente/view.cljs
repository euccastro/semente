(ns semente.view
  (:require
   [applied-science.js-interop :as j]
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.prosemirror.view :refer (editor-container)]))

(defn- input [{:keys [id caption tag] :as attrs}]
  [:div
   [:label {:for id} (or caption id)]
   [:div [(or tag :input) (-> attrs (dissoc :tag) (assoc :name id))]]])

(defn root-component []
  [:div
   [:form
    (input {:type "text" :id "titulo" :caption "título"})
    (input {:type "text" :id "autora" :caption "autor/a" :default-value (j/get js/window :autora)})
    (input {:type "date" :id "data"
            :default-value (-> (js/Date.) .toISOString (.substring 0 10))})
    (input {:type "file" :id "imagem-principal" :caption "imagem principal" :accept "image/*"})
    (input {:tag :textarea :id "resumo" :cols 60 :rows 3})
    [:label "corpo"]
    [editor-container]]])
