(ns semente.stage)

(defmacro in-production [& body]
  `(do ~@body))

(defmacro in-development [& body])
