(ns semente.draft-js
  (:require [clojure.data.json :as json]
            [clojure.string :as str]
            [com.rpl.specter :as sp]
            digest
            [rum.core :as rum]
            [semente.elasticsearch :as es]
            [semente.s3 :as s3]))

(rum/defc edit-page [index doc-name page-body editor-contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/Draft.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/font.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/icon.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/garden.css"}]]
   [:body
    page-body
    [:#app "Carregando editor..."]
    [:script {:src "/res/js/main.js" :type "text/javascript"}]
    [:script {:type "text/javascript"
              :dangerouslySetInnerHTML
              {:__html
               (format "semente.webmain.main(%s, %s, %s);"
                       (pr-str index)
                       (pr-str doc-name)
                       (or editor-contents "null"))}}]]])

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

(defn merge-entity [e-start e-end e]
  (fn [xf]
    (let [inside (volatile! [])]
      (fn
        ([] (xf))
        ([result] (xf (cond-> result
                        (seq @inside)
                        (xf [e-start e-end (assoc e :children @inside)]))))
        ([result [input-start input-end input-data]]
         (let [maybe
               (fn [result start end data f]
                 (if (< start end)
                   (f result [start end data])
                   result))]
           (-> result
               (maybe input-start
                      (min e-start input-end)
                      input-data
                      xf)
               (maybe (max e-start input-start)
                      (min e-end input-end)
                      input-data
                      (fn [result [start end data]]
                        (vswap! inside conj [start end data])
                        result))
               (maybe (max e-end input-start)
                      input-end
                      input-data
                      (fn [result [start end data]]
                        (let [children @inside]
                          (cond-> result
                            (seq children)
                            (xf (do (vreset! inside nil) [e-start e-end (assoc e :children children)]))
                            true
                            (xf [start end data]))))))))))))

(def block-style->tag
  {"BOLD" :strong
   "ITALIC" :em})

(defn add-style-range [spans next]
  (let [start (next "offset")
        end (+ start (next "length"))
        style (-> "style" next block-style->tag)]
    (into [] (merge-style start end style) spans)))

(defn add-entity [spans e]
  (println "adding entity" (pr-str e))
  (let [start (e "offset")
        end (+ start (e "length"))
        ;; only LINK supported so far
        entity-data {:type :link
                     :url (get-in e ["data" "url"])}]
    (into [] (merge-entity start end entity-data) spans)))

(defn render-style-range [text start end data]
  (reduce (fn [x style] [style x]) (subs text start end) data))

(defn render-entity-range [text start end data]
  ;; only links implemented so far
  [:a {:href (:url data)} (map (partial apply render-style-range text) (:children data))])

(defn render-block [block entity-map]
  (println "render block" (pr-str entity-map))
  (let [text (block "text")
        style-spans (reduce add-style-range
                            [[0 (.length text) []]]
                            (block "inlineStyleRanges"))
        entity-spans (reduce add-entity
                             style-spans
                             (map (fn [range]
                                    (merge range (entity-map (str (range "key")))))
                                  (block "entityRanges")))]
    (for [[start end data] entity-spans]
      (if (map? data)
        (render-entity-range text start end data)
        (render-style-range text start end data)))))

(def text-block-tags
  {"unstyled" :p
   "header-one" :h1
   "header-two" :h2
   "header-three" :h3
   "blockquote" :blockquote})

(defn content-state->hiccup [content-state]
  (let [entity-map (content-state "entityMap")
        is-list-item? #(= (% "type") "unordered-list-item")]
    (for [b-run (partition-by is-list-item?
                              (content-state "blocks"))]
      (if (is-list-item? (first b-run))
        [:ul
         (for [b b-run]
           [:li (render-block b entity-map)])]
        (for [b b-run]
          (if-let [tag (text-block-tags (b "type"))]
            [tag (render-block b entity-map)]
            (if (= (b "type") "atomic")
              [:img {:src (get-in entity-map
                                  [(str (get-in b ["entityRanges" 0 "key"]))
                                   "data"
                                   "url"])}]
              [:pre {:key (b "key")} (with-out-str (clojure.pprint/pprint b))])))))))

(rum/defc view-page [contents]
  [:html
   [:head
    [:meta {:charset "UTF-8"}]]
   [:body contents]])


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
                                      (sp/transform ["entityMap" sp/MAP-VALS #(= (% "type") "IMAGE") "data" "url" filenames]
                                                   #(str "https://datomique.icbink.org/res/" (filenames %)))
                                      json/write-str)})))

(comment
  (defn edit [id]
    (rum/render-static-markup
     (edit-page id (get (es/load-doc id) "contents")))))

(defn id->hiccup [id]
  (some-> id
          es/load-doc
          (get "contents")
          json/read-str
          content-state->hiccup))

(defn view [id]
  (some-> id
          id->hiccup
          view-page
          rum/render-static-markup))
