(ns semente.prosemirror.shared-state)

;; Este é um atalho para aceder ao `editor-view` desde vários lugares que o
;; precisam, sem complicar a relaçom de dependências entre outros namespaces.
(defonce editor-view (atom nil))
