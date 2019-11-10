(ns semente.layout.login
  (:require
   [semente.layout :as l]
   [hiccup.form :as form]
   [hiccup.page :refer [include-css]]
   [ring.util.anti-forgery :refer [anti-forgery-field]]))

;; XXX provar CSRF

(defn login-page
  []
  (l/ok-hiccup
   [:html
    [:head
     (include-css "css/jardim.css")]
    [:body
     [:h1 "ola"]
     [:h2 "provando"]
     [:h3 "que aplica"]
     (form/form-to
      [:post "/login"]
      (anti-forgery-field)
      (form/text-field {:placeholder "utente"} "username")
      (form/password-field {:placeholder "senha"} "password")
      (form/submit-button "login"))
     (l/recarrega-css)]]))
