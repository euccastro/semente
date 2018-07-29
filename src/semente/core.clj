(ns semente.core
  (:require
   ;;[clojure.data.json :as json]
   ;;[clojure.edn :as edn]
   ;;[clojure.java.io :as io]
   ;;[clojure.pprint :as pp]
   ;;[datomic.client.api :as d]
   [datomic.ion.lambda.api-gateway :as apigw]
   ;;[cemerick.friend :as friend]
   ;;[cemerick.friend.workflows :as wflows]
   ;;[cemerick.friend.credentials :as creds]
   ;;[ring.middleware.keyword-params :refer (wrap-keyword-params)]
   ;;[ring.middleware.params :refer (wrap-params)]
   ;;[ring.middleware.session :refer (wrap-session)]
   ;;[ring.middleware.session.cookie :refer (cookie-store)]
   ;;[clojure.string :as str]
   ;;[net.icbink.expand-headers.core :refer (wrap-expand-headers)]
   [rum.core :as rum]
   ))

(defn ring-app
  [{:keys [headers body uri params session]}]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (rum/render-static-markup
          [:html
           [:body "Olá plebeio!"
            [:div.app "(O app iria aqui.)"]
            [:script {:src "cljs-out/dev-main.js" :type "text/javascript"}]]])})

(def webroot (apigw/ionize ring-app))
