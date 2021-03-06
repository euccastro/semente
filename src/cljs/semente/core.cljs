(ns semente.core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [semente.ajax :as ajax]
   ;; for side effects
   semente.event
   [semente.prosemirror.core :refer (initial-editor-state)]
   [semente.view :as view]
   ;; for side effects
   semente.subscription
   ;; for side effects
   semente.effect))

(defn ^:dev/after-load mount-components
  []
  (rf/clear-subscription-cache!)
  (r/render [view/root-component]
            (.getElementById js/document "app")))

(defn init! [_]  ; argumento de debug, ignorado por enquanto
  (rf/dispatch-sync [:editor-state-changed (initial-editor-state)])
  (ajax/load-interceptors!)
  (mount-components)
  (rf/dispatch [:focus-editor]))
