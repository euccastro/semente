(ns semente.core
  (:require [cemerick.friend :as friend]
            [cemerick.friend.workflows :as wflows]
            [cemerick.friend.credentials :as creds]
            [compojure.core :as compojure :refer (defroutes GET POST)]
            [compojure.route :refer (resources not-found)]
            [datomic.ion.lambda.api-gateway :as apigw]
            [net.icbink.expand-headers.core :refer (wrap-expand-headers)]
            [ring.middleware.keyword-params :refer (wrap-keyword-params)]
            [ring.middleware.multipart-params :refer (wrap-multipart-params)]
            [ring.middleware.params :refer (wrap-params)]
            [ring.middleware.session :refer (wrap-session)]
            [ring.middleware.session.cookie :refer (cookie-store)]
            [rum.core :as rum]
            [semente.auth :as auth]
            [semente.draft-js :as draft-js]
            [semente.stage :refer (stage)]
            [semente.tarefas :as tarefas]
            [semente.template :as comum]))

(defroutes admin-routes
  (GET "/" [] "parabéns admin!"))

(rum/defc prova-css []
  [:html
   [:head
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/font.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/garden.css"}]]
   [:body
    "Olá mundo!"
    ;; for CSS reloading...
    (when (not= stage :production)
     [:script {:src "/res/js/main.js" :type "text/javascript"}])]])

(defroutes national-edit-routes
  (GET "/quem-somos" []
       (draft-js/edit "nacional_quem-somos")))

(defroutes edit-routes
  (compojure/context "/nacional" []
                     (friend/wrap-authorize
                      national-edit-routes
                      #{:permission/national-editor})))

(rum/defc quem-somos [hiccup]
  (comum/pagina
   "/nacional/quem-somos"
   hiccup))

(rum/defc principios []
  (comum/pagina
   "/nacional/principios"
   [:div
    [:h1 "Princípios"]
    [:ol
     [:li "Semos malos"]
     [:li "Semos duros"]
     [:li "Semos los mas cojonudos"]
     [:strong "Semos SEMENTE!"]]]))

(defroutes ring-handler
  (compojure/context
   "/admin" []
   (friend/wrap-authorize admin-routes #{:permission.privilege/admin}))
  (compojure/context
   "/editar" []
   edit-routes)
  (GET "/tarefas/:equipa" [equipa]
       (friend/authorize #{(keyword "permission.team-member" equipa)}
                         (tarefas/lista equipa)))
  (POST "/tarefas/:equipa/acrescenta" [equipa titulo]
       (friend/authorize #{(keyword "permission.team-member" equipa)}
                         (tarefas/acrescenta-tarefa equipa titulo)))
  (GET "/mudar-senha" [erro utente]
       (auth/get-muda-senha erro utente))
  (POST "/mudar-senha" [username old-password new-password new-password-confirmation]
        (auth/post-muda-senha username old-password new-password new-password-confirmation))
  (GET "/nacional/quem-somos" []
       (rum/render-static-markup
        [:html
         [:head
          [:meta {:charset "UTF-8"}]
          [:link {:rel "stylesheet" :type "text/css" :href "/res/css/font.css"}]
          [:link {:rel "stylesheet" :type "text/css" :href "/res/css/icon.css"}]
          [:link {:rel "stylesheet" :type "text/css" :href "/res/css/garden.css"}]]
         [:body
          (quem-somos
           [:div
            (draft-js/id->hiccup "nacional_quem-somos")
            (if (friend/authorized? #{:permission/national-editor}
                                    friend/*identity*)
              [:a {:href "/editar/nacional/quem-somos"} "Editar"])])
          ;; for CSS reloading...
          (when (not= stage :production)
            [:script {:src "/res/js/main.js" :type "text/javascript"}])]]))
  (POST "/guarda" [name contents & etc]
        (try
          (apply draft-js/save name contents etc)
          (catch Exception e (str "EXCEPTION:" (pr-str e)))))
  (GET auth/login-uri [erro utente]
       (auth/login erro utente))
  (GET "/prova-css" [] (rum/render-static-markup (prova-css)))
  (GET "/prova" [] (friend/authorize #{:permission.privilege/admin} "Olá!"))
  (GET "/pravo" [] (friend/authorize #{:permission.privilege/unobtainium} "Alô!"))
  (GET "/privo" [] (friend/authorize #{:scope/national} "Ei!"))
  (GET "/edit/:id" [id]
       (draft-js/edit id))
  (GET "/view/:id" [id]
       (draft-js/view id))
  (friend/logout (GET "/abur" [] "OK, tás fora."))
  (GET "/esperta" [] "Tou!")
  (resources "/")
  (not-found "U-lo?"))

(def ring-app
  (-> ring-handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn auth/load-credentials)
                            :workflows [(wflows/interactive-form)]
                            :login-uri auth/login-uri
                            :login-failure-handler auth/unauthenticated-handler
                            :unauthorized-handler auth/unauthorized-handler})
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      wrap-keyword-params
      wrap-multipart-params
      wrap-params
      wrap-expand-headers))

(def webroot (apigw/ionize ring-app))
