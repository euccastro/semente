(ns semente.core
  (:require [cemerick.friend :as friend]
            [cemerick.friend.workflows :as wflows]
            [cemerick.friend.credentials :as creds]
            [compojure.core :as compojure :refer (defroutes GET POST)]
            [compojure.route :refer (resources not-found)]
            [datomic.ion.lambda.api-gateway :as apigw]
            [net.icbink.expand-headers.core :refer (wrap-expand-headers)]
            [ring.middleware.keyword-params :refer (wrap-keyword-params)]
            [ring.middleware.params :refer (wrap-params)]
            [ring.middleware.session :refer (wrap-session)]
            [ring.middleware.session.cookie :refer (cookie-store)]
            [rum.core :as rum]
            [semente.auth :as auth]
            [semente.draft-js :as draft-js]
            [semente.stage :refer (in-development in-production)]))

(defroutes admin-routes
  (GET "/" [] "parabéns admin!"))

(rum/defc prova-css []
  [:html
   [:head
    [:link {:rel "stylesheet" :type "text/css" :href "/res/css/garden.css"}]]
   [:body
    "Olá mundo!"
    ;; for CSS reloading...
    (in-development
     [:script {:src "/cljs-out/dev-main.js" :type "text/javascript"}])]])

(defroutes ring-handler
  (compojure/context
   "/admin" []
   (friend/wrap-authorize admin-routes #{:permission.privilege/admin}))
  (POST "/guarda" [name contents & etc]
        (apply draft-js/save name contents etc))
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
      wrap-params
      wrap-expand-headers))

(def webroot (apigw/ionize ring-app))
