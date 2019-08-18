(ns semente.prova
  (:require [reagent.core :as r]
            ["react" :as react :default React]
            ["draft-js" :as draft-js]
            ["draft-js-plugins-editor" :default Editor]
            ["draft-js-hashtag-plugin" :default createHashtagPlugin]
            ["draft-js-linkify-plugin" :default createLinkifyPlugin]))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])

(def htp (createHashtagPlugin))
(def lp (createLinkifyPlugin))

(def es (draft-js/EditorState.createEmpty))

(def plugins #js [lp htp])

(defn on-change [_]
  nil)

(def editor (Editor. #js {"editorState" es
                          "onChange" on-change
                          "plugins" plugins}))

(println "e isto entauXm?" editor)

(defn mountit []
  (r/render [some-component]
            (.getElementById js/document "root")))

(defn init []
  (mountit)
  (println "Prova superaderrima!" htp lp))
