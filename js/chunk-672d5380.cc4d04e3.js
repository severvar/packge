(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-672d5380"],{"64a8":function(e,t,r){},"6d9b":function(e,t,r){"use strict";r("64a8")},"98b8":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=k(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",y={};function g(){}function m(){}function v(){}var w={};c(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(R([])));x&&x!==r&&n.call(x,o)&&(w=x);var S=v.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(h).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;function o(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(e,t,r){var n=h;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return j()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=D(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function D(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,D(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function R(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){while(++i<e.length)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=v,c(S,"constructor",v),c(v,"constructor",m),m.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},L(I.prototype),c(I.prototype,a,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new I(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(S),c(S,s,"Generator"),c(S,o,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a34a:function(e,t,r){e.exports=r("98b8")},a505:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{staticStyle:{"margin-top":"-70px"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleSubmit,cancel:e.close}},[r("a-row",{staticStyle:{"background-color":"#ececec",padding:"10px",margin:"-10px"},attrs:{gutter:10}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-card",{attrs:{bordered:!1}},[r("a-directory-tree",{attrs:{selectable:"",selectedKeys:e.selectedDepIds,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,expandAction:!1,expandedKeys:e.expandedKeys},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.onDepSelect}})],1)],1),r("a-col",{attrs:{md:18,sm:24}},[r("a-card",{attrs:{bordered:!1}},[e._v("\n        用户账号:\n        "),r("a-input-search",{style:{width:"150px",marginBottom:"15px"},attrs:{placeholder:"请输入账号"},on:{search:e.onSearch},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}}),r("a-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"redo"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),r("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading},on:{change:e.handleTableChange}})],1)],1)],1)],1)},i=[],o=r("a34a"),a=r.n(o),s=r("ca00"),c=r("4ec3");function u(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){u(o,n,i,a,s,"next",e)}function s(e){u(o,n,i,a,s,"throw",e)}a(void 0)}))}}var h={name:"JSelectUserByDepModal",components:{},props:["modalWidth","multi","userIds"],data:function(){return{queryParam:{username:""},columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户姓名",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1===e?"男":2===e?"女":e}},{title:"手机",align:"center",dataIndex:"phone"},{title:"部门",align:"center",dataIndex:"orgCode"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectUserRows:[],selectUserIds:[],title:"根据部门选择用户",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedDepIds:[],departTree:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{userIds:{immediate:!0,handler:function(){this.initUserNames()}}},created:function(){this.resetScreenSize(),this.loadData()},methods:{initUserNames:function(){var e=this;if(this.userIds){var t=this.userIds.split(",")+",";Object(c["lb"])({username:t,pageNo:1,pageSize:t.length}).then((function(t){if(t.success){var r=[],n=[];t.result.records.forEach((function(e){n.push(e["realname"]),r.push(e["id"])})),e.selectedRowKeys=r,e.$emit("initComp",n.join(","))}}))}else this.$emit("initComp","")},loadData:function(){var e=l(a.a.mark((function e(t){var r,n=this;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1===t&&(this.ipagination.current=1),!(this.selectedDepIds&&this.selectedDepIds.length>0)){e.next=6;break}return e.next=4,this.initQueryUserByDepId(this.selectedDepIds);case 4:e.next=10;break;case 6:return this.loading=!0,r=this.getQueryParams(),e.next=10,Object(c["lb"])(r).then((function(e){e.success&&(n.dataSource=e.result.records,n.ipagination.total=e.result.total)})).finally((function(){n.loading=!1}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetScreenSize:function(){var e=document.body.clientWidth;this.scrollTrigger=e<500?{x:800}:{}},showModal:function(){this.visible=!0,this.queryDepartTree(),this.initUserNames(),this.loadData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(s["c"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadData(1)),t.selectedRowKeys=[],t.selectUserIds=[],t.selectedDepIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"===r.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleSubmit:function(){var e=this;this.getSelectUserRows(),e.$emit("ok",e.selectUserRows,e.selectUserIds),e.searchReset(0),e.close()},getSelectUserRows:function(e){var t=this.dataSource,r="";this.selectUserRows=[];for(var n=0,i=t.length;n<i;n++)this.selectedRowKeys.includes(t[n].id)&&(this.selectUserRows.push(t[n]),r=r+","+t[n].username);this.selectUserIds=r.substring(1)},onDepSelect:function(e){null!=e[0]&&(this.initQueryUserByDepId(e),this.selectedDepIds[0]!==e[0]&&(this.selectedDepIds=[e[0]]))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){this.loadData(1)},initQueryUserByDepId:function(e){var t=this;return this.loading=!0,Object(c["sb"])({id:e.toString()}).then((function(e){e.success&&(t.dataSource=e.result,t.ipagination.total=e.result.length)})).finally((function(){t.loading=!1}))},queryDepartTree:function(){var e=this;Object(c["queryDepartTreeList"])().then((function(t){t.success&&(e.departTree=t.result,e.expandedKeys=e.departTree.map((function(e){return e.id})))}))},modalFormOk:function(){this.loadData()}}},d=h,f=(r("6d9b"),r("2877")),p=Object(f["a"])(d,n,i,!1,null,"0c7059f2",null);t["default"]=p.exports}}]);