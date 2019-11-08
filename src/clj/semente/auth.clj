(ns semente.auth
  (:require [buddy.hashers :as hashers]))

(defn hash-password [password]
  (hashers/derive password {:alg :scrypt}))

(def check-password hashers/check)
