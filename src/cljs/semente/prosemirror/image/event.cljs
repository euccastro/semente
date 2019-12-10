(ns semente.prosemirror.image.event
  (:require
   [ajax.core :refer (transit-request-format
                      transit-response-format)]
   [re-frame.core :as rf]
   [semente.prosemirror.image.const :refer (failed-db-id)]))

(rf/reg-event-fx
 :files-selected
 (fn [_ [_ files]]
   {:handle-files files}))

(rf/reg-event-fx
 :img-desc-change
 (fn [_ [_ {:keys [src desc]}]]
   {:assoc-image-attrs [src :desc desc]}))

(rf/reg-event-fx
 :img-upload-failed
 (fn [_ [_ url]]
   {:assoc-image-attrs [url :db_id failed-db-id]}))

(rf/reg-event-fx
 :img-uploaded
 (fn [_ [_ url db-id]]
   {:assoc-image-attrs [url :db_id db-id]}))

(rf/reg-event-fx
 :upload-img
 (fn [_ [_ {:keys [file url tries-left]
            :or {tries-left 3}
            :as args}]]
   {:assoc-image-attrs [url :db_id nil]
    :http-xhrio {:method :post
                 :uri "/save-image-from-file"
                 :body (doto (js/FormData.)
                         (.append "file" file url))
                 :timeout 30000
                 :response-format (transit-response-format)
                 :on-success [:img-uploaded url]
                 :on-failure (if (= tries-left 0)
                               [:img-upload-failed url]
                               [:upload-img
                                (update args :tries-left dec)])}}))

(rf/reg-event-fx
 :register-img-url
 (fn [_ [_ {:keys [url tries-left]
            :or {tries-left 3}
            :as args}]]
   {:assoc-image-attrs [url :db_id nil]
    :http-xhrio {:method :post
                 :uri "/save-image-from-url"
                 :params {:url url}
                 :timeout 30000
                 :format (transit-request-format)
                 :response-format (transit-response-format)
                 :on-success [:img-uploaded url]
                 :on-failure (if (= tries-left 0)
                               [:img-upload-failed url]
                               [:upload-img
                                (update args :tries-left dec)])}}))
