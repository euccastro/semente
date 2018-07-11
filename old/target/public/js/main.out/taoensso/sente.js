// Compiled by ClojureScript 1.9.946 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__28833 = x;
var ev_id = cljs.core.nth.call(null,vec__28833,(0),null);
var _ = cljs.core.nth.call(null,vec__28833,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var errs = temp__4657__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__4655__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var errs = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__7965__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__7965__auto__){
var and__7965__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__7965__auto____$1){
var map__28840 = x;
var map__28840__$1 = ((((!((map__28840 == null)))?((((map__28840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28840):map__28840);
var ch_recv = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__28840__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__7965__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__7965__auto____$2){
var and__7965__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__7965__auto____$3){
var and__7965__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__7965__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__7965__auto____$4;
}
} else {
return and__7965__auto____$3;
}
} else {
return and__7965__auto____$2;
}
} else {
return and__7965__auto____$1;
}
} else {
return and__7965__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__7965__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__7965__auto__){
var and__7965__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__7965__auto____$1){
var map__28846 = x;
var map__28846__$1 = ((((!((map__28846 == null)))?((((map__28846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846):map__28846);
var ch_recv = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__28846__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__7965__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__7965__auto____$2){
var and__7965__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__7965__auto____$3){
var and__7965__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__7965__auto____$4){
var and__7965__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__7965__auto____$5){
var and__7965__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__7965__auto____$6){
var and__7965__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__7965__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__7965__auto____$7;
}
} else {
return and__7965__auto____$6;
}
} else {
return and__7965__auto____$5;
}
} else {
return and__7965__auto____$4;
}
} else {
return and__7965__auto____$3;
}
} else {
return and__7965__auto____$2;
}
} else {
return and__7965__auto____$1;
}
} else {
return and__7965__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__28848){
var map__28849 = p__28848;
var map__28849__$1 = ((((!((map__28849 == null)))?((((map__28849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28849):map__28849);
var ev_msg = map__28849__$1;
var event = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__28851 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__28851,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__28851,(1),null);
var valid_event = vec__28851;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__28851,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__28849,map__28849__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__28851,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__28849,map__28849__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,754328166);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e28857){var t = e28857;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,208,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-989947679);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__28854 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__28854,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__28854,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,214,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__28854,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__28854,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1772732677);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__28859 = arguments.length;
switch (G__28859) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-51206859);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1747644090);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__28861_SHARP_){
if(!((p1__28861_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__28861_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__28861_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__28861_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__28861_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28862){if((e28862 instanceof Error)){
var e = e28862;
return e;
} else {
throw e28862;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",243,"((fn* [p1__28861#] (satisfies? interfaces/IPacker p1__28861#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29152 = arguments.length;
var i__9149__auto___29153 = (0);
while(true){
if((i__9149__auto___29153 < len__9148__auto___29152)){
args__9155__auto__.push((arguments[i__9149__auto___29153]));

var G__29154 = (i__9149__auto___29153 + (1));
i__9149__auto___29153 = G__29154;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__28867){
var vec__28868 = p__28867;
var map__28871 = cljs.core.nth.call(null,vec__28868,(0),null);
var map__28871__$1 = ((((!((map__28871 == null)))?((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28871):map__28871);
var recv_buf_or_n = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__7977__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var or__7977__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__7977__auto____$1)){
return or__7977__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28873){if((e28873 instanceof Error)){
var e = e28873;
return e;
} else {
throw e28873;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28874){if((e28874 instanceof Error)){
var e = e28874;
return e;
} else {
throw e28874;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_29155 = (function (){try{if(((function (vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__28864_SHARP_){
if(!((p1__28864_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__28864_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__28864_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__28864_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__28864_SHARP_);
}
});})(vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28875){if((e28875 instanceof Error)){
var e = e28875;
return e;
} else {
throw e28875;

}
}})();
if((e_29155 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",314,"((fn* [p1__28864#] (satisfies? interfaces/IServerChanAdapter p1__28864#)) web-server-ch-adapter)",web_server_ch_adapter,e_29155,null);
}

var max_ms_29156 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_29156)){
throw cljs.core.ex_info.call(null,[":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_29156)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_29156], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__7977__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__29157 = null;
var G__29157__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__28877 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__28877,(0),null);
var _udt = cljs.core.nth.call(null,vec__28877,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__29157__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__29157 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__29157__3.call(this,conn_type,uid,client_id);
case 4:
return G__29157__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29157.cljs$core$IFn$_invoke$arity$3 = G__29157__3;
G__29157.cljs$core$IFn$_invoke$arity$4 = G__29157__4;
return G__29157;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28880){if((e28880 instanceof Error)){
var e = e28880;
return e;
} else {
throw e28880;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",358,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__28881){
var map__28882 = p__28881;
var map__28882__$1 = ((((!((map__28882 == null)))?((((map__28882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28882):map__28882);
var old_m = map__28882__$1;
var ws = cljs.core.get.call(null,map__28882__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__28882__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__28882__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__28884 = conn_type;
var G__28884__$1 = (((G__28884 instanceof cljs.core.Keyword))?G__28884.fqn:null);
switch (G__28884__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28884__$1)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28885){if((e28885 instanceof Error)){
var e = e28885;
return e;
} else {
throw e28885;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",375,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__28886){
var map__28887 = p__28886;
var map__28887__$1 = ((((!((map__28887 == null)))?((((map__28887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28887):map__28887);
var old_m = map__28887__$1;
var ws = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29159__delegate = function (user_id,ev,p__28889){
var vec__28890 = p__28889;
var map__28893 = cljs.core.nth.call(null,vec__28890,(0),null);
var map__28893__$1 = ((((!((map__28893 == null)))?((((map__28893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);
var opts = map__28893__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_29160 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __29161 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,401,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29160,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_29160,ev], null);
});})(uid_29160,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,931298451);
var __29162__$1 = (cljs.core.truth_(uid_29160)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __29163__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_29164 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__29165 = ((function (uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__28895 = cljs.core.get.call(null,m,uid_29160);
var ___$3 = cljs.core.nth.call(null,vec__28895,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__28895,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_29164)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_29160),cljs.core.get.call(null,m,uid_29160));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__28898 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__28898,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__28898,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",428,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",429,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,432,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__28898,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__28898,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,138217703);

var G__28901 = conn_type;
var G__28901__$1 = (((G__28901 instanceof cljs.core.Keyword))?G__28901.fqn:null);
switch (G__28901__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_29160,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_29160,buffered_evs_ppstr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28901__$1)].join('')));

}
} else {
return null;
}
});})(uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,441,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_29160], null);
});})(uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1353572870);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__28902_29167 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_29160], null))));
var chunk__28903_29168 = null;
var count__28904_29169 = (0);
var i__28905_29170 = (0);
while(true){
if((i__28905_29170 < count__28904_29169)){
var vec__28906_29171 = cljs.core._nth.call(null,chunk__28903_29168,i__28905_29170);
var _QMARK_sch_29172 = cljs.core.nth.call(null,vec__28906_29171,(0),null);
var _udt_29173 = cljs.core.nth.call(null,vec__28906_29171,(1),null);
var temp__4657__auto___29174 = _QMARK_sch_29172;
if(cljs.core.truth_(temp__4657__auto___29174)){
var sch_29175 = temp__4657__auto___29174;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29175);
} else {
}

var G__29176 = seq__28902_29167;
var G__29177 = chunk__28903_29168;
var G__29178 = count__28904_29169;
var G__29179 = (i__28905_29170 + (1));
seq__28902_29167 = G__29176;
chunk__28903_29168 = G__29177;
count__28904_29169 = G__29178;
i__28905_29170 = G__29179;
continue;
} else {
var temp__4657__auto___29180 = cljs.core.seq.call(null,seq__28902_29167);
if(temp__4657__auto___29180){
var seq__28902_29181__$1 = temp__4657__auto___29180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28902_29181__$1)){
var c__8816__auto___29182 = cljs.core.chunk_first.call(null,seq__28902_29181__$1);
var G__29183 = cljs.core.chunk_rest.call(null,seq__28902_29181__$1);
var G__29184 = c__8816__auto___29182;
var G__29185 = cljs.core.count.call(null,c__8816__auto___29182);
var G__29186 = (0);
seq__28902_29167 = G__29183;
chunk__28903_29168 = G__29184;
count__28904_29169 = G__29185;
i__28905_29170 = G__29186;
continue;
} else {
var vec__28909_29187 = cljs.core.first.call(null,seq__28902_29181__$1);
var _QMARK_sch_29188 = cljs.core.nth.call(null,vec__28909_29187,(0),null);
var _udt_29189 = cljs.core.nth.call(null,vec__28909_29187,(1),null);
var temp__4657__auto___29190__$1 = _QMARK_sch_29188;
if(cljs.core.truth_(temp__4657__auto___29190__$1)){
var sch_29191 = temp__4657__auto___29190__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29191);
} else {
}

var G__29192 = cljs.core.next.call(null,seq__28902_29181__$1);
var G__29193 = null;
var G__29194 = (0);
var G__29195 = (0);
seq__28902_29167 = G__29192;
chunk__28903_29168 = G__29193;
count__28904_29169 = G__29194;
i__28905_29170 = G__29195;
continue;
}
} else {
}
}
break;
}

var seq__28912_29196 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_29160], null))));
var chunk__28913_29197 = null;
var count__28914_29198 = (0);
var i__28915_29199 = (0);
while(true){
if((i__28915_29199 < count__28914_29198)){
var vec__28916_29200 = cljs.core._nth.call(null,chunk__28913_29197,i__28915_29199);
var _QMARK_sch_29201 = cljs.core.nth.call(null,vec__28916_29200,(0),null);
var _udt_29202 = cljs.core.nth.call(null,vec__28916_29200,(1),null);
var temp__4657__auto___29203 = _QMARK_sch_29201;
if(cljs.core.truth_(temp__4657__auto___29203)){
var sch_29204 = temp__4657__auto___29203;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29204);
} else {
}

var G__29205 = seq__28912_29196;
var G__29206 = chunk__28913_29197;
var G__29207 = count__28914_29198;
var G__29208 = (i__28915_29199 + (1));
seq__28912_29196 = G__29205;
chunk__28913_29197 = G__29206;
count__28914_29198 = G__29207;
i__28915_29199 = G__29208;
continue;
} else {
var temp__4657__auto___29209 = cljs.core.seq.call(null,seq__28912_29196);
if(temp__4657__auto___29209){
var seq__28912_29210__$1 = temp__4657__auto___29209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28912_29210__$1)){
var c__8816__auto___29211 = cljs.core.chunk_first.call(null,seq__28912_29210__$1);
var G__29212 = cljs.core.chunk_rest.call(null,seq__28912_29210__$1);
var G__29213 = c__8816__auto___29211;
var G__29214 = cljs.core.count.call(null,c__8816__auto___29211);
var G__29215 = (0);
seq__28912_29196 = G__29212;
chunk__28913_29197 = G__29213;
count__28914_29198 = G__29214;
i__28915_29199 = G__29215;
continue;
} else {
var vec__28919_29216 = cljs.core.first.call(null,seq__28912_29210__$1);
var _QMARK_sch_29217 = cljs.core.nth.call(null,vec__28919_29216,(0),null);
var _udt_29218 = cljs.core.nth.call(null,vec__28919_29216,(1),null);
var temp__4657__auto___29219__$1 = _QMARK_sch_29217;
if(cljs.core.truth_(temp__4657__auto___29219__$1)){
var sch_29220 = temp__4657__auto___29219__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_29220);
} else {
}

var G__29221 = cljs.core.next.call(null,seq__28912_29210__$1);
var G__29222 = null;
var G__29223 = (0);
var G__29224 = (0);
seq__28912_29196 = G__29221;
chunk__28913_29197 = G__29222;
count__28914_29198 = G__29223;
i__28915_29199 = G__29224;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28922_29225 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__28923_29226 = null;
var count__28924_29227 = (0);
var i__28925_29228 = (0);
while(true){
if((i__28925_29228 < count__28924_29227)){
var conn_type_29229 = cljs.core._nth.call(null,chunk__28923_29226,i__28925_29228);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29229,uid_29160], null),((function (seq__28922_29225,chunk__28923_29226,count__28924_29227,i__28925_29228,conn_type_29229,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_29164])], null);
} else {
var vec__28926 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__28926,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__28926,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29164)], null);
}
});})(seq__28922_29225,chunk__28923_29226,count__28924_29227,i__28925_29228,conn_type_29229,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29230 = seq__28922_29225;
var G__29231 = chunk__28923_29226;
var G__29232 = count__28924_29227;
var G__29233 = (i__28925_29228 + (1));
seq__28922_29225 = G__29230;
chunk__28923_29226 = G__29231;
count__28924_29227 = G__29232;
i__28925_29228 = G__29233;
continue;
} else {
var temp__4657__auto___29234 = cljs.core.seq.call(null,seq__28922_29225);
if(temp__4657__auto___29234){
var seq__28922_29235__$1 = temp__4657__auto___29234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28922_29235__$1)){
var c__8816__auto___29236 = cljs.core.chunk_first.call(null,seq__28922_29235__$1);
var G__29237 = cljs.core.chunk_rest.call(null,seq__28922_29235__$1);
var G__29238 = c__8816__auto___29236;
var G__29239 = cljs.core.count.call(null,c__8816__auto___29236);
var G__29240 = (0);
seq__28922_29225 = G__29237;
chunk__28923_29226 = G__29238;
count__28924_29227 = G__29239;
i__28925_29228 = G__29240;
continue;
} else {
var conn_type_29241 = cljs.core.first.call(null,seq__28922_29235__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_29241,uid_29160], null),((function (seq__28922_29225,chunk__28923_29226,count__28924_29227,i__28925_29228,conn_type_29241,seq__28922_29235__$1,temp__4657__auto___29234,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_29164])], null);
} else {
var vec__28929 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__28929,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__28929,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29164)], null);
}
});})(seq__28922_29225,chunk__28923_29226,count__28924_29227,i__28925_29228,conn_type_29241,seq__28922_29235__$1,temp__4657__auto___29234,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29242 = cljs.core.next.call(null,seq__28922_29235__$1);
var G__29243 = null;
var G__29244 = (0);
var G__29245 = (0);
seq__28922_29225 = G__29242;
chunk__28923_29226 = G__29243;
count__28924_29227 = G__29244;
i__28925_29228 = G__29245;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_29246 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_29247 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__12621__auto___29248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_28936){
var state_val_28937 = (state_28936[(1)]);
if((state_val_28937 === (1))){
var state_28936__$1 = state_28936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28936__$1,(2),ws_timeout_29246);
} else {
if((state_val_28937 === (2))){
var inst_28933 = (state_28936[(2)]);
var inst_28934 = flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_28936__$1 = (function (){var statearr_28938 = state_28936;
(statearr_28938[(7)] = inst_28933);

return statearr_28938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28936__$1,inst_28934);
} else {
return null;
}
}
});})(c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_28939 = [null,null,null,null,null,null,null,null];
(statearr_28939[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_28939[(1)] = (1));

return statearr_28939;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_28936){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_28936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e28940){if((e28940 instanceof Object)){
var ex__12537__auto__ = e28940;
var statearr_28941_29249 = state_28936;
(statearr_28941_29249[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29250 = state_28936;
state_28936 = G__29250;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_28936){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_28936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_28942 = f__12622__auto__.call(null);
(statearr_28942[(6)] = c__12621__auto___29248);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___29248,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__12621__auto___29251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_28947){
var state_val_28948 = (state_28947[(1)]);
if((state_val_28948 === (1))){
var state_28947__$1 = state_28947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28947__$1,(2),ajax_timeout_29247);
} else {
if((state_val_28948 === (2))){
var inst_28944 = (state_28947[(2)]);
var inst_28945 = flush_buffer_BANG__29165.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_28947__$1 = (function (){var statearr_28949 = state_28947;
(statearr_28949[(7)] = inst_28944);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28947__$1,inst_28945);
} else {
return null;
}
}
});})(c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_28947){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_28947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__12537__auto__ = e28951;
var statearr_28952_29252 = state_28947;
(statearr_28952_29252[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29253 = state_28947;
state_28947 = G__29253;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_28947){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_28947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_28953 = f__12622__auto__.call(null);
(statearr_28953[(6)] = c__12621__auto___29251);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___29251,ws_timeout_29246,ajax_timeout_29247,uid_29160,__29161,__29162__$1,__29163__$2,ev_uuid_29164,flush_buffer_BANG__29165,vec__28890,map__28893,map__28893__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__29159 = function (user_id,ev,var_args){
var p__28889 = null;
if (arguments.length > 2) {
var G__29254__i = 0, G__29254__a = new Array(arguments.length -  2);
while (G__29254__i < G__29254__a.length) {G__29254__a[G__29254__i] = arguments[G__29254__i + 2]; ++G__29254__i;}
  p__28889 = new cljs.core.IndexedSeq(G__29254__a,0,null);
} 
return G__29159__delegate.call(this,user_id,ev,p__28889);};
G__29159.cljs$lang$maxFixedArity = 2;
G__29159.cljs$lang$applyTo = (function (arglist__29255){
var user_id = cljs.core.first(arglist__29255);
arglist__29255 = cljs.core.next(arglist__29255);
var ev = cljs.core.first(arglist__29255);
var p__28889 = cljs.core.rest(arglist__29255);
return G__29159__delegate(user_id,ev,p__28889);
});
G__29159.cljs$core$IFn$_invoke$arity$variadic = G__29159__delegate;
return G__29159;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__28954 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__28954,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__28954,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,510,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1276639028);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (1))){
var inst_28957 = cljs.core.async.timeout.call(null,ms);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(2),inst_28957);
} else {
if((state_val_28963 === (2))){
var inst_28959 = (state_28962[(2)]);
var inst_28960 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_28962__$1 = (function (){var statearr_28964 = state_28962;
(statearr_28964[(7)] = inst_28959);

return statearr_28964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
return null;
}
}
});})(c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_28965 = [null,null,null,null,null,null,null,null];
(statearr_28965[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_28965[(1)] = (1));

return statearr_28965;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_28962){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e28966){if((e28966 instanceof Object)){
var ex__12537__auto__ = e28966;
var statearr_28967_29256 = state_28962;
(statearr_28967_29256[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_28962;
state_28962 = G__29257;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_28968 = f__12622__auto__.call(null);
(statearr_28968[(6)] = c__12621__auto__);

return statearr_28968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,ms,temp__4657__auto__,params,ppstr,client_id,vec__28954,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__12621__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1586171050);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,566,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,473756485);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,575,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-331269714);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__4657__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29004){
var state_val_29005 = (state_29004[(1)]);
if((state_val_29005 === (7))){
var inst_29000 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29006_29258 = state_29004__$1;
(statearr_29006_29258[(2)] = inst_29000);

(statearr_29006_29258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (1))){
var inst_28969 = udt_open;
var state_29004__$1 = (function (){var statearr_29007 = state_29004;
(statearr_29007[(7)] = inst_28969);

return statearr_29007;
})();
var statearr_29008_29259 = state_29004__$1;
(statearr_29008_29259[(2)] = null);

(statearr_29008_29259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (4))){
var inst_28978 = (state_29004[(8)]);
var inst_28973 = (state_29004[(2)]);
var inst_28974 = cljs.core.deref.call(null,conns_);
var inst_28975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28976 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_28977 = (new cljs.core.PersistentVector(null,3,(5),inst_28975,inst_28976,null));
var inst_28978__$1 = cljs.core.get_in.call(null,inst_28974,inst_28977);
var state_29004__$1 = (function (){var statearr_29009 = state_29004;
(statearr_29009[(9)] = inst_28973);

(statearr_29009[(8)] = inst_28978__$1);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28978__$1)){
var statearr_29010_29260 = state_29004__$1;
(statearr_29010_29260[(1)] = (5));

} else {
var statearr_29011_29261 = state_29004__$1;
(statearr_29011_29261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (13))){
var inst_28984 = (state_29004[(10)]);
var inst_28993 = (state_29004[(2)]);
var inst_28969 = inst_28984;
var state_29004__$1 = (function (){var statearr_29012 = state_29004;
(statearr_29012[(7)] = inst_28969);

(statearr_29012[(11)] = inst_28993);

return statearr_29012;
})();
var statearr_29013_29262 = state_29004__$1;
(statearr_29013_29262[(2)] = null);

(statearr_29013_29262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (6))){
var state_29004__$1 = state_29004;
var statearr_29014_29263 = state_29004__$1;
(statearr_29014_29263[(2)] = null);

(statearr_29014_29263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (3))){
var inst_29002 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29004__$1,inst_29002);
} else {
if((state_val_29005 === (12))){
var state_29004__$1 = state_29004;
var statearr_29015_29264 = state_29004__$1;
(statearr_29015_29264[(2)] = null);

(statearr_29015_29264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (2))){
var inst_28971 = cljs.core.async.timeout.call(null,ms);
var state_29004__$1 = state_29004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29004__$1,(4),inst_28971);
} else {
if((state_val_29005 === (11))){
var inst_28989 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_28990 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_28989);
var state_29004__$1 = state_29004;
var statearr_29016_29265 = state_29004__$1;
(statearr_29016_29265[(2)] = inst_28990);

(statearr_29016_29265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (9))){
var state_29004__$1 = state_29004;
var statearr_29017_29266 = state_29004__$1;
(statearr_29017_29266[(2)] = null);

(statearr_29017_29266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (5))){
var inst_28978 = (state_29004[(8)]);
var inst_28983 = cljs.core.nth.call(null,inst_28978,(0),null);
var inst_28984 = cljs.core.nth.call(null,inst_28978,(1),null);
var inst_28985 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_29004__$1 = (function (){var statearr_29018 = state_29004;
(statearr_29018[(12)] = inst_28983);

(statearr_29018[(10)] = inst_28984);

return statearr_29018;
})();
if(cljs.core.truth_(inst_28985)){
var statearr_29019_29267 = state_29004__$1;
(statearr_29019_29267[(1)] = (8));

} else {
var statearr_29020_29268 = state_29004__$1;
(statearr_29020_29268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (10))){
var inst_28997 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29021_29269 = state_29004__$1;
(statearr_29021_29269[(2)] = inst_28997);

(statearr_29021_29269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (8))){
var inst_28969 = (state_29004[(7)]);
var inst_28984 = (state_29004[(10)]);
var inst_28987 = cljs.core._EQ_.call(null,inst_28984,inst_28969);
var state_29004__$1 = state_29004;
if(inst_28987){
var statearr_29022_29270 = state_29004__$1;
(statearr_29022_29270[(1)] = (11));

} else {
var statearr_29023_29271 = state_29004__$1;
(statearr_29023_29271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_29024 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29024[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_29024[(1)] = (1));

return statearr_29024;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_29004){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29025){if((e29025 instanceof Object)){
var ex__12537__auto__ = e29025;
var statearr_29026_29272 = state_29004;
(statearr_29026_29272[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29004;
state_29004 = G__29273;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_29004){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_29004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_29027 = f__12622__auto__.call(null);
(statearr_29027[(6)] = c__12621__auto__);

return statearr_29027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__12621__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,604,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,991765812);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__7977__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__4657__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__4657__auto__)){
var ms = temp__4657__auto__;
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29053){
var state_val_29054 = (state_29053[(1)]);
if((state_val_29054 === (1))){
var inst_29028 = cljs.core.async.timeout.call(null,ms);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(2),inst_29028);
} else {
if((state_val_29054 === (2))){
var inst_29035 = (state_29053[(7)]);
var inst_29030 = (state_29053[(2)]);
var inst_29031 = cljs.core.deref.call(null,conns_);
var inst_29032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29033 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_29034 = (new cljs.core.PersistentVector(null,3,(5),inst_29032,inst_29033,null));
var inst_29035__$1 = cljs.core.get_in.call(null,inst_29031,inst_29034);
var state_29053__$1 = (function (){var statearr_29055 = state_29053;
(statearr_29055[(7)] = inst_29035__$1);

(statearr_29055[(8)] = inst_29030);

return statearr_29055;
})();
if(cljs.core.truth_(inst_29035__$1)){
var statearr_29056_29274 = state_29053__$1;
(statearr_29056_29274[(1)] = (3));

} else {
var statearr_29057_29275 = state_29053__$1;
(statearr_29057_29275[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (3))){
var inst_29035 = (state_29053[(7)]);
var inst_29040 = cljs.core.nth.call(null,inst_29035,(0),null);
var inst_29041 = cljs.core.nth.call(null,inst_29035,(1),null);
var inst_29042 = cljs.core._EQ_.call(null,inst_29041,udt_open);
var state_29053__$1 = (function (){var statearr_29058 = state_29053;
(statearr_29058[(9)] = inst_29040);

return statearr_29058;
})();
if(inst_29042){
var statearr_29059_29276 = state_29053__$1;
(statearr_29059_29276[(1)] = (6));

} else {
var statearr_29060_29277 = state_29053__$1;
(statearr_29060_29277[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (4))){
var state_29053__$1 = state_29053;
var statearr_29061_29278 = state_29053__$1;
(statearr_29061_29278[(2)] = null);

(statearr_29061_29278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (5))){
var inst_29051 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29053__$1,inst_29051);
} else {
if((state_val_29054 === (6))){
var inst_29044 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_29045 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_29044);
var state_29053__$1 = state_29053;
var statearr_29062_29279 = state_29053__$1;
(statearr_29062_29279[(2)] = inst_29045);

(statearr_29062_29279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (7))){
var state_29053__$1 = state_29053;
var statearr_29063_29280 = state_29053__$1;
(statearr_29063_29280[(2)] = null);

(statearr_29063_29280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (8))){
var inst_29048 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29064_29281 = state_29053__$1;
(statearr_29064_29281[(2)] = inst_29048);

(statearr_29064_29281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_29065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29065[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_29065[(1)] = (1));

return statearr_29065;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_29053){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29066){if((e29066 instanceof Object)){
var ex__12537__auto__ = e29066;
var statearr_29067_29282 = state_29053;
(statearr_29067_29282[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29283 = state_29053;
state_29053 = G__29283;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_29053){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_29053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_29068 = f__12622__auto__.call(null);
(statearr_29068[(6)] = c__12621__auto__);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,ms,temp__4657__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__12621__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__29069 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__29069,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29069,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__29069,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,634,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29069,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__29069,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-674617563);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__29069,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,643,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-895510454);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (7))){
var state_29123__$1 = state_29123;
var statearr_29125_29284 = state_29123__$1;
(statearr_29125_29284[(2)] = null);

(statearr_29125_29284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (1))){
var inst_29072 = cljs.core.async.timeout.call(null,(5000));
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29123__$1,(2),inst_29072);
} else {
if((state_val_29124 === (4))){
var state_29123__$1 = state_29123;
var statearr_29126_29285 = state_29123__$1;
(statearr_29126_29285[(2)] = null);

(statearr_29126_29285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (13))){
var state_29123__$1 = state_29123;
var statearr_29127_29286 = state_29123__$1;
(statearr_29127_29286[(2)] = null);

(statearr_29127_29286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (6))){
var inst_29083 = (state_29123[(7)]);
var inst_29082 = (state_29123[(8)]);
var inst_29100 = (state_29123[(9)]);
var inst_29084 = (state_29123[(10)]);
var inst_29095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29096 = [conn_type,uid,client_id];
var inst_29097 = (new cljs.core.PersistentVector(null,3,(5),inst_29095,inst_29096,null));
var inst_29099 = (function (){var vec__29075 = inst_29082;
var __QMARK_sch = inst_29083;
var udt_t1 = inst_29084;
return ((function (vec__29075,__QMARK_sch,udt_t1,inst_29083,inst_29082,inst_29100,inst_29084,inst_29095,inst_29096,inst_29097,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29098){
var vec__29128 = p__29098;
var _sch = cljs.core.nth.call(null,vec__29128,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__29128,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__29075,__QMARK_sch,udt_t1,inst_29083,inst_29082,inst_29100,inst_29084,inst_29095,inst_29096,inst_29097,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29100__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29097,inst_29099);
var state_29123__$1 = (function (){var statearr_29131 = state_29123;
(statearr_29131[(9)] = inst_29100__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29100__$1)){
var statearr_29132_29287 = state_29123__$1;
(statearr_29132_29287[(1)] = (9));

} else {
var statearr_29133_29288 = state_29123__$1;
(statearr_29133_29288[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var inst_29083 = (state_29123[(7)]);
var inst_29082 = (state_29123[(8)]);
var inst_29084 = (state_29123[(10)]);
var inst_29087 = (function (){var vec__29075 = inst_29082;
var __QMARK_sch = inst_29083;
var udt_t1 = inst_29084;
return ((function (vec__29075,__QMARK_sch,udt_t1,inst_29083,inst_29082,inst_29084,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__29075,__QMARK_sch,udt_t1,inst_29083,inst_29082,inst_29084,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29088 = (new cljs.core.Delay(inst_29087,null));
var inst_29089 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,657,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_29088,null,-481330782);
var state_29123__$1 = state_29123;
var statearr_29134_29289 = state_29123__$1;
(statearr_29134_29289[(2)] = inst_29089);

(statearr_29134_29289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (12))){
var inst_29109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29110 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_29111 = (new cljs.core.PersistentVector(null,2,(5),inst_29109,inst_29110,null));
var inst_29112 = receive_event_msg_BANG_.call(null,inst_29111);
var state_29123__$1 = state_29123;
var statearr_29135_29290 = state_29123__$1;
(statearr_29135_29290[(2)] = inst_29112);

(statearr_29135_29290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (2))){
var inst_29082 = (state_29123[(8)]);
var inst_29074 = (state_29123[(2)]);
var inst_29078 = cljs.core.deref.call(null,conns_);
var inst_29079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29080 = [conn_type,uid,client_id];
var inst_29081 = (new cljs.core.PersistentVector(null,3,(5),inst_29079,inst_29080,null));
var inst_29082__$1 = cljs.core.get_in.call(null,inst_29078,inst_29081);
var inst_29083 = cljs.core.nth.call(null,inst_29082__$1,(0),null);
var inst_29084 = cljs.core.nth.call(null,inst_29082__$1,(1),null);
var inst_29085 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_29123__$1 = (function (){var statearr_29136 = state_29123;
(statearr_29136[(7)] = inst_29083);

(statearr_29136[(8)] = inst_29082__$1);

(statearr_29136[(11)] = inst_29074);

(statearr_29136[(10)] = inst_29084);

return statearr_29136;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29137_29291 = state_29123__$1;
(statearr_29137_29291[(1)] = (3));

} else {
var statearr_29138_29292 = state_29123__$1;
(statearr_29138_29292[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (11))){
var inst_29118 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29139_29293 = state_29123__$1;
(statearr_29139_29293[(2)] = inst_29118);

(statearr_29139_29293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (9))){
var inst_29083 = (state_29123[(7)]);
var inst_29082 = (state_29123[(8)]);
var inst_29100 = (state_29123[(9)]);
var inst_29084 = (state_29123[(10)]);
var inst_29102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29103 = [conn_type,uid];
var inst_29104 = (new cljs.core.PersistentVector(null,2,(5),inst_29102,inst_29103,null));
var inst_29105 = (function (){var vec__29075 = inst_29082;
var __QMARK_sch = inst_29083;
var udt_t1 = inst_29084;
var disconnect_QMARK_ = inst_29100;
return ((function (vec__29075,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_29083,inst_29082,inst_29100,inst_29084,inst_29102,inst_29103,inst_29104,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__29075,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_29083,inst_29082,inst_29100,inst_29084,inst_29102,inst_29103,inst_29104,state_val_29124,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29106 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29104,inst_29105);
var inst_29107 = upd_connected_uid_BANG_.call(null,uid);
var state_29123__$1 = (function (){var statearr_29140 = state_29123;
(statearr_29140[(12)] = inst_29106);

return statearr_29140;
})();
if(cljs.core.truth_(inst_29107)){
var statearr_29141_29294 = state_29123__$1;
(statearr_29141_29294[(1)] = (12));

} else {
var statearr_29142_29295 = state_29123__$1;
(statearr_29142_29295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (5))){
var inst_29084 = (state_29123[(10)]);
var inst_29092 = (state_29123[(2)]);
var inst_29093 = cljs.core._EQ_.call(null,inst_29084,udt_close);
var state_29123__$1 = (function (){var statearr_29143 = state_29123;
(statearr_29143[(13)] = inst_29092);

return statearr_29143;
})();
if(inst_29093){
var statearr_29144_29296 = state_29123__$1;
(statearr_29144_29296[(1)] = (6));

} else {
var statearr_29145_29297 = state_29123__$1;
(statearr_29145_29297[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (14))){
var inst_29115 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29146_29298 = state_29123__$1;
(statearr_29146_29298[(2)] = inst_29115);

(statearr_29146_29298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (10))){
var state_29123__$1 = state_29123;
var statearr_29147_29299 = state_29123__$1;
(statearr_29147_29299[(2)] = null);

(statearr_29147_29299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (8))){
var inst_29121 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__12533__auto__,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_29148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29148[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_29148[(1)] = (1));

return statearr_29148;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_29123){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29149){if((e29149 instanceof Object)){
var ex__12537__auto__ = e29149;
var statearr_29150_29300 = state_29123;
(statearr_29150_29300[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29301 = state_29123;
state_29123 = G__29301;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__12623__auto__ = (function (){var statearr_29151 = f__12622__auto__.call(null);
(statearr_29151[(6)] = c__12621__auto__);

return statearr_29151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__12621__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,679,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-897464631);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__28868,map__28871,map__28871__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq28865){
var G__28866 = cljs.core.first.call(null,seq28865);
var seq28865__$1 = cljs.core.next.call(null,seq28865);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28866,seq28865__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,685,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1012386996);

var seq__29302 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__29303 = null;
var count__29304 = (0);
var i__29305 = (0);
while(true){
if((i__29305 < count__29304)){
var vec__29306 = cljs.core._nth.call(null,chunk__29303,i__29305);
var client_id = cljs.core.nth.call(null,vec__29306,(0),null);
var vec__29309 = cljs.core.nth.call(null,vec__29306,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__29309,(0),null);
var _udt = cljs.core.nth.call(null,vec__29309,(1),null);
var temp__4657__auto___29318 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___29318)){
var sch_29319 = temp__4657__auto___29318;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_29319,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__29320 = seq__29302;
var G__29321 = chunk__29303;
var G__29322 = count__29304;
var G__29323 = (i__29305 + (1));
seq__29302 = G__29320;
chunk__29303 = G__29321;
count__29304 = G__29322;
i__29305 = G__29323;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29302);
if(temp__4657__auto__){
var seq__29302__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29302__$1)){
var c__8816__auto__ = cljs.core.chunk_first.call(null,seq__29302__$1);
var G__29324 = cljs.core.chunk_rest.call(null,seq__29302__$1);
var G__29325 = c__8816__auto__;
var G__29326 = cljs.core.count.call(null,c__8816__auto__);
var G__29327 = (0);
seq__29302 = G__29324;
chunk__29303 = G__29325;
count__29304 = G__29326;
i__29305 = G__29327;
continue;
} else {
var vec__29312 = cljs.core.first.call(null,seq__29302__$1);
var client_id = cljs.core.nth.call(null,vec__29312,(0),null);
var vec__29315 = cljs.core.nth.call(null,vec__29312,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__29315,(0),null);
var _udt = cljs.core.nth.call(null,vec__29315,(1),null);
var temp__4657__auto___29328__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto___29328__$1)){
var sch_29329 = temp__4657__auto___29328__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_29329,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__29330 = cljs.core.next.call(null,seq__29302__$1);
var G__29331 = null;
var G__29332 = (0);
var G__29333 = (0);
seq__29302 = G__29330;
chunk__29303 = G__29331;
count__29304 = G__29332;
i__29305 = G__29333;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,695,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-2035657282);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_29380){
var state_val_29381 = (state_29380[(1)]);
if((state_val_29381 === (7))){
var inst_29336 = (state_29380[(7)]);
var inst_29335 = (state_29380[(8)]);
var inst_29342 = (state_29380[(9)]);
var inst_29352 = (function (){var n = inst_29335;
var client_ids_satisfied = inst_29336;
var _QMARK_pulled = inst_29342;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29336,inst_29335,inst_29342,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__29351){
var vec__29382 = p__29351;
var _QMARK_sch = cljs.core.nth.call(null,vec__29382,(0),null);
var _udt = cljs.core.nth.call(null,vec__29382,(1),null);
var sent_QMARK_ = (function (){var temp__4657__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__4657__auto__)){
var sch = temp__4657__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29336,inst_29335,inst_29342,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_29353 = cljs.core.PersistentHashSet.EMPTY;
var inst_29354 = cljs.core.reduce_kv.call(null,inst_29352,inst_29353,inst_29342);
var state_29380__$1 = state_29380;
var statearr_29385_29415 = state_29380__$1;
(statearr_29385_29415[(2)] = inst_29354);

(statearr_29385_29415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (1))){
var inst_29334 = cljs.core.PersistentHashSet.EMPTY;
var inst_29335 = (0);
var inst_29336 = inst_29334;
var state_29380__$1 = (function (){var statearr_29386 = state_29380;
(statearr_29386[(7)] = inst_29336);

(statearr_29386[(8)] = inst_29335);

return statearr_29386;
})();
var statearr_29387_29416 = state_29380__$1;
(statearr_29387_29416[(2)] = null);

(statearr_29387_29416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (4))){
var state_29380__$1 = state_29380;
var statearr_29388_29417 = state_29380__$1;
(statearr_29388_29417[(2)] = true);

(statearr_29388_29417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (15))){
var inst_29373 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29389_29418 = state_29380__$1;
(statearr_29389_29418[(2)] = inst_29373);

(statearr_29389_29418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (13))){
var inst_29359 = (state_29380[(10)]);
var inst_29364 = cljs.core.rand_int.call(null,inst_29359);
var inst_29365 = (inst_29359 + inst_29364);
var inst_29366 = cljs.core.async.timeout.call(null,inst_29365);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29380__$1,(16),inst_29366);
} else {
if((state_val_29381 === (6))){
var inst_29342 = (state_29380[(9)]);
var inst_29349 = (state_29380[(2)]);
var state_29380__$1 = (function (){var statearr_29390 = state_29380;
(statearr_29390[(11)] = inst_29349);

return statearr_29390;
})();
if(cljs.core.truth_(inst_29342)){
var statearr_29391_29419 = state_29380__$1;
(statearr_29391_29419[(1)] = (7));

} else {
var statearr_29392_29420 = state_29380__$1;
(statearr_29392_29420[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (3))){
var inst_29378 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29380__$1,inst_29378);
} else {
if((state_val_29381 === (12))){
var inst_29376 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29393_29421 = state_29380__$1;
(statearr_29393_29421[(2)] = inst_29376);

(statearr_29393_29421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (2))){
var inst_29336 = (state_29380[(7)]);
var inst_29335 = (state_29380[(8)]);
var inst_29342 = (state_29380[(9)]);
var inst_29338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29339 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29340 = (new cljs.core.PersistentVector(null,2,(5),inst_29338,inst_29339,null));
var inst_29341 = (function (){var n = inst_29335;
var client_ids_satisfied = inst_29336;
return ((function (n,client_ids_satisfied,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__29394 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__29394,(0),null);
var udt = cljs.core.nth.call(null,vec__29394,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_29342__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29340,inst_29341);
var inst_29343 = (function (){var n = inst_29335;
var client_ids_satisfied = inst_29336;
var _QMARK_pulled = inst_29342__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,inst_29341,inst_29342__$1,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__7977__auto__ = (x == null);
if(or__7977__auto__){
return or__7977__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29336,inst_29335,inst_29342,inst_29338,inst_29339,inst_29340,inst_29341,inst_29342__$1,state_val_29381,c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_29344 = inst_29343.call(null,inst_29342__$1);
var state_29380__$1 = (function (){var statearr_29397 = state_29380;
(statearr_29397[(9)] = inst_29342__$1);

return statearr_29397;
})();
if(cljs.core.truth_(inst_29344)){
var statearr_29398_29422 = state_29380__$1;
(statearr_29398_29422[(1)] = (4));

} else {
var statearr_29399_29423 = state_29380__$1;
(statearr_29399_29423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (11))){
var state_29380__$1 = state_29380;
var statearr_29400_29424 = state_29380__$1;
(statearr_29400_29424[(2)] = null);

(statearr_29400_29424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (9))){
var inst_29336 = (state_29380[(7)]);
var inst_29335 = (state_29380[(8)]);
var inst_29359 = (state_29380[(10)]);
var inst_29357 = (state_29380[(2)]);
var inst_29358 = cljs.core.into.call(null,inst_29336,inst_29357);
var inst_29359__$1 = cljs.core.get.call(null,ms_backoffs,inst_29335);
var state_29380__$1 = (function (){var statearr_29401 = state_29380;
(statearr_29401[(10)] = inst_29359__$1);

(statearr_29401[(12)] = inst_29358);

return statearr_29401;
})();
if(cljs.core.truth_(inst_29359__$1)){
var statearr_29402_29425 = state_29380__$1;
(statearr_29402_29425[(1)] = (10));

} else {
var statearr_29403_29426 = state_29380__$1;
(statearr_29403_29426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (5))){
var inst_29342 = (state_29380[(9)]);
var inst_29347 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",722,"([:or nil? map?] ?pulled)",inst_29342,null,null);
var state_29380__$1 = state_29380;
var statearr_29404_29427 = state_29380__$1;
(statearr_29404_29427[(2)] = inst_29347);

(statearr_29404_29427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (14))){
var state_29380__$1 = state_29380;
var statearr_29405_29428 = state_29380__$1;
(statearr_29405_29428[(2)] = null);

(statearr_29405_29428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (16))){
var inst_29335 = (state_29380[(8)]);
var inst_29358 = (state_29380[(12)]);
var inst_29368 = (state_29380[(2)]);
var inst_29369 = (inst_29335 + (1));
var inst_29335__$1 = inst_29369;
var inst_29336 = inst_29358;
var state_29380__$1 = (function (){var statearr_29406 = state_29380;
(statearr_29406[(7)] = inst_29336);

(statearr_29406[(8)] = inst_29335__$1);

(statearr_29406[(13)] = inst_29368);

return statearr_29406;
})();
var statearr_29407_29429 = state_29380__$1;
(statearr_29407_29429[(2)] = null);

(statearr_29407_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (10))){
var inst_29358 = (state_29380[(12)]);
var inst_29361 = cljs.core.complement.call(null,inst_29358);
var inst_29362 = taoensso.encore.rsome.call(null,inst_29361,client_ids_unsatisfied);
var state_29380__$1 = state_29380;
if(cljs.core.truth_(inst_29362)){
var statearr_29408_29430 = state_29380__$1;
(statearr_29408_29430[(1)] = (13));

} else {
var statearr_29409_29431 = state_29380__$1;
(statearr_29409_29431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (8))){
var state_29380__$1 = state_29380;
var statearr_29410_29432 = state_29380__$1;
(statearr_29410_29432[(2)] = null);

(statearr_29410_29432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__12533__auto__,c__12621__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____0 = (function (){
var statearr_29411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29411[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__);

(statearr_29411[(1)] = (1));

return statearr_29411;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____1 = (function (state_29380){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29412){if((e29412 instanceof Object)){
var ex__12537__auto__ = e29412;
var statearr_29413_29433 = state_29380;
(statearr_29413_29433[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29434 = state_29380;
state_29380 = G__29434;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__ = function(state_29380){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____1.call(this,state_29380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__12623__auto__ = (function (){var statearr_29414 = f__12622__auto__.call(null);
(statearr_29414[(6)] = c__12621__auto__);

return statearr_29414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__12621__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__8660__auto__ = (((chsk == null))?null:chsk);
var m__8661__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,chsk);
} else {
var m__8661__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__8660__auto__ = (((chsk == null))?null:chsk);
var m__8661__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,chsk,reason);
} else {
var m__8661__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__8660__auto__ = (((chsk == null))?null:chsk);
var m__8661__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,chsk);
} else {
var m__8661__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__8660__auto__ = (((chsk == null))?null:chsk);
var m__8661__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,chsk,ev,opts);
} else {
var m__8661__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__29436 = arguments.length;
switch (G__29436) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,772,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1034565854);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,777,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1839026861);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join('')),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__29438 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__29438,(0),null);
var new_state = cljs.core.nth.call(null,vec__29438,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_29443 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29441){if((e29441 instanceof Error)){
var e = e29441;
return e;
} else {
throw e29441;

}
}})();
if((e_29443 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",824,"(map? state)",state,e_29443,null);
}

var e_29444 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29442){if((e29442 instanceof Error)){
var e = e29442;
return e;
} else {
throw e29442;

}
}})();
if((e_29444 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",825,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_29444,null);
}

if(cljs.core.truth_((function (){var or__7977__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_29449 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29445){if((e29445 instanceof Error)){
var e = e29445;
return e;
} else {
throw e29445;

}
}})();
if((e_29449 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",846,"(enc/chan? ?cb)",_QMARK_cb,e_29449,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__29446 = ev;
var ev_id = cljs.core.nth.call(null,vec__29446,(0),null);
var _ = cljs.core.nth.call(null,vec__29446,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__29446,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname.call(null,ev_id)),".cb"].join('')),reply], null));
});
;})(vec__29446,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,857,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,1403482710);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",858,"(vector? clj)",clj,null,null));
var seq__29450 = cljs.core.seq.call(null,buffered_evs);
var chunk__29451 = null;
var count__29452 = (0);
var i__29453 = (0);
while(true){
if((i__29453 < count__29452)){
var ev = cljs.core._nth.call(null,chunk__29451,i__29453);
taoensso.sente.assert_event.call(null,ev);

var vec__29454_29460 = ev;
var id_29461 = cljs.core.nth.call(null,vec__29454_29460,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_29461),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29462 = seq__29450;
var G__29463 = chunk__29451;
var G__29464 = count__29452;
var G__29465 = (i__29453 + (1));
seq__29450 = G__29462;
chunk__29451 = G__29463;
count__29452 = G__29464;
i__29453 = G__29465;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29450);
if(temp__4657__auto__){
var seq__29450__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29450__$1)){
var c__8816__auto__ = cljs.core.chunk_first.call(null,seq__29450__$1);
var G__29466 = cljs.core.chunk_rest.call(null,seq__29450__$1);
var G__29467 = c__8816__auto__;
var G__29468 = cljs.core.count.call(null,c__8816__auto__);
var G__29469 = (0);
seq__29450 = G__29466;
chunk__29451 = G__29467;
count__29452 = G__29468;
i__29453 = G__29469;
continue;
} else {
var ev = cljs.core.first.call(null,seq__29450__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__29457_29470 = ev;
var id_29471 = cljs.core.nth.call(null,vec__29457_29470,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_29471),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29472 = cljs.core.next.call(null,seq__29450__$1);
var G__29473 = null;
var G__29474 = (0);
var G__29475 = (0);
seq__29450 = G__29472;
chunk__29451 = G__29473;
count__29452 = G__29474;
i__29453 = G__29475;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__7965__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__7965__auto__){
var vec__29479 = x;
var x1 = cljs.core.nth.call(null,vec__29479,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__7965__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_29493 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29483){if((e29483 instanceof Error)){
var e = e29483;
return e;
} else {
throw e29483;

}
}})();
if((e_29493 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",872,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_29493,null);
}

var e_29494 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29484){if((e29484 instanceof Error)){
var e = e29484;
return e;
} else {
throw e29484;

}
}})();
if((e_29494 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",873,"(handshake? clj)",clj,e_29494,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,874,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1243684396);

var vec__29485 = clj;
var _ = cljs.core.nth.call(null,vec__29485,(0),null);
var vec__29488 = cljs.core.nth.call(null,vec__29485,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__29488,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29488,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29488,(2),null);
var map__29491 = chsk;
var map__29491__$1 = ((((!((map__29491 == null)))?((((map__29491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29491):map__29491);
var chs = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,893,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29485,_,vec__29488,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__29491,map__29491__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__29485,_,vec__29488,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__29491,map__29491__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1589624032);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,((function (vec__29485,_,vec__29488,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__29491,map__29491__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__29482_SHARP_){
return cljs.core.merge.call(null,p1__29482_SHARP_,new_state);
});})(vec__29485,_,vec__29488,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__29491,map__29491__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e29495){var e = e29495;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8617__auto__,k__8618__auto__){
var self__ = this;
var this__8617__auto____$1 = this;
return this__8617__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8618__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8619__auto__,k29502,else__8620__auto__){
var self__ = this;
var this__8619__auto____$1 = this;
var G__29506 = k29502;
var G__29506__$1 = (((G__29506 instanceof cljs.core.Keyword))?G__29506.fqn:null);
switch (G__29506__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29502,else__8620__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8631__auto__,writer__8632__auto__,opts__8633__auto__){
var self__ = this;
var this__8631__auto____$1 = this;
var pr_pair__8634__auto__ = ((function (this__8631__auto____$1){
return (function (keyval__8635__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,cljs.core.pr_writer,""," ","",opts__8633__auto__,keyval__8635__auto__);
});})(this__8631__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,pr_pair__8634__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__8633__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29501){
var self__ = this;
var G__29501__$1 = this;
return (new cljs.core.RecordIter((0),G__29501__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8615__auto__){
var self__ = this;
var this__8615__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8612__auto__){
var self__ = this;
var this__8612__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8621__auto__){
var self__ = this;
var this__8621__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8613__auto__){
var self__ = this;
var this__8613__auto____$1 = this;
var h__8431__auto__ = self__.__hash;
if(!((h__8431__auto__ == null))){
return h__8431__auto__;
} else {
var h__8431__auto____$1 = ((function (h__8431__auto__,this__8613__auto____$1){
return (function (coll__8614__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll.call(null,coll__8614__auto__));
});})(h__8431__auto__,this__8613__auto____$1))
.call(null,this__8613__auto____$1);
self__.__hash = h__8431__auto____$1;

return h__8431__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29503,other29504){
var self__ = this;
var this29503__$1 = this;
return (!((other29504 == null))) && ((this29503__$1.constructor === other29504.constructor)) && (cljs.core._EQ_.call(null,this29503__$1.client_id,other29504.client_id)) && (cljs.core._EQ_.call(null,this29503__$1.chs,other29504.chs)) && (cljs.core._EQ_.call(null,this29503__$1.params,other29504.params)) && (cljs.core._EQ_.call(null,this29503__$1.packer,other29504.packer)) && (cljs.core._EQ_.call(null,this29503__$1.url,other29504.url)) && (cljs.core._EQ_.call(null,this29503__$1.ws_kalive_ms,other29504.ws_kalive_ms)) && (cljs.core._EQ_.call(null,this29503__$1.state_,other29504.state_)) && (cljs.core._EQ_.call(null,this29503__$1.instance_handle_,other29504.instance_handle_)) && (cljs.core._EQ_.call(null,this29503__$1.retry_count_,other29504.retry_count_)) && (cljs.core._EQ_.call(null,this29503__$1.ever_opened_QMARK__,other29504.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this29503__$1.backoff_ms_fn,other29504.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this29503__$1.cbs_waiting_,other29504.cbs_waiting_)) && (cljs.core._EQ_.call(null,this29503__$1.socket_,other29504.socket_)) && (cljs.core._EQ_.call(null,this29503__$1.udt_last_comms_,other29504.udt_last_comms_)) && (cljs.core._EQ_.call(null,this29503__$1.__extmap,other29504.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8626__auto__,k__8627__auto__){
var self__ = this;
var this__8626__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__8627__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8626__auto____$1),self__.__meta),k__8627__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8627__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8624__auto__,k__8625__auto__,G__29501){
var self__ = this;
var this__8624__auto____$1 = this;
var pred__29507 = cljs.core.keyword_identical_QMARK_;
var expr__29508 = k__8625__auto__;
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29508))){
return (new taoensso.sente.ChWebSocket(G__29501,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__29501,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__29501,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__29501,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29501,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29501,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__29501,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__29501,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__29501,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__29501,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__29501,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__29501,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__29501,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29507.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__29508))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__29501,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8625__auto__,G__29501),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8629__auto__){
var self__ = this;
var this__8629__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8616__auto__,G__29501){
var self__ = this;
var this__8616__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__29501,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8622__auto__,entry__8623__auto__){
var self__ = this;
var this__8622__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8623__auto__)){
return this__8622__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8623__auto__,(0)),cljs.core._nth.call(null,entry__8623__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8622__auto____$1,entry__8623__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__29496_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__29496_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__29510 = opts;
var map__29510__$1 = ((((!((map__29510 == null)))?((((map__29510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29510):map__29510);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,_QMARK_cb_uuid);
var temp__4657__auto___29589 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___29589)){
var cb_uuid_29590 = temp__4657__auto___29589;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_29590], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29512){if((e29512 instanceof Error)){
var e = e29512;
return e;
} else {
throw e29512;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",963,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__4657__auto___29591__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___29591__$1)){
var timeout_ms_29592 = temp__4657__auto___29591__$1;
var c__12621__auto___29593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_29523){
var state_val_29524 = (state_29523[(1)]);
if((state_val_29524 === (1))){
var inst_29513 = cljs.core.async.timeout.call(null,timeout_ms_29592);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,(2),inst_29513);
} else {
if((state_val_29524 === (2))){
var inst_29516 = (state_29523[(7)]);
var inst_29515 = (state_29523[(2)]);
var inst_29516__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_29523__$1 = (function (){var statearr_29525 = state_29523;
(statearr_29525[(8)] = inst_29515);

(statearr_29525[(7)] = inst_29516__$1);

return statearr_29525;
})();
if(cljs.core.truth_(inst_29516__$1)){
var statearr_29526_29594 = state_29523__$1;
(statearr_29526_29594[(1)] = (3));

} else {
var statearr_29527_29595 = state_29523__$1;
(statearr_29527_29595[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (3))){
var inst_29516 = (state_29523[(7)]);
var inst_29518 = inst_29516.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_29523__$1 = state_29523;
var statearr_29528_29596 = state_29523__$1;
(statearr_29528_29596[(2)] = inst_29518);

(statearr_29528_29596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (4))){
var state_29523__$1 = state_29523;
var statearr_29529_29597 = state_29523__$1;
(statearr_29529_29597[(2)] = null);

(statearr_29529_29597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (5))){
var inst_29521 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29523__$1,inst_29521);
} else {
return null;
}
}
}
}
}
});})(c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__12533__auto__,c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_29530 = [null,null,null,null,null,null,null,null,null];
(statearr_29530[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_29530[(1)] = (1));

return statearr_29530;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_29523){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29531){if((e29531 instanceof Object)){
var ex__12537__auto__ = e29531;
var statearr_29532_29598 = state_29523;
(statearr_29532_29598[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29599 = state_29523;
state_29523 = G__29599;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_29523){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_29523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__12623__auto__ = (function (){var statearr_29533 = f__12622__auto__.call(null);
(statearr_29533[(6)] = c__12621__auto___29593);

return statearr_29533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___29593,timeout_ms_29592,temp__4657__auto___29591__$1,cb_uuid_29590,temp__4657__auto___29589,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e29534){var e = e29534;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,975,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__29510,map__29510__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1887110934);

var temp__4657__auto___29600 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___29600)){
var cb_uuid_29601 = temp__4657__auto___29600;
var cb_fn_STAR__29602 = (function (){var or__7977__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_29601);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29535){if((e29535 instanceof Error)){
var e__$1 = e29535;
return e__$1;
} else {
throw e29535;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",978,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__29602.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__7977__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var or__7977__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__7977__auto____$1)){
return or__7977__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__4657__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1000,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-910524838);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__29497_SHARP_){
return cljs.core.assoc.call(null,p1__29497_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e29536){var e = e29536;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1014,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-49952150);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__29537 = _QMARK_socket;
(G__29537["onerror"] = ((function (G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1024,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e29538){var _ = e29538;
return ws_ev;
}})()], null);
});})(G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-1834821705);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (last_ws_error,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__29498_SHARP_){
return cljs.core.assoc.call(null,p1__29498_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
});})(G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__29537["onmessage"] = ((function (G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__29539 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29539,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29539,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__7977__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var or__7977__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__7977__auto____$1)){
return or__7977__auto____$1;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1060,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__7977__auto____$1,or__7977__auto__,ppstr,vec__29539,clj,_QMARK_cb_uuid,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__7977__auto____$1,or__7977__auto__,ppstr,vec__29539,clj,_QMARK_cb_uuid,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,1693001622);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__29537["onclose"] = ((function (G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1082,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null,-562729396);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__29499_SHARP_){
return cljs.core.assoc.call(null,p1__29499_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1){
return (function (p1__29500_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__29500_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return retry_fn.call(null);
}
});})(G__29537,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__29537;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__4657__auto__,chsk__$1))
;
var temp__4657__auto___29603__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__4657__auto___29603__$1)){
var ms_29604 = temp__4657__auto___29603__$1;
var c__12621__auto___29605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function (state_29569){
var state_val_29570 = (state_29569[(1)]);
if((state_val_29570 === (7))){
var inst_29565 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29571_29606 = state_29569__$1;
(statearr_29571_29606[(2)] = inst_29565);

(statearr_29571_29606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (1))){
var state_29569__$1 = state_29569;
var statearr_29572_29607 = state_29569__$1;
(statearr_29572_29607[(2)] = null);

(statearr_29572_29607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (4))){
var inst_29546 = (state_29569[(2)]);
var inst_29547 = have_handle_QMARK_.call(null);
var state_29569__$1 = (function (){var statearr_29573 = state_29569;
(statearr_29573[(7)] = inst_29546);

return statearr_29573;
})();
if(cljs.core.truth_(inst_29547)){
var statearr_29574_29608 = state_29569__$1;
(statearr_29574_29608[(1)] = (5));

} else {
var statearr_29575_29609 = state_29569__$1;
(statearr_29575_29609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (6))){
var state_29569__$1 = state_29569;
var statearr_29576_29610 = state_29569__$1;
(statearr_29576_29610[(2)] = null);

(statearr_29576_29610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (3))){
var inst_29567 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29569__$1,inst_29567);
} else {
if((state_val_29570 === (2))){
var inst_29543 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_29544 = cljs.core.async.timeout.call(null,ms_29604);
var state_29569__$1 = (function (){var statearr_29577 = state_29569;
(statearr_29577[(8)] = inst_29543);

return statearr_29577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29569__$1,(4),inst_29544);
} else {
if((state_val_29570 === (9))){
var state_29569__$1 = state_29569;
var statearr_29578_29611 = state_29569__$1;
(statearr_29578_29611[(2)] = null);

(statearr_29578_29611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (5))){
var inst_29543 = (state_29569[(8)]);
var inst_29549 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_29550 = cljs.core._EQ_.call(null,inst_29543,inst_29549);
var state_29569__$1 = state_29569;
if(inst_29550){
var statearr_29579_29612 = state_29569__$1;
(statearr_29579_29612[(1)] = (8));

} else {
var statearr_29580_29613 = state_29569__$1;
(statearr_29580_29613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (10))){
var inst_29561 = (state_29569[(2)]);
var state_29569__$1 = (function (){var statearr_29581 = state_29569;
(statearr_29581[(9)] = inst_29561);

return statearr_29581;
})();
var statearr_29582_29614 = state_29569__$1;
(statearr_29582_29614[(2)] = null);

(statearr_29582_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (8))){
var inst_29552 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29553 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_29554 = (new cljs.core.PersistentVector(null,1,(5),inst_29552,inst_29553,null));
var inst_29555 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_29556 = [true];
var inst_29557 = cljs.core.PersistentHashMap.fromArrays(inst_29555,inst_29556);
var inst_29558 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_29554,inst_29557);
var state_29569__$1 = state_29569;
var statearr_29583_29615 = state_29569__$1;
(statearr_29583_29615[(2)] = inst_29558);

(statearr_29583_29615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
;
return ((function (switch__12533__auto__,c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__12534__auto__ = null;
var taoensso$sente$state_machine__12534__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = taoensso$sente$state_machine__12534__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var taoensso$sente$state_machine__12534__auto____1 = (function (state_29569){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__12537__auto__ = e29585;
var statearr_29586_29616 = state_29569;
(statearr_29586_29616[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29617 = state_29569;
state_29569 = G__29617;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$state_machine__12534__auto__ = function(state_29569){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__12534__auto____1.call(this,state_29569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__12534__auto____0;
taoensso$sente$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__12534__auto____1;
return taoensso$sente$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
})();
var state__12623__auto__ = (function (){var statearr_29587 = f__12622__auto__.call(null);
(statearr_29587[(6)] = c__12621__auto___29605);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___29605,ms_29604,temp__4657__auto___29603__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__4657__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__8653__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__8653__auto__,writer__8654__auto__){
return cljs.core._write.call(null,writer__8654__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__29505){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__29505),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__29505),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29505,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639))),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8617__auto__,k__8618__auto__){
var self__ = this;
var this__8617__auto____$1 = this;
return this__8617__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8618__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8619__auto__,k29625,else__8620__auto__){
var self__ = this;
var this__8619__auto____$1 = this;
var G__29629 = k29625;
var G__29629__$1 = (((G__29629 instanceof cljs.core.Keyword))?G__29629.fqn:null);
switch (G__29629__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29625,else__8620__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8631__auto__,writer__8632__auto__,opts__8633__auto__){
var self__ = this;
var this__8631__auto____$1 = this;
var pr_pair__8634__auto__ = ((function (this__8631__auto____$1){
return (function (keyval__8635__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,cljs.core.pr_writer,""," ","",opts__8633__auto__,keyval__8635__auto__);
});})(this__8631__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,pr_pair__8634__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__8633__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29624){
var self__ = this;
var G__29624__$1 = this;
return (new cljs.core.RecordIter((0),G__29624__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8615__auto__){
var self__ = this;
var this__8615__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8612__auto__){
var self__ = this;
var this__8612__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8621__auto__){
var self__ = this;
var this__8621__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8613__auto__){
var self__ = this;
var this__8613__auto____$1 = this;
var h__8431__auto__ = self__.__hash;
if(!((h__8431__auto__ == null))){
return h__8431__auto__;
} else {
var h__8431__auto____$1 = ((function (h__8431__auto__,this__8613__auto____$1){
return (function (coll__8614__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll.call(null,coll__8614__auto__));
});})(h__8431__auto__,this__8613__auto____$1))
.call(null,this__8613__auto____$1);
self__.__hash = h__8431__auto____$1;

return h__8431__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29626,other29627){
var self__ = this;
var this29626__$1 = this;
return (!((other29627 == null))) && ((this29626__$1.constructor === other29627.constructor)) && (cljs.core._EQ_.call(null,this29626__$1.client_id,other29627.client_id)) && (cljs.core._EQ_.call(null,this29626__$1.chs,other29627.chs)) && (cljs.core._EQ_.call(null,this29626__$1.params,other29627.params)) && (cljs.core._EQ_.call(null,this29626__$1.packer,other29627.packer)) && (cljs.core._EQ_.call(null,this29626__$1.url,other29627.url)) && (cljs.core._EQ_.call(null,this29626__$1.state_,other29627.state_)) && (cljs.core._EQ_.call(null,this29626__$1.instance_handle_,other29627.instance_handle_)) && (cljs.core._EQ_.call(null,this29626__$1.ever_opened_QMARK__,other29627.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this29626__$1.backoff_ms_fn,other29627.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this29626__$1.ajax_opts,other29627.ajax_opts)) && (cljs.core._EQ_.call(null,this29626__$1.curr_xhr_,other29627.curr_xhr_)) && (cljs.core._EQ_.call(null,this29626__$1.__extmap,other29627.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8626__auto__,k__8627__auto__){
var self__ = this;
var this__8626__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__8627__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8626__auto____$1),self__.__meta),k__8627__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8627__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8624__auto__,k__8625__auto__,G__29624){
var self__ = this;
var this__8624__auto____$1 = this;
var pred__29630 = cljs.core.keyword_identical_QMARK_;
var expr__29631 = k__8625__auto__;
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(G__29624,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__29624,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__29624,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__29624,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29624,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29624,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__29624,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__29624,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__29624,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__29624,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29630.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__29631))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__29624,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8625__auto__,G__29624),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8629__auto__){
var self__ = this;
var this__8629__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8616__auto__,G__29624){
var self__ = this;
var this__8616__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__29624,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8622__auto__,entry__8623__auto__){
var self__ = this;
var this__8622__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8623__auto__)){
return this__8622__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8623__auto__,(0)),cljs.core._nth.call(null,entry__8623__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8622__auto____$1,entry__8623__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (chsk__$1){
return (function (p1__29618_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__29618_SHARP_,reason);
});})(chsk__$1))
);

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__29633 = opts;
var map__29633__$1 = ((((!((map__29633 == null)))?((((map__29633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__7977__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var or__7977__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__7977__auto____$1)){
return or__7977__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__29635){
var map__29636 = p__29635;
var map__29636__$1 = ((((!((map__29636 == null)))?((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var _QMARK_error = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__29619_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__29619_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__29638 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__29638,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29638,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1202,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__29638,resp_clj,___$1,map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__29638,resp_clj,___$1,map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1512859831);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,resp_ppstr,vec__29638,resp_clj,___$1,map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__29620_SHARP_){
return cljs.core.assoc.call(null,p1__29620_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__29638,resp_clj,___$1,map__29636,map__29636__$1,_QMARK_error,_QMARK_content,csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(csrf_token,map__29633,map__29633__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1212,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1377457892);

if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_.call(null))){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1220,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-452439493);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__29621_SHARP_){
return cljs.core.assoc.call(null,p1__29621_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__7977__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__29641){
var map__29642 = p__29641;
var map__29642__$1 = ((((!((map__29642 == null)))?((((map__29642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);
var _QMARK_error = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (map__29642,map__29642__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__29622_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__29622_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__29642,map__29642__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__29644 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29644,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,((function (content,ppstr,vec__29644,clj,handshake_QMARK_,map__29642,map__29642__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__29623_SHARP_){
return cljs.core.assoc.call(null,p1__29623_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__29644,clj,handshake_QMARK_,map__29642,map__29642__$1,_QMARK_error,_QMARK_content,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__7977__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
));
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__8653__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__8653__auto__,writer__8654__auto__){
return cljs.core._write.call(null,writer__8654__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__29628){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__29628),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__29628),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29628,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696))),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8617__auto__,k__8618__auto__){
var self__ = this;
var this__8617__auto____$1 = this;
return this__8617__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8618__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8619__auto__,k29649,else__8620__auto__){
var self__ = this;
var this__8619__auto____$1 = this;
var G__29653 = k29649;
var G__29653__$1 = (((G__29653 instanceof cljs.core.Keyword))?G__29653.fqn:null);
switch (G__29653__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29649,else__8620__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8631__auto__,writer__8632__auto__,opts__8633__auto__){
var self__ = this;
var this__8631__auto____$1 = this;
var pr_pair__8634__auto__ = ((function (this__8631__auto____$1){
return (function (keyval__8635__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,cljs.core.pr_writer,""," ","",opts__8633__auto__,keyval__8635__auto__);
});})(this__8631__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8632__auto__,pr_pair__8634__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__8633__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29648){
var self__ = this;
var G__29648__$1 = this;
return (new cljs.core.RecordIter((0),G__29648__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8615__auto__){
var self__ = this;
var this__8615__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8612__auto__){
var self__ = this;
var this__8612__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8621__auto__){
var self__ = this;
var this__8621__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8613__auto__){
var self__ = this;
var this__8613__auto____$1 = this;
var h__8431__auto__ = self__.__hash;
if(!((h__8431__auto__ == null))){
return h__8431__auto__;
} else {
var h__8431__auto____$1 = ((function (h__8431__auto__,this__8613__auto____$1){
return (function (coll__8614__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll.call(null,coll__8614__auto__));
});})(h__8431__auto__,this__8613__auto____$1))
.call(null,this__8613__auto____$1);
self__.__hash = h__8431__auto____$1;

return h__8431__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29650,other29651){
var self__ = this;
var this29650__$1 = this;
return (!((other29651 == null))) && ((this29650__$1.constructor === other29651.constructor)) && (cljs.core._EQ_.call(null,this29650__$1.ws_chsk_opts,other29651.ws_chsk_opts)) && (cljs.core._EQ_.call(null,this29650__$1.ajax_chsk_opts,other29651.ajax_chsk_opts)) && (cljs.core._EQ_.call(null,this29650__$1.state_,other29651.state_)) && (cljs.core._EQ_.call(null,this29650__$1.impl_,other29651.impl_)) && (cljs.core._EQ_.call(null,this29650__$1.__extmap,other29651.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8626__auto__,k__8627__auto__){
var self__ = this;
var this__8626__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__8627__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8626__auto____$1),self__.__meta),k__8627__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8627__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8624__auto__,k__8625__auto__,G__29648){
var self__ = this;
var this__8624__auto____$1 = this;
var pred__29654 = cljs.core.keyword_identical_QMARK_;
var expr__29655 = k__8625__auto__;
if(cljs.core.truth_(pred__29654.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__29655))){
return (new taoensso.sente.ChAutoSocket(G__29648,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29654.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__29655))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__29648,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29654.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29655))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__29648,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29654.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__29655))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__29648,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8625__auto__,G__29648),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8629__auto__){
var self__ = this;
var this__8629__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8616__auto__,G__29648){
var self__ = this;
var this__8616__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__29648,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8622__auto__,entry__8623__auto__){
var self__ = this;
var this__8622__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8623__auto__)){
return this__8622__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8623__auto__,(0)),cljs.core._nth.call(null,entry__8623__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8622__auto____$1,entry__8623__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__4655__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4655__auto__)){
var impl = temp__4655__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__29657 = opts;
var map__29657__$1 = ((((!((map__29657 == null)))?((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var _QMARK_cb = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___29660 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___29660,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__4657__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__4657__auto__)){
var impl = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ever_opened_QMARK__ = temp__4657__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___29660,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1348,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___29660,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__4657__auto____$1,impl,temp__4657__auto__,downgraded_QMARK___29660,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,77539714);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___29660,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__7977__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__8653__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__8653__auto__,writer__8654__auto__){
return cljs.core._write.call(null,writer__8654__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__29652){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__29652),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__29652),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29652),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__29652),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29652,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179))),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__29661 = protocol;
var G__29661__$1 = (((G__29661 instanceof cljs.core.Keyword))?G__29661.fqn:null);
switch (G__29661__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29662){if((e29662 instanceof Error)){
var e = e29662;
return e;
} else {
throw e29662;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1368,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__29663 = type;
var G__29663__$1 = (((G__29663 instanceof cljs.core.Keyword))?G__29663.fqn:null);
switch (G__29663__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__29664 = protocol__$2;
switch (G__29664) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29664)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29663__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29685 = arguments.length;
var i__9149__auto___29686 = (0);
while(true){
if((i__9149__auto___29686 < len__9148__auto___29685)){
args__9155__auto__.push((arguments[i__9149__auto___29686]));

var G__29687 = (i__9149__auto___29686 + (1));
i__9149__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__29670){
var vec__29671 = p__29670;
var map__29674 = cljs.core.nth.call(null,vec__29671,(0),null);
var map__29674__$1 = ((((!((map__29674 == null)))?((((map__29674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);
var opts = map__29674__$1;
var ajax_opts = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__7977__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__29671,(1),null);
var e_29688 = (function (){try{if(((function (vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29676){if((e29676 instanceof Error)){
var e = e29676;
return e;
} else {
throw e29676;

}
}})();
if((e_29688 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1410,"([:in #{:ws :ajax :auto}] type)",type,e_29688,null);
}

var e_29689 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29677){if((e29677 instanceof Error)){
var e = e29677;
return e;
} else {
throw e29677;

}
}})();
if((e_29689 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1411,"(enc/nblank-str? client-id)",client_id,e_29689,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1413,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1012940993);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1014204606);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__29678 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__7977__auto__ = path;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__7977__auto__ = protocol;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
var or__7977__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__7977__auto____$1)){
return or__7977__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__7977__auto__ = host;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__29678,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__29678,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__29678,ws_url,ajax_url,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__29678,ws_url,ajax_url,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__29681 = type;
var G__29681__$1 = (((G__29681 instanceof cljs.core.Keyword))?G__29681.fqn:null);
switch (G__29681__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29681__$1)].join('')));

}
})());
var temp__4655__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__4655__auto__)){
var chsk = temp__4655__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__29678,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__29682 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__29682,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__29682,(1),null);
var ev__$1 = vec__29682;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__4655__auto__,packer__$1,vec__29678,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1502,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,packer__$1,vec__29678,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__4655__auto__,packer__$1,vec__29678,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__29671,map__29674,map__29674__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1671574414);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq29668){
var G__29669 = cljs.core.first.call(null,seq29668);
var seq29668__$1 = cljs.core.next.call(null,seq29668);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29669,seq29668__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__29691 = opts;
var map__29691__$1 = ((((!((map__29691 == null)))?((((map__29691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29691):map__29691);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = ((function (map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return f.call(null);
});})(map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__12621__auto___29768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_29738){
var state_val_29739 = (state_29738[(1)]);
if((state_val_29739 === (7))){
var inst_29734 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
var statearr_29740_29769 = state_29738__$1;
(statearr_29740_29769[(2)] = inst_29734);

(statearr_29740_29769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (1))){
var state_29738__$1 = state_29738;
var statearr_29741_29770 = state_29738__$1;
(statearr_29741_29770[(2)] = null);

(statearr_29741_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (4))){
var inst_29703 = (state_29738[(7)]);
var inst_29701 = (state_29738[(8)]);
var inst_29704 = (state_29738[(9)]);
var inst_29701__$1 = (state_29738[(2)]);
var inst_29702 = cljs.core.nth.call(null,inst_29701__$1,(0),null);
var inst_29703__$1 = cljs.core.nth.call(null,inst_29701__$1,(1),null);
var inst_29704__$1 = cljs.core._EQ_.call(null,inst_29703__$1,ch_ctrl);
var state_29738__$1 = (function (){var statearr_29742 = state_29738;
(statearr_29742[(7)] = inst_29703__$1);

(statearr_29742[(8)] = inst_29701__$1);

(statearr_29742[(10)] = inst_29702);

(statearr_29742[(9)] = inst_29704__$1);

return statearr_29742;
})();
if(inst_29704__$1){
var statearr_29743_29771 = state_29738__$1;
(statearr_29743_29771[(1)] = (5));

} else {
var statearr_29744_29772 = state_29738__$1;
(statearr_29744_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (15))){
var inst_29702 = (state_29738[(10)]);
var state_29738__$1 = state_29738;
var statearr_29745_29773 = state_29738__$1;
(statearr_29745_29773[(2)] = inst_29702);

(statearr_29745_29773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (13))){
var inst_29720 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
var statearr_29746_29774 = state_29738__$1;
(statearr_29746_29774[(2)] = inst_29720);

(statearr_29746_29774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (6))){
var inst_29702 = (state_29738[(10)]);
var inst_29709 = (inst_29702 == null);
var inst_29710 = cljs.core.not.call(null,inst_29709);
var state_29738__$1 = state_29738;
if(inst_29710){
var statearr_29747_29775 = state_29738__$1;
(statearr_29747_29775[(1)] = (8));

} else {
var statearr_29748_29776 = state_29738__$1;
(statearr_29748_29776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (3))){
var inst_29736 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29738__$1,inst_29736);
} else {
if((state_val_29739 === (12))){
var state_29738__$1 = state_29738;
var statearr_29749_29777 = state_29738__$1;
(statearr_29749_29777[(2)] = false);

(statearr_29749_29777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (2))){
var inst_29697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29698 = [ch_recv,ch_ctrl];
var inst_29699 = (new cljs.core.PersistentVector(null,2,(5),inst_29697,inst_29698,null));
var state_29738__$1 = state_29738;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29738__$1,(4),inst_29699);
} else {
if((state_val_29739 === (11))){
var state_29738__$1 = state_29738;
var statearr_29750_29778 = state_29738__$1;
(statearr_29750_29778[(2)] = true);

(statearr_29750_29778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (9))){
var state_29738__$1 = state_29738;
var statearr_29751_29779 = state_29738__$1;
(statearr_29751_29779[(2)] = false);

(statearr_29751_29779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (5))){
var state_29738__$1 = state_29738;
var statearr_29752_29780 = state_29738__$1;
(statearr_29752_29780[(2)] = null);

(statearr_29752_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (14))){
var inst_29702 = (state_29738[(10)]);
var inst_29725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29702);
var state_29738__$1 = state_29738;
var statearr_29753_29781 = state_29738__$1;
(statearr_29753_29781[(2)] = inst_29725);

(statearr_29753_29781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (16))){
var inst_29703 = (state_29738[(7)]);
var inst_29701 = (state_29738[(8)]);
var inst_29702 = (state_29738[(10)]);
var inst_29704 = (state_29738[(9)]);
var inst_29728 = (state_29738[(2)]);
var inst_29729 = cljs.core.get.call(null,inst_29728,new cljs.core.Keyword(null,"event","event",301435442));
var inst_29730 = (function (){var vec__29694 = inst_29701;
var v = inst_29702;
var p = inst_29703;
var stop_QMARK_ = inst_29704;
var map__29707 = inst_29728;
var event_msg = inst_29728;
var event = inst_29729;
return ((function (vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1529,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,2109646591);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29756){if((e29756 instanceof Error)){
var e = e29756;
return e;
} else {
throw e29756;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1532,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e29757){if((e29757 instanceof Error)){
var e = e29757;
return e;
} else {
throw e29757;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1533,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e29754){if((e29754 instanceof Error)){
var e1 = e29754;
try{var temp__4655__auto__ = error_handler;
if(cljs.core.truth_(temp__4655__auto__)){
var eh = temp__4655__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1538,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto__,e1,vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__4655__auto__,e1,vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,609558336);
}
}catch (e29755){if((e29755 instanceof Error)){
var e2 = e29755;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1539,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1529936799);
} else {
throw e29755;

}
}} else {
throw e29754;

}
}});
;})(vec__29694,v,p,stop_QMARK_,map__29707,event_msg,event,inst_29703,inst_29701,inst_29702,inst_29704,inst_29728,inst_29729,state_val_29739,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_29731 = execute1.call(null,inst_29730);
var state_29738__$1 = (function (){var statearr_29758 = state_29738;
(statearr_29758[(11)] = inst_29731);

return statearr_29758;
})();
var statearr_29759_29782 = state_29738__$1;
(statearr_29759_29782[(2)] = null);

(statearr_29759_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (10))){
var inst_29723 = (state_29738[(2)]);
var state_29738__$1 = state_29738;
if(cljs.core.truth_(inst_29723)){
var statearr_29760_29783 = state_29738__$1;
(statearr_29760_29783[(1)] = (14));

} else {
var statearr_29761_29784 = state_29738__$1;
(statearr_29761_29784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29739 === (8))){
var inst_29702 = (state_29738[(10)]);
var inst_29712 = inst_29702.cljs$lang$protocol_mask$partition0$;
var inst_29713 = (inst_29712 & (64));
var inst_29714 = inst_29702.cljs$core$ISeq$;
var inst_29715 = (cljs.core.PROTOCOL_SENTINEL === inst_29714);
var inst_29716 = (inst_29713) || (inst_29715);
var state_29738__$1 = state_29738;
if(cljs.core.truth_(inst_29716)){
var statearr_29762_29785 = state_29738__$1;
(statearr_29762_29785[(1)] = (11));

} else {
var statearr_29763_29786 = state_29738__$1;
(statearr_29763_29786[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__12533__auto__,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____0 = (function (){
var statearr_29764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29764[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____1 = (function (state_29738){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_29738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__12537__auto__ = e29765;
var statearr_29766_29787 = state_29738;
(statearr_29766_29787[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29738;
state_29738 = G__29788;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__ = function(state_29738){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____1.call(this,state_29738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__12623__auto__ = (function (){var statearr_29767 = f__12622__auto__.call(null);
(statearr_29767[(6)] = c__12621__auto___29768);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___29768,map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__29691,map__29691__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29798 = arguments.length;
var i__9149__auto___29799 = (0);
while(true){
if((i__9149__auto___29799 < len__9148__auto___29798)){
args__9155__auto__.push((arguments[i__9149__auto___29799]));

var G__29800 = (i__9149__auto___29799 + (1));
i__9149__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((2) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9156__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__29792){
var vec__29793 = p__29792;
var map__29796 = cljs.core.nth.call(null,vec__29793,(0),null);
var map__29796__$1 = ((((!((map__29796 == null)))?((((map__29796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29796):map__29796);
var opts = map__29796__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq29789){
var G__29790 = cljs.core.first.call(null,seq29789);
var seq29789__$1 = cljs.core.next.call(null,seq29789);
var G__29791 = cljs.core.first.call(null,seq29789__$1);
var seq29789__$2 = cljs.core.next.call(null,seq29789__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29790,G__29791,seq29789__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29810 = arguments.length;
var i__9149__auto___29811 = (0);
while(true){
if((i__9149__auto___29811 < len__9148__auto___29810)){
args__9155__auto__.push((arguments[i__9149__auto___29811]));

var G__29812 = (i__9149__auto___29811 + (1));
i__9149__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((2) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9156__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__29804){
var vec__29805 = p__29804;
var map__29808 = cljs.core.nth.call(null,vec__29805,(0),null);
var map__29808__$1 = ((((!((map__29808 == null)))?((((map__29808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29808):map__29808);
var opts = map__29808__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq29801){
var G__29802 = cljs.core.first.call(null,seq29801);
var seq29801__$1 = cljs.core.next.call(null,seq29801);
var G__29803 = cljs.core.first.call(null,seq29801__$1);
var seq29801__$2 = cljs.core.next.call(null,seq29801__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29802,G__29803,seq29801__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__29813,websocket_QMARK_){
var map__29814 = p__29813;
var map__29814__$1 = ((((!((map__29814 == null)))?((((map__29814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29814):map__29814);
var location = map__29814__$1;
var protocol = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7977__auto__ = path;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map
