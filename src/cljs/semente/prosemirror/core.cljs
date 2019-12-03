;; Agora mesmo assumimos que só hai um editor. Nom é difícil soportar máis do
;; que um, só hai que acrescentar o concepto de ID de editor e usá-lo nas várias
;; estruturas de dados, subscriçons, eventos, etc. Nom o fago por enquanto,
;; porque o desenho inicial para o web da Semente nom requer isso.
(ns semente.prosemirror.core
  (:require
   [applied-science.js-interop :as j]
   ["prosemirror-example-setup" :refer (exampleSetup)]
   ["prosemirror-model" :refer (Schema)]
   ["prosemirror-schema-basic" :refer (schema)]
   ["prosemirror-schema-list" :refer (addListNodes)]
   ["prosemirror-state" :refer (EditorState)]
   [semente.prosemirror.image :as image]))

(defn- change-node [nodes node-id changes]
  (j/call nodes
          :update
          node-id
          (-> (j/call nodes :get node-id)
              (js->clj :keywordize-keys true)
              (merge changes)
              clj->js)))

(defn- initial-schema []
  (Schema.
   (clj->js
    {:nodes (-> (j/get-in schema [:spec :nodes])
                (addListNodes "paragraph+" "block")
                (j/call :remove "code_block")
                (j/call :remove "horizontal_rule")
                (change-node "blockquote" {:content "paragraph+"})
                (change-node "image" image/schema-changes))
     :marks (-> schema
                (j/get-in [:spec :marks])
                (j/call :remove "code"))})))

(defn initial-editor-state []
  (.create
   EditorState
   (let [is (initial-schema)]
     #js {"schema" is
          "plugins" (exampleSetup #js{"schema" is
                                      "menuBar" false})})))


(comment

  @xxx
  (def $from (second @xxx))
  (.-marks $from)
  (def editor-state (last @xxx))
  (.rangeHasMark (.-doc es) from to )
  (def editor-state (initial-state))
  (def mark-name :strong)
  (def mt (mark-type editor-state :strong))
  )
