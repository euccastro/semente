(ns semente.model.article
  (:require [clojure.spec.alpha :as s]))

;; mover a semente.model.util ou algo
(s/def ::nonempty-string (s/and string? #(not (empty? %))))

(s/def :article/id uuid?)
(s/def :article/type #{:article.type/dia-a-dia :article.type/nova})

;; colher da BD
(s/def :article/scope #{:scope/nacional
                        :scope/amaia
                        :scope/compostela
                        :scope/corunha
                        :scope/lugo
                        :scope/ponte-vedra
                        :scope/trasancos
                        :scope/vigo})

(s/def :article/title ::nonempty-string)

(s/def :image/id uuid?)
;; para facilitar a humanas encontrá-la
(s/def :image/name ::nonempty-string)
(s/def :image/description ::nonempty-string)
;; XXX: vários tamanhos e enquadres?

(s/def :article/image (s/keys :req [:image/id
                                    :image/name
                                    :image/description]))

(s/def :article/main-image :article/image)

(s/def :article/summary (s/and ::nonempty-string #(<= (count %) 288)))

(s/def :article/subheader (s/tuple #{:h2} ::nonempty-string))

(s/def :article.link/url ::nonempty-string)
(s/def :article.link/description ::nonempty-string)
(s/def :article.link/body ::nonempty-string)

(s/def :article/link (s/keys :req [:article.link/url
                                   :article.link/description
                                   :article.link/body]))

(s/def :article/strong-span (s/tuple #{:strong} ::nonempty-string))
(s/def :article/em-span (s/tuple #{:em} ::nonempty-string))


(s/def :article/paragraph
  (s/coll-of (s/or :plain-text ::nonempty-string
                   :link :article/link
                   :strong :article/strong-span
                   :em :article/em-span)))

(s/def :article/body
  (s/coll-of (s/or :p :article/paragraph
                   :img :article/image)))

(s/def :article/article
  (s/keys :req [:article/id
                :article/type
                :article/scope
                :article/title
                :article/main-image
                :article/summary
                :article/body]))

(comment

  (empty? "")
  (def examples (s/exercise :article/article 1))

  )
