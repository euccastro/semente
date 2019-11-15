(ns semente.model.image
  (:require [clojure.spec.alpha :as s]
            ;; for specs
            semente.model.core))

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

(s/def :image/id uuid?)
(s/def :image/extensom :semente/nonempty-string)
;; para facilitar a humanas encontrá-la
(s/def :image/name :semente/nonempty-string)
(s/def :image/description :semente/nonempty-string)
;; XXX: vários tamanhos e enquadres?

(s/def :article/image
  (s/with-gen
    (s/keys :req [:image/id
                  :image/extension
                  :image/name
                  :image/description])
    image-gen))
