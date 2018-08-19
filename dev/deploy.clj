(ns deploy
  (:require [clojure.java.io :as io]
            [figwheel.main :as fw]
            [semente.s3 :as s3]
            styles))

(def css-path "target/s3/css/garden.css")

(defn upload [path content-type]
  (s3/put-public (subs path (count "target/s3/"))
                 path
                 {:content-type content-type}))

(defn build-and-upload-css []
  (io/make-parents css-path)
  (println "Building css...")
  (styles/write-styles css-path)
  (println "Uploading css...")
  (upload css-path "text/css")
  (println "Done uploading css."))

(def js-path "target/s3/js/main.js")

(defn build-and-upload-js []
  (let [path (:output-to (clojure.edn/read-string (slurp "prod.cljs.edn")))]
    (println "Building js...")
    (io/make-parents path)
    (fw/-main "-bo" "prod")
    (print "Uploading js...")
    (upload path "application/javascript")
    (println "Done uploading js.")))

(defn -main []
  ;; figwheel-main will error if these are not present
  (dorun (map #(io/make-parents (str % "/blah"))
              (:css-dirs (clojure.edn/read-string (slurp "figwheel-main.edn")))))
  (let [css-future (future (build-and-upload-css))
        js-future (future (build-and-upload-js))]
    @css-future
    @js-future
    nil)
)
