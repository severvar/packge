(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5edfdb","chunk-d55fda58","chunk-2d221f48"],{"0673":function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"exception"},[c("div",{staticClass:"img"},[c("img",{attrs:{src:t.config[t.type].img}})]),c("div",{staticClass:"content"},[c("h1",[t._v(t._s(t.config[t.type].title))]),c("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),c("div",{staticClass:"action"},[c("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},a=[],n=c("cd0a"),i={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:n["default"]}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},o=i,r=(c("ccc4"),c("2877")),l=Object(r["a"])(o,s,a,!1,null,"6d5e2f4a",null);e["default"]=l.exports},"6c05":function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("exception-page",{attrs:{type:"500"}})},a=[],n=c("0673"),i={components:{ExceptionPage:n["default"]}},o=i,r=c("2877"),l=Object(r["a"])(o,s,a,!1,null,"58acec66",null);e["default"]=l.exports},"89ec":function(t,e,c){},ccc4:function(t,e,c){"use strict";c("89ec")},cd0a:function(t,e,c){"use strict";c.r(e);var s={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};e["default"]=s}}]);