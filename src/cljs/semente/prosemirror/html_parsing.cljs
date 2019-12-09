(ns semente.prosemirror.html-parsing
  (:require
   [clojure.string :as str]
   [hickory.core :as hk]
   [hickory.render :refer (hickory-to-html)]
   [com.rpl.specter :as s]))

(defn- reduce-step [accum elem]
  (let [walker (s/walker
                (every-pred
                 map?
                 (comp #{:element} :type)
                 (comp #{:img} :tag)))
        images (s/select walker elem)
        stripped (s/setval walker s/NONE elem)]
    (into (conj accum stripped) images)))

(defn lift-images [html]
  (let [hc (map hk/as-hickory (hk/parse-fragment html))
        lifted (reduce reduce-step [] hc)]
    (str/join
     (map hickory-to-html lifted))))
