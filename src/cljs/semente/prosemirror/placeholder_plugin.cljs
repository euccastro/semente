(ns semente.prosemirror.placeholder-plugin
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-state" :refer (Plugin)]))


(defn placeholder-plugin []
  (Plugin.
   #js{"state"
       #js {"init" (fn []
                     (println "initing plugin!")
                     0)
            "apply" (fn [tr state]
                      (println "old state was" (pr-str state))
                      (inc state))}}))
