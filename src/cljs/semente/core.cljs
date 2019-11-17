(ns semente.core
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [ajax.core :as http]
    [semente.ajax :as ajax]
    semente.event  ; for side effects
    semente.subscription  ; for side effects
    [semente.view :as view]))

(defn ^:dev/after-load mount-components
  []
  (rf/clear-subscription-cache!)
  (r/render [#'view/root-component] (.getElementById js/document "app")))

(defn init! [_]  ; argumento de debug, ignorado por enquanto
  (rf/dispatch-sync [:initialize])
  (ajax/load-interceptors!)
  (mount-components))
