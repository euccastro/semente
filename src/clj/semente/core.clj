;;; Compojure and Sente routing.

(ns semente.core
  (:gen-class)
  (:require [compojure.core :refer (defroutes GET POST)]
            [compojure.route :refer (files not-found resources)]
            [org.httpkit.server :as http-kit]
            [semente.nacional :refer (quem-somos principios)]
            [semente.sente :as sente]
            [semente.util :as util]
            [ring.middleware.defaults :refer (wrap-defaults site-defaults)]
            [rum.core :as rum]
            [clojure.java.io :as io]))

(defmethod sente/client-msg-handler :semente/quem-somos
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "client msg handler")
  (when ?reply-fn
    (?reply-fn
     {:body
      (slurp (io/resource "quem-somos.html"))})))

(defn pagina [conteudos]
  {:status 200
   :headers {"content-type" "text/html"}
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

(defroutes handler
  (GET "/" [] (pagina (quem-somos (slurp (io/resource "quem-somos.html")))))
  (GET "/nacional/quem-somos" [] (pagina (quem-somos (slurp (io/resource "quem-somos.html")))))
  (GET "/nacional/principios" [] (pagina (principios)))
  (GET "/quill" [] (quill-test))
  ;; sente
  (GET  "/chsk" req sente/ring-ajax-get-or-ws-handshake)
  (POST "/chsk" req sente/ring-ajax-post)
  (resources (if util/in-development? "/public" "/"))
  (files "/")
  (not-found "Not found"))

(def app
  (wrap-defaults handler site-defaults))

(if util/in-development?
  (sente/start-router!))

(defn -main []
  (sente/start-router!)
  (http-kit/run-server app {:port 8080}))
