(ns semente.routes.article-editor
  (:require
   [buddy.core.codecs.base64 :as b64]
   [buddy.core.hash :refer (sha256)]
   [clj-http.client :as http]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [resilience4clj-retry.core :as rt]
   [resilience4clj-timelimiter.core :as tl]
   [ring.util.http-response :as response]
   [semente.google-drive :refer (upload-file)]
   [semente.middleware :as middleware])
  (:import
   (java.net URI)
   (java.nio.file CopyOption Files Paths StandardCopyOption)))

(def retry (rt/create "retry"
                      {:max-attempts 5
                       :wait-duration 1000}))

(def dl-tl (tl/create {:timeout-duration 10000}))
(def backup-tl (tl/create {:timeout-duration 10000
                           :cancel-running-future? false}))

(def download
  (-> (fn [url]
        (http/get url {:as :stream}))
      (tl/decorate dl-tl)
      (rt/decorate retry)))

(def backup
  (-> upload-file
      (tl/decorate backup-tl)
      (rt/decorate retry)))

(comment

  (def url "https://sementevigo.gal/wp-content/uploads/Assembleia-1-1.jpg")
  (def url "https://sementecompostela.com/wp-content/uploads/2019/12/foto-1.jpg")
  (download url)

  )

(defn- java-path [path]
  (Paths/get (URI/create (str "file://" path))))

(defn- move-file [src dest]
  (Files/move (java-path src)
              (java-path dest)
              (into-array CopyOption
                          [(StandardCopyOption/ATOMIC_MOVE)
                           (StandardCopyOption/REPLACE_EXISTING)])))

(defn- mime-type->ext [mt]
  (-> mt
      (str/split #"/")
      last))

(defn url-safe-hash
  "URL-safe base64 encoding of sha256 hash"
  [x]
  (apply str (map char (b64/encode (sha256 x) true))))

(defn- save-image-from-temp-file [f mime-type]
  (let [db-id (str (url-safe-hash f) "." (mime-type->ext mime-type))
        dest-path (str (System/getProperty "user.dir")
                       "/../semente-resources/public/img/"
                       db-id)]
    (when-not (.exists (io/as-file dest-path))
      (backup f db-id mime-type)
      (move-file f dest-path))
    (response/ok {:db-id db-id})))

(defn save-image-from-file [{{{:keys [tempfile content-type]} :file} :params}]
  (save-image-from-temp-file tempfile content-type))

(defn save-image-from-url [{{:keys [url]} :params}]
  (let [resp (download url)
        mime-type (-> resp :headers :content-type)
        temp-file (java.io.File/createTempFile "semente-image-" "")]
    (-> resp :body (io/copy temp-file))
    (save-image-from-temp-file temp-file mime-type)))

(comment

  (def url "https://sementecompostela.com/wp-content/uploads/2019/12/foto-1.jpg")
  (download url)
  (def out "/home/es/tmp/prova.jpg")
  (def f  (java.io.File/createTempFile "semente-image-" ""))
  (save-image-from-url {:params {:url url}})
  (str f)
  (try
    @(http/get url)
    (catch Exception e
            (def e e)))

  (def resp *1)
  (httpc/get url)
  (def url "https://i0.wp.com/sementetrasancos.gal/wp-content/uploads/2019/02/Captura-de-pantalla-2019-02-27-a-las-20.47.10.png")
  (slurp(:body (ex-data e)))

  )

(defn article-editor-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/save-image-from-file" {:post save-image-from-file}]
   ["/save-image-from-url" {:post save-image-from-url}]])
