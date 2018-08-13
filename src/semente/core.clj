(ns semente.core
  (:require [cemerick.friend :as friend]
            [cemerick.friend.workflows :as wflows]
            [cemerick.friend.credentials :as creds]
            [compojure.core :refer (defroutes GET POST)]
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
            [semente.elasticsearch :as es]))

(defroutes ring-handler
  (POST "/guarda" [name contents & etc]
        (apply draft-js/save name contents etc))
  (GET auth/login-uri []
       (rum/render-static-markup (auth/login-form)))
  (GET "/prova" [] (friend/authorize #{:permission.privilege/admin} "Olá!"))
  (GET "/pravo" [] (friend/authorize #{:permission.privilege/unobtainium} "Alô!"))
  (GET "/privo" [] (friend/authorize #{:scope/national} "Ei!"))
  (GET "/edit/:id" [id]
       (rum/render-static-markup (draft-js/edit id (get (es/load-doc id) "contents"))))
  (GET "/view/:id" [id]
       (some-> id
               es/load-doc
               (get "contents")
               (json/read-str :key-fn keyword)
               draft-js/view
               rum/render-static-markup))
  (friend/logout (GET "/abur" [] "OK, tás fora."))
  (resources "/")
  (not-found "U-lo?"))

(def ring-app
  (-> ring-handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn auth/load-credentials)
                            :workflows [(wflows/interactive-form)]
                            :login-uri auth/login-uri
                            :unauthorized-handler auth/unauthorized-handler})
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      wrap-keyword-params
      wrap-params
      wrap-expand-headers))

(def webroot (apigw/ionize ring-app))
