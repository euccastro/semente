// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__9953 = arguments.length;
switch (G__9953) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__9954 = opts;
var map__9954__$1 = ((((!((map__9954 == null)))?((((map__9954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9954):map__9954);
var ref = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__9956 = cljs.core.count.call(null,refs);
switch (G__9956) {
case (1):
var vec__9957 = refs;
var a = cljs.core.nth.call(null,vec__9957,(0),null);
return ((function (vec__9957,a,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__9957,a,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__9960 = refs;
var a = cljs.core.nth.call(null,vec__9960,(0),null);
var b = cljs.core.nth.call(null,vec__9960,(1),null);
return ((function (vec__9960,a,b,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__9960,a,b,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__9963 = refs;
var a = cljs.core.nth.call(null,vec__9963,(0),null);
var b = cljs.core.nth.call(null,vec__9963,(1),null);
var c = cljs.core.nth.call(null,vec__9963,(2),null);
return ((function (vec__9963,a,b,c,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__9963,a,b,c,G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__9956,map__9954,map__9954__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__9966 = ref;
cljs.core.reset_BANG_.call(null,G__9966,recalc.call(null));

return G__9966;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__9954,map__9954__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__9954,map__9954__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__9954,map__9954__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__9954,map__9954__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__9967_9973 = cljs.core.seq.call(null,refs);
var chunk__9968_9974 = null;
var count__9969_9975 = (0);
var i__9970_9976 = (0);
while(true){
if((i__9970_9976 < count__9969_9975)){
var ref_9977__$1 = cljs.core._nth.call(null,chunk__9968_9974,i__9970_9976);
cljs.core.add_watch.call(null,ref_9977__$1,key,watch);

var G__9978 = seq__9967_9973;
var G__9979 = chunk__9968_9974;
var G__9980 = count__9969_9975;
var G__9981 = (i__9970_9976 + (1));
seq__9967_9973 = G__9978;
chunk__9968_9974 = G__9979;
count__9969_9975 = G__9980;
i__9970_9976 = G__9981;
continue;
} else {
var temp__4657__auto___9982 = cljs.core.seq.call(null,seq__9967_9973);
if(temp__4657__auto___9982){
var seq__9967_9983__$1 = temp__4657__auto___9982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9967_9983__$1)){
var c__8816__auto___9984 = cljs.core.chunk_first.call(null,seq__9967_9983__$1);
var G__9985 = cljs.core.chunk_rest.call(null,seq__9967_9983__$1);
var G__9986 = c__8816__auto___9984;
var G__9987 = cljs.core.count.call(null,c__8816__auto___9984);
var G__9988 = (0);
seq__9967_9973 = G__9985;
chunk__9968_9974 = G__9986;
count__9969_9975 = G__9987;
i__9970_9976 = G__9988;
continue;
} else {
var ref_9989__$1 = cljs.core.first.call(null,seq__9967_9983__$1);
cljs.core.add_watch.call(null,ref_9989__$1,key,watch);

var G__9990 = cljs.core.next.call(null,seq__9967_9983__$1);
var G__9991 = null;
var G__9992 = (0);
var G__9993 = (0);
seq__9967_9973 = G__9990;
chunk__9968_9974 = G__9991;
count__9969_9975 = G__9992;
i__9970_9976 = G__9993;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
