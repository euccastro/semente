(ns semente.sente
  (:require [taoensso.sente :as sente :refer (cb-success?)]))

;; sente
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" {:type :ws})]
  (def chsk chsk)
  (def ch-chsk ch-recv)
  (def send! send-fn)
  (def chsk-state state))

(defmulti server-msg-handler
  :id ; Dispatch on event-id
  )

(defn wrapped-server-msg-handler
  [{:as ev-msg :keys [id ?data event]}]
  (server-msg-handler ev-msg))

(defmethod server-msg-handler :default
  [{:as ev-msg :keys [event]}]
  (.log js/console (str "Unhandled klient event: " event)))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
          (sente/start-client-chsk-router!
           ch-chsk wrapped-server-msg-handler)))

(let [d (delay (start-router!))]
  (defn start-once! []
    @d))
