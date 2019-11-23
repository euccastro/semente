(ns semente.subscription
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 :prova
 (fn [db _]
   (:prova db)))
