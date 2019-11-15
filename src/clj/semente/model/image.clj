(ns semente.model.image
  (:require [clojure.spec.alpha :as s]
            ;; for specs
            semente.model.core))

;; geraçom

(def sample-images
  (set
   (for [[uuid sha1]
         #{[#uuid "447b0d5d-0813-4839-b135-467d04019b86" "8bdd04d3d0ea5a7d078abe0c3882341175b4798e"]
           [#uuid "1dee4467-f936-439a-8115-322673ff6666" "5a0e08c2b53dc7505bac44ddc9d58e6fe2042674"]
           [#uuid "e619b405-167b-494b-aaa2-b88e1b57b48d" "1fce1616e910628d1a95f2ee47699e0b78dd7a96"]
           [#uuid "279ba73d-1097-40be-9ff3-9522492c7275" "2ac3c9dc566a88c924ebce2217cbb9cb73733f18"]
           [#uuid "320508c9-e163-4387-b39f-2ae6ba7d9dd2" "940efb07c284688349e3dd8d8777143863d3e41c"]
           [#uuid "c64f7a33-5ca1-4965-84e8-1ce11dd10efb" "5eddd7c3b47d545347d29afc81c50381a76f725f"]
           [#uuid "66bdbad7-31fc-4a8a-9f19-52bdf443581d" "c71df11ab9e701d3a0f282cfe80f199b12e802e3"]
           [#uuid "77d5c050-ce1d-4235-99e0-87c74b431361" "f603b511cd3a9f02d9612235fbc09a161442761e"]
           [#uuid "4c826312-d646-450c-87a3-3d00d8ff278e" "6b9f9e2b28300b95e42b696228a5a81c5fc3fbd1"]
           [#uuid "4872caad-3585-4212-bde7-2cd68ce295df" "a664d0e8a6a001de761ff1415b634568514cba06"]
           [#uuid "163e8d3a-6af6-4655-a9ba-a787a8277e78" "cc6cde56e9e3beaf78c6da3fa695a7400fd29ca2"]
           [#uuid "43788477-b47c-4109-b62d-df9dbc4148f3" "6b1bd006df06e51a81b515bd416ae058b1765edc"]}]
     {:image/id uuid
      :image/extension "jpg"
      :image/src sha1
      :image/name (str "nome de " uuid)
      :image/description (str "descriçom de " uuid)})))

(defn image-gen []
  (s/gen sample-images))

;; specs

(s/def :image/extensom :semente/nonempty-string)
(s/def :image/src :semente/nonempty-string)
;; para facilitar a humanas encontrá-la
(s/def :image/name :semente/nonempty-string)
(s/def :image/description :semente/nonempty-string)
;; XXX: vários tamanhos e enquadres?

(s/def :semente/image
  (s/with-gen
    (s/keys :req [:crux.db/id
                  :image/extension
                  :image/src
                  :image/name
                  :image/description])
    image-gen))
