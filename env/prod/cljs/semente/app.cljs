(ns semente.app
  (:require [semente.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init! false)
