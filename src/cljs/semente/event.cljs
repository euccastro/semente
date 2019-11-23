(ns semente.event
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize
 (fn [_]
   {:prova 5}))

(rf/reg-event-db
 :inc
 (fn [db _]
   (update db :prova inc)))
