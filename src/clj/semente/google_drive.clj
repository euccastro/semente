(ns semente.google-drive
  (:require
   [clojure.java.io :as io])
  (:import
   com.google.api.client.http.FileContent
   com.google.api.client.googleapis.auth.oauth2.GoogleCredential
   com.google.api.client.googleapis.javanet.GoogleNetHttpTransport
   com.google.api.client.json.jackson2.JacksonFactory
   (com.google.api.services.drive Drive$Builder DriveScopes)
   com.google.api.services.drive.model.File))

;; XXX
(def ^:private creds-path "/home/es/Downloads/semente-web-1044b9247bc2.json")

(def ^:private transport (GoogleNetHttpTransport/newTrustedTransport))
(def ^:private json-factory (JacksonFactory/getDefaultInstance))

(defn upload-file [file name mime-type]
  (let [file (cond-> file (string? file) io/file)
        credentials (.createScoped
                     (GoogleCredential/fromStream (io/input-stream creds-path))
                     [DriveScopes/DRIVE])
        drive (-> (Drive$Builder. transport json-factory credentials)
                  (.setApplicationName "Web da Semente")
                  .build)
        file-meta-data (File.)
        contents (FileContent. mime-type file)]
    (.setName file-meta-data name)
    (-> drive
        .files
        (.create file-meta-data contents)
        (.setFields "id")
        .execute
        .getId)))

(comment

  (upload-file "/home/es/Downloads/6236169.pdf" "prova-pdf" "application/pdf")

  )
