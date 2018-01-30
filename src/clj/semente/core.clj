;;; Compojure and Sente routing.

(ns semente.core
  (:gen-class)
  (:require [cemerick.friend :as friend]
            [cemerick.friend
             (workflows :as workflows)
             (credentials :as creds)]
            [compojure.core :refer (defroutes ANY GET POST)]
            [compojure.route :refer (files not-found resources)]
            [org.httpkit.server :as http-kit]
            [semente.nacional :refer (quem-somos principios)]
            [semente.sente :as sente]
            [semente.util :as util]
            [ring.middleware.defaults :refer (wrap-defaults site-defaults api-defaults)]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [rum.core :as rum]
            [clojure.java.io :as io]))

(defmethod sente/client-msg-handler :semente/quem-somos
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "client msg handler")
  (when ?reply-fn
    (?reply-fn
     {:body
      (slurp (io/resource "quem-somos.html"))})))

(def users {"root" {:username "root"
                    :password (creds/hash-bcrypt "admin_password")
                    :roles #{::admin}}
            "jane" {:username "jane"
                    :password (creds/hash-bcrypt "user_password")
                    :roles #{::user}}})

(defn pagina [req conteudos]
  {:status 200
   :headers {"content-type" "text/html"}
   :session (:session req)
   :body (rum/render-html
          [:html
           [:head [:title "Escola de Ensino Galego Semente"]
            [:link {:rel :stylesheet :href "https://fonts.googleapis.com/css?family=Ubuntu"}]
            [:link {:rel :stylesheet :href "/css/semente.css"}]
            [:link {:rel :stylesheet :href "/css/garden.css"}]]
           [:body
            (if util/in-development?
              [:div#app_container "Wonderful things would happen here if you had Javascript enabled..."]
              conteudos)]
           [:script {:type "text/javascript" :src "/js/main.js"}]
           [:script {:type "text/javascript"}
            (str "semente.core."
                 (if util/in-development? "devmain" "main")
                 "();")]])})

(defn quill-test []
  {:status 200
   :headers {"content-type" "text/html"}
   :body (rum/render-html
          [:html
           [:head [:title "Provando..."]
            [:link {:rel :stylesheet :href "https://fonts.googleapis.com/css?family=Ubuntu"}]
            [:link {:rel :stylesheet :href "https://cdn.quilljs.com/1.2.5/quill.snow.css"}]
            [:link {:rel :stylesheet :href "/css/semente.css"}]
            [:link {:rel :stylesheet :href "/css/garden.css"}]]
           [:body
            [:div#app_container "Wonderful things would happen here if you had Javascript enabled..."]]
           [:script {:type "text/javascript" :src "/js/main.js"}]
           [:script {:type "text/javascript"} "semente.core.quillmain();"]])})

(defn login [_]
  {:status 200
   :headers {"content-type" "text/html"}
   :body (rum/render-html
          [:html
           [:head [:title "Quem es?"]]
           [:body
            [:form {:method "POST" :action "/login"}
             [:input {:name "username" :type :text}]
             [:input {:name "password" :type :password}]
             [:input {:name "submit" :type "submit" :value "Manda!"}]]]])})

(defn secreto [req]
  {:status 200
   :headers {"content-type" "text/html"}
   :body (rum/render-html
          [:html [:body "olá!"]])})


(defroutes handler
  (GET "/" req (pagina req (quem-somos (slurp (io/resource "quem-somos.html")))))
  (GET "/login" [] login)
  (GET "/secret" req (friend/authorize #{::admin} (secreto req)))
  (GET "/nacional/quem-somos" req (pagina req (quem-somos (slurp (io/resource "quem-somos.html")))))
  (GET "/nacional/principios" req (pagina req (principios)))
  (GET "/quill" [] (quill-test))
  (friend/logout (ANY "/logout" request (ring.util.response/redirect "/")))
  ;; sente
  (GET  "/chsk" req sente/ring-ajax-get-or-ws-handshake)
  (POST "/chsk" req sente/ring-ajax-post)
  (resources (if util/in-development? "/public" "/"))
  (files "/")
  (not-found "Not found"))

(def app
  (-> handler
      (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn users)
                            :workflows [(workflows/interactive-form)]})
      (wrap-keyword-params)
      (wrap-params)
      (wrap-session)))

(if util/in-development?
  (sente/start-router!))

(defn -main []
  (sente/start-router!)
  (http-kit/run-server app {:port 8080}))
