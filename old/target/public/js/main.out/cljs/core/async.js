// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12667 = arguments.length;
switch (G__12667) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12668 = (function (f,blockable,meta12669){
this.f = f;
this.blockable = blockable;
this.meta12669 = meta12669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12670,meta12669__$1){
var self__ = this;
var _12670__$1 = this;
return (new cljs.core.async.t_cljs$core$async12668(self__.f,self__.blockable,meta12669__$1));
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12670){
var self__ = this;
var _12670__$1 = this;
return self__.meta12669;
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12669","meta12669",-333123162,null)], null);
});

cljs.core.async.t_cljs$core$async12668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12668";

cljs.core.async.t_cljs$core$async12668.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async12668");
});

cljs.core.async.__GT_t_cljs$core$async12668 = (function cljs$core$async$__GT_t_cljs$core$async12668(f__$1,blockable__$1,meta12669){
return (new cljs.core.async.t_cljs$core$async12668(f__$1,blockable__$1,meta12669));
});

}

return (new cljs.core.async.t_cljs$core$async12668(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12674 = arguments.length;
switch (G__12674) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12677 = arguments.length;
switch (G__12677) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12680 = arguments.length;
switch (G__12680) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12682 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12682);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12682,ret){
return (function (){
return fn1.call(null,val_12682);
});})(val_12682,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12684 = arguments.length;
switch (G__12684) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8924__auto___12686 = n;
var x_12687 = (0);
while(true){
if((x_12687 < n__8924__auto___12686)){
(a[x_12687] = (0));

var G__12688 = (x_12687 + (1));
x_12687 = G__12688;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12689 = (i + (1));
i = G__12689;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12690 = (function (flag,meta12691){
this.flag = flag;
this.meta12691 = meta12691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12692,meta12691__$1){
var self__ = this;
var _12692__$1 = this;
return (new cljs.core.async.t_cljs$core$async12690(self__.flag,meta12691__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12692){
var self__ = this;
var _12692__$1 = this;
return self__.meta12691;
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12691","meta12691",-378506162,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12690";

cljs.core.async.t_cljs$core$async12690.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async12690");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12690 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12690(flag__$1,meta12691){
return (new cljs.core.async.t_cljs$core$async12690(flag__$1,meta12691));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12690(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12693 = (function (flag,cb,meta12694){
this.flag = flag;
this.cb = cb;
this.meta12694 = meta12694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12695,meta12694__$1){
var self__ = this;
var _12695__$1 = this;
return (new cljs.core.async.t_cljs$core$async12693(self__.flag,self__.cb,meta12694__$1));
});

cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12695){
var self__ = this;
var _12695__$1 = this;
return self__.meta12694;
});

cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12694","meta12694",-1346535304,null)], null);
});

cljs.core.async.t_cljs$core$async12693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12693";

cljs.core.async.t_cljs$core$async12693.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async12693");
});

cljs.core.async.__GT_t_cljs$core$async12693 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12693(flag__$1,cb__$1,meta12694){
return (new cljs.core.async.t_cljs$core$async12693(flag__$1,cb__$1,meta12694));
});

}

return (new cljs.core.async.t_cljs$core$async12693(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12696_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12696_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12697_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12697_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7977__auto__ = wport;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12698 = (i + (1));
i = G__12698;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7977__auto__ = ret;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7965__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7965__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7965__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___12704 = arguments.length;
var i__9149__auto___12705 = (0);
while(true){
if((i__9149__auto___12705 < len__9148__auto___12704)){
args__9155__auto__.push((arguments[i__9149__auto___12705]));

var G__12706 = (i__9149__auto___12705 + (1));
i__9149__auto___12705 = G__12706;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12701){
var map__12702 = p__12701;
var map__12702__$1 = ((((!((map__12702 == null)))?((((map__12702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12702):map__12702);
var opts = map__12702__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12699){
var G__12700 = cljs.core.first.call(null,seq12699);
var seq12699__$1 = cljs.core.next.call(null,seq12699);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12700,seq12699__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12708 = arguments.length;
switch (G__12708) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12621__auto___12754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___12754){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___12754){
return (function (state_12732){
var state_val_12733 = (state_12732[(1)]);
if((state_val_12733 === (7))){
var inst_12728 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12734_12755 = state_12732__$1;
(statearr_12734_12755[(2)] = inst_12728);

(statearr_12734_12755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (1))){
var state_12732__$1 = state_12732;
var statearr_12735_12756 = state_12732__$1;
(statearr_12735_12756[(2)] = null);

(statearr_12735_12756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (4))){
var inst_12711 = (state_12732[(7)]);
var inst_12711__$1 = (state_12732[(2)]);
var inst_12712 = (inst_12711__$1 == null);
var state_12732__$1 = (function (){var statearr_12736 = state_12732;
(statearr_12736[(7)] = inst_12711__$1);

return statearr_12736;
})();
if(cljs.core.truth_(inst_12712)){
var statearr_12737_12757 = state_12732__$1;
(statearr_12737_12757[(1)] = (5));

} else {
var statearr_12738_12758 = state_12732__$1;
(statearr_12738_12758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (13))){
var state_12732__$1 = state_12732;
var statearr_12739_12759 = state_12732__$1;
(statearr_12739_12759[(2)] = null);

(statearr_12739_12759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (6))){
var inst_12711 = (state_12732[(7)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12732__$1,(11),to,inst_12711);
} else {
if((state_val_12733 === (3))){
var inst_12730 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12732__$1,inst_12730);
} else {
if((state_val_12733 === (12))){
var state_12732__$1 = state_12732;
var statearr_12740_12760 = state_12732__$1;
(statearr_12740_12760[(2)] = null);

(statearr_12740_12760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (2))){
var state_12732__$1 = state_12732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12732__$1,(4),from);
} else {
if((state_val_12733 === (11))){
var inst_12721 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
if(cljs.core.truth_(inst_12721)){
var statearr_12741_12761 = state_12732__$1;
(statearr_12741_12761[(1)] = (12));

} else {
var statearr_12742_12762 = state_12732__$1;
(statearr_12742_12762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (9))){
var state_12732__$1 = state_12732;
var statearr_12743_12763 = state_12732__$1;
(statearr_12743_12763[(2)] = null);

(statearr_12743_12763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (5))){
var state_12732__$1 = state_12732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12744_12764 = state_12732__$1;
(statearr_12744_12764[(1)] = (8));

} else {
var statearr_12745_12765 = state_12732__$1;
(statearr_12745_12765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (14))){
var inst_12726 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12746_12766 = state_12732__$1;
(statearr_12746_12766[(2)] = inst_12726);

(statearr_12746_12766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (10))){
var inst_12718 = (state_12732[(2)]);
var state_12732__$1 = state_12732;
var statearr_12747_12767 = state_12732__$1;
(statearr_12747_12767[(2)] = inst_12718);

(statearr_12747_12767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12733 === (8))){
var inst_12715 = cljs.core.async.close_BANG_.call(null,to);
var state_12732__$1 = state_12732;
var statearr_12748_12768 = state_12732__$1;
(statearr_12748_12768[(2)] = inst_12715);

(statearr_12748_12768[(1)] = (10));


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
});})(c__12621__auto___12754))
;
return ((function (switch__12533__auto__,c__12621__auto___12754){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_12749 = [null,null,null,null,null,null,null,null];
(statearr_12749[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_12749[(1)] = (1));

return statearr_12749;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_12732){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12750){if((e12750 instanceof Object)){
var ex__12537__auto__ = e12750;
var statearr_12751_12769 = state_12732;
(statearr_12751_12769[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12770 = state_12732;
state_12732 = G__12770;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_12732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_12732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___12754))
})();
var state__12623__auto__ = (function (){var statearr_12752 = f__12622__auto__.call(null);
(statearr_12752[(6)] = c__12621__auto___12754);

return statearr_12752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___12754))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12771){
var vec__12772 = p__12771;
var v = cljs.core.nth.call(null,vec__12772,(0),null);
var p = cljs.core.nth.call(null,vec__12772,(1),null);
var job = vec__12772;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12621__auto___12943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results){
return (function (state_12779){
var state_val_12780 = (state_12779[(1)]);
if((state_val_12780 === (1))){
var state_12779__$1 = state_12779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12779__$1,(2),res,v);
} else {
if((state_val_12780 === (2))){
var inst_12776 = (state_12779[(2)]);
var inst_12777 = cljs.core.async.close_BANG_.call(null,res);
var state_12779__$1 = (function (){var statearr_12781 = state_12779;
(statearr_12781[(7)] = inst_12776);

return statearr_12781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12779__$1,inst_12777);
} else {
return null;
}
}
});})(c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results))
;
return ((function (switch__12533__auto__,c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_12782 = [null,null,null,null,null,null,null,null];
(statearr_12782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__);

(statearr_12782[(1)] = (1));

return statearr_12782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1 = (function (state_12779){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12783){if((e12783 instanceof Object)){
var ex__12537__auto__ = e12783;
var statearr_12784_12944 = state_12779;
(statearr_12784_12944[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12945 = state_12779;
state_12779 = G__12945;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = function(state_12779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1.call(this,state_12779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results))
})();
var state__12623__auto__ = (function (){var statearr_12785 = f__12622__auto__.call(null);
(statearr_12785[(6)] = c__12621__auto___12943);

return statearr_12785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___12943,res,vec__12772,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12786){
var vec__12787 = p__12786;
var v = cljs.core.nth.call(null,vec__12787,(0),null);
var p = cljs.core.nth.call(null,vec__12787,(1),null);
var job = vec__12787;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8924__auto___12946 = n;
var __12947 = (0);
while(true){
if((__12947 < n__8924__auto___12946)){
var G__12790_12948 = type;
var G__12790_12949__$1 = (((G__12790_12948 instanceof cljs.core.Keyword))?G__12790_12948.fqn:null);
switch (G__12790_12949__$1) {
case "compute":
var c__12621__auto___12951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12947,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (__12947,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function (state_12803){
var state_val_12804 = (state_12803[(1)]);
if((state_val_12804 === (1))){
var state_12803__$1 = state_12803;
var statearr_12805_12952 = state_12803__$1;
(statearr_12805_12952[(2)] = null);

(statearr_12805_12952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12804 === (2))){
var state_12803__$1 = state_12803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12803__$1,(4),jobs);
} else {
if((state_val_12804 === (3))){
var inst_12801 = (state_12803[(2)]);
var state_12803__$1 = state_12803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12803__$1,inst_12801);
} else {
if((state_val_12804 === (4))){
var inst_12793 = (state_12803[(2)]);
var inst_12794 = process.call(null,inst_12793);
var state_12803__$1 = state_12803;
if(cljs.core.truth_(inst_12794)){
var statearr_12806_12953 = state_12803__$1;
(statearr_12806_12953[(1)] = (5));

} else {
var statearr_12807_12954 = state_12803__$1;
(statearr_12807_12954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12804 === (5))){
var state_12803__$1 = state_12803;
var statearr_12808_12955 = state_12803__$1;
(statearr_12808_12955[(2)] = null);

(statearr_12808_12955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12804 === (6))){
var state_12803__$1 = state_12803;
var statearr_12809_12956 = state_12803__$1;
(statearr_12809_12956[(2)] = null);

(statearr_12809_12956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12804 === (7))){
var inst_12799 = (state_12803[(2)]);
var state_12803__$1 = state_12803;
var statearr_12810_12957 = state_12803__$1;
(statearr_12810_12957[(2)] = inst_12799);

(statearr_12810_12957[(1)] = (3));


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
});})(__12947,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
;
return ((function (__12947,switch__12533__auto__,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_12811 = [null,null,null,null,null,null,null];
(statearr_12811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__);

(statearr_12811[(1)] = (1));

return statearr_12811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1 = (function (state_12803){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12812){if((e12812 instanceof Object)){
var ex__12537__auto__ = e12812;
var statearr_12813_12958 = state_12803;
(statearr_12813_12958[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12959 = state_12803;
state_12803 = G__12959;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = function(state_12803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1.call(this,state_12803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__;
})()
;})(__12947,switch__12533__auto__,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
})();
var state__12623__auto__ = (function (){var statearr_12814 = f__12622__auto__.call(null);
(statearr_12814[(6)] = c__12621__auto___12951);

return statearr_12814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(__12947,c__12621__auto___12951,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
);


break;
case "async":
var c__12621__auto___12960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12947,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (__12947,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function (state_12827){
var state_val_12828 = (state_12827[(1)]);
if((state_val_12828 === (1))){
var state_12827__$1 = state_12827;
var statearr_12829_12961 = state_12827__$1;
(statearr_12829_12961[(2)] = null);

(statearr_12829_12961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (2))){
var state_12827__$1 = state_12827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12827__$1,(4),jobs);
} else {
if((state_val_12828 === (3))){
var inst_12825 = (state_12827[(2)]);
var state_12827__$1 = state_12827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12827__$1,inst_12825);
} else {
if((state_val_12828 === (4))){
var inst_12817 = (state_12827[(2)]);
var inst_12818 = async.call(null,inst_12817);
var state_12827__$1 = state_12827;
if(cljs.core.truth_(inst_12818)){
var statearr_12830_12962 = state_12827__$1;
(statearr_12830_12962[(1)] = (5));

} else {
var statearr_12831_12963 = state_12827__$1;
(statearr_12831_12963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (5))){
var state_12827__$1 = state_12827;
var statearr_12832_12964 = state_12827__$1;
(statearr_12832_12964[(2)] = null);

(statearr_12832_12964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (6))){
var state_12827__$1 = state_12827;
var statearr_12833_12965 = state_12827__$1;
(statearr_12833_12965[(2)] = null);

(statearr_12833_12965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12828 === (7))){
var inst_12823 = (state_12827[(2)]);
var state_12827__$1 = state_12827;
var statearr_12834_12966 = state_12827__$1;
(statearr_12834_12966[(2)] = inst_12823);

(statearr_12834_12966[(1)] = (3));


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
});})(__12947,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
;
return ((function (__12947,switch__12533__auto__,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_12835 = [null,null,null,null,null,null,null];
(statearr_12835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__);

(statearr_12835[(1)] = (1));

return statearr_12835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1 = (function (state_12827){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object)){
var ex__12537__auto__ = e12836;
var statearr_12837_12967 = state_12827;
(statearr_12837_12967[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12968 = state_12827;
state_12827 = G__12968;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = function(state_12827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1.call(this,state_12827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__;
})()
;})(__12947,switch__12533__auto__,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
})();
var state__12623__auto__ = (function (){var statearr_12838 = f__12622__auto__.call(null);
(statearr_12838[(6)] = c__12621__auto___12960);

return statearr_12838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(__12947,c__12621__auto___12960,G__12790_12948,G__12790_12949__$1,n__8924__auto___12946,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12790_12949__$1)].join('')));

}

var G__12969 = (__12947 + (1));
__12947 = G__12969;
continue;
} else {
}
break;
}

var c__12621__auto___12970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___12970,jobs,results,process,async){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___12970,jobs,results,process,async){
return (function (state_12860){
var state_val_12861 = (state_12860[(1)]);
if((state_val_12861 === (1))){
var state_12860__$1 = state_12860;
var statearr_12862_12971 = state_12860__$1;
(statearr_12862_12971[(2)] = null);

(statearr_12862_12971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12861 === (2))){
var state_12860__$1 = state_12860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12860__$1,(4),from);
} else {
if((state_val_12861 === (3))){
var inst_12858 = (state_12860[(2)]);
var state_12860__$1 = state_12860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12860__$1,inst_12858);
} else {
if((state_val_12861 === (4))){
var inst_12841 = (state_12860[(7)]);
var inst_12841__$1 = (state_12860[(2)]);
var inst_12842 = (inst_12841__$1 == null);
var state_12860__$1 = (function (){var statearr_12863 = state_12860;
(statearr_12863[(7)] = inst_12841__$1);

return statearr_12863;
})();
if(cljs.core.truth_(inst_12842)){
var statearr_12864_12972 = state_12860__$1;
(statearr_12864_12972[(1)] = (5));

} else {
var statearr_12865_12973 = state_12860__$1;
(statearr_12865_12973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12861 === (5))){
var inst_12844 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12860__$1 = state_12860;
var statearr_12866_12974 = state_12860__$1;
(statearr_12866_12974[(2)] = inst_12844);

(statearr_12866_12974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12861 === (6))){
var inst_12841 = (state_12860[(7)]);
var inst_12846 = (state_12860[(8)]);
var inst_12846__$1 = cljs.core.async.chan.call(null,(1));
var inst_12847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12848 = [inst_12841,inst_12846__$1];
var inst_12849 = (new cljs.core.PersistentVector(null,2,(5),inst_12847,inst_12848,null));
var state_12860__$1 = (function (){var statearr_12867 = state_12860;
(statearr_12867[(8)] = inst_12846__$1);

return statearr_12867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12860__$1,(8),jobs,inst_12849);
} else {
if((state_val_12861 === (7))){
var inst_12856 = (state_12860[(2)]);
var state_12860__$1 = state_12860;
var statearr_12868_12975 = state_12860__$1;
(statearr_12868_12975[(2)] = inst_12856);

(statearr_12868_12975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12861 === (8))){
var inst_12846 = (state_12860[(8)]);
var inst_12851 = (state_12860[(2)]);
var state_12860__$1 = (function (){var statearr_12869 = state_12860;
(statearr_12869[(9)] = inst_12851);

return statearr_12869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12860__$1,(9),results,inst_12846);
} else {
if((state_val_12861 === (9))){
var inst_12853 = (state_12860[(2)]);
var state_12860__$1 = (function (){var statearr_12870 = state_12860;
(statearr_12870[(10)] = inst_12853);

return statearr_12870;
})();
var statearr_12871_12976 = state_12860__$1;
(statearr_12871_12976[(2)] = null);

(statearr_12871_12976[(1)] = (2));


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
});})(c__12621__auto___12970,jobs,results,process,async))
;
return ((function (switch__12533__auto__,c__12621__auto___12970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_12872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__);

(statearr_12872[(1)] = (1));

return statearr_12872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1 = (function (state_12860){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12873){if((e12873 instanceof Object)){
var ex__12537__auto__ = e12873;
var statearr_12874_12977 = state_12860;
(statearr_12874_12977[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12978 = state_12860;
state_12860 = G__12978;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = function(state_12860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1.call(this,state_12860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___12970,jobs,results,process,async))
})();
var state__12623__auto__ = (function (){var statearr_12875 = f__12622__auto__.call(null);
(statearr_12875[(6)] = c__12621__auto___12970);

return statearr_12875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___12970,jobs,results,process,async))
);


var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,jobs,results,process,async){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,jobs,results,process,async){
return (function (state_12913){
var state_val_12914 = (state_12913[(1)]);
if((state_val_12914 === (7))){
var inst_12909 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12915_12979 = state_12913__$1;
(statearr_12915_12979[(2)] = inst_12909);

(statearr_12915_12979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (20))){
var state_12913__$1 = state_12913;
var statearr_12916_12980 = state_12913__$1;
(statearr_12916_12980[(2)] = null);

(statearr_12916_12980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (1))){
var state_12913__$1 = state_12913;
var statearr_12917_12981 = state_12913__$1;
(statearr_12917_12981[(2)] = null);

(statearr_12917_12981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (4))){
var inst_12878 = (state_12913[(7)]);
var inst_12878__$1 = (state_12913[(2)]);
var inst_12879 = (inst_12878__$1 == null);
var state_12913__$1 = (function (){var statearr_12918 = state_12913;
(statearr_12918[(7)] = inst_12878__$1);

return statearr_12918;
})();
if(cljs.core.truth_(inst_12879)){
var statearr_12919_12982 = state_12913__$1;
(statearr_12919_12982[(1)] = (5));

} else {
var statearr_12920_12983 = state_12913__$1;
(statearr_12920_12983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (15))){
var inst_12891 = (state_12913[(8)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12913__$1,(18),to,inst_12891);
} else {
if((state_val_12914 === (21))){
var inst_12904 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12921_12984 = state_12913__$1;
(statearr_12921_12984[(2)] = inst_12904);

(statearr_12921_12984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (13))){
var inst_12906 = (state_12913[(2)]);
var state_12913__$1 = (function (){var statearr_12922 = state_12913;
(statearr_12922[(9)] = inst_12906);

return statearr_12922;
})();
var statearr_12923_12985 = state_12913__$1;
(statearr_12923_12985[(2)] = null);

(statearr_12923_12985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (6))){
var inst_12878 = (state_12913[(7)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(11),inst_12878);
} else {
if((state_val_12914 === (17))){
var inst_12899 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
if(cljs.core.truth_(inst_12899)){
var statearr_12924_12986 = state_12913__$1;
(statearr_12924_12986[(1)] = (19));

} else {
var statearr_12925_12987 = state_12913__$1;
(statearr_12925_12987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (3))){
var inst_12911 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12913__$1,inst_12911);
} else {
if((state_val_12914 === (12))){
var inst_12888 = (state_12913[(10)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(14),inst_12888);
} else {
if((state_val_12914 === (2))){
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(4),results);
} else {
if((state_val_12914 === (19))){
var state_12913__$1 = state_12913;
var statearr_12926_12988 = state_12913__$1;
(statearr_12926_12988[(2)] = null);

(statearr_12926_12988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (11))){
var inst_12888 = (state_12913[(2)]);
var state_12913__$1 = (function (){var statearr_12927 = state_12913;
(statearr_12927[(10)] = inst_12888);

return statearr_12927;
})();
var statearr_12928_12989 = state_12913__$1;
(statearr_12928_12989[(2)] = null);

(statearr_12928_12989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (9))){
var state_12913__$1 = state_12913;
var statearr_12929_12990 = state_12913__$1;
(statearr_12929_12990[(2)] = null);

(statearr_12929_12990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (5))){
var state_12913__$1 = state_12913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12930_12991 = state_12913__$1;
(statearr_12930_12991[(1)] = (8));

} else {
var statearr_12931_12992 = state_12913__$1;
(statearr_12931_12992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (14))){
var inst_12891 = (state_12913[(8)]);
var inst_12893 = (state_12913[(11)]);
var inst_12891__$1 = (state_12913[(2)]);
var inst_12892 = (inst_12891__$1 == null);
var inst_12893__$1 = cljs.core.not.call(null,inst_12892);
var state_12913__$1 = (function (){var statearr_12932 = state_12913;
(statearr_12932[(8)] = inst_12891__$1);

(statearr_12932[(11)] = inst_12893__$1);

return statearr_12932;
})();
if(inst_12893__$1){
var statearr_12933_12993 = state_12913__$1;
(statearr_12933_12993[(1)] = (15));

} else {
var statearr_12934_12994 = state_12913__$1;
(statearr_12934_12994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (16))){
var inst_12893 = (state_12913[(11)]);
var state_12913__$1 = state_12913;
var statearr_12935_12995 = state_12913__$1;
(statearr_12935_12995[(2)] = inst_12893);

(statearr_12935_12995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (10))){
var inst_12885 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12936_12996 = state_12913__$1;
(statearr_12936_12996[(2)] = inst_12885);

(statearr_12936_12996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (18))){
var inst_12896 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12937_12997 = state_12913__$1;
(statearr_12937_12997[(2)] = inst_12896);

(statearr_12937_12997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (8))){
var inst_12882 = cljs.core.async.close_BANG_.call(null,to);
var state_12913__$1 = state_12913;
var statearr_12938_12998 = state_12913__$1;
(statearr_12938_12998[(2)] = inst_12882);

(statearr_12938_12998[(1)] = (10));


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
}
}
}
}
}
});})(c__12621__auto__,jobs,results,process,async))
;
return ((function (switch__12533__auto__,c__12621__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_12939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__);

(statearr_12939[(1)] = (1));

return statearr_12939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1 = (function (state_12913){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_12913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e12940){if((e12940 instanceof Object)){
var ex__12537__auto__ = e12940;
var statearr_12941_12999 = state_12913;
(statearr_12941_12999[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13000 = state_12913;
state_12913 = G__13000;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__ = function(state_12913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1.call(this,state_12913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,jobs,results,process,async))
})();
var state__12623__auto__ = (function (){var statearr_12942 = f__12622__auto__.call(null);
(statearr_12942[(6)] = c__12621__auto__);

return statearr_12942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,jobs,results,process,async))
);

return c__12621__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13002 = arguments.length;
switch (G__13002) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13005 = arguments.length;
switch (G__13005) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13008 = arguments.length;
switch (G__13008) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12621__auto___13057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___13057,tc,fc){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___13057,tc,fc){
return (function (state_13034){
var state_val_13035 = (state_13034[(1)]);
if((state_val_13035 === (7))){
var inst_13030 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13036_13058 = state_13034__$1;
(statearr_13036_13058[(2)] = inst_13030);

(statearr_13036_13058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (1))){
var state_13034__$1 = state_13034;
var statearr_13037_13059 = state_13034__$1;
(statearr_13037_13059[(2)] = null);

(statearr_13037_13059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (4))){
var inst_13011 = (state_13034[(7)]);
var inst_13011__$1 = (state_13034[(2)]);
var inst_13012 = (inst_13011__$1 == null);
var state_13034__$1 = (function (){var statearr_13038 = state_13034;
(statearr_13038[(7)] = inst_13011__$1);

return statearr_13038;
})();
if(cljs.core.truth_(inst_13012)){
var statearr_13039_13060 = state_13034__$1;
(statearr_13039_13060[(1)] = (5));

} else {
var statearr_13040_13061 = state_13034__$1;
(statearr_13040_13061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (13))){
var state_13034__$1 = state_13034;
var statearr_13041_13062 = state_13034__$1;
(statearr_13041_13062[(2)] = null);

(statearr_13041_13062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (6))){
var inst_13011 = (state_13034[(7)]);
var inst_13017 = p.call(null,inst_13011);
var state_13034__$1 = state_13034;
if(cljs.core.truth_(inst_13017)){
var statearr_13042_13063 = state_13034__$1;
(statearr_13042_13063[(1)] = (9));

} else {
var statearr_13043_13064 = state_13034__$1;
(statearr_13043_13064[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (3))){
var inst_13032 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13034__$1,inst_13032);
} else {
if((state_val_13035 === (12))){
var state_13034__$1 = state_13034;
var statearr_13044_13065 = state_13034__$1;
(statearr_13044_13065[(2)] = null);

(statearr_13044_13065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (2))){
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13034__$1,(4),ch);
} else {
if((state_val_13035 === (11))){
var inst_13011 = (state_13034[(7)]);
var inst_13021 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13034__$1,(8),inst_13021,inst_13011);
} else {
if((state_val_13035 === (9))){
var state_13034__$1 = state_13034;
var statearr_13045_13066 = state_13034__$1;
(statearr_13045_13066[(2)] = tc);

(statearr_13045_13066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (5))){
var inst_13014 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13015 = cljs.core.async.close_BANG_.call(null,fc);
var state_13034__$1 = (function (){var statearr_13046 = state_13034;
(statearr_13046[(8)] = inst_13014);

return statearr_13046;
})();
var statearr_13047_13067 = state_13034__$1;
(statearr_13047_13067[(2)] = inst_13015);

(statearr_13047_13067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (14))){
var inst_13028 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
var statearr_13048_13068 = state_13034__$1;
(statearr_13048_13068[(2)] = inst_13028);

(statearr_13048_13068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (10))){
var state_13034__$1 = state_13034;
var statearr_13049_13069 = state_13034__$1;
(statearr_13049_13069[(2)] = fc);

(statearr_13049_13069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13035 === (8))){
var inst_13023 = (state_13034[(2)]);
var state_13034__$1 = state_13034;
if(cljs.core.truth_(inst_13023)){
var statearr_13050_13070 = state_13034__$1;
(statearr_13050_13070[(1)] = (12));

} else {
var statearr_13051_13071 = state_13034__$1;
(statearr_13051_13071[(1)] = (13));

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
});})(c__12621__auto___13057,tc,fc))
;
return ((function (switch__12533__auto__,c__12621__auto___13057,tc,fc){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_13052 = [null,null,null,null,null,null,null,null,null];
(statearr_13052[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_13052[(1)] = (1));

return statearr_13052;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_13034){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13053){if((e13053 instanceof Object)){
var ex__12537__auto__ = e13053;
var statearr_13054_13072 = state_13034;
(statearr_13054_13072[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13073 = state_13034;
state_13034 = G__13073;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_13034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_13034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___13057,tc,fc))
})();
var state__12623__auto__ = (function (){var statearr_13055 = f__12622__auto__.call(null);
(statearr_13055[(6)] = c__12621__auto___13057);

return statearr_13055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___13057,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__){
return (function (state_13094){
var state_val_13095 = (state_13094[(1)]);
if((state_val_13095 === (7))){
var inst_13090 = (state_13094[(2)]);
var state_13094__$1 = state_13094;
var statearr_13096_13114 = state_13094__$1;
(statearr_13096_13114[(2)] = inst_13090);

(statearr_13096_13114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (1))){
var inst_13074 = init;
var state_13094__$1 = (function (){var statearr_13097 = state_13094;
(statearr_13097[(7)] = inst_13074);

return statearr_13097;
})();
var statearr_13098_13115 = state_13094__$1;
(statearr_13098_13115[(2)] = null);

(statearr_13098_13115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (4))){
var inst_13077 = (state_13094[(8)]);
var inst_13077__$1 = (state_13094[(2)]);
var inst_13078 = (inst_13077__$1 == null);
var state_13094__$1 = (function (){var statearr_13099 = state_13094;
(statearr_13099[(8)] = inst_13077__$1);

return statearr_13099;
})();
if(cljs.core.truth_(inst_13078)){
var statearr_13100_13116 = state_13094__$1;
(statearr_13100_13116[(1)] = (5));

} else {
var statearr_13101_13117 = state_13094__$1;
(statearr_13101_13117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (6))){
var inst_13074 = (state_13094[(7)]);
var inst_13077 = (state_13094[(8)]);
var inst_13081 = (state_13094[(9)]);
var inst_13081__$1 = f.call(null,inst_13074,inst_13077);
var inst_13082 = cljs.core.reduced_QMARK_.call(null,inst_13081__$1);
var state_13094__$1 = (function (){var statearr_13102 = state_13094;
(statearr_13102[(9)] = inst_13081__$1);

return statearr_13102;
})();
if(inst_13082){
var statearr_13103_13118 = state_13094__$1;
(statearr_13103_13118[(1)] = (8));

} else {
var statearr_13104_13119 = state_13094__$1;
(statearr_13104_13119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (3))){
var inst_13092 = (state_13094[(2)]);
var state_13094__$1 = state_13094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13094__$1,inst_13092);
} else {
if((state_val_13095 === (2))){
var state_13094__$1 = state_13094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13094__$1,(4),ch);
} else {
if((state_val_13095 === (9))){
var inst_13081 = (state_13094[(9)]);
var inst_13074 = inst_13081;
var state_13094__$1 = (function (){var statearr_13105 = state_13094;
(statearr_13105[(7)] = inst_13074);

return statearr_13105;
})();
var statearr_13106_13120 = state_13094__$1;
(statearr_13106_13120[(2)] = null);

(statearr_13106_13120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (5))){
var inst_13074 = (state_13094[(7)]);
var state_13094__$1 = state_13094;
var statearr_13107_13121 = state_13094__$1;
(statearr_13107_13121[(2)] = inst_13074);

(statearr_13107_13121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (10))){
var inst_13088 = (state_13094[(2)]);
var state_13094__$1 = state_13094;
var statearr_13108_13122 = state_13094__$1;
(statearr_13108_13122[(2)] = inst_13088);

(statearr_13108_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13095 === (8))){
var inst_13081 = (state_13094[(9)]);
var inst_13084 = cljs.core.deref.call(null,inst_13081);
var state_13094__$1 = state_13094;
var statearr_13109_13123 = state_13094__$1;
(statearr_13109_13123[(2)] = inst_13084);

(statearr_13109_13123[(1)] = (10));


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
});})(c__12621__auto__))
;
return ((function (switch__12533__auto__,c__12621__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12534__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12534__auto____0 = (function (){
var statearr_13110 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13110[(0)] = cljs$core$async$reduce_$_state_machine__12534__auto__);

(statearr_13110[(1)] = (1));

return statearr_13110;
});
var cljs$core$async$reduce_$_state_machine__12534__auto____1 = (function (state_13094){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13111){if((e13111 instanceof Object)){
var ex__12537__auto__ = e13111;
var statearr_13112_13124 = state_13094;
(statearr_13112_13124[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13125 = state_13094;
state_13094 = G__13125;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12534__auto__ = function(state_13094){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12534__auto____1.call(this,state_13094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12534__auto____0;
cljs$core$async$reduce_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12534__auto____1;
return cljs$core$async$reduce_$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__))
})();
var state__12623__auto__ = (function (){var statearr_13113 = f__12622__auto__.call(null);
(statearr_13113[(6)] = c__12621__auto__);

return statearr_13113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__))
);

return c__12621__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__,f__$1){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__,f__$1){
return (function (state_13131){
var state_val_13132 = (state_13131[(1)]);
if((state_val_13132 === (1))){
var inst_13126 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13131__$1 = state_13131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13131__$1,(2),inst_13126);
} else {
if((state_val_13132 === (2))){
var inst_13128 = (state_13131[(2)]);
var inst_13129 = f__$1.call(null,inst_13128);
var state_13131__$1 = state_13131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13131__$1,inst_13129);
} else {
return null;
}
}
});})(c__12621__auto__,f__$1))
;
return ((function (switch__12533__auto__,c__12621__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12534__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12534__auto____0 = (function (){
var statearr_13133 = [null,null,null,null,null,null,null];
(statearr_13133[(0)] = cljs$core$async$transduce_$_state_machine__12534__auto__);

(statearr_13133[(1)] = (1));

return statearr_13133;
});
var cljs$core$async$transduce_$_state_machine__12534__auto____1 = (function (state_13131){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13134){if((e13134 instanceof Object)){
var ex__12537__auto__ = e13134;
var statearr_13135_13137 = state_13131;
(statearr_13135_13137[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13138 = state_13131;
state_13131 = G__13138;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12534__auto__ = function(state_13131){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12534__auto____1.call(this,state_13131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12534__auto____0;
cljs$core$async$transduce_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12534__auto____1;
return cljs$core$async$transduce_$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__,f__$1))
})();
var state__12623__auto__ = (function (){var statearr_13136 = f__12622__auto__.call(null);
(statearr_13136[(6)] = c__12621__auto__);

return statearr_13136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__,f__$1))
);

return c__12621__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13140 = arguments.length;
switch (G__13140) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__){
return (function (state_13165){
var state_val_13166 = (state_13165[(1)]);
if((state_val_13166 === (7))){
var inst_13147 = (state_13165[(2)]);
var state_13165__$1 = state_13165;
var statearr_13167_13188 = state_13165__$1;
(statearr_13167_13188[(2)] = inst_13147);

(statearr_13167_13188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (1))){
var inst_13141 = cljs.core.seq.call(null,coll);
var inst_13142 = inst_13141;
var state_13165__$1 = (function (){var statearr_13168 = state_13165;
(statearr_13168[(7)] = inst_13142);

return statearr_13168;
})();
var statearr_13169_13189 = state_13165__$1;
(statearr_13169_13189[(2)] = null);

(statearr_13169_13189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (4))){
var inst_13142 = (state_13165[(7)]);
var inst_13145 = cljs.core.first.call(null,inst_13142);
var state_13165__$1 = state_13165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13165__$1,(7),ch,inst_13145);
} else {
if((state_val_13166 === (13))){
var inst_13159 = (state_13165[(2)]);
var state_13165__$1 = state_13165;
var statearr_13170_13190 = state_13165__$1;
(statearr_13170_13190[(2)] = inst_13159);

(statearr_13170_13190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (6))){
var inst_13150 = (state_13165[(2)]);
var state_13165__$1 = state_13165;
if(cljs.core.truth_(inst_13150)){
var statearr_13171_13191 = state_13165__$1;
(statearr_13171_13191[(1)] = (8));

} else {
var statearr_13172_13192 = state_13165__$1;
(statearr_13172_13192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (3))){
var inst_13163 = (state_13165[(2)]);
var state_13165__$1 = state_13165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13165__$1,inst_13163);
} else {
if((state_val_13166 === (12))){
var state_13165__$1 = state_13165;
var statearr_13173_13193 = state_13165__$1;
(statearr_13173_13193[(2)] = null);

(statearr_13173_13193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (2))){
var inst_13142 = (state_13165[(7)]);
var state_13165__$1 = state_13165;
if(cljs.core.truth_(inst_13142)){
var statearr_13174_13194 = state_13165__$1;
(statearr_13174_13194[(1)] = (4));

} else {
var statearr_13175_13195 = state_13165__$1;
(statearr_13175_13195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (11))){
var inst_13156 = cljs.core.async.close_BANG_.call(null,ch);
var state_13165__$1 = state_13165;
var statearr_13176_13196 = state_13165__$1;
(statearr_13176_13196[(2)] = inst_13156);

(statearr_13176_13196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (9))){
var state_13165__$1 = state_13165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13177_13197 = state_13165__$1;
(statearr_13177_13197[(1)] = (11));

} else {
var statearr_13178_13198 = state_13165__$1;
(statearr_13178_13198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (5))){
var inst_13142 = (state_13165[(7)]);
var state_13165__$1 = state_13165;
var statearr_13179_13199 = state_13165__$1;
(statearr_13179_13199[(2)] = inst_13142);

(statearr_13179_13199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (10))){
var inst_13161 = (state_13165[(2)]);
var state_13165__$1 = state_13165;
var statearr_13180_13200 = state_13165__$1;
(statearr_13180_13200[(2)] = inst_13161);

(statearr_13180_13200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13166 === (8))){
var inst_13142 = (state_13165[(7)]);
var inst_13152 = cljs.core.next.call(null,inst_13142);
var inst_13142__$1 = inst_13152;
var state_13165__$1 = (function (){var statearr_13181 = state_13165;
(statearr_13181[(7)] = inst_13142__$1);

return statearr_13181;
})();
var statearr_13182_13201 = state_13165__$1;
(statearr_13182_13201[(2)] = null);

(statearr_13182_13201[(1)] = (2));


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
});})(c__12621__auto__))
;
return ((function (switch__12533__auto__,c__12621__auto__){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_13183 = [null,null,null,null,null,null,null,null];
(statearr_13183[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_13183[(1)] = (1));

return statearr_13183;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_13165){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13184){if((e13184 instanceof Object)){
var ex__12537__auto__ = e13184;
var statearr_13185_13202 = state_13165;
(statearr_13185_13202[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13203 = state_13165;
state_13165 = G__13203;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_13165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_13165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__))
})();
var state__12623__auto__ = (function (){var statearr_13186 = f__12622__auto__.call(null);
(statearr_13186[(6)] = c__12621__auto__);

return statearr_13186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__))
);

return c__12621__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8660__auto__ = (((_ == null))?null:_);
var m__8661__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,_);
} else {
var m__8661__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8661__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,ch);
} else {
var m__8661__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m);
} else {
var m__8661__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13204 = (function (ch,cs,meta13205){
this.ch = ch;
this.cs = cs;
this.meta13205 = meta13205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13206,meta13205__$1){
var self__ = this;
var _13206__$1 = this;
return (new cljs.core.async.t_cljs$core$async13204(self__.ch,self__.cs,meta13205__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13206){
var self__ = this;
var _13206__$1 = this;
return self__.meta13205;
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13205","meta13205",1277574912,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13204";

cljs.core.async.t_cljs$core$async13204.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async13204");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13204 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13204(ch__$1,cs__$1,meta13205){
return (new cljs.core.async.t_cljs$core$async13204(ch__$1,cs__$1,meta13205));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13204(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12621__auto___13426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___13426,cs,m,dchan,dctr,done){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___13426,cs,m,dchan,dctr,done){
return (function (state_13341){
var state_val_13342 = (state_13341[(1)]);
if((state_val_13342 === (7))){
var inst_13337 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13343_13427 = state_13341__$1;
(statearr_13343_13427[(2)] = inst_13337);

(statearr_13343_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (20))){
var inst_13240 = (state_13341[(7)]);
var inst_13252 = cljs.core.first.call(null,inst_13240);
var inst_13253 = cljs.core.nth.call(null,inst_13252,(0),null);
var inst_13254 = cljs.core.nth.call(null,inst_13252,(1),null);
var state_13341__$1 = (function (){var statearr_13344 = state_13341;
(statearr_13344[(8)] = inst_13253);

return statearr_13344;
})();
if(cljs.core.truth_(inst_13254)){
var statearr_13345_13428 = state_13341__$1;
(statearr_13345_13428[(1)] = (22));

} else {
var statearr_13346_13429 = state_13341__$1;
(statearr_13346_13429[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (27))){
var inst_13282 = (state_13341[(9)]);
var inst_13289 = (state_13341[(10)]);
var inst_13284 = (state_13341[(11)]);
var inst_13209 = (state_13341[(12)]);
var inst_13289__$1 = cljs.core._nth.call(null,inst_13282,inst_13284);
var inst_13290 = cljs.core.async.put_BANG_.call(null,inst_13289__$1,inst_13209,done);
var state_13341__$1 = (function (){var statearr_13347 = state_13341;
(statearr_13347[(10)] = inst_13289__$1);

return statearr_13347;
})();
if(cljs.core.truth_(inst_13290)){
var statearr_13348_13430 = state_13341__$1;
(statearr_13348_13430[(1)] = (30));

} else {
var statearr_13349_13431 = state_13341__$1;
(statearr_13349_13431[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (1))){
var state_13341__$1 = state_13341;
var statearr_13350_13432 = state_13341__$1;
(statearr_13350_13432[(2)] = null);

(statearr_13350_13432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (24))){
var inst_13240 = (state_13341[(7)]);
var inst_13259 = (state_13341[(2)]);
var inst_13260 = cljs.core.next.call(null,inst_13240);
var inst_13218 = inst_13260;
var inst_13219 = null;
var inst_13220 = (0);
var inst_13221 = (0);
var state_13341__$1 = (function (){var statearr_13351 = state_13341;
(statearr_13351[(13)] = inst_13259);

(statearr_13351[(14)] = inst_13219);

(statearr_13351[(15)] = inst_13221);

(statearr_13351[(16)] = inst_13218);

(statearr_13351[(17)] = inst_13220);

return statearr_13351;
})();
var statearr_13352_13433 = state_13341__$1;
(statearr_13352_13433[(2)] = null);

(statearr_13352_13433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (39))){
var state_13341__$1 = state_13341;
var statearr_13356_13434 = state_13341__$1;
(statearr_13356_13434[(2)] = null);

(statearr_13356_13434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (4))){
var inst_13209 = (state_13341[(12)]);
var inst_13209__$1 = (state_13341[(2)]);
var inst_13210 = (inst_13209__$1 == null);
var state_13341__$1 = (function (){var statearr_13357 = state_13341;
(statearr_13357[(12)] = inst_13209__$1);

return statearr_13357;
})();
if(cljs.core.truth_(inst_13210)){
var statearr_13358_13435 = state_13341__$1;
(statearr_13358_13435[(1)] = (5));

} else {
var statearr_13359_13436 = state_13341__$1;
(statearr_13359_13436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (15))){
var inst_13219 = (state_13341[(14)]);
var inst_13221 = (state_13341[(15)]);
var inst_13218 = (state_13341[(16)]);
var inst_13220 = (state_13341[(17)]);
var inst_13236 = (state_13341[(2)]);
var inst_13237 = (inst_13221 + (1));
var tmp13353 = inst_13219;
var tmp13354 = inst_13218;
var tmp13355 = inst_13220;
var inst_13218__$1 = tmp13354;
var inst_13219__$1 = tmp13353;
var inst_13220__$1 = tmp13355;
var inst_13221__$1 = inst_13237;
var state_13341__$1 = (function (){var statearr_13360 = state_13341;
(statearr_13360[(18)] = inst_13236);

(statearr_13360[(14)] = inst_13219__$1);

(statearr_13360[(15)] = inst_13221__$1);

(statearr_13360[(16)] = inst_13218__$1);

(statearr_13360[(17)] = inst_13220__$1);

return statearr_13360;
})();
var statearr_13361_13437 = state_13341__$1;
(statearr_13361_13437[(2)] = null);

(statearr_13361_13437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (21))){
var inst_13263 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13365_13438 = state_13341__$1;
(statearr_13365_13438[(2)] = inst_13263);

(statearr_13365_13438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (31))){
var inst_13289 = (state_13341[(10)]);
var inst_13293 = done.call(null,null);
var inst_13294 = cljs.core.async.untap_STAR_.call(null,m,inst_13289);
var state_13341__$1 = (function (){var statearr_13366 = state_13341;
(statearr_13366[(19)] = inst_13293);

return statearr_13366;
})();
var statearr_13367_13439 = state_13341__$1;
(statearr_13367_13439[(2)] = inst_13294);

(statearr_13367_13439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (32))){
var inst_13282 = (state_13341[(9)]);
var inst_13281 = (state_13341[(20)]);
var inst_13284 = (state_13341[(11)]);
var inst_13283 = (state_13341[(21)]);
var inst_13296 = (state_13341[(2)]);
var inst_13297 = (inst_13284 + (1));
var tmp13362 = inst_13282;
var tmp13363 = inst_13281;
var tmp13364 = inst_13283;
var inst_13281__$1 = tmp13363;
var inst_13282__$1 = tmp13362;
var inst_13283__$1 = tmp13364;
var inst_13284__$1 = inst_13297;
var state_13341__$1 = (function (){var statearr_13368 = state_13341;
(statearr_13368[(9)] = inst_13282__$1);

(statearr_13368[(20)] = inst_13281__$1);

(statearr_13368[(22)] = inst_13296);

(statearr_13368[(11)] = inst_13284__$1);

(statearr_13368[(21)] = inst_13283__$1);

return statearr_13368;
})();
var statearr_13369_13440 = state_13341__$1;
(statearr_13369_13440[(2)] = null);

(statearr_13369_13440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (40))){
var inst_13309 = (state_13341[(23)]);
var inst_13313 = done.call(null,null);
var inst_13314 = cljs.core.async.untap_STAR_.call(null,m,inst_13309);
var state_13341__$1 = (function (){var statearr_13370 = state_13341;
(statearr_13370[(24)] = inst_13313);

return statearr_13370;
})();
var statearr_13371_13441 = state_13341__$1;
(statearr_13371_13441[(2)] = inst_13314);

(statearr_13371_13441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (33))){
var inst_13300 = (state_13341[(25)]);
var inst_13302 = cljs.core.chunked_seq_QMARK_.call(null,inst_13300);
var state_13341__$1 = state_13341;
if(inst_13302){
var statearr_13372_13442 = state_13341__$1;
(statearr_13372_13442[(1)] = (36));

} else {
var statearr_13373_13443 = state_13341__$1;
(statearr_13373_13443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (13))){
var inst_13230 = (state_13341[(26)]);
var inst_13233 = cljs.core.async.close_BANG_.call(null,inst_13230);
var state_13341__$1 = state_13341;
var statearr_13374_13444 = state_13341__$1;
(statearr_13374_13444[(2)] = inst_13233);

(statearr_13374_13444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (22))){
var inst_13253 = (state_13341[(8)]);
var inst_13256 = cljs.core.async.close_BANG_.call(null,inst_13253);
var state_13341__$1 = state_13341;
var statearr_13375_13445 = state_13341__$1;
(statearr_13375_13445[(2)] = inst_13256);

(statearr_13375_13445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (36))){
var inst_13300 = (state_13341[(25)]);
var inst_13304 = cljs.core.chunk_first.call(null,inst_13300);
var inst_13305 = cljs.core.chunk_rest.call(null,inst_13300);
var inst_13306 = cljs.core.count.call(null,inst_13304);
var inst_13281 = inst_13305;
var inst_13282 = inst_13304;
var inst_13283 = inst_13306;
var inst_13284 = (0);
var state_13341__$1 = (function (){var statearr_13376 = state_13341;
(statearr_13376[(9)] = inst_13282);

(statearr_13376[(20)] = inst_13281);

(statearr_13376[(11)] = inst_13284);

(statearr_13376[(21)] = inst_13283);

return statearr_13376;
})();
var statearr_13377_13446 = state_13341__$1;
(statearr_13377_13446[(2)] = null);

(statearr_13377_13446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (41))){
var inst_13300 = (state_13341[(25)]);
var inst_13316 = (state_13341[(2)]);
var inst_13317 = cljs.core.next.call(null,inst_13300);
var inst_13281 = inst_13317;
var inst_13282 = null;
var inst_13283 = (0);
var inst_13284 = (0);
var state_13341__$1 = (function (){var statearr_13378 = state_13341;
(statearr_13378[(9)] = inst_13282);

(statearr_13378[(20)] = inst_13281);

(statearr_13378[(11)] = inst_13284);

(statearr_13378[(21)] = inst_13283);

(statearr_13378[(27)] = inst_13316);

return statearr_13378;
})();
var statearr_13379_13447 = state_13341__$1;
(statearr_13379_13447[(2)] = null);

(statearr_13379_13447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (43))){
var state_13341__$1 = state_13341;
var statearr_13380_13448 = state_13341__$1;
(statearr_13380_13448[(2)] = null);

(statearr_13380_13448[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (29))){
var inst_13325 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13381_13449 = state_13341__$1;
(statearr_13381_13449[(2)] = inst_13325);

(statearr_13381_13449[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (44))){
var inst_13334 = (state_13341[(2)]);
var state_13341__$1 = (function (){var statearr_13382 = state_13341;
(statearr_13382[(28)] = inst_13334);

return statearr_13382;
})();
var statearr_13383_13450 = state_13341__$1;
(statearr_13383_13450[(2)] = null);

(statearr_13383_13450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (6))){
var inst_13273 = (state_13341[(29)]);
var inst_13272 = cljs.core.deref.call(null,cs);
var inst_13273__$1 = cljs.core.keys.call(null,inst_13272);
var inst_13274 = cljs.core.count.call(null,inst_13273__$1);
var inst_13275 = cljs.core.reset_BANG_.call(null,dctr,inst_13274);
var inst_13280 = cljs.core.seq.call(null,inst_13273__$1);
var inst_13281 = inst_13280;
var inst_13282 = null;
var inst_13283 = (0);
var inst_13284 = (0);
var state_13341__$1 = (function (){var statearr_13384 = state_13341;
(statearr_13384[(9)] = inst_13282);

(statearr_13384[(30)] = inst_13275);

(statearr_13384[(20)] = inst_13281);

(statearr_13384[(11)] = inst_13284);

(statearr_13384[(21)] = inst_13283);

(statearr_13384[(29)] = inst_13273__$1);

return statearr_13384;
})();
var statearr_13385_13451 = state_13341__$1;
(statearr_13385_13451[(2)] = null);

(statearr_13385_13451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (28))){
var inst_13300 = (state_13341[(25)]);
var inst_13281 = (state_13341[(20)]);
var inst_13300__$1 = cljs.core.seq.call(null,inst_13281);
var state_13341__$1 = (function (){var statearr_13386 = state_13341;
(statearr_13386[(25)] = inst_13300__$1);

return statearr_13386;
})();
if(inst_13300__$1){
var statearr_13387_13452 = state_13341__$1;
(statearr_13387_13452[(1)] = (33));

} else {
var statearr_13388_13453 = state_13341__$1;
(statearr_13388_13453[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (25))){
var inst_13284 = (state_13341[(11)]);
var inst_13283 = (state_13341[(21)]);
var inst_13286 = (inst_13284 < inst_13283);
var inst_13287 = inst_13286;
var state_13341__$1 = state_13341;
if(cljs.core.truth_(inst_13287)){
var statearr_13389_13454 = state_13341__$1;
(statearr_13389_13454[(1)] = (27));

} else {
var statearr_13390_13455 = state_13341__$1;
(statearr_13390_13455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (34))){
var state_13341__$1 = state_13341;
var statearr_13391_13456 = state_13341__$1;
(statearr_13391_13456[(2)] = null);

(statearr_13391_13456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (17))){
var state_13341__$1 = state_13341;
var statearr_13392_13457 = state_13341__$1;
(statearr_13392_13457[(2)] = null);

(statearr_13392_13457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (3))){
var inst_13339 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13341__$1,inst_13339);
} else {
if((state_val_13342 === (12))){
var inst_13268 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13393_13458 = state_13341__$1;
(statearr_13393_13458[(2)] = inst_13268);

(statearr_13393_13458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (2))){
var state_13341__$1 = state_13341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13341__$1,(4),ch);
} else {
if((state_val_13342 === (23))){
var state_13341__$1 = state_13341;
var statearr_13394_13459 = state_13341__$1;
(statearr_13394_13459[(2)] = null);

(statearr_13394_13459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (35))){
var inst_13323 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13395_13460 = state_13341__$1;
(statearr_13395_13460[(2)] = inst_13323);

(statearr_13395_13460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (19))){
var inst_13240 = (state_13341[(7)]);
var inst_13244 = cljs.core.chunk_first.call(null,inst_13240);
var inst_13245 = cljs.core.chunk_rest.call(null,inst_13240);
var inst_13246 = cljs.core.count.call(null,inst_13244);
var inst_13218 = inst_13245;
var inst_13219 = inst_13244;
var inst_13220 = inst_13246;
var inst_13221 = (0);
var state_13341__$1 = (function (){var statearr_13396 = state_13341;
(statearr_13396[(14)] = inst_13219);

(statearr_13396[(15)] = inst_13221);

(statearr_13396[(16)] = inst_13218);

(statearr_13396[(17)] = inst_13220);

return statearr_13396;
})();
var statearr_13397_13461 = state_13341__$1;
(statearr_13397_13461[(2)] = null);

(statearr_13397_13461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (11))){
var inst_13218 = (state_13341[(16)]);
var inst_13240 = (state_13341[(7)]);
var inst_13240__$1 = cljs.core.seq.call(null,inst_13218);
var state_13341__$1 = (function (){var statearr_13398 = state_13341;
(statearr_13398[(7)] = inst_13240__$1);

return statearr_13398;
})();
if(inst_13240__$1){
var statearr_13399_13462 = state_13341__$1;
(statearr_13399_13462[(1)] = (16));

} else {
var statearr_13400_13463 = state_13341__$1;
(statearr_13400_13463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (9))){
var inst_13270 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13401_13464 = state_13341__$1;
(statearr_13401_13464[(2)] = inst_13270);

(statearr_13401_13464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (5))){
var inst_13216 = cljs.core.deref.call(null,cs);
var inst_13217 = cljs.core.seq.call(null,inst_13216);
var inst_13218 = inst_13217;
var inst_13219 = null;
var inst_13220 = (0);
var inst_13221 = (0);
var state_13341__$1 = (function (){var statearr_13402 = state_13341;
(statearr_13402[(14)] = inst_13219);

(statearr_13402[(15)] = inst_13221);

(statearr_13402[(16)] = inst_13218);

(statearr_13402[(17)] = inst_13220);

return statearr_13402;
})();
var statearr_13403_13465 = state_13341__$1;
(statearr_13403_13465[(2)] = null);

(statearr_13403_13465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (14))){
var state_13341__$1 = state_13341;
var statearr_13404_13466 = state_13341__$1;
(statearr_13404_13466[(2)] = null);

(statearr_13404_13466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (45))){
var inst_13331 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13405_13467 = state_13341__$1;
(statearr_13405_13467[(2)] = inst_13331);

(statearr_13405_13467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (26))){
var inst_13273 = (state_13341[(29)]);
var inst_13327 = (state_13341[(2)]);
var inst_13328 = cljs.core.seq.call(null,inst_13273);
var state_13341__$1 = (function (){var statearr_13406 = state_13341;
(statearr_13406[(31)] = inst_13327);

return statearr_13406;
})();
if(inst_13328){
var statearr_13407_13468 = state_13341__$1;
(statearr_13407_13468[(1)] = (42));

} else {
var statearr_13408_13469 = state_13341__$1;
(statearr_13408_13469[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (16))){
var inst_13240 = (state_13341[(7)]);
var inst_13242 = cljs.core.chunked_seq_QMARK_.call(null,inst_13240);
var state_13341__$1 = state_13341;
if(inst_13242){
var statearr_13409_13470 = state_13341__$1;
(statearr_13409_13470[(1)] = (19));

} else {
var statearr_13410_13471 = state_13341__$1;
(statearr_13410_13471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (38))){
var inst_13320 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13411_13472 = state_13341__$1;
(statearr_13411_13472[(2)] = inst_13320);

(statearr_13411_13472[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (30))){
var state_13341__$1 = state_13341;
var statearr_13412_13473 = state_13341__$1;
(statearr_13412_13473[(2)] = null);

(statearr_13412_13473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (10))){
var inst_13219 = (state_13341[(14)]);
var inst_13221 = (state_13341[(15)]);
var inst_13229 = cljs.core._nth.call(null,inst_13219,inst_13221);
var inst_13230 = cljs.core.nth.call(null,inst_13229,(0),null);
var inst_13231 = cljs.core.nth.call(null,inst_13229,(1),null);
var state_13341__$1 = (function (){var statearr_13413 = state_13341;
(statearr_13413[(26)] = inst_13230);

return statearr_13413;
})();
if(cljs.core.truth_(inst_13231)){
var statearr_13414_13474 = state_13341__$1;
(statearr_13414_13474[(1)] = (13));

} else {
var statearr_13415_13475 = state_13341__$1;
(statearr_13415_13475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (18))){
var inst_13266 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13416_13476 = state_13341__$1;
(statearr_13416_13476[(2)] = inst_13266);

(statearr_13416_13476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (42))){
var state_13341__$1 = state_13341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13341__$1,(45),dchan);
} else {
if((state_val_13342 === (37))){
var inst_13300 = (state_13341[(25)]);
var inst_13209 = (state_13341[(12)]);
var inst_13309 = (state_13341[(23)]);
var inst_13309__$1 = cljs.core.first.call(null,inst_13300);
var inst_13310 = cljs.core.async.put_BANG_.call(null,inst_13309__$1,inst_13209,done);
var state_13341__$1 = (function (){var statearr_13417 = state_13341;
(statearr_13417[(23)] = inst_13309__$1);

return statearr_13417;
})();
if(cljs.core.truth_(inst_13310)){
var statearr_13418_13477 = state_13341__$1;
(statearr_13418_13477[(1)] = (39));

} else {
var statearr_13419_13478 = state_13341__$1;
(statearr_13419_13478[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (8))){
var inst_13221 = (state_13341[(15)]);
var inst_13220 = (state_13341[(17)]);
var inst_13223 = (inst_13221 < inst_13220);
var inst_13224 = inst_13223;
var state_13341__$1 = state_13341;
if(cljs.core.truth_(inst_13224)){
var statearr_13420_13479 = state_13341__$1;
(statearr_13420_13479[(1)] = (10));

} else {
var statearr_13421_13480 = state_13341__$1;
(statearr_13421_13480[(1)] = (11));

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
});})(c__12621__auto___13426,cs,m,dchan,dctr,done))
;
return ((function (switch__12533__auto__,c__12621__auto___13426,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12534__auto__ = null;
var cljs$core$async$mult_$_state_machine__12534__auto____0 = (function (){
var statearr_13422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13422[(0)] = cljs$core$async$mult_$_state_machine__12534__auto__);

(statearr_13422[(1)] = (1));

return statearr_13422;
});
var cljs$core$async$mult_$_state_machine__12534__auto____1 = (function (state_13341){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13423){if((e13423 instanceof Object)){
var ex__12537__auto__ = e13423;
var statearr_13424_13481 = state_13341;
(statearr_13424_13481[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13482 = state_13341;
state_13341 = G__13482;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12534__auto__ = function(state_13341){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12534__auto____1.call(this,state_13341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12534__auto____0;
cljs$core$async$mult_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12534__auto____1;
return cljs$core$async$mult_$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___13426,cs,m,dchan,dctr,done))
})();
var state__12623__auto__ = (function (){var statearr_13425 = f__12622__auto__.call(null);
(statearr_13425[(6)] = c__12621__auto___13426);

return statearr_13425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___13426,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13484 = arguments.length;
switch (G__13484) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,ch);
} else {
var m__8661__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,ch);
} else {
var m__8661__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m);
} else {
var m__8661__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,state_map);
} else {
var m__8661__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8660__auto__ = (((m == null))?null:m);
var m__8661__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,m,mode);
} else {
var m__8661__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9155__auto__ = [];
var len__9148__auto___13496 = arguments.length;
var i__9149__auto___13497 = (0);
while(true){
if((i__9149__auto___13497 < len__9148__auto___13496)){
args__9155__auto__.push((arguments[i__9149__auto___13497]));

var G__13498 = (i__9149__auto___13497 + (1));
i__9149__auto___13497 = G__13498;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((3) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9156__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13490){
var map__13491 = p__13490;
var map__13491__$1 = ((((!((map__13491 == null)))?((((map__13491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13491):map__13491);
var opts = map__13491__$1;
var statearr_13493_13499 = state;
(statearr_13493_13499[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13491,map__13491__$1,opts){
return (function (val){
var statearr_13494_13500 = state;
(statearr_13494_13500[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13491,map__13491__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13495_13501 = state;
(statearr_13495_13501[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13486){
var G__13487 = cljs.core.first.call(null,seq13486);
var seq13486__$1 = cljs.core.next.call(null,seq13486);
var G__13488 = cljs.core.first.call(null,seq13486__$1);
var seq13486__$2 = cljs.core.next.call(null,seq13486__$1);
var G__13489 = cljs.core.first.call(null,seq13486__$2);
var seq13486__$3 = cljs.core.next.call(null,seq13486__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13487,G__13488,G__13489,seq13486__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13502 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13503){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13503 = meta13503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13504,meta13503__$1){
var self__ = this;
var _13504__$1 = this;
return (new cljs.core.async.t_cljs$core$async13502(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13503__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13504){
var self__ = this;
var _13504__$1 = this;
return self__.meta13503;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13503","meta13503",1328131859,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13502";

cljs.core.async.t_cljs$core$async13502.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async13502");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13502 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13502(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13503){
return (new cljs.core.async.t_cljs$core$async13502(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13503));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13502(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12621__auto___13666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13606){
var state_val_13607 = (state_13606[(1)]);
if((state_val_13607 === (7))){
var inst_13521 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13608_13667 = state_13606__$1;
(statearr_13608_13667[(2)] = inst_13521);

(statearr_13608_13667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (20))){
var inst_13533 = (state_13606[(7)]);
var state_13606__$1 = state_13606;
var statearr_13609_13668 = state_13606__$1;
(statearr_13609_13668[(2)] = inst_13533);

(statearr_13609_13668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (27))){
var state_13606__$1 = state_13606;
var statearr_13610_13669 = state_13606__$1;
(statearr_13610_13669[(2)] = null);

(statearr_13610_13669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (1))){
var inst_13508 = (state_13606[(8)]);
var inst_13508__$1 = calc_state.call(null);
var inst_13510 = (inst_13508__$1 == null);
var inst_13511 = cljs.core.not.call(null,inst_13510);
var state_13606__$1 = (function (){var statearr_13611 = state_13606;
(statearr_13611[(8)] = inst_13508__$1);

return statearr_13611;
})();
if(inst_13511){
var statearr_13612_13670 = state_13606__$1;
(statearr_13612_13670[(1)] = (2));

} else {
var statearr_13613_13671 = state_13606__$1;
(statearr_13613_13671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (24))){
var inst_13566 = (state_13606[(9)]);
var inst_13557 = (state_13606[(10)]);
var inst_13580 = (state_13606[(11)]);
var inst_13580__$1 = inst_13557.call(null,inst_13566);
var state_13606__$1 = (function (){var statearr_13614 = state_13606;
(statearr_13614[(11)] = inst_13580__$1);

return statearr_13614;
})();
if(cljs.core.truth_(inst_13580__$1)){
var statearr_13615_13672 = state_13606__$1;
(statearr_13615_13672[(1)] = (29));

} else {
var statearr_13616_13673 = state_13606__$1;
(statearr_13616_13673[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (4))){
var inst_13524 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13524)){
var statearr_13617_13674 = state_13606__$1;
(statearr_13617_13674[(1)] = (8));

} else {
var statearr_13618_13675 = state_13606__$1;
(statearr_13618_13675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (15))){
var inst_13551 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13551)){
var statearr_13619_13676 = state_13606__$1;
(statearr_13619_13676[(1)] = (19));

} else {
var statearr_13620_13677 = state_13606__$1;
(statearr_13620_13677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (21))){
var inst_13556 = (state_13606[(12)]);
var inst_13556__$1 = (state_13606[(2)]);
var inst_13557 = cljs.core.get.call(null,inst_13556__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13558 = cljs.core.get.call(null,inst_13556__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13559 = cljs.core.get.call(null,inst_13556__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13606__$1 = (function (){var statearr_13621 = state_13606;
(statearr_13621[(13)] = inst_13558);

(statearr_13621[(10)] = inst_13557);

(statearr_13621[(12)] = inst_13556__$1);

return statearr_13621;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13606__$1,(22),inst_13559);
} else {
if((state_val_13607 === (31))){
var inst_13588 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13588)){
var statearr_13622_13678 = state_13606__$1;
(statearr_13622_13678[(1)] = (32));

} else {
var statearr_13623_13679 = state_13606__$1;
(statearr_13623_13679[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (32))){
var inst_13565 = (state_13606[(14)]);
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13606__$1,(35),out,inst_13565);
} else {
if((state_val_13607 === (33))){
var inst_13556 = (state_13606[(12)]);
var inst_13533 = inst_13556;
var state_13606__$1 = (function (){var statearr_13624 = state_13606;
(statearr_13624[(7)] = inst_13533);

return statearr_13624;
})();
var statearr_13625_13680 = state_13606__$1;
(statearr_13625_13680[(2)] = null);

(statearr_13625_13680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (13))){
var inst_13533 = (state_13606[(7)]);
var inst_13540 = inst_13533.cljs$lang$protocol_mask$partition0$;
var inst_13541 = (inst_13540 & (64));
var inst_13542 = inst_13533.cljs$core$ISeq$;
var inst_13543 = (cljs.core.PROTOCOL_SENTINEL === inst_13542);
var inst_13544 = (inst_13541) || (inst_13543);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13544)){
var statearr_13626_13681 = state_13606__$1;
(statearr_13626_13681[(1)] = (16));

} else {
var statearr_13627_13682 = state_13606__$1;
(statearr_13627_13682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (22))){
var inst_13566 = (state_13606[(9)]);
var inst_13565 = (state_13606[(14)]);
var inst_13564 = (state_13606[(2)]);
var inst_13565__$1 = cljs.core.nth.call(null,inst_13564,(0),null);
var inst_13566__$1 = cljs.core.nth.call(null,inst_13564,(1),null);
var inst_13567 = (inst_13565__$1 == null);
var inst_13568 = cljs.core._EQ_.call(null,inst_13566__$1,change);
var inst_13569 = (inst_13567) || (inst_13568);
var state_13606__$1 = (function (){var statearr_13628 = state_13606;
(statearr_13628[(9)] = inst_13566__$1);

(statearr_13628[(14)] = inst_13565__$1);

return statearr_13628;
})();
if(cljs.core.truth_(inst_13569)){
var statearr_13629_13683 = state_13606__$1;
(statearr_13629_13683[(1)] = (23));

} else {
var statearr_13630_13684 = state_13606__$1;
(statearr_13630_13684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (36))){
var inst_13556 = (state_13606[(12)]);
var inst_13533 = inst_13556;
var state_13606__$1 = (function (){var statearr_13631 = state_13606;
(statearr_13631[(7)] = inst_13533);

return statearr_13631;
})();
var statearr_13632_13685 = state_13606__$1;
(statearr_13632_13685[(2)] = null);

(statearr_13632_13685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (29))){
var inst_13580 = (state_13606[(11)]);
var state_13606__$1 = state_13606;
var statearr_13633_13686 = state_13606__$1;
(statearr_13633_13686[(2)] = inst_13580);

(statearr_13633_13686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (6))){
var state_13606__$1 = state_13606;
var statearr_13634_13687 = state_13606__$1;
(statearr_13634_13687[(2)] = false);

(statearr_13634_13687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (28))){
var inst_13576 = (state_13606[(2)]);
var inst_13577 = calc_state.call(null);
var inst_13533 = inst_13577;
var state_13606__$1 = (function (){var statearr_13635 = state_13606;
(statearr_13635[(15)] = inst_13576);

(statearr_13635[(7)] = inst_13533);

return statearr_13635;
})();
var statearr_13636_13688 = state_13606__$1;
(statearr_13636_13688[(2)] = null);

(statearr_13636_13688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (25))){
var inst_13602 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13637_13689 = state_13606__$1;
(statearr_13637_13689[(2)] = inst_13602);

(statearr_13637_13689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (34))){
var inst_13600 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13638_13690 = state_13606__$1;
(statearr_13638_13690[(2)] = inst_13600);

(statearr_13638_13690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (17))){
var state_13606__$1 = state_13606;
var statearr_13639_13691 = state_13606__$1;
(statearr_13639_13691[(2)] = false);

(statearr_13639_13691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (3))){
var state_13606__$1 = state_13606;
var statearr_13640_13692 = state_13606__$1;
(statearr_13640_13692[(2)] = false);

(statearr_13640_13692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (12))){
var inst_13604 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13606__$1,inst_13604);
} else {
if((state_val_13607 === (2))){
var inst_13508 = (state_13606[(8)]);
var inst_13513 = inst_13508.cljs$lang$protocol_mask$partition0$;
var inst_13514 = (inst_13513 & (64));
var inst_13515 = inst_13508.cljs$core$ISeq$;
var inst_13516 = (cljs.core.PROTOCOL_SENTINEL === inst_13515);
var inst_13517 = (inst_13514) || (inst_13516);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13517)){
var statearr_13641_13693 = state_13606__$1;
(statearr_13641_13693[(1)] = (5));

} else {
var statearr_13642_13694 = state_13606__$1;
(statearr_13642_13694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (23))){
var inst_13565 = (state_13606[(14)]);
var inst_13571 = (inst_13565 == null);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13571)){
var statearr_13643_13695 = state_13606__$1;
(statearr_13643_13695[(1)] = (26));

} else {
var statearr_13644_13696 = state_13606__$1;
(statearr_13644_13696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (35))){
var inst_13591 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13591)){
var statearr_13645_13697 = state_13606__$1;
(statearr_13645_13697[(1)] = (36));

} else {
var statearr_13646_13698 = state_13606__$1;
(statearr_13646_13698[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (19))){
var inst_13533 = (state_13606[(7)]);
var inst_13553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13533);
var state_13606__$1 = state_13606;
var statearr_13647_13699 = state_13606__$1;
(statearr_13647_13699[(2)] = inst_13553);

(statearr_13647_13699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (11))){
var inst_13533 = (state_13606[(7)]);
var inst_13537 = (inst_13533 == null);
var inst_13538 = cljs.core.not.call(null,inst_13537);
var state_13606__$1 = state_13606;
if(inst_13538){
var statearr_13648_13700 = state_13606__$1;
(statearr_13648_13700[(1)] = (13));

} else {
var statearr_13649_13701 = state_13606__$1;
(statearr_13649_13701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (9))){
var inst_13508 = (state_13606[(8)]);
var state_13606__$1 = state_13606;
var statearr_13650_13702 = state_13606__$1;
(statearr_13650_13702[(2)] = inst_13508);

(statearr_13650_13702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (5))){
var state_13606__$1 = state_13606;
var statearr_13651_13703 = state_13606__$1;
(statearr_13651_13703[(2)] = true);

(statearr_13651_13703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (14))){
var state_13606__$1 = state_13606;
var statearr_13652_13704 = state_13606__$1;
(statearr_13652_13704[(2)] = false);

(statearr_13652_13704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (26))){
var inst_13566 = (state_13606[(9)]);
var inst_13573 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13566);
var state_13606__$1 = state_13606;
var statearr_13653_13705 = state_13606__$1;
(statearr_13653_13705[(2)] = inst_13573);

(statearr_13653_13705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (16))){
var state_13606__$1 = state_13606;
var statearr_13654_13706 = state_13606__$1;
(statearr_13654_13706[(2)] = true);

(statearr_13654_13706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (38))){
var inst_13596 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13655_13707 = state_13606__$1;
(statearr_13655_13707[(2)] = inst_13596);

(statearr_13655_13707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (30))){
var inst_13566 = (state_13606[(9)]);
var inst_13558 = (state_13606[(13)]);
var inst_13557 = (state_13606[(10)]);
var inst_13583 = cljs.core.empty_QMARK_.call(null,inst_13557);
var inst_13584 = inst_13558.call(null,inst_13566);
var inst_13585 = cljs.core.not.call(null,inst_13584);
var inst_13586 = (inst_13583) && (inst_13585);
var state_13606__$1 = state_13606;
var statearr_13656_13708 = state_13606__$1;
(statearr_13656_13708[(2)] = inst_13586);

(statearr_13656_13708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (10))){
var inst_13508 = (state_13606[(8)]);
var inst_13529 = (state_13606[(2)]);
var inst_13530 = cljs.core.get.call(null,inst_13529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13531 = cljs.core.get.call(null,inst_13529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13532 = cljs.core.get.call(null,inst_13529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13533 = inst_13508;
var state_13606__$1 = (function (){var statearr_13657 = state_13606;
(statearr_13657[(16)] = inst_13531);

(statearr_13657[(17)] = inst_13532);

(statearr_13657[(7)] = inst_13533);

(statearr_13657[(18)] = inst_13530);

return statearr_13657;
})();
var statearr_13658_13709 = state_13606__$1;
(statearr_13658_13709[(2)] = null);

(statearr_13658_13709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (18))){
var inst_13548 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13659_13710 = state_13606__$1;
(statearr_13659_13710[(2)] = inst_13548);

(statearr_13659_13710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (37))){
var state_13606__$1 = state_13606;
var statearr_13660_13711 = state_13606__$1;
(statearr_13660_13711[(2)] = null);

(statearr_13660_13711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (8))){
var inst_13508 = (state_13606[(8)]);
var inst_13526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13508);
var state_13606__$1 = state_13606;
var statearr_13661_13712 = state_13606__$1;
(statearr_13661_13712[(2)] = inst_13526);

(statearr_13661_13712[(1)] = (10));


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
}
}
}
}
}
}
});})(c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12533__auto__,c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12534__auto__ = null;
var cljs$core$async$mix_$_state_machine__12534__auto____0 = (function (){
var statearr_13662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13662[(0)] = cljs$core$async$mix_$_state_machine__12534__auto__);

(statearr_13662[(1)] = (1));

return statearr_13662;
});
var cljs$core$async$mix_$_state_machine__12534__auto____1 = (function (state_13606){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13663){if((e13663 instanceof Object)){
var ex__12537__auto__ = e13663;
var statearr_13664_13713 = state_13606;
(statearr_13664_13713[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13714 = state_13606;
state_13606 = G__13714;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12534__auto__ = function(state_13606){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12534__auto____1.call(this,state_13606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12534__auto____0;
cljs$core$async$mix_$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12534__auto____1;
return cljs$core$async$mix_$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12623__auto__ = (function (){var statearr_13665 = f__12622__auto__.call(null);
(statearr_13665[(6)] = c__12621__auto___13666);

return statearr_13665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___13666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8660__auto__ = (((p == null))?null:p);
var m__8661__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8661__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8660__auto__ = (((p == null))?null:p);
var m__8661__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,p,v,ch);
} else {
var m__8661__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13716 = arguments.length;
switch (G__13716) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8660__auto__ = (((p == null))?null:p);
var m__8661__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,p);
} else {
var m__8661__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8660__auto__ = (((p == null))?null:p);
var m__8661__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8660__auto__)]);
if(!((m__8661__auto__ == null))){
return m__8661__auto__.call(null,p,v);
} else {
var m__8661__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8661__auto____$1 == null))){
return m__8661__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13720 = arguments.length;
switch (G__13720) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7977__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7977__auto__,mults){
return (function (p1__13718_SHARP_){
if(cljs.core.truth_(p1__13718_SHARP_.call(null,topic))){
return p1__13718_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13718_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7977__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13721 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13722){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13722 = meta13722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13723,meta13722__$1){
var self__ = this;
var _13723__$1 = this;
return (new cljs.core.async.t_cljs$core$async13721(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13722__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13723){
var self__ = this;
var _13723__$1 = this;
return self__.meta13722;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13722","meta13722",-1254318994,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13721";

cljs.core.async.t_cljs$core$async13721.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async13721");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13721 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13722){
return (new cljs.core.async.t_cljs$core$async13721(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13722));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13721(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12621__auto___13841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___13841,mults,ensure_mult,p){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___13841,mults,ensure_mult,p){
return (function (state_13795){
var state_val_13796 = (state_13795[(1)]);
if((state_val_13796 === (7))){
var inst_13791 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13797_13842 = state_13795__$1;
(statearr_13797_13842[(2)] = inst_13791);

(statearr_13797_13842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (20))){
var state_13795__$1 = state_13795;
var statearr_13798_13843 = state_13795__$1;
(statearr_13798_13843[(2)] = null);

(statearr_13798_13843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (1))){
var state_13795__$1 = state_13795;
var statearr_13799_13844 = state_13795__$1;
(statearr_13799_13844[(2)] = null);

(statearr_13799_13844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (24))){
var inst_13774 = (state_13795[(7)]);
var inst_13783 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13774);
var state_13795__$1 = state_13795;
var statearr_13800_13845 = state_13795__$1;
(statearr_13800_13845[(2)] = inst_13783);

(statearr_13800_13845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (4))){
var inst_13726 = (state_13795[(8)]);
var inst_13726__$1 = (state_13795[(2)]);
var inst_13727 = (inst_13726__$1 == null);
var state_13795__$1 = (function (){var statearr_13801 = state_13795;
(statearr_13801[(8)] = inst_13726__$1);

return statearr_13801;
})();
if(cljs.core.truth_(inst_13727)){
var statearr_13802_13846 = state_13795__$1;
(statearr_13802_13846[(1)] = (5));

} else {
var statearr_13803_13847 = state_13795__$1;
(statearr_13803_13847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (15))){
var inst_13768 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13804_13848 = state_13795__$1;
(statearr_13804_13848[(2)] = inst_13768);

(statearr_13804_13848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (21))){
var inst_13788 = (state_13795[(2)]);
var state_13795__$1 = (function (){var statearr_13805 = state_13795;
(statearr_13805[(9)] = inst_13788);

return statearr_13805;
})();
var statearr_13806_13849 = state_13795__$1;
(statearr_13806_13849[(2)] = null);

(statearr_13806_13849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (13))){
var inst_13750 = (state_13795[(10)]);
var inst_13752 = cljs.core.chunked_seq_QMARK_.call(null,inst_13750);
var state_13795__$1 = state_13795;
if(inst_13752){
var statearr_13807_13850 = state_13795__$1;
(statearr_13807_13850[(1)] = (16));

} else {
var statearr_13808_13851 = state_13795__$1;
(statearr_13808_13851[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (22))){
var inst_13780 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
if(cljs.core.truth_(inst_13780)){
var statearr_13809_13852 = state_13795__$1;
(statearr_13809_13852[(1)] = (23));

} else {
var statearr_13810_13853 = state_13795__$1;
(statearr_13810_13853[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (6))){
var inst_13776 = (state_13795[(11)]);
var inst_13774 = (state_13795[(7)]);
var inst_13726 = (state_13795[(8)]);
var inst_13774__$1 = topic_fn.call(null,inst_13726);
var inst_13775 = cljs.core.deref.call(null,mults);
var inst_13776__$1 = cljs.core.get.call(null,inst_13775,inst_13774__$1);
var state_13795__$1 = (function (){var statearr_13811 = state_13795;
(statearr_13811[(11)] = inst_13776__$1);

(statearr_13811[(7)] = inst_13774__$1);

return statearr_13811;
})();
if(cljs.core.truth_(inst_13776__$1)){
var statearr_13812_13854 = state_13795__$1;
(statearr_13812_13854[(1)] = (19));

} else {
var statearr_13813_13855 = state_13795__$1;
(statearr_13813_13855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (25))){
var inst_13785 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13814_13856 = state_13795__$1;
(statearr_13814_13856[(2)] = inst_13785);

(statearr_13814_13856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (17))){
var inst_13750 = (state_13795[(10)]);
var inst_13759 = cljs.core.first.call(null,inst_13750);
var inst_13760 = cljs.core.async.muxch_STAR_.call(null,inst_13759);
var inst_13761 = cljs.core.async.close_BANG_.call(null,inst_13760);
var inst_13762 = cljs.core.next.call(null,inst_13750);
var inst_13736 = inst_13762;
var inst_13737 = null;
var inst_13738 = (0);
var inst_13739 = (0);
var state_13795__$1 = (function (){var statearr_13815 = state_13795;
(statearr_13815[(12)] = inst_13761);

(statearr_13815[(13)] = inst_13737);

(statearr_13815[(14)] = inst_13736);

(statearr_13815[(15)] = inst_13738);

(statearr_13815[(16)] = inst_13739);

return statearr_13815;
})();
var statearr_13816_13857 = state_13795__$1;
(statearr_13816_13857[(2)] = null);

(statearr_13816_13857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (3))){
var inst_13793 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13795__$1,inst_13793);
} else {
if((state_val_13796 === (12))){
var inst_13770 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13817_13858 = state_13795__$1;
(statearr_13817_13858[(2)] = inst_13770);

(statearr_13817_13858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (2))){
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13795__$1,(4),ch);
} else {
if((state_val_13796 === (23))){
var state_13795__$1 = state_13795;
var statearr_13818_13859 = state_13795__$1;
(statearr_13818_13859[(2)] = null);

(statearr_13818_13859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (19))){
var inst_13776 = (state_13795[(11)]);
var inst_13726 = (state_13795[(8)]);
var inst_13778 = cljs.core.async.muxch_STAR_.call(null,inst_13776);
var state_13795__$1 = state_13795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13795__$1,(22),inst_13778,inst_13726);
} else {
if((state_val_13796 === (11))){
var inst_13736 = (state_13795[(14)]);
var inst_13750 = (state_13795[(10)]);
var inst_13750__$1 = cljs.core.seq.call(null,inst_13736);
var state_13795__$1 = (function (){var statearr_13819 = state_13795;
(statearr_13819[(10)] = inst_13750__$1);

return statearr_13819;
})();
if(inst_13750__$1){
var statearr_13820_13860 = state_13795__$1;
(statearr_13820_13860[(1)] = (13));

} else {
var statearr_13821_13861 = state_13795__$1;
(statearr_13821_13861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (9))){
var inst_13772 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13822_13862 = state_13795__$1;
(statearr_13822_13862[(2)] = inst_13772);

(statearr_13822_13862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (5))){
var inst_13733 = cljs.core.deref.call(null,mults);
var inst_13734 = cljs.core.vals.call(null,inst_13733);
var inst_13735 = cljs.core.seq.call(null,inst_13734);
var inst_13736 = inst_13735;
var inst_13737 = null;
var inst_13738 = (0);
var inst_13739 = (0);
var state_13795__$1 = (function (){var statearr_13823 = state_13795;
(statearr_13823[(13)] = inst_13737);

(statearr_13823[(14)] = inst_13736);

(statearr_13823[(15)] = inst_13738);

(statearr_13823[(16)] = inst_13739);

return statearr_13823;
})();
var statearr_13824_13863 = state_13795__$1;
(statearr_13824_13863[(2)] = null);

(statearr_13824_13863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (14))){
var state_13795__$1 = state_13795;
var statearr_13828_13864 = state_13795__$1;
(statearr_13828_13864[(2)] = null);

(statearr_13828_13864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (16))){
var inst_13750 = (state_13795[(10)]);
var inst_13754 = cljs.core.chunk_first.call(null,inst_13750);
var inst_13755 = cljs.core.chunk_rest.call(null,inst_13750);
var inst_13756 = cljs.core.count.call(null,inst_13754);
var inst_13736 = inst_13755;
var inst_13737 = inst_13754;
var inst_13738 = inst_13756;
var inst_13739 = (0);
var state_13795__$1 = (function (){var statearr_13829 = state_13795;
(statearr_13829[(13)] = inst_13737);

(statearr_13829[(14)] = inst_13736);

(statearr_13829[(15)] = inst_13738);

(statearr_13829[(16)] = inst_13739);

return statearr_13829;
})();
var statearr_13830_13865 = state_13795__$1;
(statearr_13830_13865[(2)] = null);

(statearr_13830_13865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (10))){
var inst_13737 = (state_13795[(13)]);
var inst_13736 = (state_13795[(14)]);
var inst_13738 = (state_13795[(15)]);
var inst_13739 = (state_13795[(16)]);
var inst_13744 = cljs.core._nth.call(null,inst_13737,inst_13739);
var inst_13745 = cljs.core.async.muxch_STAR_.call(null,inst_13744);
var inst_13746 = cljs.core.async.close_BANG_.call(null,inst_13745);
var inst_13747 = (inst_13739 + (1));
var tmp13825 = inst_13737;
var tmp13826 = inst_13736;
var tmp13827 = inst_13738;
var inst_13736__$1 = tmp13826;
var inst_13737__$1 = tmp13825;
var inst_13738__$1 = tmp13827;
var inst_13739__$1 = inst_13747;
var state_13795__$1 = (function (){var statearr_13831 = state_13795;
(statearr_13831[(13)] = inst_13737__$1);

(statearr_13831[(14)] = inst_13736__$1);

(statearr_13831[(15)] = inst_13738__$1);

(statearr_13831[(17)] = inst_13746);

(statearr_13831[(16)] = inst_13739__$1);

return statearr_13831;
})();
var statearr_13832_13866 = state_13795__$1;
(statearr_13832_13866[(2)] = null);

(statearr_13832_13866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (18))){
var inst_13765 = (state_13795[(2)]);
var state_13795__$1 = state_13795;
var statearr_13833_13867 = state_13795__$1;
(statearr_13833_13867[(2)] = inst_13765);

(statearr_13833_13867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13796 === (8))){
var inst_13738 = (state_13795[(15)]);
var inst_13739 = (state_13795[(16)]);
var inst_13741 = (inst_13739 < inst_13738);
var inst_13742 = inst_13741;
var state_13795__$1 = state_13795;
if(cljs.core.truth_(inst_13742)){
var statearr_13834_13868 = state_13795__$1;
(statearr_13834_13868[(1)] = (10));

} else {
var statearr_13835_13869 = state_13795__$1;
(statearr_13835_13869[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__12621__auto___13841,mults,ensure_mult,p))
;
return ((function (switch__12533__auto__,c__12621__auto___13841,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_13836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13836[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_13836[(1)] = (1));

return statearr_13836;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_13795){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13837){if((e13837 instanceof Object)){
var ex__12537__auto__ = e13837;
var statearr_13838_13870 = state_13795;
(statearr_13838_13870[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13871 = state_13795;
state_13795 = G__13871;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_13795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_13795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___13841,mults,ensure_mult,p))
})();
var state__12623__auto__ = (function (){var statearr_13839 = f__12622__auto__.call(null);
(statearr_13839[(6)] = c__12621__auto___13841);

return statearr_13839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___13841,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13873 = arguments.length;
switch (G__13873) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13876 = arguments.length;
switch (G__13876) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13879 = arguments.length;
switch (G__13879) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12621__auto___13946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13918){
var state_val_13919 = (state_13918[(1)]);
if((state_val_13919 === (7))){
var state_13918__$1 = state_13918;
var statearr_13920_13947 = state_13918__$1;
(statearr_13920_13947[(2)] = null);

(statearr_13920_13947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (1))){
var state_13918__$1 = state_13918;
var statearr_13921_13948 = state_13918__$1;
(statearr_13921_13948[(2)] = null);

(statearr_13921_13948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (4))){
var inst_13882 = (state_13918[(7)]);
var inst_13884 = (inst_13882 < cnt);
var state_13918__$1 = state_13918;
if(cljs.core.truth_(inst_13884)){
var statearr_13922_13949 = state_13918__$1;
(statearr_13922_13949[(1)] = (6));

} else {
var statearr_13923_13950 = state_13918__$1;
(statearr_13923_13950[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (15))){
var inst_13914 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
var statearr_13924_13951 = state_13918__$1;
(statearr_13924_13951[(2)] = inst_13914);

(statearr_13924_13951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (13))){
var inst_13907 = cljs.core.async.close_BANG_.call(null,out);
var state_13918__$1 = state_13918;
var statearr_13925_13952 = state_13918__$1;
(statearr_13925_13952[(2)] = inst_13907);

(statearr_13925_13952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (6))){
var state_13918__$1 = state_13918;
var statearr_13926_13953 = state_13918__$1;
(statearr_13926_13953[(2)] = null);

(statearr_13926_13953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (3))){
var inst_13916 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13918__$1,inst_13916);
} else {
if((state_val_13919 === (12))){
var inst_13904 = (state_13918[(8)]);
var inst_13904__$1 = (state_13918[(2)]);
var inst_13905 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13904__$1);
var state_13918__$1 = (function (){var statearr_13927 = state_13918;
(statearr_13927[(8)] = inst_13904__$1);

return statearr_13927;
})();
if(cljs.core.truth_(inst_13905)){
var statearr_13928_13954 = state_13918__$1;
(statearr_13928_13954[(1)] = (13));

} else {
var statearr_13929_13955 = state_13918__$1;
(statearr_13929_13955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (2))){
var inst_13881 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13882 = (0);
var state_13918__$1 = (function (){var statearr_13930 = state_13918;
(statearr_13930[(7)] = inst_13882);

(statearr_13930[(9)] = inst_13881);

return statearr_13930;
})();
var statearr_13931_13956 = state_13918__$1;
(statearr_13931_13956[(2)] = null);

(statearr_13931_13956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (11))){
var inst_13882 = (state_13918[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13918,(10),Object,null,(9));
var inst_13891 = chs__$1.call(null,inst_13882);
var inst_13892 = done.call(null,inst_13882);
var inst_13893 = cljs.core.async.take_BANG_.call(null,inst_13891,inst_13892);
var state_13918__$1 = state_13918;
var statearr_13932_13957 = state_13918__$1;
(statearr_13932_13957[(2)] = inst_13893);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (9))){
var inst_13882 = (state_13918[(7)]);
var inst_13895 = (state_13918[(2)]);
var inst_13896 = (inst_13882 + (1));
var inst_13882__$1 = inst_13896;
var state_13918__$1 = (function (){var statearr_13933 = state_13918;
(statearr_13933[(7)] = inst_13882__$1);

(statearr_13933[(10)] = inst_13895);

return statearr_13933;
})();
var statearr_13934_13958 = state_13918__$1;
(statearr_13934_13958[(2)] = null);

(statearr_13934_13958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (5))){
var inst_13902 = (state_13918[(2)]);
var state_13918__$1 = (function (){var statearr_13935 = state_13918;
(statearr_13935[(11)] = inst_13902);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13918__$1,(12),dchan);
} else {
if((state_val_13919 === (14))){
var inst_13904 = (state_13918[(8)]);
var inst_13909 = cljs.core.apply.call(null,f,inst_13904);
var state_13918__$1 = state_13918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13918__$1,(16),out,inst_13909);
} else {
if((state_val_13919 === (16))){
var inst_13911 = (state_13918[(2)]);
var state_13918__$1 = (function (){var statearr_13936 = state_13918;
(statearr_13936[(12)] = inst_13911);

return statearr_13936;
})();
var statearr_13937_13959 = state_13918__$1;
(statearr_13937_13959[(2)] = null);

(statearr_13937_13959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (10))){
var inst_13886 = (state_13918[(2)]);
var inst_13887 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13918__$1 = (function (){var statearr_13938 = state_13918;
(statearr_13938[(13)] = inst_13886);

return statearr_13938;
})();
var statearr_13939_13960 = state_13918__$1;
(statearr_13939_13960[(2)] = inst_13887);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13918__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13919 === (8))){
var inst_13900 = (state_13918[(2)]);
var state_13918__$1 = state_13918;
var statearr_13940_13961 = state_13918__$1;
(statearr_13940_13961[(2)] = inst_13900);

(statearr_13940_13961[(1)] = (5));


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
});})(c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12533__auto__,c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_13941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13941[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_13941[(1)] = (1));

return statearr_13941;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_13918){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e13942){if((e13942 instanceof Object)){
var ex__12537__auto__ = e13942;
var statearr_13943_13962 = state_13918;
(statearr_13943_13962[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13963 = state_13918;
state_13918 = G__13963;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_13918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_13918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12623__auto__ = (function (){var statearr_13944 = f__12622__auto__.call(null);
(statearr_13944[(6)] = c__12621__auto___13946);

return statearr_13944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___13946,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13966 = arguments.length;
switch (G__13966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14020,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14020,out){
return (function (state_13998){
var state_val_13999 = (state_13998[(1)]);
if((state_val_13999 === (7))){
var inst_13977 = (state_13998[(7)]);
var inst_13978 = (state_13998[(8)]);
var inst_13977__$1 = (state_13998[(2)]);
var inst_13978__$1 = cljs.core.nth.call(null,inst_13977__$1,(0),null);
var inst_13979 = cljs.core.nth.call(null,inst_13977__$1,(1),null);
var inst_13980 = (inst_13978__$1 == null);
var state_13998__$1 = (function (){var statearr_14000 = state_13998;
(statearr_14000[(7)] = inst_13977__$1);

(statearr_14000[(8)] = inst_13978__$1);

(statearr_14000[(9)] = inst_13979);

return statearr_14000;
})();
if(cljs.core.truth_(inst_13980)){
var statearr_14001_14021 = state_13998__$1;
(statearr_14001_14021[(1)] = (8));

} else {
var statearr_14002_14022 = state_13998__$1;
(statearr_14002_14022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (1))){
var inst_13967 = cljs.core.vec.call(null,chs);
var inst_13968 = inst_13967;
var state_13998__$1 = (function (){var statearr_14003 = state_13998;
(statearr_14003[(10)] = inst_13968);

return statearr_14003;
})();
var statearr_14004_14023 = state_13998__$1;
(statearr_14004_14023[(2)] = null);

(statearr_14004_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (4))){
var inst_13968 = (state_13998[(10)]);
var state_13998__$1 = state_13998;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13998__$1,(7),inst_13968);
} else {
if((state_val_13999 === (6))){
var inst_13994 = (state_13998[(2)]);
var state_13998__$1 = state_13998;
var statearr_14005_14024 = state_13998__$1;
(statearr_14005_14024[(2)] = inst_13994);

(statearr_14005_14024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (3))){
var inst_13996 = (state_13998[(2)]);
var state_13998__$1 = state_13998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13998__$1,inst_13996);
} else {
if((state_val_13999 === (2))){
var inst_13968 = (state_13998[(10)]);
var inst_13970 = cljs.core.count.call(null,inst_13968);
var inst_13971 = (inst_13970 > (0));
var state_13998__$1 = state_13998;
if(cljs.core.truth_(inst_13971)){
var statearr_14007_14025 = state_13998__$1;
(statearr_14007_14025[(1)] = (4));

} else {
var statearr_14008_14026 = state_13998__$1;
(statearr_14008_14026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (11))){
var inst_13968 = (state_13998[(10)]);
var inst_13987 = (state_13998[(2)]);
var tmp14006 = inst_13968;
var inst_13968__$1 = tmp14006;
var state_13998__$1 = (function (){var statearr_14009 = state_13998;
(statearr_14009[(11)] = inst_13987);

(statearr_14009[(10)] = inst_13968__$1);

return statearr_14009;
})();
var statearr_14010_14027 = state_13998__$1;
(statearr_14010_14027[(2)] = null);

(statearr_14010_14027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (9))){
var inst_13978 = (state_13998[(8)]);
var state_13998__$1 = state_13998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13998__$1,(11),out,inst_13978);
} else {
if((state_val_13999 === (5))){
var inst_13992 = cljs.core.async.close_BANG_.call(null,out);
var state_13998__$1 = state_13998;
var statearr_14011_14028 = state_13998__$1;
(statearr_14011_14028[(2)] = inst_13992);

(statearr_14011_14028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (10))){
var inst_13990 = (state_13998[(2)]);
var state_13998__$1 = state_13998;
var statearr_14012_14029 = state_13998__$1;
(statearr_14012_14029[(2)] = inst_13990);

(statearr_14012_14029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13999 === (8))){
var inst_13977 = (state_13998[(7)]);
var inst_13978 = (state_13998[(8)]);
var inst_13979 = (state_13998[(9)]);
var inst_13968 = (state_13998[(10)]);
var inst_13982 = (function (){var cs = inst_13968;
var vec__13973 = inst_13977;
var v = inst_13978;
var c = inst_13979;
return ((function (cs,vec__13973,v,c,inst_13977,inst_13978,inst_13979,inst_13968,state_val_13999,c__12621__auto___14020,out){
return (function (p1__13964_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13964_SHARP_);
});
;})(cs,vec__13973,v,c,inst_13977,inst_13978,inst_13979,inst_13968,state_val_13999,c__12621__auto___14020,out))
})();
var inst_13983 = cljs.core.filterv.call(null,inst_13982,inst_13968);
var inst_13968__$1 = inst_13983;
var state_13998__$1 = (function (){var statearr_14013 = state_13998;
(statearr_14013[(10)] = inst_13968__$1);

return statearr_14013;
})();
var statearr_14014_14030 = state_13998__$1;
(statearr_14014_14030[(2)] = null);

(statearr_14014_14030[(1)] = (2));


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
});})(c__12621__auto___14020,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14020,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14015[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14015[(1)] = (1));

return statearr_14015;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_13998){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_13998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14016){if((e14016 instanceof Object)){
var ex__12537__auto__ = e14016;
var statearr_14017_14031 = state_13998;
(statearr_14017_14031[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14032 = state_13998;
state_13998 = G__14032;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_13998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_13998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14020,out))
})();
var state__12623__auto__ = (function (){var statearr_14018 = f__12622__auto__.call(null);
(statearr_14018[(6)] = c__12621__auto___14020);

return statearr_14018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14020,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14034 = arguments.length;
switch (G__14034) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14079,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14079,out){
return (function (state_14058){
var state_val_14059 = (state_14058[(1)]);
if((state_val_14059 === (7))){
var inst_14040 = (state_14058[(7)]);
var inst_14040__$1 = (state_14058[(2)]);
var inst_14041 = (inst_14040__$1 == null);
var inst_14042 = cljs.core.not.call(null,inst_14041);
var state_14058__$1 = (function (){var statearr_14060 = state_14058;
(statearr_14060[(7)] = inst_14040__$1);

return statearr_14060;
})();
if(inst_14042){
var statearr_14061_14080 = state_14058__$1;
(statearr_14061_14080[(1)] = (8));

} else {
var statearr_14062_14081 = state_14058__$1;
(statearr_14062_14081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (1))){
var inst_14035 = (0);
var state_14058__$1 = (function (){var statearr_14063 = state_14058;
(statearr_14063[(8)] = inst_14035);

return statearr_14063;
})();
var statearr_14064_14082 = state_14058__$1;
(statearr_14064_14082[(2)] = null);

(statearr_14064_14082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (4))){
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14058__$1,(7),ch);
} else {
if((state_val_14059 === (6))){
var inst_14053 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14065_14083 = state_14058__$1;
(statearr_14065_14083[(2)] = inst_14053);

(statearr_14065_14083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (3))){
var inst_14055 = (state_14058[(2)]);
var inst_14056 = cljs.core.async.close_BANG_.call(null,out);
var state_14058__$1 = (function (){var statearr_14066 = state_14058;
(statearr_14066[(9)] = inst_14055);

return statearr_14066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14058__$1,inst_14056);
} else {
if((state_val_14059 === (2))){
var inst_14035 = (state_14058[(8)]);
var inst_14037 = (inst_14035 < n);
var state_14058__$1 = state_14058;
if(cljs.core.truth_(inst_14037)){
var statearr_14067_14084 = state_14058__$1;
(statearr_14067_14084[(1)] = (4));

} else {
var statearr_14068_14085 = state_14058__$1;
(statearr_14068_14085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (11))){
var inst_14035 = (state_14058[(8)]);
var inst_14045 = (state_14058[(2)]);
var inst_14046 = (inst_14035 + (1));
var inst_14035__$1 = inst_14046;
var state_14058__$1 = (function (){var statearr_14069 = state_14058;
(statearr_14069[(10)] = inst_14045);

(statearr_14069[(8)] = inst_14035__$1);

return statearr_14069;
})();
var statearr_14070_14086 = state_14058__$1;
(statearr_14070_14086[(2)] = null);

(statearr_14070_14086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (9))){
var state_14058__$1 = state_14058;
var statearr_14071_14087 = state_14058__$1;
(statearr_14071_14087[(2)] = null);

(statearr_14071_14087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (5))){
var state_14058__$1 = state_14058;
var statearr_14072_14088 = state_14058__$1;
(statearr_14072_14088[(2)] = null);

(statearr_14072_14088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (10))){
var inst_14050 = (state_14058[(2)]);
var state_14058__$1 = state_14058;
var statearr_14073_14089 = state_14058__$1;
(statearr_14073_14089[(2)] = inst_14050);

(statearr_14073_14089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14059 === (8))){
var inst_14040 = (state_14058[(7)]);
var state_14058__$1 = state_14058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14058__$1,(11),out,inst_14040);
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
});})(c__12621__auto___14079,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14079,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14074 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14074[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14074[(1)] = (1));

return statearr_14074;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_14058){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14075){if((e14075 instanceof Object)){
var ex__12537__auto__ = e14075;
var statearr_14076_14090 = state_14058;
(statearr_14076_14090[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14091 = state_14058;
state_14058 = G__14091;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_14058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_14058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14079,out))
})();
var state__12623__auto__ = (function (){var statearr_14077 = f__12622__auto__.call(null);
(statearr_14077[(6)] = c__12621__auto___14079);

return statearr_14077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14079,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14093 = (function (f,ch,meta14094){
this.f = f;
this.ch = ch;
this.meta14094 = meta14094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14095,meta14094__$1){
var self__ = this;
var _14095__$1 = this;
return (new cljs.core.async.t_cljs$core$async14093(self__.f,self__.ch,meta14094__$1));
});

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14095){
var self__ = this;
var _14095__$1 = this;
return self__.meta14094;
});

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14096 = (function (f,ch,meta14094,_,fn1,meta14097){
this.f = f;
this.ch = ch;
this.meta14094 = meta14094;
this._ = _;
this.fn1 = fn1;
this.meta14097 = meta14097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14098,meta14097__$1){
var self__ = this;
var _14098__$1 = this;
return (new cljs.core.async.t_cljs$core$async14096(self__.f,self__.ch,self__.meta14094,self__._,self__.fn1,meta14097__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14098){
var self__ = this;
var _14098__$1 = this;
return self__.meta14097;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14092_SHARP_){
return f1.call(null,(((p1__14092_SHARP_ == null))?null:self__.f.call(null,p1__14092_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14094","meta14094",1992016801,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14093","cljs.core.async/t_cljs$core$async14093",-2146298404,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14097","meta14097",-1779213374,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14096";

cljs.core.async.t_cljs$core$async14096.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async14096");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14096 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14096(f__$1,ch__$1,meta14094__$1,___$2,fn1__$1,meta14097){
return (new cljs.core.async.t_cljs$core$async14096(f__$1,ch__$1,meta14094__$1,___$2,fn1__$1,meta14097));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14096(self__.f,self__.ch,self__.meta14094,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7965__auto__ = ret;
if(cljs.core.truth_(and__7965__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7965__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14094","meta14094",1992016801,null)], null);
});

cljs.core.async.t_cljs$core$async14093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14093";

cljs.core.async.t_cljs$core$async14093.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async14093");
});

cljs.core.async.__GT_t_cljs$core$async14093 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14093(f__$1,ch__$1,meta14094){
return (new cljs.core.async.t_cljs$core$async14093(f__$1,ch__$1,meta14094));
});

}

return (new cljs.core.async.t_cljs$core$async14093(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14099 = (function (f,ch,meta14100){
this.f = f;
this.ch = ch;
this.meta14100 = meta14100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14101,meta14100__$1){
var self__ = this;
var _14101__$1 = this;
return (new cljs.core.async.t_cljs$core$async14099(self__.f,self__.ch,meta14100__$1));
});

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14101){
var self__ = this;
var _14101__$1 = this;
return self__.meta14100;
});

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14100","meta14100",1720301011,null)], null);
});

cljs.core.async.t_cljs$core$async14099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14099";

cljs.core.async.t_cljs$core$async14099.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async14099");
});

cljs.core.async.__GT_t_cljs$core$async14099 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14099(f__$1,ch__$1,meta14100){
return (new cljs.core.async.t_cljs$core$async14099(f__$1,ch__$1,meta14100));
});

}

return (new cljs.core.async.t_cljs$core$async14099(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14102 = (function (p,ch,meta14103){
this.p = p;
this.ch = ch;
this.meta14103 = meta14103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14104,meta14103__$1){
var self__ = this;
var _14104__$1 = this;
return (new cljs.core.async.t_cljs$core$async14102(self__.p,self__.ch,meta14103__$1));
});

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14104){
var self__ = this;
var _14104__$1 = this;
return self__.meta14103;
});

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14103","meta14103",-1021075788,null)], null);
});

cljs.core.async.t_cljs$core$async14102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14102";

cljs.core.async.t_cljs$core$async14102.cljs$lang$ctorPrWriter = (function (this__8602__auto__,writer__8603__auto__,opt__8604__auto__){
return cljs.core._write.call(null,writer__8603__auto__,"cljs.core.async/t_cljs$core$async14102");
});

cljs.core.async.__GT_t_cljs$core$async14102 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14102(p__$1,ch__$1,meta14103){
return (new cljs.core.async.t_cljs$core$async14102(p__$1,ch__$1,meta14103));
});

}

return (new cljs.core.async.t_cljs$core$async14102(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14106 = arguments.length;
switch (G__14106) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14146,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14146,out){
return (function (state_14127){
var state_val_14128 = (state_14127[(1)]);
if((state_val_14128 === (7))){
var inst_14123 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14129_14147 = state_14127__$1;
(statearr_14129_14147[(2)] = inst_14123);

(statearr_14129_14147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (1))){
var state_14127__$1 = state_14127;
var statearr_14130_14148 = state_14127__$1;
(statearr_14130_14148[(2)] = null);

(statearr_14130_14148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (4))){
var inst_14109 = (state_14127[(7)]);
var inst_14109__$1 = (state_14127[(2)]);
var inst_14110 = (inst_14109__$1 == null);
var state_14127__$1 = (function (){var statearr_14131 = state_14127;
(statearr_14131[(7)] = inst_14109__$1);

return statearr_14131;
})();
if(cljs.core.truth_(inst_14110)){
var statearr_14132_14149 = state_14127__$1;
(statearr_14132_14149[(1)] = (5));

} else {
var statearr_14133_14150 = state_14127__$1;
(statearr_14133_14150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (6))){
var inst_14109 = (state_14127[(7)]);
var inst_14114 = p.call(null,inst_14109);
var state_14127__$1 = state_14127;
if(cljs.core.truth_(inst_14114)){
var statearr_14134_14151 = state_14127__$1;
(statearr_14134_14151[(1)] = (8));

} else {
var statearr_14135_14152 = state_14127__$1;
(statearr_14135_14152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (3))){
var inst_14125 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14127__$1,inst_14125);
} else {
if((state_val_14128 === (2))){
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14127__$1,(4),ch);
} else {
if((state_val_14128 === (11))){
var inst_14117 = (state_14127[(2)]);
var state_14127__$1 = state_14127;
var statearr_14136_14153 = state_14127__$1;
(statearr_14136_14153[(2)] = inst_14117);

(statearr_14136_14153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (9))){
var state_14127__$1 = state_14127;
var statearr_14137_14154 = state_14127__$1;
(statearr_14137_14154[(2)] = null);

(statearr_14137_14154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (5))){
var inst_14112 = cljs.core.async.close_BANG_.call(null,out);
var state_14127__$1 = state_14127;
var statearr_14138_14155 = state_14127__$1;
(statearr_14138_14155[(2)] = inst_14112);

(statearr_14138_14155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (10))){
var inst_14120 = (state_14127[(2)]);
var state_14127__$1 = (function (){var statearr_14139 = state_14127;
(statearr_14139[(8)] = inst_14120);

return statearr_14139;
})();
var statearr_14140_14156 = state_14127__$1;
(statearr_14140_14156[(2)] = null);

(statearr_14140_14156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14128 === (8))){
var inst_14109 = (state_14127[(7)]);
var state_14127__$1 = state_14127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14127__$1,(11),out,inst_14109);
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
});})(c__12621__auto___14146,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14146,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14141 = [null,null,null,null,null,null,null,null,null];
(statearr_14141[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14141[(1)] = (1));

return statearr_14141;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_14127){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14142){if((e14142 instanceof Object)){
var ex__12537__auto__ = e14142;
var statearr_14143_14157 = state_14127;
(statearr_14143_14157[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14158 = state_14127;
state_14127 = G__14158;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_14127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_14127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14146,out))
})();
var state__12623__auto__ = (function (){var statearr_14144 = f__12622__auto__.call(null);
(statearr_14144[(6)] = c__12621__auto___14146);

return statearr_14144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14146,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14160 = arguments.length;
switch (G__14160) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto__){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto__){
return (function (state_14223){
var state_val_14224 = (state_14223[(1)]);
if((state_val_14224 === (7))){
var inst_14219 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14225_14263 = state_14223__$1;
(statearr_14225_14263[(2)] = inst_14219);

(statearr_14225_14263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (20))){
var inst_14189 = (state_14223[(7)]);
var inst_14200 = (state_14223[(2)]);
var inst_14201 = cljs.core.next.call(null,inst_14189);
var inst_14175 = inst_14201;
var inst_14176 = null;
var inst_14177 = (0);
var inst_14178 = (0);
var state_14223__$1 = (function (){var statearr_14226 = state_14223;
(statearr_14226[(8)] = inst_14176);

(statearr_14226[(9)] = inst_14178);

(statearr_14226[(10)] = inst_14175);

(statearr_14226[(11)] = inst_14177);

(statearr_14226[(12)] = inst_14200);

return statearr_14226;
})();
var statearr_14227_14264 = state_14223__$1;
(statearr_14227_14264[(2)] = null);

(statearr_14227_14264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (1))){
var state_14223__$1 = state_14223;
var statearr_14228_14265 = state_14223__$1;
(statearr_14228_14265[(2)] = null);

(statearr_14228_14265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (4))){
var inst_14164 = (state_14223[(13)]);
var inst_14164__$1 = (state_14223[(2)]);
var inst_14165 = (inst_14164__$1 == null);
var state_14223__$1 = (function (){var statearr_14229 = state_14223;
(statearr_14229[(13)] = inst_14164__$1);

return statearr_14229;
})();
if(cljs.core.truth_(inst_14165)){
var statearr_14230_14266 = state_14223__$1;
(statearr_14230_14266[(1)] = (5));

} else {
var statearr_14231_14267 = state_14223__$1;
(statearr_14231_14267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (15))){
var state_14223__$1 = state_14223;
var statearr_14235_14268 = state_14223__$1;
(statearr_14235_14268[(2)] = null);

(statearr_14235_14268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (21))){
var state_14223__$1 = state_14223;
var statearr_14236_14269 = state_14223__$1;
(statearr_14236_14269[(2)] = null);

(statearr_14236_14269[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (13))){
var inst_14176 = (state_14223[(8)]);
var inst_14178 = (state_14223[(9)]);
var inst_14175 = (state_14223[(10)]);
var inst_14177 = (state_14223[(11)]);
var inst_14185 = (state_14223[(2)]);
var inst_14186 = (inst_14178 + (1));
var tmp14232 = inst_14176;
var tmp14233 = inst_14175;
var tmp14234 = inst_14177;
var inst_14175__$1 = tmp14233;
var inst_14176__$1 = tmp14232;
var inst_14177__$1 = tmp14234;
var inst_14178__$1 = inst_14186;
var state_14223__$1 = (function (){var statearr_14237 = state_14223;
(statearr_14237[(8)] = inst_14176__$1);

(statearr_14237[(9)] = inst_14178__$1);

(statearr_14237[(14)] = inst_14185);

(statearr_14237[(10)] = inst_14175__$1);

(statearr_14237[(11)] = inst_14177__$1);

return statearr_14237;
})();
var statearr_14238_14270 = state_14223__$1;
(statearr_14238_14270[(2)] = null);

(statearr_14238_14270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (22))){
var state_14223__$1 = state_14223;
var statearr_14239_14271 = state_14223__$1;
(statearr_14239_14271[(2)] = null);

(statearr_14239_14271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (6))){
var inst_14164 = (state_14223[(13)]);
var inst_14173 = f.call(null,inst_14164);
var inst_14174 = cljs.core.seq.call(null,inst_14173);
var inst_14175 = inst_14174;
var inst_14176 = null;
var inst_14177 = (0);
var inst_14178 = (0);
var state_14223__$1 = (function (){var statearr_14240 = state_14223;
(statearr_14240[(8)] = inst_14176);

(statearr_14240[(9)] = inst_14178);

(statearr_14240[(10)] = inst_14175);

(statearr_14240[(11)] = inst_14177);

return statearr_14240;
})();
var statearr_14241_14272 = state_14223__$1;
(statearr_14241_14272[(2)] = null);

(statearr_14241_14272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (17))){
var inst_14189 = (state_14223[(7)]);
var inst_14193 = cljs.core.chunk_first.call(null,inst_14189);
var inst_14194 = cljs.core.chunk_rest.call(null,inst_14189);
var inst_14195 = cljs.core.count.call(null,inst_14193);
var inst_14175 = inst_14194;
var inst_14176 = inst_14193;
var inst_14177 = inst_14195;
var inst_14178 = (0);
var state_14223__$1 = (function (){var statearr_14242 = state_14223;
(statearr_14242[(8)] = inst_14176);

(statearr_14242[(9)] = inst_14178);

(statearr_14242[(10)] = inst_14175);

(statearr_14242[(11)] = inst_14177);

return statearr_14242;
})();
var statearr_14243_14273 = state_14223__$1;
(statearr_14243_14273[(2)] = null);

(statearr_14243_14273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (3))){
var inst_14221 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14223__$1,inst_14221);
} else {
if((state_val_14224 === (12))){
var inst_14209 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14244_14274 = state_14223__$1;
(statearr_14244_14274[(2)] = inst_14209);

(statearr_14244_14274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (2))){
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14223__$1,(4),in$);
} else {
if((state_val_14224 === (23))){
var inst_14217 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14245_14275 = state_14223__$1;
(statearr_14245_14275[(2)] = inst_14217);

(statearr_14245_14275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (19))){
var inst_14204 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14246_14276 = state_14223__$1;
(statearr_14246_14276[(2)] = inst_14204);

(statearr_14246_14276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (11))){
var inst_14189 = (state_14223[(7)]);
var inst_14175 = (state_14223[(10)]);
var inst_14189__$1 = cljs.core.seq.call(null,inst_14175);
var state_14223__$1 = (function (){var statearr_14247 = state_14223;
(statearr_14247[(7)] = inst_14189__$1);

return statearr_14247;
})();
if(inst_14189__$1){
var statearr_14248_14277 = state_14223__$1;
(statearr_14248_14277[(1)] = (14));

} else {
var statearr_14249_14278 = state_14223__$1;
(statearr_14249_14278[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (9))){
var inst_14211 = (state_14223[(2)]);
var inst_14212 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14223__$1 = (function (){var statearr_14250 = state_14223;
(statearr_14250[(15)] = inst_14211);

return statearr_14250;
})();
if(cljs.core.truth_(inst_14212)){
var statearr_14251_14279 = state_14223__$1;
(statearr_14251_14279[(1)] = (21));

} else {
var statearr_14252_14280 = state_14223__$1;
(statearr_14252_14280[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (5))){
var inst_14167 = cljs.core.async.close_BANG_.call(null,out);
var state_14223__$1 = state_14223;
var statearr_14253_14281 = state_14223__$1;
(statearr_14253_14281[(2)] = inst_14167);

(statearr_14253_14281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (14))){
var inst_14189 = (state_14223[(7)]);
var inst_14191 = cljs.core.chunked_seq_QMARK_.call(null,inst_14189);
var state_14223__$1 = state_14223;
if(inst_14191){
var statearr_14254_14282 = state_14223__$1;
(statearr_14254_14282[(1)] = (17));

} else {
var statearr_14255_14283 = state_14223__$1;
(statearr_14255_14283[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (16))){
var inst_14207 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14256_14284 = state_14223__$1;
(statearr_14256_14284[(2)] = inst_14207);

(statearr_14256_14284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (10))){
var inst_14176 = (state_14223[(8)]);
var inst_14178 = (state_14223[(9)]);
var inst_14183 = cljs.core._nth.call(null,inst_14176,inst_14178);
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14223__$1,(13),out,inst_14183);
} else {
if((state_val_14224 === (18))){
var inst_14189 = (state_14223[(7)]);
var inst_14198 = cljs.core.first.call(null,inst_14189);
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14223__$1,(20),out,inst_14198);
} else {
if((state_val_14224 === (8))){
var inst_14178 = (state_14223[(9)]);
var inst_14177 = (state_14223[(11)]);
var inst_14180 = (inst_14178 < inst_14177);
var inst_14181 = inst_14180;
var state_14223__$1 = state_14223;
if(cljs.core.truth_(inst_14181)){
var statearr_14257_14285 = state_14223__$1;
(statearr_14257_14285[(1)] = (10));

} else {
var statearr_14258_14286 = state_14223__$1;
(statearr_14258_14286[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__12621__auto__))
;
return ((function (switch__12533__auto__,c__12621__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____0 = (function (){
var statearr_14259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14259[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__);

(statearr_14259[(1)] = (1));

return statearr_14259;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____1 = (function (state_14223){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14260){if((e14260 instanceof Object)){
var ex__12537__auto__ = e14260;
var statearr_14261_14287 = state_14223;
(statearr_14261_14287[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14288 = state_14223;
state_14223 = G__14288;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__ = function(state_14223){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____1.call(this,state_14223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12534__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto__))
})();
var state__12623__auto__ = (function (){var statearr_14262 = f__12622__auto__.call(null);
(statearr_14262[(6)] = c__12621__auto__);

return statearr_14262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto__))
);

return c__12621__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14290 = arguments.length;
switch (G__14290) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14293 = arguments.length;
switch (G__14293) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14296 = arguments.length;
switch (G__14296) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14343,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14343,out){
return (function (state_14320){
var state_val_14321 = (state_14320[(1)]);
if((state_val_14321 === (7))){
var inst_14315 = (state_14320[(2)]);
var state_14320__$1 = state_14320;
var statearr_14322_14344 = state_14320__$1;
(statearr_14322_14344[(2)] = inst_14315);

(statearr_14322_14344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (1))){
var inst_14297 = null;
var state_14320__$1 = (function (){var statearr_14323 = state_14320;
(statearr_14323[(7)] = inst_14297);

return statearr_14323;
})();
var statearr_14324_14345 = state_14320__$1;
(statearr_14324_14345[(2)] = null);

(statearr_14324_14345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (4))){
var inst_14300 = (state_14320[(8)]);
var inst_14300__$1 = (state_14320[(2)]);
var inst_14301 = (inst_14300__$1 == null);
var inst_14302 = cljs.core.not.call(null,inst_14301);
var state_14320__$1 = (function (){var statearr_14325 = state_14320;
(statearr_14325[(8)] = inst_14300__$1);

return statearr_14325;
})();
if(inst_14302){
var statearr_14326_14346 = state_14320__$1;
(statearr_14326_14346[(1)] = (5));

} else {
var statearr_14327_14347 = state_14320__$1;
(statearr_14327_14347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (6))){
var state_14320__$1 = state_14320;
var statearr_14328_14348 = state_14320__$1;
(statearr_14328_14348[(2)] = null);

(statearr_14328_14348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (3))){
var inst_14317 = (state_14320[(2)]);
var inst_14318 = cljs.core.async.close_BANG_.call(null,out);
var state_14320__$1 = (function (){var statearr_14329 = state_14320;
(statearr_14329[(9)] = inst_14317);

return statearr_14329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14320__$1,inst_14318);
} else {
if((state_val_14321 === (2))){
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14320__$1,(4),ch);
} else {
if((state_val_14321 === (11))){
var inst_14300 = (state_14320[(8)]);
var inst_14309 = (state_14320[(2)]);
var inst_14297 = inst_14300;
var state_14320__$1 = (function (){var statearr_14330 = state_14320;
(statearr_14330[(7)] = inst_14297);

(statearr_14330[(10)] = inst_14309);

return statearr_14330;
})();
var statearr_14331_14349 = state_14320__$1;
(statearr_14331_14349[(2)] = null);

(statearr_14331_14349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (9))){
var inst_14300 = (state_14320[(8)]);
var state_14320__$1 = state_14320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14320__$1,(11),out,inst_14300);
} else {
if((state_val_14321 === (5))){
var inst_14297 = (state_14320[(7)]);
var inst_14300 = (state_14320[(8)]);
var inst_14304 = cljs.core._EQ_.call(null,inst_14300,inst_14297);
var state_14320__$1 = state_14320;
if(inst_14304){
var statearr_14333_14350 = state_14320__$1;
(statearr_14333_14350[(1)] = (8));

} else {
var statearr_14334_14351 = state_14320__$1;
(statearr_14334_14351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (10))){
var inst_14312 = (state_14320[(2)]);
var state_14320__$1 = state_14320;
var statearr_14335_14352 = state_14320__$1;
(statearr_14335_14352[(2)] = inst_14312);

(statearr_14335_14352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14321 === (8))){
var inst_14297 = (state_14320[(7)]);
var tmp14332 = inst_14297;
var inst_14297__$1 = tmp14332;
var state_14320__$1 = (function (){var statearr_14336 = state_14320;
(statearr_14336[(7)] = inst_14297__$1);

return statearr_14336;
})();
var statearr_14337_14353 = state_14320__$1;
(statearr_14337_14353[(2)] = null);

(statearr_14337_14353[(1)] = (2));


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
});})(c__12621__auto___14343,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14343,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14338[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14338[(1)] = (1));

return statearr_14338;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_14320){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14339){if((e14339 instanceof Object)){
var ex__12537__auto__ = e14339;
var statearr_14340_14354 = state_14320;
(statearr_14340_14354[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14355 = state_14320;
state_14320 = G__14355;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_14320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_14320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14343,out))
})();
var state__12623__auto__ = (function (){var statearr_14341 = f__12622__auto__.call(null);
(statearr_14341[(6)] = c__12621__auto___14343);

return statearr_14341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14343,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14357 = arguments.length;
switch (G__14357) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14423,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14423,out){
return (function (state_14395){
var state_val_14396 = (state_14395[(1)]);
if((state_val_14396 === (7))){
var inst_14391 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
var statearr_14397_14424 = state_14395__$1;
(statearr_14397_14424[(2)] = inst_14391);

(statearr_14397_14424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (1))){
var inst_14358 = (new Array(n));
var inst_14359 = inst_14358;
var inst_14360 = (0);
var state_14395__$1 = (function (){var statearr_14398 = state_14395;
(statearr_14398[(7)] = inst_14360);

(statearr_14398[(8)] = inst_14359);

return statearr_14398;
})();
var statearr_14399_14425 = state_14395__$1;
(statearr_14399_14425[(2)] = null);

(statearr_14399_14425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (4))){
var inst_14363 = (state_14395[(9)]);
var inst_14363__$1 = (state_14395[(2)]);
var inst_14364 = (inst_14363__$1 == null);
var inst_14365 = cljs.core.not.call(null,inst_14364);
var state_14395__$1 = (function (){var statearr_14400 = state_14395;
(statearr_14400[(9)] = inst_14363__$1);

return statearr_14400;
})();
if(inst_14365){
var statearr_14401_14426 = state_14395__$1;
(statearr_14401_14426[(1)] = (5));

} else {
var statearr_14402_14427 = state_14395__$1;
(statearr_14402_14427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (15))){
var inst_14385 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
var statearr_14403_14428 = state_14395__$1;
(statearr_14403_14428[(2)] = inst_14385);

(statearr_14403_14428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (13))){
var state_14395__$1 = state_14395;
var statearr_14404_14429 = state_14395__$1;
(statearr_14404_14429[(2)] = null);

(statearr_14404_14429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (6))){
var inst_14360 = (state_14395[(7)]);
var inst_14381 = (inst_14360 > (0));
var state_14395__$1 = state_14395;
if(cljs.core.truth_(inst_14381)){
var statearr_14405_14430 = state_14395__$1;
(statearr_14405_14430[(1)] = (12));

} else {
var statearr_14406_14431 = state_14395__$1;
(statearr_14406_14431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (3))){
var inst_14393 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14395__$1,inst_14393);
} else {
if((state_val_14396 === (12))){
var inst_14359 = (state_14395[(8)]);
var inst_14383 = cljs.core.vec.call(null,inst_14359);
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14395__$1,(15),out,inst_14383);
} else {
if((state_val_14396 === (2))){
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14395__$1,(4),ch);
} else {
if((state_val_14396 === (11))){
var inst_14375 = (state_14395[(2)]);
var inst_14376 = (new Array(n));
var inst_14359 = inst_14376;
var inst_14360 = (0);
var state_14395__$1 = (function (){var statearr_14407 = state_14395;
(statearr_14407[(7)] = inst_14360);

(statearr_14407[(8)] = inst_14359);

(statearr_14407[(10)] = inst_14375);

return statearr_14407;
})();
var statearr_14408_14432 = state_14395__$1;
(statearr_14408_14432[(2)] = null);

(statearr_14408_14432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (9))){
var inst_14359 = (state_14395[(8)]);
var inst_14373 = cljs.core.vec.call(null,inst_14359);
var state_14395__$1 = state_14395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14395__$1,(11),out,inst_14373);
} else {
if((state_val_14396 === (5))){
var inst_14368 = (state_14395[(11)]);
var inst_14360 = (state_14395[(7)]);
var inst_14363 = (state_14395[(9)]);
var inst_14359 = (state_14395[(8)]);
var inst_14367 = (inst_14359[inst_14360] = inst_14363);
var inst_14368__$1 = (inst_14360 + (1));
var inst_14369 = (inst_14368__$1 < n);
var state_14395__$1 = (function (){var statearr_14409 = state_14395;
(statearr_14409[(11)] = inst_14368__$1);

(statearr_14409[(12)] = inst_14367);

return statearr_14409;
})();
if(cljs.core.truth_(inst_14369)){
var statearr_14410_14433 = state_14395__$1;
(statearr_14410_14433[(1)] = (8));

} else {
var statearr_14411_14434 = state_14395__$1;
(statearr_14411_14434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (14))){
var inst_14388 = (state_14395[(2)]);
var inst_14389 = cljs.core.async.close_BANG_.call(null,out);
var state_14395__$1 = (function (){var statearr_14413 = state_14395;
(statearr_14413[(13)] = inst_14388);

return statearr_14413;
})();
var statearr_14414_14435 = state_14395__$1;
(statearr_14414_14435[(2)] = inst_14389);

(statearr_14414_14435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (10))){
var inst_14379 = (state_14395[(2)]);
var state_14395__$1 = state_14395;
var statearr_14415_14436 = state_14395__$1;
(statearr_14415_14436[(2)] = inst_14379);

(statearr_14415_14436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14396 === (8))){
var inst_14368 = (state_14395[(11)]);
var inst_14359 = (state_14395[(8)]);
var tmp14412 = inst_14359;
var inst_14359__$1 = tmp14412;
var inst_14360 = inst_14368;
var state_14395__$1 = (function (){var statearr_14416 = state_14395;
(statearr_14416[(7)] = inst_14360);

(statearr_14416[(8)] = inst_14359__$1);

return statearr_14416;
})();
var statearr_14417_14437 = state_14395__$1;
(statearr_14417_14437[(2)] = null);

(statearr_14417_14437[(1)] = (2));


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
});})(c__12621__auto___14423,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14423,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14418[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14418[(1)] = (1));

return statearr_14418;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_14395){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14419){if((e14419 instanceof Object)){
var ex__12537__auto__ = e14419;
var statearr_14420_14438 = state_14395;
(statearr_14420_14438[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14439 = state_14395;
state_14395 = G__14439;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_14395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_14395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14423,out))
})();
var state__12623__auto__ = (function (){var statearr_14421 = f__12622__auto__.call(null);
(statearr_14421[(6)] = c__12621__auto___14423);

return statearr_14421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14423,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14441 = arguments.length;
switch (G__14441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12621__auto___14511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12621__auto___14511,out){
return (function (){
var f__12622__auto__ = (function (){var switch__12533__auto__ = ((function (c__12621__auto___14511,out){
return (function (state_14483){
var state_val_14484 = (state_14483[(1)]);
if((state_val_14484 === (7))){
var inst_14479 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14485_14512 = state_14483__$1;
(statearr_14485_14512[(2)] = inst_14479);

(statearr_14485_14512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (1))){
var inst_14442 = [];
var inst_14443 = inst_14442;
var inst_14444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14483__$1 = (function (){var statearr_14486 = state_14483;
(statearr_14486[(7)] = inst_14444);

(statearr_14486[(8)] = inst_14443);

return statearr_14486;
})();
var statearr_14487_14513 = state_14483__$1;
(statearr_14487_14513[(2)] = null);

(statearr_14487_14513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (4))){
var inst_14447 = (state_14483[(9)]);
var inst_14447__$1 = (state_14483[(2)]);
var inst_14448 = (inst_14447__$1 == null);
var inst_14449 = cljs.core.not.call(null,inst_14448);
var state_14483__$1 = (function (){var statearr_14488 = state_14483;
(statearr_14488[(9)] = inst_14447__$1);

return statearr_14488;
})();
if(inst_14449){
var statearr_14489_14514 = state_14483__$1;
(statearr_14489_14514[(1)] = (5));

} else {
var statearr_14490_14515 = state_14483__$1;
(statearr_14490_14515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (15))){
var inst_14473 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14491_14516 = state_14483__$1;
(statearr_14491_14516[(2)] = inst_14473);

(statearr_14491_14516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (13))){
var state_14483__$1 = state_14483;
var statearr_14492_14517 = state_14483__$1;
(statearr_14492_14517[(2)] = null);

(statearr_14492_14517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (6))){
var inst_14443 = (state_14483[(8)]);
var inst_14468 = inst_14443.length;
var inst_14469 = (inst_14468 > (0));
var state_14483__$1 = state_14483;
if(cljs.core.truth_(inst_14469)){
var statearr_14493_14518 = state_14483__$1;
(statearr_14493_14518[(1)] = (12));

} else {
var statearr_14494_14519 = state_14483__$1;
(statearr_14494_14519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (3))){
var inst_14481 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14483__$1,inst_14481);
} else {
if((state_val_14484 === (12))){
var inst_14443 = (state_14483[(8)]);
var inst_14471 = cljs.core.vec.call(null,inst_14443);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14483__$1,(15),out,inst_14471);
} else {
if((state_val_14484 === (2))){
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14483__$1,(4),ch);
} else {
if((state_val_14484 === (11))){
var inst_14451 = (state_14483[(10)]);
var inst_14447 = (state_14483[(9)]);
var inst_14461 = (state_14483[(2)]);
var inst_14462 = [];
var inst_14463 = inst_14462.push(inst_14447);
var inst_14443 = inst_14462;
var inst_14444 = inst_14451;
var state_14483__$1 = (function (){var statearr_14495 = state_14483;
(statearr_14495[(11)] = inst_14461);

(statearr_14495[(12)] = inst_14463);

(statearr_14495[(7)] = inst_14444);

(statearr_14495[(8)] = inst_14443);

return statearr_14495;
})();
var statearr_14496_14520 = state_14483__$1;
(statearr_14496_14520[(2)] = null);

(statearr_14496_14520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (9))){
var inst_14443 = (state_14483[(8)]);
var inst_14459 = cljs.core.vec.call(null,inst_14443);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14483__$1,(11),out,inst_14459);
} else {
if((state_val_14484 === (5))){
var inst_14451 = (state_14483[(10)]);
var inst_14447 = (state_14483[(9)]);
var inst_14444 = (state_14483[(7)]);
var inst_14451__$1 = f.call(null,inst_14447);
var inst_14452 = cljs.core._EQ_.call(null,inst_14451__$1,inst_14444);
var inst_14453 = cljs.core.keyword_identical_QMARK_.call(null,inst_14444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14454 = (inst_14452) || (inst_14453);
var state_14483__$1 = (function (){var statearr_14497 = state_14483;
(statearr_14497[(10)] = inst_14451__$1);

return statearr_14497;
})();
if(cljs.core.truth_(inst_14454)){
var statearr_14498_14521 = state_14483__$1;
(statearr_14498_14521[(1)] = (8));

} else {
var statearr_14499_14522 = state_14483__$1;
(statearr_14499_14522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (14))){
var inst_14476 = (state_14483[(2)]);
var inst_14477 = cljs.core.async.close_BANG_.call(null,out);
var state_14483__$1 = (function (){var statearr_14501 = state_14483;
(statearr_14501[(13)] = inst_14476);

return statearr_14501;
})();
var statearr_14502_14523 = state_14483__$1;
(statearr_14502_14523[(2)] = inst_14477);

(statearr_14502_14523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (10))){
var inst_14466 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14503_14524 = state_14483__$1;
(statearr_14503_14524[(2)] = inst_14466);

(statearr_14503_14524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (8))){
var inst_14451 = (state_14483[(10)]);
var inst_14447 = (state_14483[(9)]);
var inst_14443 = (state_14483[(8)]);
var inst_14456 = inst_14443.push(inst_14447);
var tmp14500 = inst_14443;
var inst_14443__$1 = tmp14500;
var inst_14444 = inst_14451;
var state_14483__$1 = (function (){var statearr_14504 = state_14483;
(statearr_14504[(14)] = inst_14456);

(statearr_14504[(7)] = inst_14444);

(statearr_14504[(8)] = inst_14443__$1);

return statearr_14504;
})();
var statearr_14505_14525 = state_14483__$1;
(statearr_14505_14525[(2)] = null);

(statearr_14505_14525[(1)] = (2));


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
});})(c__12621__auto___14511,out))
;
return ((function (switch__12533__auto__,c__12621__auto___14511,out){
return (function() {
var cljs$core$async$state_machine__12534__auto__ = null;
var cljs$core$async$state_machine__12534__auto____0 = (function (){
var statearr_14506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14506[(0)] = cljs$core$async$state_machine__12534__auto__);

(statearr_14506[(1)] = (1));

return statearr_14506;
});
var cljs$core$async$state_machine__12534__auto____1 = (function (state_14483){
while(true){
var ret_value__12535__auto__ = (function (){try{while(true){
var result__12536__auto__ = switch__12533__auto__.call(null,state_14483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12536__auto__;
}
break;
}
}catch (e14507){if((e14507 instanceof Object)){
var ex__12537__auto__ = e14507;
var statearr_14508_14526 = state_14483;
(statearr_14508_14526[(5)] = ex__12537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14527 = state_14483;
state_14483 = G__14527;
continue;
} else {
return ret_value__12535__auto__;
}
break;
}
});
cljs$core$async$state_machine__12534__auto__ = function(state_14483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12534__auto____1.call(this,state_14483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12534__auto____0;
cljs$core$async$state_machine__12534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12534__auto____1;
return cljs$core$async$state_machine__12534__auto__;
})()
;})(switch__12533__auto__,c__12621__auto___14511,out))
})();
var state__12623__auto__ = (function (){var statearr_14509 = f__12622__auto__.call(null);
(statearr_14509[(6)] = c__12621__auto___14511);

return statearr_14509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12623__auto__);
});})(c__12621__auto___14511,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
