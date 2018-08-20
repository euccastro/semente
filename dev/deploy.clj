(ns deploy
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [datomic.ion.dev :as ion]
            [figwheel.main :as fw]
            [semente.s3 :as s3]
            styles))

(def garden-css-path "target/s3/css/garden.css")

(defn upload [path content-type]
  (s3/put-public (subs path (count "target/s3/"))
                 path
                 {:content-type content-type}))

(defn build-and-upload-css []
  (io/make-parents garden-css-path)
  (println "Building css...")
  (styles/write-styles garden-css-path)
  (println "Uploading css...")
  (upload garden-css-path "text/css")
  (println "Done uploading css."))

(defn build-and-upload-js [prom]
  (let [path (:output-to (clojure.edn/read-string (slurp "prod.cljs.edn")))]
    (println "Building js...")
    (io/make-parents path)
    (fw/-main "-bo" "prod")
    (println "Uploading js...")
    (upload path "application/javascript")
    (println "Done uploading js.")
    (deliver prom nil)))

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
        (when-not (= (:code-deploy-status status)
                     (:deploy-status status)
                     "SUCCEEDED")
          (Thread/sleep 5000)
          (recur))))
    (println "Done deploying ions.")))

(defn wait-for-all [& refs]
  (dorun (map deref refs)))

(defn path->content-type [path]
  (let [ext (last (str/split path #"\."))]
    (case ext
      "css" "text/css"
      "js" "application/javascript"
      (throw (ex-info "Unsupported extension" {:path path :ext ext})))))

(defn upload-file [f]
  (let [path (str (.toPath f))
        k (subs path (count "resources/public/res/"))]
    (println "Uploading" path "...")
    (s3/put-public k f {:content-type (path->content-type path)})
    (println path "uploaded.")))

(defn -main []
  ;; figwheel-main will error if these are not present
  (dorun (map #(io/make-parents (str % "/blah"))
              (:css-dirs (clojure.edn/read-string (slurp "figwheel-main.edn")))))
  (apply wait-for-all
         (future (build-and-upload-css))
         (let [p (promise)]
           (future (build-and-upload-js p))
           p)
         (future (push-and-deploy-ions))
         (doall (map #(future (upload-file %))
                     (filter #(.isFile %)
                             (file-seq (io/file "resources/public/res/"))))))
  (println "All done.")
  (System/exit 0))
