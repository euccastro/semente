// Compiled by ClojureScript 1.9.946 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9622_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9622_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9623 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9624 = null;
var count__9625 = (0);
var i__9626 = (0);
while(true){
if((i__9626 < count__9625)){
var s = cljs.core._nth.call(null,chunk__9624,i__9626);
var temp__4657__auto___9627 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9627)){
var sheet_9628 = temp__4657__auto___9627;
var temp__4657__auto___9629__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9628.href,changed);
if(cljs.core.truth_(temp__4657__auto___9629__$1)){
var href_uri_9630 = temp__4657__auto___9629__$1;
sheet_9628.ownerNode.href = href_uri_9630.makeUnique().toString();
} else {
}
} else {
}

var G__9631 = seq__9623;
var G__9632 = chunk__9624;
var G__9633 = count__9625;
var G__9634 = (i__9626 + (1));
seq__9623 = G__9631;
chunk__9624 = G__9632;
count__9625 = G__9633;
i__9626 = G__9634;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9623);
if(temp__4657__auto__){
var seq__9623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9623__$1)){
var c__8816__auto__ = cljs.core.chunk_first.call(null,seq__9623__$1);
var G__9635 = cljs.core.chunk_rest.call(null,seq__9623__$1);
var G__9636 = c__8816__auto__;
var G__9637 = cljs.core.count.call(null,c__8816__auto__);
var G__9638 = (0);
seq__9623 = G__9635;
chunk__9624 = G__9636;
count__9625 = G__9637;
i__9626 = G__9638;
continue;
} else {
var s = cljs.core.first.call(null,seq__9623__$1);
var temp__4657__auto___9639__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9639__$1)){
var sheet_9640 = temp__4657__auto___9639__$1;
var temp__4657__auto___9641__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9640.href,changed);
if(cljs.core.truth_(temp__4657__auto___9641__$2)){
var href_uri_9642 = temp__4657__auto___9641__$2;
sheet_9640.ownerNode.href = href_uri_9642.makeUnique().toString();
} else {
}
} else {
}

var G__9643 = cljs.core.next.call(null,seq__9623__$1);
var G__9644 = null;
var G__9645 = (0);
var G__9646 = (0);
seq__9623 = G__9643;
chunk__9624 = G__9644;
count__9625 = G__9645;
i__9626 = G__9646;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9647 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9648 = null;
var count__9649 = (0);
var i__9650 = (0);
while(true){
if((i__9650 < count__9649)){
var s = cljs.core._nth.call(null,chunk__9648,i__9650);
var temp__4657__auto___9651 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9651)){
var image_9652 = temp__4657__auto___9651;
var temp__4657__auto___9653__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9652.src,changed);
if(cljs.core.truth_(temp__4657__auto___9653__$1)){
var href_uri_9654 = temp__4657__auto___9653__$1;
image_9652.src = href_uri_9654.makeUnique().toString();
} else {
}
} else {
}

var G__9655 = seq__9647;
var G__9656 = chunk__9648;
var G__9657 = count__9649;
var G__9658 = (i__9650 + (1));
seq__9647 = G__9655;
chunk__9648 = G__9656;
count__9649 = G__9657;
i__9650 = G__9658;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9647);
if(temp__4657__auto__){
var seq__9647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9647__$1)){
var c__8816__auto__ = cljs.core.chunk_first.call(null,seq__9647__$1);
var G__9659 = cljs.core.chunk_rest.call(null,seq__9647__$1);
var G__9660 = c__8816__auto__;
var G__9661 = cljs.core.count.call(null,c__8816__auto__);
var G__9662 = (0);
seq__9647 = G__9659;
chunk__9648 = G__9660;
count__9649 = G__9661;
i__9650 = G__9662;
continue;
} else {
var s = cljs.core.first.call(null,seq__9647__$1);
var temp__4657__auto___9663__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9663__$1)){
var image_9664 = temp__4657__auto___9663__$1;
var temp__4657__auto___9665__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9664.src,changed);
if(cljs.core.truth_(temp__4657__auto___9665__$2)){
var href_uri_9666 = temp__4657__auto___9665__$2;
image_9664.src = href_uri_9666.makeUnique().toString();
} else {
}
} else {
}

var G__9667 = cljs.core.next.call(null,seq__9647__$1);
var G__9668 = null;
var G__9669 = (0);
var G__9670 = (0);
seq__9647 = G__9667;
chunk__9648 = G__9668;
count__9649 = G__9669;
i__9650 = G__9670;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__9671_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__9671_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9674){
var map__9675 = p__9674;
var map__9675__$1 = ((((!((map__9675 == null)))?((((map__9675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9675):map__9675);
var on_jsload = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9675,map__9675__$1,on_jsload){
return (function (p1__9672_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9672_SHARP_,".js");
});})(map__9675,map__9675__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__9675,map__9675__$1,on_jsload){
return (function (p1__9673_SHARP_){
return goog.Uri.parse(p1__9673_SHARP_).makeUnique();
});})(js_files,map__9675,map__9675__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__9675,map__9675__$1,on_jsload){
return (function() { 
var G__9677__delegate = function (_){
return on_jsload.call(null);
};
var G__9677 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9678__i = 0, G__9678__a = new Array(arguments.length -  0);
while (G__9678__i < G__9678__a.length) {G__9678__a[G__9678__i] = arguments[G__9678__i + 0]; ++G__9678__i;}
  _ = new cljs.core.IndexedSeq(G__9678__a,0,null);
} 
return G__9677__delegate.call(this,_);};
G__9677.cljs$lang$maxFixedArity = 0;
G__9677.cljs$lang$applyTo = (function (arglist__9679){
var _ = cljs.core.seq(arglist__9679);
return G__9677__delegate(_);
});
G__9677.cljs$core$IFn$_invoke$arity$variadic = G__9677__delegate;
return G__9677;
})()
;})(js_files,map__9675,map__9675__$1,on_jsload))
,((function (js_files,map__9675,map__9675__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9675,map__9675__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9680_9684 = cljs.core.seq.call(null,things_to_log);
var chunk__9681_9685 = null;
var count__9682_9686 = (0);
var i__9683_9687 = (0);
while(true){
if((i__9683_9687 < count__9682_9686)){
var t_9688 = cljs.core._nth.call(null,chunk__9681_9685,i__9683_9687);
console.log(t_9688);

var G__9689 = seq__9680_9684;
var G__9690 = chunk__9681_9685;
var G__9691 = count__9682_9686;
var G__9692 = (i__9683_9687 + (1));
seq__9680_9684 = G__9689;
chunk__9681_9685 = G__9690;
count__9682_9686 = G__9691;
i__9683_9687 = G__9692;
continue;
} else {
var temp__4657__auto___9693 = cljs.core.seq.call(null,seq__9680_9684);
if(temp__4657__auto___9693){
var seq__9680_9694__$1 = temp__4657__auto___9693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9680_9694__$1)){
var c__8816__auto___9695 = cljs.core.chunk_first.call(null,seq__9680_9694__$1);
var G__9696 = cljs.core.chunk_rest.call(null,seq__9680_9694__$1);
var G__9697 = c__8816__auto___9695;
var G__9698 = cljs.core.count.call(null,c__8816__auto___9695);
var G__9699 = (0);
seq__9680_9684 = G__9696;
chunk__9681_9685 = G__9697;
count__9682_9686 = G__9698;
i__9683_9687 = G__9699;
continue;
} else {
var t_9700 = cljs.core.first.call(null,seq__9680_9694__$1);
console.log(t_9700);

var G__9701 = cljs.core.next.call(null,seq__9680_9694__$1);
var G__9702 = null;
var G__9703 = (0);
var G__9704 = (0);
seq__9680_9684 = G__9701;
chunk__9681_9685 = G__9702;
count__9682_9686 = G__9703;
i__9683_9687 = G__9704;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9705_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9705_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9706){
var map__9707 = p__9706;
var map__9707__$1 = ((((!((map__9707 == null)))?((((map__9707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9707):map__9707);
var canonical_path = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9709 = window;
var G__9709__$1 = (((G__9709 == null))?null:G__9709.location);
if((G__9709__$1 == null)){
return null;
} else {
return G__9709__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9710 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9710);

adzerk.boot_reload.reload.reload_css.call(null,G__9710);

adzerk.boot_reload.reload.reload_img.call(null,G__9710);

return G__9710;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
