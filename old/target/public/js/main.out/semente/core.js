// Compiled by ClojureScript 1.9.946 {}
goog.provide('semente.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljsjs.quill');
goog.require('clojure.string');
goog.require('semente.sente');
goog.require('semente.nacional');
goog.require('rum.core');
goog.require('taoensso.sente');
cljs.core.enable_console_print_BANG_.call(null);
semente.core.hello = rum.core.build_defc.call(null,(function (x){
var attrs35852 = ["hello ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35852))?sablono.interpreter.attributes.call(null,attrs35852):null),((cljs.core.map_QMARK_.call(null,attrs35852))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35852)], null)));
}),null,"hello");
semente.core.main = (function semente$core$main(){
cljs.core.println.call(null,"Hello!");

semente.sente.start_once_BANG_.call(null);

return rum.core.mount.call(null,semente.core.hello.call(null,"me"),document.getElementById("app_container"));
});
goog.exportSymbol('semente.core.main', semente.core.main);
semente.core.devmain = (function semente$core$devmain(){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"Hello from devmain!");

var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__){
return (function (state_35866){
var state_val_35867 = (state_35866[(1)]);
if((state_val_35867 === (1))){
var inst_35853 = cljs.core.enable_console_print_BANG_.call(null);
var inst_35854 = semente.sente.start_router_BANG_.call(null);
var inst_35855 = cljs.core.println.call(null,"start-router returned",inst_35854);
var state_35866__$1 = (function (){var statearr_35868 = state_35866;
(statearr_35868[(7)] = inst_35853);

(statearr_35868[(8)] = inst_35855);

return statearr_35868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35866__$1,(2),semente.sente.init_chan);
} else {
if((state_val_35867 === (2))){
var inst_35857 = (state_35866[(2)]);
var inst_35858 = cljs.core.println.call(null,"fetch returned",inst_35857);
var inst_35859 = cljs.core.async.close_BANG_.call(null,semente.sente.init_chan);
var inst_35860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35861 = [new cljs.core.Keyword("semente","quem-somos","semente/quem-somos",-1012843520),null];
var inst_35862 = (new cljs.core.PersistentVector(null,2,(5),inst_35860,inst_35861,null));
var inst_35863 = (function (){return ((function (inst_35857,inst_35858,inst_35859,inst_35860,inst_35861,inst_35862,state_val_35867,c__12621__auto__){
return (function (ret){
if(cljs.core.not.call(null,taoensso.sente.cb_success_QMARK_.call(null,ret))){
return rum.core.mount.call(null,semente.core.hello.call(null,cljs.core.pr_str.call(null,ret)),document.getElementById("app_container"));
} else {
return rum.core.mount.call(null,semente.nacional.quem_somos.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ret)),document.getElementById("app_container"));
}
});
;})(inst_35857,inst_35858,inst_35859,inst_35860,inst_35861,inst_35862,state_val_35867,c__12621__auto__))
})();
var inst_35864 = semente.sente.send_BANG_.call(null,inst_35862,(30000),inst_35863);
var state_35866__$1 = (function (){var statearr_35869 = state_35866;
(statearr_35869[(9)] = inst_35858);

(statearr_35869[(10)] = inst_35859);

return statearr_35869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35866__$1,inst_35864);
} else {
return null;
}
}
});})(c__12621__auto__))
;
return ((function (switch__12533__auto__,c__12621__auto__){
return (function() {
var semente$core$devmain_$_state_machine__12534__auto__ = null;
var semente$core$devmain_$_state_machine__12534__auto____0 = (function (){
var statearr_35870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35870[(0)] = semente$core$devmain_$_state_machine__12534__auto__);

(statearr_35870[(1)] = (1));

return statearr_35870;
});
var semente$core$devmain_$_state_machine__12534__auto____1 = (function (state_35866){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_35866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e35871){if((e35871 instanceof Object)){
var ex__12537__auto__ = e35871;
var statearr_35872_35874 = state_35866;
(statearr_35872_35874[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35875 = state_35866;
state_35866 = G__35875;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
semente$core$devmain_$_state_machine__12534__auto__ = function(state_35866){
switch(arguments.length){
case 0:
return semente$core$devmain_$_state_machine__12534__auto____0.call(this);
case 1:
return semente$core$devmain_$_state_machine__12534__auto____1.call(this,state_35866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
semente$core$devmain_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = semente$core$devmain_$_state_machine__12534__auto____0;
semente$core$devmain_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = semente$core$devmain_$_state_machine__12534__auto____1;
return semente$core$devmain_$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__))
})();
var state__12623__auto__ = (function (){var statearr_35873 = f__12622__auto__.call(null);
(statearr_35873[(6)] = c__12621__auto__);

return statearr_35873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__))
);

return c__12621__auto__;
});
goog.exportSymbol('semente.core.devmain', semente.core.devmain);
semente.core.quill_config = new cljs.core.PersistentArrayMap(null, 2, ["theme","snow","modules",new cljs.core.PersistentArrayMap(null, 1, ["toolbar",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","italic",new cljs.core.PersistentArrayMap(null, 1, ["size",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["small",false,"grande","huge"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link","image"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clean"], null)], null)], null)], null);
semente.core.quillmain = (function semente$core$quillmain(){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"now I would show quill!");

return (
semente.core.quill = (new Quill("#app_container",cljs.core.clj__GT_js.call(null,semente.core.quill_config))))
;
});
goog.exportSymbol('semente.core.quillmain', semente.core.quillmain);

//# sourceMappingURL=core.js.map
