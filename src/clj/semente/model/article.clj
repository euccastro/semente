(ns semente.model.article
  (:require [clojure.spec.alpha :as s]))

;; geraçom

(def sample-images
  (set
   (for [[uuid ext] #{[#uuid "279ba73d-1097-40be-9ff3-9522492c7275" "jpg"]
                      [#uuid "4c826312-d646-450c-87a3-3d00d8ff278e" "jpg"]
                      [#uuid "43788477-b47c-4109-b62d-df9dbc4148f3" "jpg"]
                      [#uuid "320508c9-e163-4387-b39f-2ae6ba7d9dd2" "jpg"]
                      [#uuid "e619b405-167b-494b-aaa2-b88e1b57b48d" "jpg"]
                      [#uuid "77d5c050-ce1d-4235-99e0-87c74b431361" "jpg"]
                      [#uuid "4872caad-3585-4212-bde7-2cd68ce295df" "jpg"]
                      [#uuid "1dee4467-f936-439a-8115-322673ff6666" "jpg"]
                      [#uuid "c64f7a33-5ca1-4965-84e8-1ce11dd10efb" "jpg"]
                      [#uuid "66bdbad7-31fc-4a8a-9f19-52bdf443581d" "jpg"]}]
     {:image/id uuid
      :image/extension ext
      :image/name (str "nome de " uuid)
      :image/description (str "descriçom de " uuid)})))

(defn image-gen []
  (s/gen sample-images))

;; specs

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
(s/def :image/extensom ::nonempty-string)
;; para facilitar a humanas encontrá-la
(s/def :image/name ::nonempty-string)
(s/def :image/description ::nonempty-string)
;; XXX: vários tamanhos e enquadres?

(s/def :article/image
  (s/with-gen
    (s/keys :req [:image/id
                  :image/extension
                  :image/name
                  :image/description])
    image-gen))

(s/def :article/main-image :article/image)

(s/def :article/summary (s/and ::nonempty-string #(<= (count %) 288)))

(s/def :article/subheader (s/tuple #{:h2} ::nonempty-string))

(s/def :article.link/url ::nonempty-string)
(s/def :article.link/description ::nonempty-string)
(s/def :article.link/body ::nonempty-string)

(s/def :article/link
  (s/keys :req [:article.link/url
                :article.link/description
                :article.link/body]))

(s/def :article/strong-span (s/tuple #{:strong} ::nonempty-string))
(s/def :article/em-span (s/tuple #{:em} ::nonempty-string))


(s/def :article/paragraph
  (s/cat :p #{:p}
         :contents
         (s/coll-of (s/or :plain-text ::nonempty-string
                          :link :article/link
                          :strong :article/strong-span
                          :em :article/em-span))))

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

  (def example (ffirst (s/exercise :article/article 1)))
  (clojure.pprint/pprint example)
  (first sample-images)
  (def ex (s/exercise uuid?))


  (s/valid?
   :article/article
   #:article{:id #uuid "153a8ffd-b432-431f-87a6-34eaf34cb619",
             :type :article.type/dia-a-dia,
             :scope :scope/lugo,
             :title "A",
             :main-image
             #:image{:id #uuid "e619b405-167b-494b-aaa2-b88e1b57b48d",
                     :extension "jpg",
                     :name "nome de e619b405-167b-494b-aaa2-b88e1b57b48d",
                     :description
                     "descriçom de e619b405-167b-494b-aaa2-b88e1b57b48d"},
             :summary "5E",
             :body
             [[:p
               [[:strong "2"]
                [:strong "5f"]
                [:strong "9"]
                "4"
                #:article.link{:url "TW", :description "Q", :body "5"}
                "1M7"
                [:em "n"]
                [:strong "nH"]
                "Ai"
                "b0"
                [:strong "a"]
                [:strong "r"]]]]})
  )
