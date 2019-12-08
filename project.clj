(defproject semente "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[appliedscience/js-interop "0.1.21"]
                 [buddy "2.0.0"]
                 [ch.qos.logback/logback-classic "1.2.3"]
                 [cheshire "5.8.1"]
                 [cljs-ajax "0.8.0"]
                 [clojure.java-time "0.3.2"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [com.google.api-client/google-api-client "1.30.6"]
                 [com.google.apis/google-api-services-drive "v3-rev110-1.23.0"]
                 [com.google.guava/guava "25.1-jre"]
                 [com.google.javascript/closure-compiler-unshaded "v20190618" :scope "provided"]
                 [cprop "0.1.14"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [expound "0.7.2"]
                 [funcool/struct "1.4.0"]
                 [juxt/crux-core "19.09-1.5.0-alpha"]
                 [kee-frame "0.3.3" :exclusions [metosin/reitit-core org.clojure/core.async]]
                 [lambdaisland/garden-watcher "0.3.5"]
                 [luminus-aleph "0.1.6"]
                 [luminus-transit "0.1.1"]
                 [luminus/ring-ttl-session "0.3.3"]
                 [markdown-clj "1.10.0"]
                 [metosin/muuntaja "0.6.4"]
                 [metosin/reitit "0.3.9"]
                 [metosin/ring-http-response "0.9.1"]
                 [mount "0.1.16"]
                 [nrepl "0.6.0"]
                 [org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520" :scope "provided"]
                 [org.clojure/core.async "0.4.500"]
                 [org.clojure/google-closure-library "0.0-20190213-2033d5d9" :scope "provided"]
                 [org.clojure/tools.cli "0.4.2"]
                 [org.clojure/tools.logging "0.5.0"]
                 [org.webjars.npm/bulma "0.7.5"]
                 [org.webjars.npm/material-icons "0.3.0"]
                 [org.webjars/webjars-locator "0.36"]
                 [re-frame "0.10.8"]
                 [reagent "0.8.1"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.7.1"]
                 [ring/ring-defaults "0.3.2"]
                 [selmer "1.12.14"]
                 [thheller/shadow-cljs "2.8.39" :scope "provided"]]

  :min-lein-version "2.0.0"

  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :test-paths ["test/clj"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"
  :main ^:skip-aot semente.core

  :plugins [[lein-shadow "0.1.5"]]
  :clean-targets ^{:protect false}
  [:target-path "target/cljsbuild"]
  :shadow-cljs
  {:nrepl {:port 7002
           :middleware [refactor-nrepl.middleware/wrap-refactor]}
   :builds
   {:app
    {:target :browser
     :output-dir "target/cljsbuild/public/js"
     :asset-path "/js"
     :modules {:app {:entries [semente.app]}}
     :devtools
     {:watch-dir "resources/public" :preloads [re-frisk.preload]}
     :dev
     {:closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}}}
    :test
    {:target :node-test
     :output-to "target/test/test.js"
     :autorun true}}}

  :npm-deps [[shadow-cljs "2.8.39"]
             [create-react-class "15.6.3"]
             [react "16.8.6"]
             [react-dom "16.8.6"]
             [prosemirror-commands "1.1.2"]
             [prosemirror-example-setup "1.1.2"]
             [prosemirror-history "1.1.2"]
             [prosemirror-keymap "1.1.3"]
             [prosemirror-model "1.8.2"]
             [prosemirror-schema-basic "1.1.2"]
             [prosemirror-schema-list "1.1.2"]
             [prosemirror-state "1.3.2"]
             [prosemirror-transform "1.2.2"]
             [prosemirror-view "1.13.4"]]

  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["shadow" "release" "app"]]

             :aot :all
             :uberjar-name "semente.jar"
             :source-paths ["env/prod/clj" "env/prod/cljs"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/dev :project/test :profiles/test]

   :project/dev  {:jvm-opts ["-Dconf=dev-config.edn"]
                  :dependencies [[binaryage/devtools "0.9.10"]
                                 [cider/piggieback "0.4.1"]
                                 [garden "1.3.9"]
                                 [pjstadig/humane-test-output "0.9.0"]
                                 [prone "2019-07-08"]
                                 [re-frisk "0.5.4.1"]
                                 [ring/ring-devel "1.7.1"]
                                 [ring/ring-mock "0.4.0"]]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.24.1"]]


                  :source-paths ["env/dev/clj" "env/dev/cljs" "test/cljs"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:jvm-opts ["-Dconf=test-config.edn"]
                  :resource-paths ["env/test/resources"]}
   :profiles/dev {}
   :profiles/test {}})
