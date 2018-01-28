(ns semente.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go)])
  (:require [cljs.core.async :as async :refer (<! close!)]
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
