// Compiled by ClojureScript 1.9.946 {}
goog.provide('semente.sente');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
var map__35827_35829 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443)], null));
var map__35827_35830__$1 = ((((!((map__35827_35829 == null)))?((((map__35827_35829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35827_35829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35827_35829):map__35827_35829);
var chsk_35831 = cljs.core.get.call(null,map__35827_35830__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_35832 = cljs.core.get.call(null,map__35827_35830__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_35833 = cljs.core.get.call(null,map__35827_35830__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_35834 = cljs.core.get.call(null,map__35827_35830__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
semente.sente.chsk = chsk_35831;

semente.sente.ch_chsk = ch_recv_35832;

semente.sente.send_BANG_ = send_fn_35833;

semente.sente.chsk_state = state_35834;
if(typeof semente.sente.server_msg_handler !== 'undefined'){
} else {
semente.sente.server_msg_handler = (function (){var method_table__8934__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8935__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8936__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8937__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8938__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"semente.sente","server-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8938__auto__,method_table__8934__auto__,prefer_table__8935__auto__,method_cache__8936__auto__,cached_hierarchy__8937__auto__));
})();
}
semente.sente.init_chan = cljs.core.async.chan.call(null,(1));
semente.sente.wrapped_server_msg_handler = (function semente$sente$wrapped_server_msg_handler(p__35835){
var map__35836 = p__35835;
var map__35836__$1 = ((((!((map__35836 == null)))?((((map__35836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35836):map__35836);
var ev_msg = map__35836__$1;
var id = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"event","event",301435442));
return semente.sente.server_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,semente.sente.server_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35838){
var map__35839 = p__35838;
var map__35839__$1 = ((((!((map__35839 == null)))?((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35839):map__35839);
var ev_msg = map__35839__$1;
var event = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log(["Unhandled klient event: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''));
}));
cljs.core._add_method.call(null,semente.sente.server_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__35841){
var map__35842 = p__35841;
var map__35842__$1 = ((((!((map__35842 == null)))?((((map__35842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35842):map__35842);
var vec__35843 = cljs.core.get.call(null,map__35842__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var _ = cljs.core.nth.call(null,vec__35843,(0),null);
var map__35846 = cljs.core.nth.call(null,vec__35843,(1),null);
var map__35846__$1 = ((((!((map__35846 == null)))?((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35846):map__35846);
var new_state_map = map__35846__$1;
var uid = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
console.log("FERST OPN");

return cljs.core.async.put_BANG_.call(null,semente.sente.init_chan,uid);
} else {
return console.log(["Channel socket state change: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_state_map)].join(''));
}
}));
if(typeof semente.sente.router_ !== 'undefined'){
} else {
semente.sente.router_ = cljs.core.atom.call(null,null);
}
semente.sente.stop_router_BANG_ = (function semente$sente$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,semente.sente.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
semente.sente.start_router_BANG_ = (function semente$sente$start_router_BANG_(){
semente.sente.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,semente.sente.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,semente.sente.ch_chsk,semente.sente.wrapped_server_msg_handler));
});
var d_35849 = (new cljs.core.Delay((function (){
return semente.sente.start_router_BANG_.call(null);
}),null));
semente.sente.start_once_BANG_ = ((function (d_35849){
return (function semente$sente$start_once_BANG_(){
return cljs.core.deref.call(null,d_35849);
});})(d_35849))
;

//# sourceMappingURL=sente.js.map
