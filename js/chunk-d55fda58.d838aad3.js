(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55fda58","chunk-2d221f48"],{"0673":function(t,s,c){"use strict";c.r(s);var e=function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"exception"},[c("div",{staticClass:"img"},[c("img",{attrs:{src:t.config[t.type].img}})]),c("div",{staticClass:"content"},[c("h1",[t._v(t._s(t.config[t.type].title))]),c("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),c("div",{staticClass:"action"},[c("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},i=[],a=c("cd0a"),o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:a["default"]}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},n=o,r=(c("ccc4"),c("2877")),d=Object(r["a"])(n,e,i,!1,null,"6d5e2f4a",null);s["default"]=d.exports},"89ec":function(t,s,c){},ccc4:function(t,s,c){"use strict";c("89ec")},cd0a:function(t,s,c){"use strict";c.r(s);var e={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};s["default"]=e}}]);