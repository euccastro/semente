// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29891 = arguments.length;
var i__9149__auto___29892 = (0);
while(true){
if((i__9149__auto___29892 < len__9148__auto___29891)){
args__9155__auto__.push((arguments[i__9149__auto___29892]));

var G__29893 = (i__9149__auto___29892 + (1));
i__9149__auto___29892 = G__29893;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq29890){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29890));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29895 = arguments.length;
var i__9149__auto___29896 = (0);
while(true){
if((i__9149__auto___29896 < len__9148__auto___29895)){
args__9155__auto__.push((arguments[i__9149__auto___29896]));

var G__29897 = (i__9149__auto___29896 + (1));
i__9149__auto___29896 = G__29897;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq29894){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29894));
});

var g_QMARK__29898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_29899 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29898){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__29898))
,null));
var mkg_29900 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29898,g_29899){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__29898,g_29899))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__29898,g_29899,mkg_29900){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29898).call(null,x);
});})(g_QMARK__29898,g_29899,mkg_29900))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__29898,g_29899,mkg_29900){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_29900).call(null,gfn);
});})(g_QMARK__29898,g_29899,mkg_29900))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__29898,g_29899,mkg_29900){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_29899).call(null,generator);
});})(g_QMARK__29898,g_29899,mkg_29900))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9241__auto___29920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9241__auto___29920){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29921 = arguments.length;
var i__9149__auto___29922 = (0);
while(true){
if((i__9149__auto___29922 < len__9148__auto___29921)){
args__9155__auto__.push((arguments[i__9149__auto___29922]));

var G__29923 = (i__9149__auto___29922 + (1));
i__9149__auto___29922 = G__29923;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29920))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29920),args);
});})(g__9241__auto___29920))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9241__auto___29920){
return (function (seq29901){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29901));
});})(g__9241__auto___29920))
;


var g__9241__auto___29924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9241__auto___29924){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29925 = arguments.length;
var i__9149__auto___29926 = (0);
while(true){
if((i__9149__auto___29926 < len__9148__auto___29925)){
args__9155__auto__.push((arguments[i__9149__auto___29926]));

var G__29927 = (i__9149__auto___29926 + (1));
i__9149__auto___29926 = G__29927;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29924))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29924),args);
});})(g__9241__auto___29924))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9241__auto___29924){
return (function (seq29902){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29902));
});})(g__9241__auto___29924))
;


var g__9241__auto___29928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9241__auto___29928){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29929 = arguments.length;
var i__9149__auto___29930 = (0);
while(true){
if((i__9149__auto___29930 < len__9148__auto___29929)){
args__9155__auto__.push((arguments[i__9149__auto___29930]));

var G__29931 = (i__9149__auto___29930 + (1));
i__9149__auto___29930 = G__29931;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29928))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29928),args);
});})(g__9241__auto___29928))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9241__auto___29928){
return (function (seq29903){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29903));
});})(g__9241__auto___29928))
;


var g__9241__auto___29932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9241__auto___29932){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29933 = arguments.length;
var i__9149__auto___29934 = (0);
while(true){
if((i__9149__auto___29934 < len__9148__auto___29933)){
args__9155__auto__.push((arguments[i__9149__auto___29934]));

var G__29935 = (i__9149__auto___29934 + (1));
i__9149__auto___29934 = G__29935;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29932))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29932),args);
});})(g__9241__auto___29932))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9241__auto___29932){
return (function (seq29904){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29904));
});})(g__9241__auto___29932))
;


var g__9241__auto___29936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9241__auto___29936){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29937 = arguments.length;
var i__9149__auto___29938 = (0);
while(true){
if((i__9149__auto___29938 < len__9148__auto___29937)){
args__9155__auto__.push((arguments[i__9149__auto___29938]));

var G__29939 = (i__9149__auto___29938 + (1));
i__9149__auto___29938 = G__29939;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29936))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29936),args);
});})(g__9241__auto___29936))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9241__auto___29936){
return (function (seq29905){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29905));
});})(g__9241__auto___29936))
;


var g__9241__auto___29940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9241__auto___29940){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29941 = arguments.length;
var i__9149__auto___29942 = (0);
while(true){
if((i__9149__auto___29942 < len__9148__auto___29941)){
args__9155__auto__.push((arguments[i__9149__auto___29942]));

var G__29943 = (i__9149__auto___29942 + (1));
i__9149__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29940))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29940),args);
});})(g__9241__auto___29940))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9241__auto___29940){
return (function (seq29906){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29906));
});})(g__9241__auto___29940))
;


var g__9241__auto___29944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9241__auto___29944){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29945 = arguments.length;
var i__9149__auto___29946 = (0);
while(true){
if((i__9149__auto___29946 < len__9148__auto___29945)){
args__9155__auto__.push((arguments[i__9149__auto___29946]));

var G__29947 = (i__9149__auto___29946 + (1));
i__9149__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29944))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29944),args);
});})(g__9241__auto___29944))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9241__auto___29944){
return (function (seq29907){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29907));
});})(g__9241__auto___29944))
;


var g__9241__auto___29948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9241__auto___29948){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29949 = arguments.length;
var i__9149__auto___29950 = (0);
while(true){
if((i__9149__auto___29950 < len__9148__auto___29949)){
args__9155__auto__.push((arguments[i__9149__auto___29950]));

var G__29951 = (i__9149__auto___29950 + (1));
i__9149__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29948))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29948),args);
});})(g__9241__auto___29948))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9241__auto___29948){
return (function (seq29908){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29908));
});})(g__9241__auto___29948))
;


var g__9241__auto___29952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9241__auto___29952){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29953 = arguments.length;
var i__9149__auto___29954 = (0);
while(true){
if((i__9149__auto___29954 < len__9148__auto___29953)){
args__9155__auto__.push((arguments[i__9149__auto___29954]));

var G__29955 = (i__9149__auto___29954 + (1));
i__9149__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29952))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29952),args);
});})(g__9241__auto___29952))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9241__auto___29952){
return (function (seq29909){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29909));
});})(g__9241__auto___29952))
;


var g__9241__auto___29956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9241__auto___29956){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29957 = arguments.length;
var i__9149__auto___29958 = (0);
while(true){
if((i__9149__auto___29958 < len__9148__auto___29957)){
args__9155__auto__.push((arguments[i__9149__auto___29958]));

var G__29959 = (i__9149__auto___29958 + (1));
i__9149__auto___29958 = G__29959;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29956))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29956),args);
});})(g__9241__auto___29956))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9241__auto___29956){
return (function (seq29910){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29910));
});})(g__9241__auto___29956))
;


var g__9241__auto___29960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9241__auto___29960){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29961 = arguments.length;
var i__9149__auto___29962 = (0);
while(true){
if((i__9149__auto___29962 < len__9148__auto___29961)){
args__9155__auto__.push((arguments[i__9149__auto___29962]));

var G__29963 = (i__9149__auto___29962 + (1));
i__9149__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29960))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29960),args);
});})(g__9241__auto___29960))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9241__auto___29960){
return (function (seq29911){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29911));
});})(g__9241__auto___29960))
;


var g__9241__auto___29964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9241__auto___29964){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29965 = arguments.length;
var i__9149__auto___29966 = (0);
while(true){
if((i__9149__auto___29966 < len__9148__auto___29965)){
args__9155__auto__.push((arguments[i__9149__auto___29966]));

var G__29967 = (i__9149__auto___29966 + (1));
i__9149__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29964))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29964){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29964),args);
});})(g__9241__auto___29964))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9241__auto___29964){
return (function (seq29912){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29912));
});})(g__9241__auto___29964))
;


var g__9241__auto___29968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9241__auto___29968){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29969 = arguments.length;
var i__9149__auto___29970 = (0);
while(true){
if((i__9149__auto___29970 < len__9148__auto___29969)){
args__9155__auto__.push((arguments[i__9149__auto___29970]));

var G__29971 = (i__9149__auto___29970 + (1));
i__9149__auto___29970 = G__29971;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29968))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29968),args);
});})(g__9241__auto___29968))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9241__auto___29968){
return (function (seq29913){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29913));
});})(g__9241__auto___29968))
;


var g__9241__auto___29972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9241__auto___29972){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29973 = arguments.length;
var i__9149__auto___29974 = (0);
while(true){
if((i__9149__auto___29974 < len__9148__auto___29973)){
args__9155__auto__.push((arguments[i__9149__auto___29974]));

var G__29975 = (i__9149__auto___29974 + (1));
i__9149__auto___29974 = G__29975;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29972))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29972),args);
});})(g__9241__auto___29972))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9241__auto___29972){
return (function (seq29914){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29914));
});})(g__9241__auto___29972))
;


var g__9241__auto___29976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9241__auto___29976){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29977 = arguments.length;
var i__9149__auto___29978 = (0);
while(true){
if((i__9149__auto___29978 < len__9148__auto___29977)){
args__9155__auto__.push((arguments[i__9149__auto___29978]));

var G__29979 = (i__9149__auto___29978 + (1));
i__9149__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29976))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29976),args);
});})(g__9241__auto___29976))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9241__auto___29976){
return (function (seq29915){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29915));
});})(g__9241__auto___29976))
;


var g__9241__auto___29980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9241__auto___29980){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29981 = arguments.length;
var i__9149__auto___29982 = (0);
while(true){
if((i__9149__auto___29982 < len__9148__auto___29981)){
args__9155__auto__.push((arguments[i__9149__auto___29982]));

var G__29983 = (i__9149__auto___29982 + (1));
i__9149__auto___29982 = G__29983;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29980))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29980),args);
});})(g__9241__auto___29980))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9241__auto___29980){
return (function (seq29916){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29916));
});})(g__9241__auto___29980))
;


var g__9241__auto___29984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9241__auto___29984){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29985 = arguments.length;
var i__9149__auto___29986 = (0);
while(true){
if((i__9149__auto___29986 < len__9148__auto___29985)){
args__9155__auto__.push((arguments[i__9149__auto___29986]));

var G__29987 = (i__9149__auto___29986 + (1));
i__9149__auto___29986 = G__29987;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29984))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29984),args);
});})(g__9241__auto___29984))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9241__auto___29984){
return (function (seq29917){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29917));
});})(g__9241__auto___29984))
;


var g__9241__auto___29988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9241__auto___29988){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29989 = arguments.length;
var i__9149__auto___29990 = (0);
while(true){
if((i__9149__auto___29990 < len__9148__auto___29989)){
args__9155__auto__.push((arguments[i__9149__auto___29990]));

var G__29991 = (i__9149__auto___29990 + (1));
i__9149__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29988))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29988),args);
});})(g__9241__auto___29988))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9241__auto___29988){
return (function (seq29918){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29918));
});})(g__9241__auto___29988))
;


var g__9241__auto___29992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9241__auto___29992){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9155__auto__ = [];
var len__9148__auto___29993 = arguments.length;
var i__9149__auto___29994 = (0);
while(true){
if((i__9149__auto___29994 < len__9148__auto___29993)){
args__9155__auto__.push((arguments[i__9149__auto___29994]));

var G__29995 = (i__9149__auto___29994 + (1));
i__9149__auto___29994 = G__29995;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9241__auto___29992))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9241__auto___29992){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9241__auto___29992),args);
});})(g__9241__auto___29992))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9241__auto___29992){
return (function (seq29919){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29919));
});})(g__9241__auto___29992))
;

var g__9254__auto___30017 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9254__auto___30017){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30018 = arguments.length;
var i__9149__auto___30019 = (0);
while(true){
if((i__9149__auto___30019 < len__9148__auto___30018)){
args__9155__auto__.push((arguments[i__9149__auto___30019]));

var G__30020 = (i__9149__auto___30019 + (1));
i__9149__auto___30019 = G__30020;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30017))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30017){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30017);
});})(g__9254__auto___30017))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9254__auto___30017){
return (function (seq29996){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29996));
});})(g__9254__auto___30017))
;


var g__9254__auto___30021 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9254__auto___30021){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30022 = arguments.length;
var i__9149__auto___30023 = (0);
while(true){
if((i__9149__auto___30023 < len__9148__auto___30022)){
args__9155__auto__.push((arguments[i__9149__auto___30023]));

var G__30024 = (i__9149__auto___30023 + (1));
i__9149__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30021))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30021){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30021);
});})(g__9254__auto___30021))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9254__auto___30021){
return (function (seq29997){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29997));
});})(g__9254__auto___30021))
;


var g__9254__auto___30025 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9254__auto___30025){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30026 = arguments.length;
var i__9149__auto___30027 = (0);
while(true){
if((i__9149__auto___30027 < len__9148__auto___30026)){
args__9155__auto__.push((arguments[i__9149__auto___30027]));

var G__30028 = (i__9149__auto___30027 + (1));
i__9149__auto___30027 = G__30028;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30025))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30025){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30025);
});})(g__9254__auto___30025))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9254__auto___30025){
return (function (seq29998){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29998));
});})(g__9254__auto___30025))
;


var g__9254__auto___30029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9254__auto___30029){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30030 = arguments.length;
var i__9149__auto___30031 = (0);
while(true){
if((i__9149__auto___30031 < len__9148__auto___30030)){
args__9155__auto__.push((arguments[i__9149__auto___30031]));

var G__30032 = (i__9149__auto___30031 + (1));
i__9149__auto___30031 = G__30032;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30029))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30029){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30029);
});})(g__9254__auto___30029))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9254__auto___30029){
return (function (seq29999){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29999));
});})(g__9254__auto___30029))
;


var g__9254__auto___30033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9254__auto___30033){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30034 = arguments.length;
var i__9149__auto___30035 = (0);
while(true){
if((i__9149__auto___30035 < len__9148__auto___30034)){
args__9155__auto__.push((arguments[i__9149__auto___30035]));

var G__30036 = (i__9149__auto___30035 + (1));
i__9149__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30033))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30033){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30033);
});})(g__9254__auto___30033))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9254__auto___30033){
return (function (seq30000){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30000));
});})(g__9254__auto___30033))
;


var g__9254__auto___30037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9254__auto___30037){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30038 = arguments.length;
var i__9149__auto___30039 = (0);
while(true){
if((i__9149__auto___30039 < len__9148__auto___30038)){
args__9155__auto__.push((arguments[i__9149__auto___30039]));

var G__30040 = (i__9149__auto___30039 + (1));
i__9149__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30037))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30037){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30037);
});})(g__9254__auto___30037))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9254__auto___30037){
return (function (seq30001){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30001));
});})(g__9254__auto___30037))
;


var g__9254__auto___30041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9254__auto___30041){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30042 = arguments.length;
var i__9149__auto___30043 = (0);
while(true){
if((i__9149__auto___30043 < len__9148__auto___30042)){
args__9155__auto__.push((arguments[i__9149__auto___30043]));

var G__30044 = (i__9149__auto___30043 + (1));
i__9149__auto___30043 = G__30044;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30041))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30041){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30041);
});})(g__9254__auto___30041))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9254__auto___30041){
return (function (seq30002){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30002));
});})(g__9254__auto___30041))
;


var g__9254__auto___30045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9254__auto___30045){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30046 = arguments.length;
var i__9149__auto___30047 = (0);
while(true){
if((i__9149__auto___30047 < len__9148__auto___30046)){
args__9155__auto__.push((arguments[i__9149__auto___30047]));

var G__30048 = (i__9149__auto___30047 + (1));
i__9149__auto___30047 = G__30048;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30045))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30045){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30045);
});})(g__9254__auto___30045))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9254__auto___30045){
return (function (seq30003){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30003));
});})(g__9254__auto___30045))
;


var g__9254__auto___30049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9254__auto___30049){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30050 = arguments.length;
var i__9149__auto___30051 = (0);
while(true){
if((i__9149__auto___30051 < len__9148__auto___30050)){
args__9155__auto__.push((arguments[i__9149__auto___30051]));

var G__30052 = (i__9149__auto___30051 + (1));
i__9149__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30049))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30049){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30049);
});})(g__9254__auto___30049))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9254__auto___30049){
return (function (seq30004){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30004));
});})(g__9254__auto___30049))
;


var g__9254__auto___30053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9254__auto___30053){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30054 = arguments.length;
var i__9149__auto___30055 = (0);
while(true){
if((i__9149__auto___30055 < len__9148__auto___30054)){
args__9155__auto__.push((arguments[i__9149__auto___30055]));

var G__30056 = (i__9149__auto___30055 + (1));
i__9149__auto___30055 = G__30056;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30053))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30053){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30053);
});})(g__9254__auto___30053))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9254__auto___30053){
return (function (seq30005){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30005));
});})(g__9254__auto___30053))
;


var g__9254__auto___30057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9254__auto___30057){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30058 = arguments.length;
var i__9149__auto___30059 = (0);
while(true){
if((i__9149__auto___30059 < len__9148__auto___30058)){
args__9155__auto__.push((arguments[i__9149__auto___30059]));

var G__30060 = (i__9149__auto___30059 + (1));
i__9149__auto___30059 = G__30060;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30057))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30057){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30057);
});})(g__9254__auto___30057))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9254__auto___30057){
return (function (seq30006){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30006));
});})(g__9254__auto___30057))
;


var g__9254__auto___30061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9254__auto___30061){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30062 = arguments.length;
var i__9149__auto___30063 = (0);
while(true){
if((i__9149__auto___30063 < len__9148__auto___30062)){
args__9155__auto__.push((arguments[i__9149__auto___30063]));

var G__30064 = (i__9149__auto___30063 + (1));
i__9149__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30061))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30061){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30061);
});})(g__9254__auto___30061))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9254__auto___30061){
return (function (seq30007){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30007));
});})(g__9254__auto___30061))
;


var g__9254__auto___30065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9254__auto___30065){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30066 = arguments.length;
var i__9149__auto___30067 = (0);
while(true){
if((i__9149__auto___30067 < len__9148__auto___30066)){
args__9155__auto__.push((arguments[i__9149__auto___30067]));

var G__30068 = (i__9149__auto___30067 + (1));
i__9149__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30065))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30065){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30065);
});})(g__9254__auto___30065))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9254__auto___30065){
return (function (seq30008){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30008));
});})(g__9254__auto___30065))
;


var g__9254__auto___30069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9254__auto___30069){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30070 = arguments.length;
var i__9149__auto___30071 = (0);
while(true){
if((i__9149__auto___30071 < len__9148__auto___30070)){
args__9155__auto__.push((arguments[i__9149__auto___30071]));

var G__30072 = (i__9149__auto___30071 + (1));
i__9149__auto___30071 = G__30072;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30069))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30069){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30069);
});})(g__9254__auto___30069))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9254__auto___30069){
return (function (seq30009){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30009));
});})(g__9254__auto___30069))
;


var g__9254__auto___30073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9254__auto___30073){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30074 = arguments.length;
var i__9149__auto___30075 = (0);
while(true){
if((i__9149__auto___30075 < len__9148__auto___30074)){
args__9155__auto__.push((arguments[i__9149__auto___30075]));

var G__30076 = (i__9149__auto___30075 + (1));
i__9149__auto___30075 = G__30076;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30073))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30073){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30073);
});})(g__9254__auto___30073))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9254__auto___30073){
return (function (seq30010){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30010));
});})(g__9254__auto___30073))
;


var g__9254__auto___30077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9254__auto___30077){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30078 = arguments.length;
var i__9149__auto___30079 = (0);
while(true){
if((i__9149__auto___30079 < len__9148__auto___30078)){
args__9155__auto__.push((arguments[i__9149__auto___30079]));

var G__30080 = (i__9149__auto___30079 + (1));
i__9149__auto___30079 = G__30080;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30077))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30077){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30077);
});})(g__9254__auto___30077))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9254__auto___30077){
return (function (seq30011){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30011));
});})(g__9254__auto___30077))
;


var g__9254__auto___30081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9254__auto___30081){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30082 = arguments.length;
var i__9149__auto___30083 = (0);
while(true){
if((i__9149__auto___30083 < len__9148__auto___30082)){
args__9155__auto__.push((arguments[i__9149__auto___30083]));

var G__30084 = (i__9149__auto___30083 + (1));
i__9149__auto___30083 = G__30084;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30081))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30081){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30081);
});})(g__9254__auto___30081))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9254__auto___30081){
return (function (seq30012){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30012));
});})(g__9254__auto___30081))
;


var g__9254__auto___30085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9254__auto___30085){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30086 = arguments.length;
var i__9149__auto___30087 = (0);
while(true){
if((i__9149__auto___30087 < len__9148__auto___30086)){
args__9155__auto__.push((arguments[i__9149__auto___30087]));

var G__30088 = (i__9149__auto___30087 + (1));
i__9149__auto___30087 = G__30088;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30085))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30085){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30085);
});})(g__9254__auto___30085))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9254__auto___30085){
return (function (seq30013){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30013));
});})(g__9254__auto___30085))
;


var g__9254__auto___30089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9254__auto___30089){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30090 = arguments.length;
var i__9149__auto___30091 = (0);
while(true){
if((i__9149__auto___30091 < len__9148__auto___30090)){
args__9155__auto__.push((arguments[i__9149__auto___30091]));

var G__30092 = (i__9149__auto___30091 + (1));
i__9149__auto___30091 = G__30092;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30089))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30089){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30089);
});})(g__9254__auto___30089))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9254__auto___30089){
return (function (seq30014){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30014));
});})(g__9254__auto___30089))
;


var g__9254__auto___30093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9254__auto___30093){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30094 = arguments.length;
var i__9149__auto___30095 = (0);
while(true){
if((i__9149__auto___30095 < len__9148__auto___30094)){
args__9155__auto__.push((arguments[i__9149__auto___30095]));

var G__30096 = (i__9149__auto___30095 + (1));
i__9149__auto___30095 = G__30096;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30093))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30093){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30093);
});})(g__9254__auto___30093))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9254__auto___30093){
return (function (seq30015){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30015));
});})(g__9254__auto___30093))
;


var g__9254__auto___30097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9254__auto___30097){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30098 = arguments.length;
var i__9149__auto___30099 = (0);
while(true){
if((i__9149__auto___30099 < len__9148__auto___30098)){
args__9155__auto__.push((arguments[i__9149__auto___30099]));

var G__30100 = (i__9149__auto___30099 + (1));
i__9149__auto___30099 = G__30100;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});})(g__9254__auto___30097))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9254__auto___30097){
return (function (args){
return cljs.core.deref.call(null,g__9254__auto___30097);
});})(g__9254__auto___30097))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9254__auto___30097){
return (function (seq30016){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30016));
});})(g__9254__auto___30097))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9155__auto__ = [];
var len__9148__auto___30103 = arguments.length;
var i__9149__auto___30104 = (0);
while(true){
if((i__9149__auto___30104 < len__9148__auto___30103)){
args__9155__auto__.push((arguments[i__9149__auto___30104]));

var G__30105 = (i__9149__auto___30104 + (1));
i__9149__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__30101_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30101_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq30102){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30102));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__30106_SHARP_){
return (new Date(p1__30106_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
