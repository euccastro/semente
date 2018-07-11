(ns semente.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go)])
  (:require [cljs.core.async :as async :refer (<! close!)]
            [cljsjs.quill]
            [clojure.string :as str]
            [semente.sente :as sente]
            [semente.nacional :as nacional]
            [rum.core :as rum]
            [taoensso.sente :refer (cb-success?)]))

(enable-console-print!)

(rum/defc hello [x]
  [:span (str "hello " x)])

(defn ^:export main []
  (println "Hello!")
  (sente/start-once!)
  (rum/mount (hello "me")
             (js/document.getElementById "app_container")))

(defn ^:export devmain []
  (enable-console-print!)
  (println "Hello from devmain!")
  (go
    (enable-console-print!)
    (println "start-router returned" (sente/start-router!))
    (println "fetch returned" (<! sente/init-chan))
    (close! sente/init-chan)
    (sente/send!
     [:semente/quem-somos nil]
     30000
     (fn [ret]
       (if-not (cb-success? ret)
         (rum/mount (hello (pr-str ret))
                    (js/document.getElementById "app_container"))
         (rum/mount (nacional/quem-somos (:body ret))
                    (js/document.getElementById "app_container")))))))

(def quill-config
  {"theme" "snow"
   "modules"
   {"toolbar"
    [["bold" "italic" { "size" ["small" false "grande" "huge"]}]
     ["link" "image"]
     ["clean"]]}})

(defn ^:export quillmain []
  (enable-console-print!)
  ;; quil.root.innerHTML tem o raw HTML
  (def quill (js/Quill. "#app_container" (clj->js quill-config)))
  (go
    (sente/start-router!)
    (println "init-chan returned" (<! sente/init-chan))
    (close! sente/init-chan)
    (let [button (js/document.getElementById "apply_button")]
      (set! (.-hidden button) false)
      (set! (.-onclick button)
            (fn [_]
              (let [text quill.root.innerHTML]
                (println text)
                (go
                  (sente/send!
                   [:semente/anova! text]
                   10000
                   (fn [ret]
                     (if-not (cb-success? ret)
                       (println "OOOOOH, erro" (pr-str ret))
                       (println "SIIIII" (pr-str ret))))))))))))
  
