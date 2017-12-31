(ns semente.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [semente.sente :as sente]
            [semente.nacional :refer (nacional)]
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
  (println "Hello from devmain!")
  (sente/start-once!)
  (sente/send!
   [:semente/quem-somos nil]
   30000
   (fn [ret]
     (if-not (cb-success? ret)
       (rum/mount (hello (pr-str ret))
                  (js/document.getElementById "app_container"))
       (do
         (println "OOOOOO")
         (rum/mount (nacional (:body ret))
                    (js/document.getElementById "app_container")))))))
