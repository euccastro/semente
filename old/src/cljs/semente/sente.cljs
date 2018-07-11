(ns semente.sente
  (:require [cljs.core.async :as async  :refer (<! >! put! chan)]
            [taoensso.sente :as sente :refer (cb-success?)])
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

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

(def init-chan (chan 1))

(defn wrapped-server-msg-handler
  [{:as ev-msg :keys [id ?data event]}]
  (server-msg-handler ev-msg))

(defmethod server-msg-handler :default
  [{:as ev-msg :keys [event]}]
  (.log js/console (str "Unhandled klient event: " event)))

(defmethod server-msg-handler :chsk/state
  [{[_ {:keys [uid] :as new-state-map}] :?data}]
  (if (:first-open? new-state-map)
    (do
      (.log js/console "FERST OPN")
      (put! init-chan uid))
    (.log js/console (str "Channel socket state change: " new-state-map))))

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
