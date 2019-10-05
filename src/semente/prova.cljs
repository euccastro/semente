(ns semente.prova
  (:require [reagent.core :as r]
            ["react" :as react :default React]
            ["draft-js" :as draft-js]
            ["draft-js-plugins-editor" :default Editor]
            ["draft-js-inline-toolbar-plugin" :default createInlineToolbarPlugin]
            ["draft-js-buttons" :as draft-buttons]))


(def inline-toolbar-plugin
  (createInlineToolbarPlugin))

(def InlineToolbar
  (.-InlineToolbar inline-toolbar-plugin))

(def es (r/atom (draft-js/EditorState.createEmpty)))

(def plugins #js [inline-toolbar-plugin])

(defn toolbar [buttons]
  (let [this (r/current-component)]
    [:> InlineToolbar
     (fn [props]
       [(apply r/create-element
               "div"
               #js {}
               (for [b buttons]
                 (r/create-element b props)))])]))

(defn some-component []
  [:div
   [:div
    [:h3 "I am a component!"]
    [:p.someclass
     "I have " [:strong "bold"]
     [:span {:style {:color "red"}} " and red"]
     " text."]]
   [:div.editor
    [:> Editor
     {:editorState @es
      :onChange (fn [state]
                  (println "changing to" state)
                  (reset! es state))
      :plugins plugins}]
    [toolbar [draft-buttons/ItalicButton
              draft-buttons/HeadlineOneButton]]]])

(defn mountit []
  (r/render [some-component]
            (.getElementById js/document "root")))

(defn init []
  (mountit))
