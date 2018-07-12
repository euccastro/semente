(ns semente.core
  (:require
   [clojure.data.json :as json]
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.pprint :as pp]
   [datomic.client.api :as d]
   [datomic.ion.lambda.api-gateway :as apigw]
   ;; [cemerick.friend :as friend]
   ;; [cemerick.friend.workflows :as wflows]
   ;; [cemerick.friend.credentials :as creds]
   [ring.middleware.keyword-params :refer (wrap-keyword-params)]
   [ring.middleware.params :refer (wrap-params)]
   [ring.middleware.session :refer (wrap-session)]
   [ring.middleware.session.cookie :refer (cookie-store)]
   [clojure.string :as str]))

(def get-conn
  (memoize #(d/connect
             (d/client {:server-type :ion
                        :region "eu-central-1"
                        :system "deitomique"
                        :query-group "deitomique"
                        :endpoint "http://entry.deitomique.eu-central-1.datomic.net:8182/"
                        :proxy-port 8182})
             {:db-name "semente"})))

(comment
  (def users {"root" {:username "root"
                      :password (creds/hash-bcrypt "admin_password")
                      :roles #{::admin}}
              "jane" {:username "jane"
                      :password (creds/hash-bcrypt "user_password")
                      :roles #{::user}}}))

(defn ring-handler
  [{:keys [headers body uri params session]}]
  (let [count (get session :counter 0)]
    {:status 200
     :headers {"Content-Type" "text/plain"}
     :body (str "Olá " count "!")
     :session (assoc session :counter (inc count))}))


(defn extract-nonletters [s]
  (filter (fn [[_ c]] (= (str/lower-case c) (str/upper-case c)))
          (map-indexed vector s)))

(defn reinsert-chars* [accum src i0 pairs]
  (if (empty? pairs)
    (concat accum src)
    (let [[i c] (first pairs)
          [before after] (split-at (- i i0) src)]
      (recur (concat accum before [c])
             after
             (+ i 1)
             (rest pairs)))))

(defn reinsert-chars [s pairs]
  (reinsert-chars* '() s 0 pairs))

(defn warp-letters-case [n s]
  (when (<= (Math/pow 2 (count s)) n)
    ;; XXX try adding spaces?
    (throw (RuntimeException. "Not enough characters!")))
  (map-indexed
   (fn [i c]
     ((if (= 0 (bit-and n (bit-shift-left 1 i)))
        str/lower-case
        str/upper-case)
      c))
   s))

(defn warp-case [n s]
  (let [nonletters (extract-nonletters s)
        letters (remove (into #{} (map second nonletters)) s)
        warped-letters (warp-letters-case n letters)]
    (apply str (reinsert-chars warped-letters nonletters))))

(comment
  (extract-nonletters "abcd-efgh-ijkl-mnop-qrst-uvwx")
  (warp-case 1 "abcd-efgh-ijkl-mnop-qrst-uvwx"))

(defn expand-header [xf]
  (fn
    ([] (xf))
    ([result] (xf result))
    ([result [k v :as input]]
     (if (string? v)
       (xf result input)
       (reduce xf result (map-indexed (fn [i s] [(warp-case i k) s]) v))))))

(defn expand-headers
  [handler]
  (fn [req]
    (update (handler req) :headers #(into {} expand-header %))))

(def ring-app
  (-> ring-handler
      (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
      expand-headers
      wrap-keyword-params
      wrap-params))

(comment
  (def ring-app
    (-> ring-handler
        (wrap-defaults site-defaults)))
  (def ring-app
    (-> ring-handler
        (friend/authenticate {:credential-fn (partial creds/bcrypt-credential-fn users)
                              :workflows [(wflows/interactive-form)]})
        (wrap-defaults site-defaults))))

(def webroot (apigw/ionize ring-app))

(comment
  (ring-app {:server-port 8088
             :server-name "127.0.0.1"
             :uri "http://semente.gal/ola"
             :scheme :http
             :request-method :get
             :headers {}
             :remote-addr "8.1.2.3"})

  )
