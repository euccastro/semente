(ns semente.model.article
  (:require [clojure.spec.alpha :as s]
            [semente.db.core :as db]
            ;; for specs
            semente.model.core))

;; mover a semente.model.util ou algo

(s/def :article/id uuid?)
(s/def :article/type #{:article.type/dia-a-dia :article.type/nova})

;; XXX: colher da BD
(s/def :article/scope #{:scope/nacional
                        :scope/amaia
                        :scope/compostela
                        :scope/corunha
                        :scope/lugo
                        :scope/ponte-vedra
                        :scope/trasancos
                        :scope/vigo})

(s/def :article/publish-time inst?)
(s/def :article/title :semente/nonempty-string)
(s/def :article/unix-names (s/coll-of (s/and string? #(re-matches #"[a-z0-9\-]+" %))))

;; referência a umha imagem no corpo dum artigo
(s/def :article.body/image
  (s/tuple #{:image} uuid?))

(s/def :article/main-image uuid?)

(s/def :article/summary (s/and :semente/nonempty-string #(<= (count %) 288)))

(s/def :article/subheader (s/tuple #{:h2} :semente/nonempty-string))

(s/def :article.link/url :semente/nonempty-string)
(s/def :article.link/body :semente/nonempty-string)

(s/def :article/link
  (s/keys :req [:article.link/url
                :article.link/body]))

(s/def :article/strong-span (s/tuple #{:strong} :semente/nonempty-string))
(s/def :article/em-span (s/tuple #{:em} :semente/nonempty-string))

(s/def :article/paragraph
  (s/cat :p #{:p}
         :contents
         (s/+
          (s/or :plain-text :semente/nonempty-string
                :link :article/link
                :strong :article/strong-span
                :em :article/em-span))))

(s/def :article/body
  (s/coll-of (s/or :p :article/paragraph
                   :img :article.body/image)))

(s/def :article/article
  (s/keys :req [:crux.db/id
                :article/type
                :article/scope
                :article/publish-time
                :article/title
                :article/unix-names
                :article/main-image
                :article/summary
                :article/body]))

;; utilidades

(defn sample-articles [n]
  (map first (take-last n (s/exercise :article/article (max n 20)))))

(comment

  (s/explain :article/article (first (db/get-articles db/crux)))
  (def example (ffirst (s/exercise :article/article 1)))
  (clojure.pprint/pprint example)
  (clojure.pprint/pprint (s/exercise uuid? 1))

  (ffirst (s/exercise :article/publish-time 1))

  (re-matches #"[a-z0-9\-]+" "abc-def")
  (str #uuid "153a8ffd-b432-431f-87a6-34eaf34cb619")
  )
