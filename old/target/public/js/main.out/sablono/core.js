// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__10599__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10596 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10597 = cljs.core.seq.call(null,vec__10596);
var first__10598 = cljs.core.first.call(null,seq__10597);
var seq__10597__$1 = cljs.core.next.call(null,seq__10597);
var tag = first__10598;
var body = seq__10597__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10600__i = 0, G__10600__a = new Array(arguments.length -  0);
while (G__10600__i < G__10600__a.length) {G__10600__a[G__10600__i] = arguments[G__10600__i + 0]; ++G__10600__i;}
  args = new cljs.core.IndexedSeq(G__10600__a,0,null);
} 
return G__10599__delegate.call(this,args);};
G__10599.cljs$lang$maxFixedArity = 0;
G__10599.cljs$lang$applyTo = (function (arglist__10601){
var args = cljs.core.seq(arglist__10601);
return G__10599__delegate(args);
});
G__10599.cljs$core$IFn$_invoke$arity$variadic = G__10599__delegate;
return G__10599;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__8785__auto__ = (function sablono$core$update_arglists_$_iter__10602(s__10603){
return (new cljs.core.LazySeq(null,(function (){
var s__10603__$1 = s__10603;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10603__$1);
if(temp__4657__auto__){
var s__10603__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10603__$2)){
var c__8783__auto__ = cljs.core.chunk_first.call(null,s__10603__$2);
var size__8784__auto__ = cljs.core.count.call(null,c__8783__auto__);
var b__10605 = cljs.core.chunk_buffer.call(null,size__8784__auto__);
if((function (){var i__10604 = (0);
while(true){
if((i__10604 < size__8784__auto__)){
var args = cljs.core._nth.call(null,c__8783__auto__,i__10604);
cljs.core.chunk_append.call(null,b__10605,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10606 = (i__10604 + (1));
i__10604 = G__10606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10605),sablono$core$update_arglists_$_iter__10602.call(null,cljs.core.chunk_rest.call(null,s__10603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10605),null);
}
} else {
var args = cljs.core.first.call(null,s__10603__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10602.call(null,cljs.core.rest.call(null,s__10603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8785__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__9155__auto__ = [];
var len__9148__auto___10612 = arguments.length;
var i__9149__auto___10613 = (0);
while(true){
if((i__9149__auto___10613 < len__9148__auto___10612)){
args__9155__auto__.push((arguments[i__9149__auto___10613]));

var G__10614 = (i__9149__auto___10613 + (1));
i__9149__auto___10613 = G__10614;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((0) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__9156__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__8785__auto__ = (function sablono$core$iter__10608(s__10609){
return (new cljs.core.LazySeq(null,(function (){
var s__10609__$1 = s__10609;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10609__$1);
if(temp__4657__auto__){
var s__10609__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10609__$2)){
var c__8783__auto__ = cljs.core.chunk_first.call(null,s__10609__$2);
var size__8784__auto__ = cljs.core.count.call(null,c__8783__auto__);
var b__10611 = cljs.core.chunk_buffer.call(null,size__8784__auto__);
if((function (){var i__10610 = (0);
while(true){
if((i__10610 < size__8784__auto__)){
var style = cljs.core._nth.call(null,c__8783__auto__,i__10610);
cljs.core.chunk_append.call(null,b__10611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10615 = (i__10610 + (1));
i__10610 = G__10615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10611),sablono$core$iter__10608.call(null,cljs.core.chunk_rest.call(null,s__10609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10611),null);
}
} else {
var style = cljs.core.first.call(null,s__10609__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10608.call(null,cljs.core.rest.call(null,s__10609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8785__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq10607){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10607));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to10616 = (function sablono$core$link_to10616(var_args){
var args__9155__auto__ = [];
var len__9148__auto___10619 = arguments.length;
var i__9149__auto___10620 = (0);
while(true){
if((i__9149__auto___10620 < len__9148__auto___10619)){
args__9155__auto__.push((arguments[i__9149__auto___10620]));

var G__10621 = (i__9149__auto___10620 + (1));
i__9149__auto___10620 = G__10621;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10616.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

sablono.core.link_to10616.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to10616.cljs$lang$maxFixedArity = (1);

sablono.core.link_to10616.cljs$lang$applyTo = (function (seq10617){
var G__10618 = cljs.core.first.call(null,seq10617);
var seq10617__$1 = cljs.core.next.call(null,seq10617);
return sablono.core.link_to10616.cljs$core$IFn$_invoke$arity$variadic(G__10618,seq10617__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10616);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10622 = (function sablono$core$mail_to10622(var_args){
var args__9155__auto__ = [];
var len__9148__auto___10629 = arguments.length;
var i__9149__auto___10630 = (0);
while(true){
if((i__9149__auto___10630 < len__9148__auto___10629)){
args__9155__auto__.push((arguments[i__9149__auto___10630]));

var G__10631 = (i__9149__auto___10630 + (1));
i__9149__auto___10630 = G__10631;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10622.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

sablono.core.mail_to10622.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10625){
var vec__10626 = p__10625;
var content = cljs.core.nth.call(null,vec__10626,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7977__auto__ = content;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to10622.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to10622.cljs$lang$applyTo = (function (seq10623){
var G__10624 = cljs.core.first.call(null,seq10623);
var seq10623__$1 = cljs.core.next.call(null,seq10623);
return sablono.core.mail_to10622.cljs$core$IFn$_invoke$arity$variadic(G__10624,seq10623__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10622);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10632 = (function sablono$core$unordered_list10632(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__8785__auto__ = (function sablono$core$unordered_list10632_$_iter__10633(s__10634){
return (new cljs.core.LazySeq(null,(function (){
var s__10634__$1 = s__10634;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10634__$1);
if(temp__4657__auto__){
var s__10634__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10634__$2)){
var c__8783__auto__ = cljs.core.chunk_first.call(null,s__10634__$2);
var size__8784__auto__ = cljs.core.count.call(null,c__8783__auto__);
var b__10636 = cljs.core.chunk_buffer.call(null,size__8784__auto__);
if((function (){var i__10635 = (0);
while(true){
if((i__10635 < size__8784__auto__)){
var x = cljs.core._nth.call(null,c__8783__auto__,i__10635);
cljs.core.chunk_append.call(null,b__10636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10637 = (i__10635 + (1));
i__10635 = G__10637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10636),sablono$core$unordered_list10632_$_iter__10633.call(null,cljs.core.chunk_rest.call(null,s__10634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10636),null);
}
} else {
var x = cljs.core.first.call(null,s__10634__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10632_$_iter__10633.call(null,cljs.core.rest.call(null,s__10634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8785__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10632);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10638 = (function sablono$core$ordered_list10638(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__8785__auto__ = (function sablono$core$ordered_list10638_$_iter__10639(s__10640){
return (new cljs.core.LazySeq(null,(function (){
var s__10640__$1 = s__10640;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10640__$1);
if(temp__4657__auto__){
var s__10640__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10640__$2)){
var c__8783__auto__ = cljs.core.chunk_first.call(null,s__10640__$2);
var size__8784__auto__ = cljs.core.count.call(null,c__8783__auto__);
var b__10642 = cljs.core.chunk_buffer.call(null,size__8784__auto__);
if((function (){var i__10641 = (0);
while(true){
if((i__10641 < size__8784__auto__)){
var x = cljs.core._nth.call(null,c__8783__auto__,i__10641);
cljs.core.chunk_append.call(null,b__10642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10643 = (i__10641 + (1));
i__10641 = G__10643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10642),sablono$core$ordered_list10638_$_iter__10639.call(null,cljs.core.chunk_rest.call(null,s__10640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10642),null);
}
} else {
var x = cljs.core.first.call(null,s__10640__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10638_$_iter__10639.call(null,cljs.core.rest.call(null,s__10640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8785__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10638);
/**
 * Create an image element.
 */
sablono.core.image10644 = (function sablono$core$image10644(var_args){
var G__10646 = arguments.length;
switch (G__10646) {
case 1:
return sablono.core.image10644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image10644.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image10644.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image10644.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10644);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10648_SHARP_,p2__10649_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10648_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10649_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10650_SHARP_,p2__10651_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10650_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10651_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7977__auto__ = value;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field10652 = (function sablono$core$color_field10652(var_args){
var G__10654 = arguments.length;
switch (G__10654) {
case 1:
return sablono.core.color_field10652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field10652.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.color_field10652.call(null,name__10586__auto__,null);
});

sablono.core.color_field10652.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.color_field10652.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10652);

/**
 * Creates a date input field.
 */
sablono.core.date_field10655 = (function sablono$core$date_field10655(var_args){
var G__10657 = arguments.length;
switch (G__10657) {
case 1:
return sablono.core.date_field10655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field10655.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.date_field10655.call(null,name__10586__auto__,null);
});

sablono.core.date_field10655.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.date_field10655.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10655);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10658 = (function sablono$core$datetime_field10658(var_args){
var G__10660 = arguments.length;
switch (G__10660) {
case 1:
return sablono.core.datetime_field10658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field10658.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.datetime_field10658.call(null,name__10586__auto__,null);
});

sablono.core.datetime_field10658.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.datetime_field10658.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10658);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10661 = (function sablono$core$datetime_local_field10661(var_args){
var G__10663 = arguments.length;
switch (G__10663) {
case 1:
return sablono.core.datetime_local_field10661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field10661.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.datetime_local_field10661.call(null,name__10586__auto__,null);
});

sablono.core.datetime_local_field10661.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.datetime_local_field10661.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10661);

/**
 * Creates a email input field.
 */
sablono.core.email_field10664 = (function sablono$core$email_field10664(var_args){
var G__10666 = arguments.length;
switch (G__10666) {
case 1:
return sablono.core.email_field10664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field10664.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.email_field10664.call(null,name__10586__auto__,null);
});

sablono.core.email_field10664.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.email_field10664.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10664);

/**
 * Creates a file input field.
 */
sablono.core.file_field10667 = (function sablono$core$file_field10667(var_args){
var G__10669 = arguments.length;
switch (G__10669) {
case 1:
return sablono.core.file_field10667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field10667.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.file_field10667.call(null,name__10586__auto__,null);
});

sablono.core.file_field10667.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.file_field10667.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10667);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10670 = (function sablono$core$hidden_field10670(var_args){
var G__10672 = arguments.length;
switch (G__10672) {
case 1:
return sablono.core.hidden_field10670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field10670.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.hidden_field10670.call(null,name__10586__auto__,null);
});

sablono.core.hidden_field10670.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.hidden_field10670.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10670);

/**
 * Creates a month input field.
 */
sablono.core.month_field10673 = (function sablono$core$month_field10673(var_args){
var G__10675 = arguments.length;
switch (G__10675) {
case 1:
return sablono.core.month_field10673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field10673.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.month_field10673.call(null,name__10586__auto__,null);
});

sablono.core.month_field10673.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.month_field10673.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10673);

/**
 * Creates a number input field.
 */
sablono.core.number_field10676 = (function sablono$core$number_field10676(var_args){
var G__10678 = arguments.length;
switch (G__10678) {
case 1:
return sablono.core.number_field10676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field10676.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.number_field10676.call(null,name__10586__auto__,null);
});

sablono.core.number_field10676.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.number_field10676.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10676);

/**
 * Creates a password input field.
 */
sablono.core.password_field10679 = (function sablono$core$password_field10679(var_args){
var G__10681 = arguments.length;
switch (G__10681) {
case 1:
return sablono.core.password_field10679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field10679.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.password_field10679.call(null,name__10586__auto__,null);
});

sablono.core.password_field10679.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.password_field10679.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10679);

/**
 * Creates a range input field.
 */
sablono.core.range_field10682 = (function sablono$core$range_field10682(var_args){
var G__10684 = arguments.length;
switch (G__10684) {
case 1:
return sablono.core.range_field10682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field10682.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.range_field10682.call(null,name__10586__auto__,null);
});

sablono.core.range_field10682.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.range_field10682.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10682);

/**
 * Creates a search input field.
 */
sablono.core.search_field10685 = (function sablono$core$search_field10685(var_args){
var G__10687 = arguments.length;
switch (G__10687) {
case 1:
return sablono.core.search_field10685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field10685.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.search_field10685.call(null,name__10586__auto__,null);
});

sablono.core.search_field10685.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.search_field10685.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10685);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10688 = (function sablono$core$tel_field10688(var_args){
var G__10690 = arguments.length;
switch (G__10690) {
case 1:
return sablono.core.tel_field10688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field10688.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.tel_field10688.call(null,name__10586__auto__,null);
});

sablono.core.tel_field10688.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.tel_field10688.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10688);

/**
 * Creates a text input field.
 */
sablono.core.text_field10691 = (function sablono$core$text_field10691(var_args){
var G__10693 = arguments.length;
switch (G__10693) {
case 1:
return sablono.core.text_field10691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field10691.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.text_field10691.call(null,name__10586__auto__,null);
});

sablono.core.text_field10691.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.text_field10691.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10691);

/**
 * Creates a time input field.
 */
sablono.core.time_field10694 = (function sablono$core$time_field10694(var_args){
var G__10696 = arguments.length;
switch (G__10696) {
case 1:
return sablono.core.time_field10694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field10694.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.time_field10694.call(null,name__10586__auto__,null);
});

sablono.core.time_field10694.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.time_field10694.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10694);

/**
 * Creates a url input field.
 */
sablono.core.url_field10697 = (function sablono$core$url_field10697(var_args){
var G__10699 = arguments.length;
switch (G__10699) {
case 1:
return sablono.core.url_field10697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field10697.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.url_field10697.call(null,name__10586__auto__,null);
});

sablono.core.url_field10697.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.url_field10697.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10697);

/**
 * Creates a week input field.
 */
sablono.core.week_field10700 = (function sablono$core$week_field10700(var_args){
var G__10702 = arguments.length;
switch (G__10702) {
case 1:
return sablono.core.week_field10700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field10700.cljs$core$IFn$_invoke$arity$1 = (function (name__10586__auto__){
return sablono.core.week_field10700.call(null,name__10586__auto__,null);
});

sablono.core.week_field10700.cljs$core$IFn$_invoke$arity$2 = (function (name__10586__auto__,value__10587__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10586__auto__,value__10587__auto__);
});

sablono.core.week_field10700.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10700);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10720 = (function sablono$core$check_box10720(var_args){
var G__10722 = arguments.length;
switch (G__10722) {
case 1:
return sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box10720.call(null,name,null);
});

sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box10720.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box10720.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7977__auto__ = value;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box10720.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10720);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10724 = (function sablono$core$radio_button10724(var_args){
var G__10726 = arguments.length;
switch (G__10726) {
case 1:
return sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button10724.call(null,group,null);
});

sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button10724.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button10724.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7977__auto__ = value;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button10724.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10724);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10728 = (function sablono$core$select_options10728(coll){
var iter__8785__auto__ = (function sablono$core$select_options10728_$_iter__10729(s__10730){
return (new cljs.core.LazySeq(null,(function (){
var s__10730__$1 = s__10730;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10730__$1);
if(temp__4657__auto__){
var s__10730__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10730__$2)){
var c__8783__auto__ = cljs.core.chunk_first.call(null,s__10730__$2);
var size__8784__auto__ = cljs.core.count.call(null,c__8783__auto__);
var b__10732 = cljs.core.chunk_buffer.call(null,size__8784__auto__);
if((function (){var i__10731 = (0);
while(true){
if((i__10731 < size__8784__auto__)){
var x = cljs.core._nth.call(null,c__8783__auto__,i__10731);
cljs.core.chunk_append.call(null,b__10732,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10733 = x;
var text = cljs.core.nth.call(null,vec__10733,(0),null);
var val = cljs.core.nth.call(null,vec__10733,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10733,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10728.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10739 = (i__10731 + (1));
i__10731 = G__10739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10732),sablono$core$select_options10728_$_iter__10729.call(null,cljs.core.chunk_rest.call(null,s__10730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10732),null);
}
} else {
var x = cljs.core.first.call(null,s__10730__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10736 = x;
var text = cljs.core.nth.call(null,vec__10736,(0),null);
var val = cljs.core.nth.call(null,vec__10736,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10736,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10728.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10728_$_iter__10729.call(null,cljs.core.rest.call(null,s__10730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8785__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10728);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10740 = (function sablono$core$drop_down10740(var_args){
var G__10742 = arguments.length;
switch (G__10742) {
case 2:
return sablono.core.drop_down10740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10740.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down10740.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10740.call(null,name,options,null);
});

sablono.core.drop_down10740.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down10740.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10740);
/**
 * Creates a text area element.
 */
sablono.core.text_area10744 = (function sablono$core$text_area10744(var_args){
var G__10746 = arguments.length;
switch (G__10746) {
case 1:
return sablono.core.text_area10744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area10744.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area10744.call(null,name,null);
});

sablono.core.text_area10744.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__7977__auto__ = value;
if(cljs.core.truth_(or__7977__auto__)){
return or__7977__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area10744.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10744);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10748 = (function sablono$core$label10748(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10748);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10749 = (function sablono$core$submit_button10749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10749);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10750 = (function sablono$core$reset_button10750(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10750);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10751 = (function sablono$core$form_to10751(var_args){
var args__9155__auto__ = [];
var len__9148__auto___10758 = arguments.length;
var i__9149__auto___10759 = (0);
while(true){
if((i__9149__auto___10759 < len__9148__auto___10758)){
args__9155__auto__.push((arguments[i__9149__auto___10759]));

var G__10760 = (i__9149__auto___10759 + (1));
i__9149__auto___10759 = G__10760;
continue;
} else {
}
break;
}

var argseq__9156__auto__ = ((((1) < args__9155__auto__.length))?(new cljs.core.IndexedSeq(args__9155__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10751.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9156__auto__);
});

sablono.core.form_to10751.cljs$core$IFn$_invoke$arity$variadic = (function (p__10754,body){
var vec__10755 = p__10754;
var method = cljs.core.nth.call(null,vec__10755,(0),null);
var action = cljs.core.nth.call(null,vec__10755,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to10751.cljs$lang$maxFixedArity = (1);

sablono.core.form_to10751.cljs$lang$applyTo = (function (seq10752){
var G__10753 = cljs.core.first.call(null,seq10752);
var seq10752__$1 = cljs.core.next.call(null,seq10752);
return sablono.core.form_to10751.cljs$core$IFn$_invoke$arity$variadic(G__10753,seq10752__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10751);

//# sourceMappingURL=core.js.map
