(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22613d"],{e6b8:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("iframe",{attrs:{id:t.id,src:t.url,frameborder:"0",width:"100%",height:"800px",scrolling:"auto"}})},i=[],o=r("2b0e"),u=r("9fb0"),a=(r("b445"),r("501f"),{name:"IframePageContent",inject:["closeCurrent"],data:function(){return{url:"",id:""}},created:function(){this.goUrl()},updated:function(){this.goUrl()},watch:{$route:function(t,e){this.goUrl()}},methods:{goUrl:function(){var t=this.$route.meta.url,e=this.$route.path;if(this.id=e,null!==t&&void 0!==t){var r=o["a"].ls.get(u["a"]);this.url=t+"?token="+r}}}}),l=a,s=r("2877"),c=Object(s["a"])(l,n,i,!1,null,null,null);e["default"]=c.exports}}]);