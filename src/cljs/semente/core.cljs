(ns semente.core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [ajax.core :as http]
   [semente.ajax :as ajax]
   ;; for side effects
   semente.event
   [semente.prosemirror.core :refer (initial-editor-state)]
   [semente.prosemirror.view :refer (editor-container)]
   ;; for side effects
   semente.subscription
   ;; for side effects
   semente.effect
   [semente.view :as view]))

(defn ^:dev/after-load mount-components
  []
  (rf/clear-subscription-cache!)
  (r/render [editor-container]
            (.getElementById js/document "app")))

(defn init! [_]  ; argumento de debug, ignorado por enquanto
  (rf/dispatch-sync [:editor-state-changed (initial-editor-state)])
  (ajax/load-interceptors!)
  (mount-components))
