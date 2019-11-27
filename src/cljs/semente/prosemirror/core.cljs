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
   ["prosemirror-state" :refer (EditorState)]))

(defn initial-schema []
  (let [nodes (addListNodes (j/get-in schema [:spec :nodes])
                            "paragraph+"
                            "block")
        image (j/call nodes :get "image")]
    (Schema.
     (clj->js
      {:nodes (-> nodes
               (j/call :remove "code_block")
               (j/call :remove "horizontal_rule")
               (j/call :update "image" (-> image
                                           (js->clj :keywordize-keys true)
                                           (assoc :inline false)
                                           (assoc :group :block)
                                           (assoc :marks "")
                                           clj->js)))
       :marks (-> schema
                  (j/get-in [:spec :marks])
                  (j/call :remove "code"))}))))

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
