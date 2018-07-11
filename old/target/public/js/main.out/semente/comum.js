// Compiled by ClojureScript 1.9.946 {}
goog.provide('semente.comum');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('semente.style_constants');
semente.comum.icono_social = rum.core.build_defc.call(null,(function (url,path){
return React.createElement("a",({"href": url, "className": "social"}),React.createElement("svg",({"viewBox": "0 0 24 24", "className": "socialsvg"}),React.createElement("path",({"fill": semente.style_constants.azul_semente, "d": path, "className": "socialpath"}))));
}),null,"icono-social");
semente.comum.cabecalho = rum.core.build_defc.call(null,(function (){
return React.createElement("header",null,React.createElement("img",({"id": "logo-semente", "src": "/img/logo-nacional.svg"})),React.createElement("div",({"id": "pai-iconos-e-procura"}),React.createElement("form",({"id": "caixa-procura-form", "onSubmit": (function() { 
var G__35814__delegate = function (_){
return false;
};
var G__35814 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__35815__i = 0, G__35815__a = new Array(arguments.length -  0);
while (G__35815__i < G__35815__a.length) {G__35815__a[G__35815__i] = arguments[G__35815__i + 0]; ++G__35815__i;}
  _ = new cljs.core.IndexedSeq(G__35815__a,0,null);
} 
return G__35814__delegate.call(this,_);};
G__35814.cljs$lang$maxFixedArity = 0;
G__35814.cljs$lang$applyTo = (function (arglist__35816){
var _ = cljs.core.seq(arglist__35816);
return G__35814__delegate(_);
});
G__35814.cljs$core$IFn$_invoke$arity$variadic = G__35814__delegate;
return G__35814;
})()
}),React.createElement("div",({"id": "caixa-procura-div"}),sablono.interpreter.create_element.call(null,"input",({"id": "caixa-procura-input", "type": "search"})),React.createElement("button",({"id": "botom-procura", "type": "submit"}),React.createElement("svg",({"id": "icono-procura", "viewBox": "0 0 40 40", "width": (14), "height": (14)}),React.createElement("path",({"fill": semente.style_constants.azul_semente, "fillRule": "evenodd", "d": semente.style_constants.search_icon_path})))))),sablono.interpreter.interpret.call(null,semente.comum.icono_social.call(null,"#twitter",semente.style_constants.twitter_path)),sablono.interpreter.interpret.call(null,semente.comum.icono_social.call(null,"#facebook",semente.style_constants.facebook_path)),sablono.interpreter.interpret.call(null,semente.comum.icono_social.call(null,"#youtube",semente.style_constants.youtube_path))));
}),null,"cabecalho");
semente.comum.item_nav = (function semente$comum$item_nav(escolhido,ligacom,texto){
if(cljs.core._EQ_.call(null,escolhido,ligacom)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navitem.ondetou","div.navitem.ondetou",-1935792110),texto], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navitem","a.navitem",-2062604529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),ligacom], null),texto], null);
}
});
semente.comum.navegacom = rum.core.build_defc.call(null,(function (escolhido){
return React.createElement("nav",null,(function (){var attrs35817 = semente.comum.item_nav.call(null,escolhido,"/nacional/quem-somos","quem somos");
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35817))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"fondo-navegacom"], null),attrs35817)):({"id": "fondo-navegacom"})),((cljs.core.map_QMARK_.call(null,attrs35817))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/principios","principios")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/recursos","recursos")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/contacto","contacto")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/associa-te","associa-te"))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35817),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/principios","principios")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/recursos","recursos")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/contacto","contacto")),sablono.interpreter.interpret.call(null,semente.comum.item_nav.call(null,escolhido,"/nacional/associa-te","associa-te"))], null)));
})());
}),null,"navegacom");
semente.comum.pe = rum.core.build_defc.call(null,(function (){
return React.createElement("footer",({"style": ({"clear": "both"})}),React.createElement("div",({"className": "barra"}),React.createElement("img",({"src": "/img/ramalho.svg"}))),React.createElement("div",({"id": "contedor-texto-pe"}),React.createElement("div",null,"Hosting por ",React.createElement("a",({"href": "https://www.dinahosting.com"}),"Dinahosting"))));
}),null,"pe");
semente.comum.pagina = rum.core.build_defc.call(null,(function (path,corpo){
return React.createElement("div",({"id": "fondo"}),(function (){var attrs35820 = semente.comum.cabecalho.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35820))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"caixa-central"], null),attrs35820)):({"id": "caixa-central"})),((cljs.core.map_QMARK_.call(null,attrs35820))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,semente.comum.navegacom.call(null,path)),(function (){var attrs35821 = corpo;
return cljs.core.apply.call(null,React.createElement,"main",((cljs.core.map_QMARK_.call(null,attrs35821))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"paddings-corpo"], null),attrs35821)):({"id": "paddings-corpo"})),((cljs.core.map_QMARK_.call(null,attrs35821))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35821)], null)));
})(),sablono.interpreter.interpret.call(null,semente.comum.pe.call(null))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35820),sablono.interpreter.interpret.call(null,semente.comum.navegacom.call(null,path)),(function (){var attrs35822 = corpo;
return cljs.core.apply.call(null,React.createElement,"main",((cljs.core.map_QMARK_.call(null,attrs35822))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"paddings-corpo"], null),attrs35822)):({"id": "paddings-corpo"})),((cljs.core.map_QMARK_.call(null,attrs35822))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35822)], null)));
})(),sablono.interpreter.interpret.call(null,semente.comum.pe.call(null))], null)));
})());
}),null,"pagina");

//# sourceMappingURL=comum.js.map
