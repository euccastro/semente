(ns semente.draft-js
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [com.rpl.specter :as sp]
            digest
            [rum.core :as rum]
            [semente.elasticsearch :as es]
            [semente.s3 :as s3]))

(rum/defc edit-page [doc-name contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/Draft.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/fonts.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/garden.css"}]]
   [:body
    [:#app "Aqui iriam as tuas movidorras."]
    [:script {:src "/res/js/main.js" :type "text/javascript"}]
    [:script {:type "text/javascript"
              :dangerouslySetInnerHTML {:__html
                                        (str "semente.webmain.main("
                                             (pr-str doc-name)
                                             ", "
                                             (or contents "null")
                                             ");")}}]]])

(defn merge-style [start end style]
  (fn [xf]
    (fn
      ([] (xf))
      ([result] (xf result))
      ([result [input-start input-end input-styles]]
       (let [xf-maybe
             (fn [result start end styles]
               (if (< start end)
                 (xf result [start end styles])
                 result))]
         (-> result
             (xf-maybe input-start
                       (min start input-end)
                       input-styles)
             (xf-maybe (max start input-start)
                       (min end input-end)
                       (conj input-styles style))
             (xf-maybe (max end input-start)
                       input-end
                       input-styles)))))))

(def block-style->tag
  {"BOLD" :strong
   "ITALIC" :em})

(defn add-span [spans next]
  (let [start (:offset next)
        end (+ start (:length next))
        style (-> next :style block-style->tag)]
    (into [] (merge-style start end style) spans)))

(defn render-text [{:keys [text] :as block}]
  (let [spans (reduce add-span
                      [[0 (.length text) []]]
                      (:inlineStyleRanges block))]
    (for [[start end styles] spans]
      (reduce (fn [x style] [style x]) (subs text start end) styles))))

(defn content-state->hiccup [content-state]
  (for [b (:blocks content-state)]
    (if (= (:type b) "unstyled")
      [:p {:key (:key b)} (render-text b)]
      [:pre {:key (:key b)} (with-out-str (clojure.pprint/pprint b))])))

(rum/defc view-page [contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]]
   [:body (content-state->hiccup contents)]])


(defn save [name contents & etc]
  (let [blobs (filter (fn [[k _]] (str/starts-with? k "blob:")) etc)
        filenames (into {} (pmap (fn [[k v]]
                                   [k (str "img/"
                                           (digest/sha-256 (:tempfile v))
                                           "." (last (str/split (:content-type v) #"/")))])
                                 blobs))]
    (dorun (pmap (fn [[k {:keys [content-type size tempfile]}]]
                   (s3/put-public (filenames k) tempfile {:content-type content-type :size size}))
                 blobs))
    (es/save-doc name {:contents (->> contents
                                      json/read-str
                                      (sp/transform ["entityMap" sp/MAP-VALS "data" "url"]
                                                   #(str "https://datomique.icbink.org/res/" (filenames %)))
                                      json/write-str)})))

(defn edit [id]
  (rum/render-static-markup
   (edit-page id (get (es/load-doc id) "contents"))))

(defn view [id]
  (some-> id
          es/load-doc
          (get "contents")
          (json/read-str :key-fn keyword)
          view-page
          rum/render-static-markup))
