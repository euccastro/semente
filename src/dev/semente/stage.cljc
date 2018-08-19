(ns semente.stage)

(defmacro in-development [& body]
  `(do ~@body))

(defmacro in-production [& body])
