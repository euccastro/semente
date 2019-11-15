(ns semente.model.core
  (:require [clojure.spec.alpha :as s]))

(s/def :semente/nonempty-string (s/and string? #(not (empty? %))))
