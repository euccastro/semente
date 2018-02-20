(ns semente.mock-doc-store)


(defn store []
  (let [storage (atom {})]
    {:store-fn (fn [k contents]
                 (swap! storage assoc k contents))
     :fetch-fn (fn [k] (get @storage k))}))

(defn stores []
  {:public (store)
   :private (store)})
