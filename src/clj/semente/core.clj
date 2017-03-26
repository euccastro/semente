;;; Compojure and Sente routing.

(ns semente.core
  (:gen-class)
  (:require [compojure.core :refer (defroutes GET POST)]
            [compojure.route :refer (files not-found resources)]
            [semente.sente :as sente]
            [semente.util :as util]
            [ring.middleware.defaults :refer (wrap-defaults site-defaults)]
            [rum.core :as rum]))

(def azul-semente "#009ca3")
(def verde-semente "#9eab05")

(defn root [req]
  {:status 200
   :headers {"content-type" "text/html"}
   :body (rum/render-html
          [:html
           [:head [:title "Escola de Ensino Galego Semente"]
            [:link {:rel :stylesheet :href "https://fonts.googleapis.com/css?family=Ubuntu"}]
            [:link {:rel :stylesheet :href "css/semente.css"}]]
           [:body {:style {:display :flex
                           :flex-direction :column
                           :align-items :center}}
            [:div {:style {:flex "1 1 960px"
                           :width "100%"
                           :max-width "960px"}}
             [:header {:style  {:display :flex
                                :justify-content :center
                                :align-items :flex-end}}
              [:img {:src "img/logo-nu.svg"
                     :style {:max-width "90%"
                             :padding-bottom "5%"
                             :max-height "100%"}}]]
             [:nav.container
              [:div.navlinks {:style {:padding "0.5rem"
                              :color :white
                              :background-color azul-semente
                              :display :flex
                              :justify-content :space-around
                              :align-items :center
                              :flex-wrap :wrap}}
               [:a {:href "#somos"} "Quem Somos"]
               [:a {:href "#ppios"} "Princípios"]
               [:a {:href "#hist"} "História"]
               [:a {:href "#rec"} "Recursos"]
               [:a {:href "#loja"} "Loja"]]
              [:div "Aqui iriam os breadcrumbs..."]]
             [:main.container "Conteúdo"
              [:article "Artigo1"]
              [:article "Artigo2"]
              [:aside "Porsierto..."]]
             [:footer.container "Pé"]
             [:div#app_container "Wonderful things would happen here if you had Javascript enabled..."]]]
           [:script {:type "text/javascript" :src "js/main.js"}]
           [:script {:type "text/javascript"} "semente.core.main();"]])})

(defroutes handler
  (GET "/" req (root req))
  ;; sente
  (GET  "/chsk" req sente/ring-ajax-get-or-ws-handshake)
  (POST "/chsk" req sente/ring-ajax-post)
  (resources (if util/in-development? "/public" "/"))
  (files "/")
  (not-found "Page not found."))

(def app
  (wrap-defaults handler site-defaults))

(if util/in-development?
  (sente/start-router!))

(defn -main []
  (sente/start-router!))
