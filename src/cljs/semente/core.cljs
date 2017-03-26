(ns semente.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [semente.sente :as sente]
            [rum.core :as rum]
            [taoensso.sente :refer (cb-success?)]))

(enable-console-print!)

(rum/defc hello [x]
  [:div "Hello, " [:span.vermelho x] "!"])

(defn ^:export main []
  (println "Hello!")
  (sente/start-once!)
  (rum/mount (hello "me")
             (js/document.getElementById "app_container")))
