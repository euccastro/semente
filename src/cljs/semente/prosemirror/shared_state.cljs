(ns semente.prosemirror.shared-state
  (:require [reagent.core :as r]))

;; Este é um atalho para aceder ao `editor-view` desde vários lugares que o
;; precisam, sem complicar a relaçom de dependências entre outros namespaces.
(defonce editor-view (atom nil))

(defonce orphan-components (atom {}))

(defn ^:dev/after-load remount-orphans []
  (doseq [[dom-el comp-spec] @orphan-components]
    (r/render comp-spec dom-el)))
