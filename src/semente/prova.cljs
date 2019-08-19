(ns semente.prova
  (:require [reagent.core :as r]
            ["react" :as react :default React]
            ["draft-js" :as draft-js]
            ["draft-js-plugins-editor" :default Editor]
            ["draft-js-hashtag-plugin" :default createHashtagPlugin]
            ["draft-js-linkify-plugin" :default createLinkifyPlugin]))


(def htp (createHashtagPlugin))
(def lp (createLinkifyPlugin))

(def es (r/atom (draft-js/EditorState.createEmpty)))

(def plugins #js [lp htp])

(defn some-component []
  [:div
   [:div
    [:h3 "I am a component!"]
    [:p.someclass
     "I have " [:strong "bold"]
     [:span {:style {:color "red"}} " and red"]
     " text."]]
   [:> Editor
    {:editorState @es
     :onChange #(reset! es %)
     :plugins plugins}]])

(defn mountit []
  (r/render [some-component]
            (.getElementById js/document "root")))

(defn init []
  (mountit)
  (println "Prova superaderrima!" htp lp))
