(ns semente.view
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defn root-component []
  [:div {:on-click
         (fn [_] (rf/dispatch [:inc]))}
   "Provando..." @(rf/subscribe [:prova])])
