(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f08801c","chunk-5a068397","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0bdf09"],{"19d6":function(e,t,a){},"279b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入公司名称查询"},model:{value:e.queryParam.companyName,callback:function(t){e.$set(e.queryParam,"companyName",t)},expression:"queryParam.companyName"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.myHandleAdd}},[e._v("新增")]):e._e(),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e()],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n            批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),e.btnEnableList.indexOf(1)>-1?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])]):e._e()],1)}},{key:"customRenderFlag",fn:function(t){return[1==t?a("a-tag",{attrs:{color:"green"}},[e._v("启用")]):e._e(),0==t?a("a-tag",{attrs:{color:"orange"}},[e._v("关闭")]):e._e()]}}])})],1),a("systemConfig-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)],1)],1)},r=[],i=a("c820"),o=a("b65a"),l=a("2dab"),s={name:"SystemConfigList",mixins:[o["a"]],components:{SystemConfigModal:i["default"],JDate:l["default"]},data:function(){return{queryParam:{companyName:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"公司名称",dataIndex:"companyName",width:150},{title:"联系人",dataIndex:"companyContacts",width:80,align:"center"},{title:"公司地址",dataIndex:"companyAddress",width:150,align:"center"},{title:"公司电话",dataIndex:"companyTel",width:120,align:"center"},{title:"公司传真",dataIndex:"companyFax",width:120,align:"center"},{title:"公司邮编",dataIndex:"companyPostCode",width:80,align:"center"},{title:"仓库权限",dataIndex:"depotFlag",width:80,align:"center",scopedSlots:{customRender:"customRenderFlag"}},{title:"客户权限",dataIndex:"customerFlag",width:80,align:"center",scopedSlots:{customRender:"customRenderFlag"}},{title:"负库存",dataIndex:"minusStockFlag",width:80,align:"center",scopedSlots:{customRender:"customRenderFlag"}},{title:"操作",dataIndex:"action",width:150,align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/systemConfig/list",delete:"/systemConfig/delete",deleteBatch:"/systemConfig/deleteBatch"}}},computed:{},methods:{myHandleAdd:function(){this.ipagination.total>=1?this.$message.warning("抱歉，只能填写一条系统配置信息！"):this.handleAdd()},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1,-1===this.btnEnableList.indexOf(1)&&(this.$refs.modalForm.isReadOnly=!0)}}},c=s,d=(a("b6d5"),a("2877")),u=Object(d["a"])(c,n,r,!1,null,"c2e30df6",null);t["default"]=u.exports},"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},r=[],i=a("c1df"),o=a.n(i),l={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD HH:mm:ss",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?o()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?o()(e,this.dateFormat):null}},methods:{moment:o.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},s=l,c=a("2877"),d=Object(c["a"])(s,n,r,!1,null,null,null);t["default"]=d.exports},"88bc":function(e,t,a){(function(t){var a=1/0,n=9007199254740991,r="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,n=e?e.length:0,r=Array(n);while(++a<n)r[a]=t(e[a],a,e);return r}function h(e,t){var a=-1,n=t.length,r=e.length;while(++a<n)e[r+a]=t[a];return e}var f=Object.prototype,p=f.hasOwnProperty,g=f.toString,y=d.Symbol,b=f.propertyIsEnumerable,w=y?y.isConcatSpreadable:void 0,v=Math.max;function C(e,t,a,n,r){var i=-1,o=e.length;a||(a=O),r||(r=[]);while(++i<o){var l=e[i];t>0&&a(l)?t>1?C(l,t-1,a,n,r):h(r,l):n||(r[r.length]=l)}return r}function S(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var n=-1,r=t.length,i={};while(++n<r){var o=t[n],l=e[o];a(l,o)&&(i[o]=l)}return i}function F(e,t){return t=v(void 0===t?e.length-1:t,0),function(){var a=arguments,n=-1,r=v(a.length-t,0),i=Array(r);while(++n<r)i[n]=a[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=a[n];return o[t]=i,u(e,this,o)}}function O(e){return R(e)||j(e)||!!(w&&e&&e[w])}function x(e){if("string"==typeof e||E(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return _(e)&&p.call(e,"callee")&&(!b.call(e,"callee")||g.call(e)==r)}var R=Array.isArray;function $(e){return null!=e&&D(e.length)&&!P(e)}function _(e){return Q(e)&&$(e)}function P(e){var t=N(e)?g.call(e):"";return t==i||t==o}function D(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Q(e){return!!e&&"object"==typeof e}function E(e){return"symbol"==typeof e||Q(e)&&g.call(e)==l}var I=F((function(e,t){return null==e?{}:S(e,m(C(t,1),x))}));e.exports=I}).call(this,a("24aa"))},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("ca00"),r=a("0fea"),i=a("2b0e"),o=a("9fb0");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{tokenHeader:{"X-Access-Token":i["a"].ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(r["c"])(this.url.list,a).then((function(e){200===e.code&&(t.dataSource=e.data.rows,t.ipagination.total=e.data.total),510===e.code&&t.$message.warning(e.data),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t={};t.search=JSON.stringify(this.queryParam);var a=Object.assign(e,t,this.isorter,this.filters);return a.field=this.getQueryField(),a.currentPage=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(n["c"])(a)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(e){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",a=0;a<this.selectedRowKeys.length;a++)t+=this.selectedRowKeys[a]+",";var n=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){n.loading=!0,Object(r["f"])(n.url.batchSetStatusUrl,{status:e,ids:t}).then((function(e){200===e.code?(n.loadData(),n.onClearSelected()):n.$message.warning(e.data.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(r["a"])(a.url.deleteBatch,{ids:e}).then((function(e){200===e.code?(a.loadData(),a.onClearSelected()):a.$message.warning(e.data.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(r["a"])(t.url.delete,{id:e}).then((function(e){200===e.code?t.loadData():t.$message.warning(e.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e,t){this.$refs.modalDetail.show(e,t),this.$refs.modalDetail.title=t+"-详情"},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=s({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(r["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),r=document.createElement("a");r.style.display="none",r.href=n,r.setAttribute("download",e+".xls"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response){if(200===e.file.response.code)this.$message.success(e.file.response.data||"".concat(e.file.name," 文件上传成功"));else{var a=e.file.response,n=a.message,r=a.result,i=r.msg,o=r.fileUrl,l=r.fileName,s=window._CONFIG["domianURL"]+o;this.$warning({title:n,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:s,target:"_blank",download:l}},["点击下载"])," "])])})}this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.data,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(r["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(r["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var e=i["a"].ls.get("funId"),t=i["a"].ls.get("winBtnStrList");if(this.btnEnableList="",e&&t)for(var a=0;a<t.length;a++)t[a].funId==e&&t[a].btnStr&&(this.btnEnableList=t[a].btnStr)}}}},b6d5:function(e,t,a){"use strict";a("19d6")},c820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("template",{slot:"footer"},[e.isReadOnly?a("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("\n      关闭\n    ")]):e._e()],1),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"公司名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyName",e.validatorRules.companyName],expression:"[ 'companyName', validatorRules.companyName]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入公司名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系人"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyContacts"],expression:"[ 'companyContacts' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入联系人"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"公司地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyAddress"],expression:"[ 'companyAddress' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入公司地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"公司电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyTel"],expression:"[ 'companyTel' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入公司电话"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"公司传真"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyFax"],expression:"[ 'companyFax' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入公司传真"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"公司邮编"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["companyPostCode"],expression:"[ 'companyPostCode' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入公司邮编"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"仓库权限"}},[a("a-switch",{attrs:{"checked-children":"启用","un-checked-children":"关闭"},on:{change:e.onDepotChange},model:{value:e.depotFlagSwitch,callback:function(t){e.depotFlagSwitch=t},expression:"depotFlagSwitch"}}),e._v("\n        （如果启用则需要到"),a("b",[e._v("用户管理")]),e._v("进行"),a("b",[e._v("分配仓库")]),e._v("）\n      ")],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户权限"}},[a("a-switch",{attrs:{"checked-children":"启用","un-checked-children":"关闭"},on:{change:e.onCustomerChange},model:{value:e.customerFlagSwitch,callback:function(t){e.customerFlagSwitch=t},expression:"customerFlagSwitch"}}),e._v("\n        （如果启用则需要到"),a("b",[e._v("用户管理")]),e._v("进行"),a("b",[e._v("分配客户")]),e._v("）\n      ")],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"负库存"}},[a("a-switch",{attrs:{"checked-children":"启用","un-checked-children":"关闭"},on:{change:e.onMinusStockChange},model:{value:e.minusStockFlagSwitch,callback:function(t){e.minusStockFlagSwitch=t},expression:"minusStockFlagSwitch"}}),e._v("\n        （如果启用则单据支持负库存，批次商品除外）\n      ")],1)],1)],1)],2)},r=[],i=a("88bc"),o=a.n(i),l=a("4ec3"),s={name:"SystemConfigModal",data:function(){return{title:"操作",visible:!1,model:{},depotFlagSwitch:!1,customerFlagSwitch:!1,minusStockFlagSwitch:!1,isReadOnly:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{companyName:{rules:[{required:!0,message:"请输入公司名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"},{validator:this.validateSystemConfig}]}}}},created:function(){},methods:{onDepotChange:function(e){this.model.depotFlag=e?"1":"0"},onCustomerChange:function(e){this.model.customerFlag=e?"1":"0"},onMinusStockChange:function(e){this.model.minusStockFlag=e?"1":"0"},add:function(){this.depotFlagSwitch=!1,this.customerFlagSwitch=!1,this.minusStockFlagSwitch=!1,this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"companyName","companyContacts","companyAddress","companyTel","companyFax","companyPostCode","depotFlag","customerFlag","minusStockFlag"))})),e.id&&(null!=e.depotFlag&&(this.depotFlagSwitch="1"==e.depotFlag),null!=e.customerFlag&&(this.customerFlagSwitch="1"==e.customerFlag),null!=e.minusStockFlag&&(this.minusStockFlagSwitch="1"==e.minusStockFlag))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var r,i=Object.assign(e.model,n);r=e.model.id?Object(l["P"])(i):Object(l["i"])(i),r.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateSystemConfig:function(e,t,a){var n={name:t,id:this.model.id?this.model.id:0};Object(l["B"])(n).then((function(e){e&&200===e.code?e.data.status?a("公司名称已经存在"):a():a(e.data)}))}}},c=s,d=a("2877"),u=Object(d["a"])(c,n,r,!1,null,"025ada9c",null);t["default"]=u.exports}}]);