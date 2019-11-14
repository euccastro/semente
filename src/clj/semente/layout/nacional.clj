(ns semente.layout.nacional
  (:require
   [semente.layout :as l]
   [semente.style-constants :as style]
   [semente.model.article :as article-model]
   [hiccup.page :refer [include-css]]
   [hiccup.element :refer [image link-to]]))

;; XXX provar CSRF

(defn social-icon [url path]
  [:a.social {:href url}
   [:svg.socialsvg {:viewBox "0 0 24 24"
                    :width 24
                    :height 24}
    [:path.socialpath {:fill :lightgrey
                       :d path}]]])

#_(defn test-article []
    (let [target-url "#ler-mais"]
      [:article.frontpage
       [:a.scope {:href "/nacional"} "nacional"]
       [:h1 (link-to target-url "Primavera generosa")]
       [:p.published "Publicado a 25 Abril, 2019"]
       (link-to
        target-url
        [:div.img-container
         [:img {:src "img/artigo-prova.jpg"}]])
       [:p.prose "Muito celebramos a chegada da primavera, porque é muito o que a natureza nos dá neste mudar estacional."]
       [:p.prose "Desfrutamos da luz, da maravilha das flores e do seu cheirar, das árvores tornando verdes, dos novos fruitos, da quenturinha do sol roçando a pele..." [:a.read-more {:href "#ler-mais"} " [&nbsp;lêr&nbsp;mais&nbsp;]"]]]))

(defn test-article []
  #:article{:id #uuid "153a8ffd-b432-431f-87a6-34eaf34cb619"
            :type :article.type/nova
            :scope :scope/nacional
            :publish-time #inst "2019-04-25T23:59:59.999-00:00"
            :title "Primavera generosa"
            :main-image #:image{:id #uuid "447b0d5d-0813-4839-b135-467d04019b86"
                                :extension "jpg"
                                :name "Concerto primavera"
                                :description "Concerto na Torreira"}
            :summary "Muito celebramos a chegada da primavera, porque é muito o que a natureza nos dá neste mudar estacional. Desfrutamos da luz, da maravilha das flores e do seu cheirar, das árvores tornando verdes, dos novos fruitos, da quenturinha do sol roçando a pele..."
            :body [[:p "Muito celebramos a chegada da primavera, porque é muito o que a natureza nos dá neste mudar "]
                   [:p "Desfrutamos da luz, da maravilha das flores e do seu cheirar, das árvores tornando verdes, dos novos fruitos, da quenturinha do sol roçando a pele e do convite a estar mais tempo no quintal. Todo isto, imo-lo desfrutando juntas, mas na Semente a primavera também se deixou ver, com atividades mui gostosas e com muito ambiente.
"]
                   [:p "A primeira celebraçom assi que chegou a primavera foi o 25 de abril, comemorando este dia com um concerto bem fermoso para toda a família da Semente. Guadi e a sua banda quigéron acompanhar-nos numha manhá lindíssima, cheia de vida e que nom vai ser doada de esquecer. Os bailes e as emoçons ali vividas fam-nos sentir mui afortunadas. E assim celebramos que somos a geraçom das 1000 primaveras mais."]
                   [:p "25 de abril, sempre!"]
                   #:image{:id #uuid "447b0d5d-0813-4839-b135-467d04019b86"
                           :extension "jpg"
                           :name "Concerto primavera"
                           :description "Concerto na Torreira"}
                   #:image{:id #uuid "163e8d3a-6af6-4655-a9ba-a787a8277e78"
                           :extension "jpg"
                           :name "Concerto primavera 2"
                           :description "Guadi usa ghafas de sol"}]})

(comment

  (require '[semente.model.article :as am])
  (require '[clojure.spec.alpha :as s])

  (s/valid? :article/article (test-article))
  (s/explain :article/article (test-article))
  )

(defn scope->visible-name [x]
  ;; XXX obter de BD
  (case x
    ("amaia") "amaía"
    ("ponte-vedra") "ponte vedra"
    x))


(comment
  (scope->visible-name "amaia")
  )

(defn inst->display-string [t]
  ;; XXX
  "25 de Abril, 2019")

(defn article->summary-hiccup
  [{:keys [article/id
           article/publish-time
           article/title
           article/main-image
           article/summary]
    :as article}]
  (let [scope (-> article :article/scope name)
        url (str "/" scope "/" id)]
    [:article.frontpage
     [:a.scope {:href (str "/" scope)} (scope->visible-name scope)]
     [:h1 (link-to url title)]
     [:p.published (str "Publicado a " (inst->display-string publish-time))]
     (link-to
      url
      [:div.img-container
       [:img {:src (str "img/conteudo/" (:image/id main-image) "." (:image/extension main-image))
              :alt (:description main-image)}]])
     [:p.prose summary [:a.read-more {:href url} " [&nbsp;lêr&nbsp;mais&nbsp;]"]]]))

(comment (article->summary-hiccup (test-article)))

(defn artigos->pagina
  [artigos]
  (l/ok-hiccup
   [:html
    [:head
     [:title "Projeto Educativo Semente"]
     [:meta {:charset :utf-8}]
     [:meta {:name :viewport :content "width=device-width,initial-scale=1"}]
     ;; https://github.com/necolas/normalize.css
     (include-css "css/normalize.css"
                  "https://fonts.googleapis.com/css?family=Ubuntu"
                  "css/font.css"
                  "css/semente.css")]
    [:body#nacional-background
     [:div#page
      [:header
       ;; Liga comportamento do logo principal co dos logos sociais quando
       ;; reduzimos o largo da tela.
       [:div#logos
        (image "img/logo-nacional.svg")
        ;; Fai que todos os logos sociais saltem ao mesmo tempo embaixo do logo
        ;; da Semente quando reduzimos a tela.
        [:div#contedor-social
         (social-icon "#twitter" style/twitter-path)
         (social-icon "#facebook" style/facebook-path)
         (social-icon "#youtube" style/youtube-path)]]
       [:a.destacado {:href "#destacado"} "as nossas festas no calendário!"]]
      [:nav
       (for [caption ["projeto" "pedagogia" "sementes" "novas" "associa-te" "contato"]]
         (link-to (str "#" caption) caption))]
      [:main
       [:div#principal
        (map article->summary-hiccup artigos)]]
      [:footer [:p "© 2019 Projeto Educativo Semente"]
       (image "img/ramalho.svg")]]
     (l/recarrega-css)]]))

(defn pagina-nacional
  []
  (artigos->pagina
   [(test-article)
    (test-article)
    (test-article)
    (test-article)
    (test-article)
    (test-article)
    (test-article)]))

(defn pagina-nacional-autogen
  []
  (artigos->pagina
   (into [(test-article)] (article-model/sample-articles 6))))
