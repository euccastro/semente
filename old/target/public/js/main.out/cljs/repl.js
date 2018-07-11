// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31295){
var map__31296 = p__31295;
var map__31296__$1 = ((((!((map__31296 == null)))?((((map__31296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31296):map__31296);
var m = map__31296__$1;
var n = cljs.core.get.call(null,map__31296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31298_31320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31299_31321 = null;
var count__31300_31322 = (0);
var i__31301_31323 = (0);
while(true){
if((i__31301_31323 < count__31300_31322)){
var f_31324 = cljs.core._nth.call(null,chunk__31299_31321,i__31301_31323);
cljs.core.println.call(null,"  ",f_31324);

var G__31325 = seq__31298_31320;
var G__31326 = chunk__31299_31321;
var G__31327 = count__31300_31322;
var G__31328 = (i__31301_31323 + (1));
seq__31298_31320 = G__31325;
chunk__31299_31321 = G__31326;
count__31300_31322 = G__31327;
i__31301_31323 = G__31328;
continue;
} else {
var temp__4657__auto___31329 = cljs.core.seq.call(null,seq__31298_31320);
if(temp__4657__auto___31329){
var seq__31298_31330__$1 = temp__4657__auto___31329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31298_31330__$1)){
var c__8816__auto___31331 = cljs.core.chunk_first.call(null,seq__31298_31330__$1);
var G__31332 = cljs.core.chunk_rest.call(null,seq__31298_31330__$1);
var G__31333 = c__8816__auto___31331;
var G__31334 = cljs.core.count.call(null,c__8816__auto___31331);
var G__31335 = (0);
seq__31298_31320 = G__31332;
chunk__31299_31321 = G__31333;
count__31300_31322 = G__31334;
i__31301_31323 = G__31335;
continue;
} else {
var f_31336 = cljs.core.first.call(null,seq__31298_31330__$1);
cljs.core.println.call(null,"  ",f_31336);

var G__31337 = cljs.core.next.call(null,seq__31298_31330__$1);
var G__31338 = null;
var G__31339 = (0);
var G__31340 = (0);
seq__31298_31320 = G__31337;
chunk__31299_31321 = G__31338;
count__31300_31322 = G__31339;
i__31301_31323 = G__31340;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31341 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7977__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31341);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31341)))?cljs.core.second.call(null,arglists_31341):arglists_31341));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31302_31342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31303_31343 = null;
var count__31304_31344 = (0);
var i__31305_31345 = (0);
while(true){
if((i__31305_31345 < count__31304_31344)){
var vec__31306_31346 = cljs.core._nth.call(null,chunk__31303_31343,i__31305_31345);
var name_31347 = cljs.core.nth.call(null,vec__31306_31346,(0),null);
var map__31309_31348 = cljs.core.nth.call(null,vec__31306_31346,(1),null);
var map__31309_31349__$1 = ((((!((map__31309_31348 == null)))?((((map__31309_31348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31309_31348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31309_31348):map__31309_31348);
var doc_31350 = cljs.core.get.call(null,map__31309_31349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31351 = cljs.core.get.call(null,map__31309_31349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31347);

cljs.core.println.call(null," ",arglists_31351);

if(cljs.core.truth_(doc_31350)){
cljs.core.println.call(null," ",doc_31350);
} else {
}

var G__31352 = seq__31302_31342;
var G__31353 = chunk__31303_31343;
var G__31354 = count__31304_31344;
var G__31355 = (i__31305_31345 + (1));
seq__31302_31342 = G__31352;
chunk__31303_31343 = G__31353;
count__31304_31344 = G__31354;
i__31305_31345 = G__31355;
continue;
} else {
var temp__4657__auto___31356 = cljs.core.seq.call(null,seq__31302_31342);
if(temp__4657__auto___31356){
var seq__31302_31357__$1 = temp__4657__auto___31356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31302_31357__$1)){
var c__8816__auto___31358 = cljs.core.chunk_first.call(null,seq__31302_31357__$1);
var G__31359 = cljs.core.chunk_rest.call(null,seq__31302_31357__$1);
var G__31360 = c__8816__auto___31358;
var G__31361 = cljs.core.count.call(null,c__8816__auto___31358);
var G__31362 = (0);
seq__31302_31342 = G__31359;
chunk__31303_31343 = G__31360;
count__31304_31344 = G__31361;
i__31305_31345 = G__31362;
continue;
} else {
var vec__31311_31363 = cljs.core.first.call(null,seq__31302_31357__$1);
var name_31364 = cljs.core.nth.call(null,vec__31311_31363,(0),null);
var map__31314_31365 = cljs.core.nth.call(null,vec__31311_31363,(1),null);
var map__31314_31366__$1 = ((((!((map__31314_31365 == null)))?((((map__31314_31365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31314_31365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31314_31365):map__31314_31365);
var doc_31367 = cljs.core.get.call(null,map__31314_31366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31368 = cljs.core.get.call(null,map__31314_31366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31364);

cljs.core.println.call(null," ",arglists_31368);

if(cljs.core.truth_(doc_31367)){
cljs.core.println.call(null," ",doc_31367);
} else {
}

var G__31369 = cljs.core.next.call(null,seq__31302_31357__$1);
var G__31370 = null;
var G__31371 = (0);
var G__31372 = (0);
seq__31302_31342 = G__31369;
chunk__31303_31343 = G__31370;
count__31304_31344 = G__31371;
i__31305_31345 = G__31372;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__31316 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31317 = null;
var count__31318 = (0);
var i__31319 = (0);
while(true){
if((i__31319 < count__31318)){
var role = cljs.core._nth.call(null,chunk__31317,i__31319);
var temp__4657__auto___31373__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31373__$1)){
var spec_31374 = temp__4657__auto___31373__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31374));
} else {
}

var G__31375 = seq__31316;
var G__31376 = chunk__31317;
var G__31377 = count__31318;
var G__31378 = (i__31319 + (1));
seq__31316 = G__31375;
chunk__31317 = G__31376;
count__31318 = G__31377;
i__31319 = G__31378;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31316);
if(temp__4657__auto____$1){
var seq__31316__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31316__$1)){
var c__8816__auto__ = cljs.core.chunk_first.call(null,seq__31316__$1);
var G__31379 = cljs.core.chunk_rest.call(null,seq__31316__$1);
var G__31380 = c__8816__auto__;
var G__31381 = cljs.core.count.call(null,c__8816__auto__);
var G__31382 = (0);
seq__31316 = G__31379;
chunk__31317 = G__31380;
count__31318 = G__31381;
i__31319 = G__31382;
continue;
} else {
var role = cljs.core.first.call(null,seq__31316__$1);
var temp__4657__auto___31383__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31383__$2)){
var spec_31384 = temp__4657__auto___31383__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31384));
} else {
}

var G__31385 = cljs.core.next.call(null,seq__31316__$1);
var G__31386 = null;
var G__31387 = (0);
var G__31388 = (0);
seq__31316 = G__31385;
chunk__31317 = G__31386;
count__31318 = G__31387;
i__31319 = G__31388;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
