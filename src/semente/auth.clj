(ns semente.auth
  (:require [cemerick.friend.credentials :as creds]
            [datomic.client.api :as d]
            ring.util.response
            [rum.core :as rum]
            [semente.datomic :refer (conn)]))

(def login-uri "/entra")

(defn load-credentials [username]
  (let [m (d/pull (d/db (conn))
                  '[:user/password-hash
                    {:user/permissions [:permission/key]}
                    {:team/_members [:team/slug]}]
                  [:user/name username])]
    (when (not-empty m)
      {:username username
       :password (:user/password-hash m)
       :roles (into #{:permission/any}
                    (concat
                     (map :permission/key (:user/permissions m))
                     (map #(keyword "permission.team-member" (:team/slug %))
                          (:team/_members m))))})))

(defn- username
  [form-params params]
  (or (get form-params "username") (:username params "")))

(defn unauthenticated-handler
  [{:keys [form-params params]}]
  (ring.util.response/redirect
   (str login-uri "?erro=nom-quadra&utente="
        (java.net.URLEncoder/encode (username form-params params)))))

(defn permission-key->display-name [k]
  (if (= (namespace k) "permission.team-member")
    (let [team-slug (name k)
          team-name (ffirst
                     (d/q '[:find ?n
                            :in $ ?s
                            :where
                            [?t :team/slug ?s]
                            [?t :team/name ?n]]
                          (d/db (conn))
                          team-slug))]
      (str "pertença à equipa \"" team-name "\""))
    (str "o permisso "
         (ffirst
          (d/q '[:find ?n
                 :in $ ?k
                 :where
                 [?p :permission/key ?k]
                 [?p :permission/display-name ?n]]
               (d/db (conn))
               k)))))

(defn unauthorized-handler [{{:keys [cemerick.friend/required-roles]} :cemerick.friend/authorization-failure
                             :as req}]
  ;; XXX: mirar nomes de :permission.team-member/...
  (let [required-permission-names
        (map permission-key->display-name required-roles)]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body (rum/render-static-markup
            [:html
             [:head
              [:meta {:char-set "UTF-8"}]
              [:title "Erro de autorizaçom"]]
             [:body
              [:h1 "Erro de autorizaçom"]
              (if (= (count required-permission-names) 1)
                [:div "Esta página requer "
                 (first required-permission-names)
                 "."]
                [:div "Esta página requer:"
                 [:ul
                  (for [p required-permission-names]
                    [:li p])]])]])}))

(rum/defc login-form [erro utente]
  [:html
   [:head [:meta {:charset "UTF-8"}]]
   [:body
    [:h1 "Quem és?"]
    (if erro
      ;; XXX: estilo
      [:div.erro {:style {:color :red}} "Nom conheço " [:em utente] " ou a senha nom quadra."]
      [:div "Esta página requer autenticaçom."])
    [:form {:action login-uri :method "post"}
     [:div
      [:div "utente"]
      [:input {:type "text" :name "username" :value utente}]]
     [:div
      [:div "senha"]
      [:input {:type "password" :name "password"}]]
     [:div
      [:input {:type "submit"}]]]]])

(rum/defc get-muda-senha [erro utente]
  (rum/render-static-markup
   [:html
    [:head [:meta {:charset "UTF-8"}]]
    [:body
     [:h1 "Mudar senha"]
     (case erro
       ;; XXX: estilo
       "senha-nova-nom-quadra"
       [:div.erro {:style {:color :red}} "A senha nova nom quadra com a confirmaçom"]
       "senha-velha-nom-quadra"
       [:div.erro {:style {:color :red}} "Nom conheço " [:em utente] " ou a senha velha nom quadra."]
       nil
       [:div "Entra a senha que tés e a que queres."])
     [:form {:action "/mudar-senha" :method "post"}
      [:div
       [:div "utente"]
       [:input {:type "text" :name "username" :value utente}]]
      [:div
       [:div "senha velha"]
       [:input {:type "password" :name "old-password"}]]
      [:div
       [:div "senha nova"]
       [:input {:type "password" :name "new-password"}]]
      [:div
       [:div "confirma a senha nova"]
       [:input {:type "password" :name "new-password-confirmation"}]]
      [:div
       [:input {:type "submit"}]]]]]))

(rum/defc post-muda-senha [username old-password new-password new-password-confirmation]
  (if-let [error
           (cond
             (not= new-password new-password-confirmation)
             "senha-nova-nom-quadra"
             (not (creds/bcrypt-verify
                   old-password
                   (:password (load-credentials username))))
             "senha-velha-nom-quadra"
             :else nil)]
    (ring.util.response/redirect
     (str "/mudar-senha?erro=" error "&utente="
          (java.net.URLEncoder/encode username)))
    (do
      (d/transact (conn)
                  {:tx-data [[:db/add [:user/name username]
                              :user/password-hash (creds/hash-bcrypt new-password)]]})
      (rum/render-static-markup
       [:html
        [:head [:meta {:charset "UTF-8"}]]
        [:body
         [:div "Senha mudada!"]]]))))

(comment
  ;; to set a password:
  (d/transact (conn) {:tx-data [[:db/add [:user/name "estevo"] :user/password-hash (creds/hash-bcrypt "abcd")]]})
  (creds/bcrypt-verify "ab cd" "$2a$10$y23.gdkHPwRsH.6hMtmQ6OWqhi.BW2x/gBE3XHuGsQSWKj0g4uhsi")
  (load-credentials "estevo")
  )

(defn login [erro utente]
  (rum/render-static-markup (login-form erro utente)))
