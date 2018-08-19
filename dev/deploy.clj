(ns deploy
  (:require [clojure.java.io :as io]
            [datomic.ion.dev :as ion]
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

(defn push-and-deploy-ions []
  (let [uname "wip"
        _ (println "Pushing to ions...")
        {[group] :deploy-groups} (ion/push {:uname uname})
        _ (println "Deploying to ions...")
        {arn :execution-arn} (ion/deploy {:group group :uname uname})]
    (println "Deployed; waiting for successful status...")
    (loop []
      (let [status (ion/deploy-status {:execution-arn arn})]
        (println "Status:" status)
        (when-not (= (:deploy-status status) (:execution-status status) 'SUCCEEDED)
          (Thread/sleep 5000)
          (recur))))))

(defn -main []
  ;; figwheel-main will error if these are not present
  (dorun (map #(io/make-parents (str % "/blah"))
              (:css-dirs (clojure.edn/read-string (slurp "figwheel-main.edn")))))
  (let [css-future (future (build-and-upload-css))
        js-future (future (build-and-upload-js))
        ions-future (future (push-and-deploy-ions))]
    @css-future
    @js-future
    @ions-future
    nil)
)
