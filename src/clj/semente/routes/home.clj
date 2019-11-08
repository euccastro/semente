(ns semente.routes.home
  (:require
   [clojure.java.io :as io]
   [ring.util.http-response :as response]
   [semente.auth :as auth]
   [semente.db.core :as db]
   [semente.layout :as layout]
   [semente.middleware :as middleware]))

(defn home-page [request]
  (layout/render request "home.html"))

(defn process-login [{{:keys [username password]} :params
                      session :session}]
  (let [{:keys [crux.db/id user/pass-hash]}
        (db/user-entity db/crux username)]
    (cond
      (not id) (layout/ok "Nom me soas")
      (not (auth/check-password password pass-hash)) (layout/ok "Nom es ti.")
      :else (-> (layout/ok "Quanto tempo!")
                (assoc :session
                       (assoc session :identity id))))))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/login" {:get (fn [_] (layout/login-page))
              :post process-login}]
   ["/logout" {:get (fn [{:keys [session]}]
                      (-> (layout/ok "Bye!")
                          (assoc :session (dissoc session :identity))))}]
   ["/session" {:get (fn [{:keys [session]}]
                       (layout/ok (pr-str session)))}]
   ["/secret" {:middleware [middleware/wrap-restricted]
               :get (fn [_] (layout/ok "You got it!"))}]
   ["/docs" {:get (fn [_]
                    (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                        (response/header "Content-Type" "text/plain; charset=utf-8")))}]])

