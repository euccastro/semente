(ns semente.core
  (:require
   [compojure.core :refer (defroutes GET)]
   [compojure.route :refer (resources not-found)]
   [datomic.ion.lambda.api-gateway :as apigw]
   [cemerick.friend :as friend]
   [cemerick.friend.workflows :as wflows]
   [cemerick.friend.credentials :as creds]
   [ring.middleware.keyword-params :refer (wrap-keyword-params)]
   [ring.middleware.params :refer (wrap-params)]
   [ring.middleware.session :refer (wrap-session)]
   [ring.middleware.session.cookie :refer (cookie-store)]
   [clojure.string :as str]
   [net.icbink.expand-headers.core :refer (wrap-expand-headers)]
   [rum.core :as rum]))

(def users {"root" {:username "root"
                    :password (creds/hash-bcrypt "admin_password")
                    :roles #{::admin}}
            "jane" {:username "jane"
                    :password (creds/hash-bcrypt "user_password")
                    :roles #{::user}}})

(rum/defc login-form []
  [:html
   [:body
    [:form {:action "/login" :method "post"}
     [:div
      [:div "utente"]
      [:input {:type "text" :name "username"}]]
     [:div
      [:div "senha"]
      [:input {:type "password" :name "password"}]]
     [:div
      [:input {:type "submit"}]]]]])

(rum/defc edit [doc-name]
  [:html
   [:head
    [:link {:rel "stylesheet" :type "text/css" :href "/css/Draft.css"}]]
   [:body
    [:#app "Aqui iriam as tuas movidorras."]
    [:script {:src "/cljs-out/dev-main.js" :type "text/javascript"}]
    [:script {:type "text/javascript"  :dangerouslySetInnerHTML {:__html (str "semente.webmain.main(\"" doc-name "\");")}}]]])

(comment
  (defn ring-handler
    [{:keys [headers request-method body uri params session]}]
    (cond
      (and (= request-method :get) (= uri "/login"))
      {:status 200
       :headers {"Content-Type" "text/html"}
       :body (rum/render-static-markup (login-form))}
      (.startsWith uri "/edit/")
      {:status 200
       :headers {"Content-Type" "text/html"}
       :body (rum/render-static-markup (edit (subs uri (count "/edit/"))))})))

(defroutes ring-handler
  (GET "/prova" [] "Olá!")
  (GET "/edit/:id" [id] (rum/render-static-markup (edit id)))
  (resources "/")
  (not-found "U-lo?"))

(comment
  ;; auth stuff
  (friend/authorized? #{::admin ::user} friend/*identity*)
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Olá amo! 3"}
  :else
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (str "Olá plebeio! 7" uri)}
  )

(def ring-app
  (-> ring-handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn users)
                            :workflows [(wflows/interactive-form)]})
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      wrap-keyword-params
      wrap-params
      wrap-expand-headers))

(def webroot (apigw/ionize ring-app))
