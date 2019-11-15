(ns semente.string-util
  (:require [clojure.string :as str])
  (:import
   (java.text Normalizer)
   (java.text Normalizer$Form)))

(defn unixify [s]
  (-> s
      (Normalizer/normalize Normalizer$Form/NFD)
      (str/replace #"(\s|\p{Punct})+" "-")
      (str/replace #"([^a-zA-Z0-9-]|-$)" "")
      str/lower-case))


(comment

  (unixify "dí-me, Badú!")
  (unixify "Primavera generosa")
  )
