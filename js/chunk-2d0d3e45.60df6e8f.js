(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3e45"],{"5f64":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-popover",{attrs:{trigger:"contextmenu",placement:t.position},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("span",[t._v(t._s(t.title))]),n("span",{staticStyle:{float:"right"},attrs:{title:"关闭"}},[n("a-icon",{attrs:{type:"close"},on:{click:function(e){t.visible=!1}}})],1)]),n("a-input",{attrs:{value:t.inputContent},on:{change:t.handleInputChange}},[n("a-icon",{attrs:{slot:"suffix",type:"fullscreen"},on:{click:function(e){return e.stopPropagation(),t.pop.apply(null,arguments)}},slot:"suffix"})],1),n("div",{attrs:{slot:"content"},slot:"content"},[n("textarea",{style:{height:t.height+"px",width:t.width+"px"},domProps:{value:t.inputContent},on:{input:t.handleInputChange}})])],1)},o=[],a={name:"JInputPop",props:{title:{type:String,default:"",required:!1},position:{type:String,default:"right",required:!1},height:{type:Number,default:200,required:!1},width:{type:Number,default:150,required:!1},value:{type:String,required:!1},popContainer:{type:String,default:"",required:!1}},data:function(){return{visible:!1,inputContent:""}},watch:{value:{immediate:!0,handler:function(){this.value&&this.value.length>0&&(this.inputContent=this.value)}}},model:{prop:"value",event:"change"},methods:{handleInputChange:function(t){this.inputContent=t.target.value,this.$emit("change",this.inputContent)},pop:function(){this.visible=!0},getPopupContainer:function(t){return this.popContainer?document.getElementById(this.popContainer):t.parentNode}}},u=a,l=n("2877"),p=Object(l["a"])(u,i,o,!1,null,"74157401",null);e["default"]=p.exports}}]);