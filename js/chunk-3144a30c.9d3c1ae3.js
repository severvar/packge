(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3144a30c"],{"340e":function(t,e,r){"use strict";r("5a5a")},"5a5a":function(t,e,r){},"98b8":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),o=new L(n||[]);return a._invoke=j(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function y(){}function w(){}var v={};c(v,a,(function(){return this}));var b=Object.getPrototypeOf,S=b&&b(b(E([])));S&&S!==r&&n.call(S,a)&&(v=S);var x=w.prototype=m.prototype=Object.create(v);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function j(t,e,r){var n=h;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return $()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:$}}function $(){return{value:e,done:!0}}return y.prototype=w,c(x,"constructor",w),c(w,"constructor",y),y.displayName=c(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(R.prototype),c(R.prototype,o,(function(){return this})),t.AsyncIterator=R,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new R(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a34a:function(t,e,r){t.exports=r("98b8")},b0b6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{staticStyle:{"margin-top":"-70px"},attrs:{width:t.modalWidth,visible:t.visible,title:t.title,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleSubmit,cancel:t.close}},[r("a-row",{staticStyle:{padding:"10px",margin:"-10px"},attrs:{gutter:10}},[r("a-col",{attrs:{md:24,sm:24}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:8}},[r("a-form-item",{attrs:{label:"商品信息",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[r("a-input",{attrs:{placeholder:"请输入名称、规格、型号查询"},model:{value:t.queryParam.q,callback:function(e){t.$set(t.queryParam,"q",e)},expression:"queryParam.q"}})],1)],1),r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.searchReset(1)}}},[t._v("重置")])],1)],1)],1)],1),r("a-table",{ref:"table",attrs:{scroll:t.scrollTrigger,size:"middle",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange,type:t.getType},loading:t.loading,customRow:t.rowAction},on:{change:t.handleTableChange}})],1)])],1)],1)},i=[],a=r("a34a"),o=r.n(a),s=r("ca00"),c=r("4ec3"),l=r("b65a");function u(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){u(a,n,i,o,s,"next",t)}function s(t){u(a,n,i,o,s,"throw",t)}o(void 0)}))}}var d={name:"JSelectSerialMaterialModal",mixins:[l["a"]],components:{},props:["modalWidth","multi","barCode"],data:function(){return{queryParam:{q:""},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{dataIndex:"mBarCode",title:"条码",width:100,align:"left"},{dataIndex:"name",title:"名称",width:100},{dataIndex:"standard",title:"规格",width:80},{dataIndex:"model",title:"型号",width:80}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectMaterialRows:[],selectMaterialIds:[],title:"选择序列号商品",ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20","30"],showTotal:function(t,e){return e[0]+"-"+e[1]+" 共"+t+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{barCode:{immediate:!0,handler:function(){this.initBarCode()}}},created:function(){this.resetScreenSize(),this.loadData()},methods:{initBarCode:function(){this.barCode?this.$emit("initComp",this.barCode):this.$emit("initComp","")},loadData:function(){var t=h(o.a.mark((function t(e){var r,n=this;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 1===e&&(this.ipagination.current=1),this.loading=!0,r=this.getQueryParams(),t.next=5,Object(c["kb"])(r).then((function(t){t&&(n.dataSource=t.rows,n.ipagination.total=t.total)})).finally((function(){n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),resetScreenSize:function(){var t=document.body.clientWidth;this.scrollTrigger=t<500?{x:800}:{}},showModal:function(){this.visible=!0,this.loadData(),this.form.resetFields()},getQueryParams:function(){var t=Object.assign({},this.queryParam,this.isorter);return t.page=this.ipagination.current,t.rows=this.ipagination.pageSize,Object(s["c"])(t)},getQueryField:function(){for(var t="id,",e=0;e<this.columns.length;e++)t+=","+this.columns[e].dataIndex;return t},searchReset:function(t){var e=this;0!==t&&(e.queryParam={},e.loadData(1)),e.selectedRowKeys=[],e.selectMaterialIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(t,e,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"===r.order?"asc":"desc"),this.ipagination=t,this.loadData()},handleSubmit:function(){var t=this;this.getSelectMaterialRows(),t.$emit("ok",t.selectMaterialRows,t.selectMaterialIds),t.searchReset(0),t.close()},getSelectMaterialRows:function(t){var e=this.dataSource,r="";this.selectMaterialRows=[];for(var n=0,i=e.length;n<i;n++)this.selectedRowKeys.includes(e[n].id)&&(this.selectMaterialRows.push(e[n]),r=r+","+e[n].mBarCode);this.selectMaterialIds=r.substring(1)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},onSearch:function(){this.loadData(1)},modalFormOk:function(){this.loadData()},rowAction:function(t,e){var r=this;return{on:{click:function(){var e=[];e.push(t.id),r.selectedRowKeys=e},dblclick:function(){var e=[];e.push(t.id),r.selectedRowKeys=e,r.handleSubmit()}}}}}},f=d,p=(r("340e"),r("2877")),g=Object(p["a"])(f,n,i,!1,null,"1ffe8bce",null);e["default"]=g.exports},b65a:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("ca00"),i=r("0fea"),a=r("2b0e"),o=r("9fb0");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{tokenHeader:{"X-Access-Token":a["a"].ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(t,e){return e[0]+"-"+e[1]+" 共"+t+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(t){var e=this;if(this.url.list){1===t&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,r).then((function(t){200===t.code&&(e.dataSource=t.data.rows,e.ipagination.total=t.data.total),510===t.code&&e.$message.warning(t.data),e.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(t,e){t?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(t),this.superQueryMatchType=e):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var t={};this.superQueryParams&&(t["superQueryParams"]=encodeURI(this.superQueryParams),t["superQueryMatchType"]=this.superQueryMatchType);var e={};e.search=JSON.stringify(this.queryParam);var r=Object.assign(t,e,this.isorter,this.filters);return r.field=this.getQueryField(),r.currentPage=this.ipagination.current,r.pageSize=this.ipagination.pageSize,Object(n["c"])(r)},getQueryField:function(){var t="id,";return this.columns.forEach((function(e){t+=","+e.dataIndex})),t},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(t){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",r=0;r<this.selectedRowKeys.length;r++)e+=this.selectedRowKeys[r]+",";var n=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){n.loading=!0,Object(i["f"])(n.url.batchSetStatusUrl,{status:t,ids:e}).then((function(t){200===t.code?(n.loadData(),n.onClearSelected()):n.$message.warning(t.data.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",e=0;e<this.selectedRowKeys.length;e++)t+=this.selectedRowKeys[e]+",";var r=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){r.loading=!0,Object(i["a"])(r.url.deleteBatch,{ids:t}).then((function(t){200===t.code?(r.loadData(),r.onClearSelected()):r.$message.warning(t.data.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(t){if(this.url.delete){var e=this;Object(i["a"])(e.url.delete,{id:t}).then((function(t){200===t.code?e.loadData():e.$message.warning(t.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(t){this.$refs.modalForm.edit(t),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(t,e,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"==r.order?"asc":"desc"),this.ipagination=t,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(t){return t.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(t,e){this.$refs.modalDetail.show(t,e),this.$refs.modalDetail.title=e+"-详情"},handleExportXls2:function(){var t=encodeURI(JSON.stringify(this.getQueryParams())),e="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(t);window.location.href=e},handleExportXls:function(t){var e=this;t&&"string"==typeof t||(t="导出文件");var r=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(r["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,r).then((function(r){if(r)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([r],{type:"application/vnd.ms-excel"}),t+".xls");else{var n=window.URL.createObjectURL(new Blob([r],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=n,i.setAttribute("download",t+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}else e.$message.warning("文件下载失败")}))},handleImportExcel:function(t){var e=this.$createElement;if(t.file.status,"done"===t.file.status)if(t.file.response){if(200===t.file.response.code)this.$message.success(t.file.response.data||"".concat(t.file.name," 文件上传成功"));else{var r=t.file.response,n=r.message,i=r.result,a=i.msg,o=i.fileUrl,s=i.fileName,c=window._CONFIG["domianURL"]+o;this.$warning({title:n,content:e("div",[e("span",[a]),e("br"),e("span",["具体详情请 ",e("a",{attrs:{href:c,target:"_blank",download:s}},["点击下载"])," "])])})}this.loadData()}else this.$message.error("".concat(t.file.name," ").concat(t.file.response.data,"."));else"error"===t.file.status&&this.$message.error("文件上传失败: ".concat(t.file.msg," "))},getImgView:function(t){return t&&t.indexOf(",")>0&&(t=t.substring(0,t.indexOf(","))),Object(i["d"])(t)},uploadFile:function(t){if(t){t.indexOf(",")>0&&(t=t.substring(0,t.indexOf(",")));var e=Object(i["d"])(t);window.open(e)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var t=a["a"].ls.get("funId"),e=a["a"].ls.get("winBtnStrList");if(this.btnEnableList="",t&&e)for(var r=0;r<e.length;r++)e[r].funId==t&&e[r].btnStr&&(this.btnEnableList=e[r].btnStr)}}}}}]);