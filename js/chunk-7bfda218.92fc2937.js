(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bfda218"],{b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("ca00"),s=n("0fea"),i=n("2b0e"),r=n("9fb0");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{tokenHeader:{"X-Access-Token":i["a"].ls.get(r["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(s["c"])(this.url.list,n).then((function(e){200===e.code&&(t.dataSource=e.data.rows,t.ipagination.total=e.data.total),510===e.code&&t.$message.warning(e.data),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t={};t.search=JSON.stringify(this.queryParam);var n=Object.assign(e,t,this.isorter,this.filters);return n.field=this.getQueryField(),n.currentPage=this.ipagination.current,n.pageSize=this.ipagination.pageSize,Object(a["c"])(n)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(e){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",n=0;n<this.selectedRowKeys.length;n++)t+=this.selectedRowKeys[n]+",";var a=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){a.loading=!0,Object(s["f"])(a.url.batchSetStatusUrl,{status:e,ids:t}).then((function(e){200===e.code?(a.loadData(),a.onClearSelected()):a.$message.warning(e.data.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(s["a"])(n.url.deleteBatch,{ids:e}).then((function(e){200===e.code?(n.loadData(),n.onClearSelected()):n.$message.warning(e.data.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){200===e.code?t.loadData():t.$message.warning(e.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e,t){this.$refs.modalDetail.show(e,t),this.$refs.modalDetail.title=t+"-详情"},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),Object(s["b"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=a,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response){if(200===e.file.response.code)this.$message.success(e.file.response.data||"".concat(e.file.name," 文件上传成功"));else{var n=e.file.response,a=n.message,s=n.result,i=s.msg,r=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:a,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.data,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var e=i["a"].ls.get("funId"),t=i["a"].ls.get("winBtnStrList");if(this.btnEnableList="",e&&t)for(var n=0;n<t.length;n++)t[n].funId==e&&t[n].btnStr&&(this.btnEnableList=t[n].btnStr)}}}},bb70:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{span:6}},[n("a-form-item",{attrs:{label:"标题"}},[n("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.queryParam.titile,callback:function(t){e.$set(e.queryParam,"titile",t)},expression:"queryParam.titile"}})],1)],1),n("a-col",{attrs:{span:6}},[n("a-form-item",{attrs:{label:"发布人"}},[n("a-input",{attrs:{placeholder:"请输入发布人"},model:{value:e.queryParam.sender,callback:function(t){e.$set(e.queryParam,"sender",t)},expression:"queryParam.sender"}})],1)],1),n("a-col",{attrs:{span:8}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"book"},on:{click:e.readAll}},[e._v("全部标注已读")])],1),n("a-table",{ref:"table",attrs:{size:"default",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.showAnnouncement(a)}}},[e._v("查看")])])}}])}),n("show-announcement",{ref:"ShowAnnouncement"}),n("dynamic-notice",{ref:"showDynamNotice",attrs:{path:e.openPath,formData:e.formData}})],1)},s=[],i=(n("ca00"),n("0fea")),r=n("2bd9"),o=n("b65a"),l=n("4eaf"),c={name:"UserAnnouncementList",mixins:[o["a"]],components:{DynamicNotice:l["default"],ShowAnnouncement:r["default"]},data:function(){return{description:"系统通告表管理页面",queryParam:{},columns:[{title:"标题",align:"center",dataIndex:"titile"},{title:"消息类型",align:"center",dataIndex:"msgCategory",customRender:function(e){return"1"==e?"通知公告":"2"==e?"系统消息":e}},{title:"发布人",align:"center",dataIndex:"sender"},{title:"发布时间",align:"center",dataIndex:"sendTime"},{title:"优先级",align:"center",dataIndex:"priority",customRender:function(e){return"L"==e?"低":"M"==e?"中":"H"==e?"高":e}},{title:"阅读状态",align:"center",dataIndex:"readFlag",customRender:function(e){return"0"==e?"未读":"1"==e?"已读":e}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/sysAnnouncementSend/getMyAnnouncementSend",editCementSend:"sys/sysAnnouncementSend/editByAnntIdAndUserId",readAllMsg:"sys/sysAnnouncementSend/readAll"},loading:!1,openPath:"",formData:""}},methods:{handleDetail:function(e){this.$refs.sysAnnouncementModal.detail(e),this.$refs.sysAnnouncementModal.title="查看"},showAnnouncement:function(e){var t=this;Object(i["g"])(this.url.editCementSend,{anntId:e.anntId}).then((function(n){n.success&&(t.loadData(),t.syncHeadNotic(e.anntId))})),"component"===e.openType?(this.openPath=e.openPage,this.formData={id:e.busId},this.$refs.showDynamNotice.detail()):this.$refs.ShowAnnouncement.detail(e)},syncHeadNotic:function(e){Object(i["c"])("sys/annountCement/syncNotic",{anntId:e})},readAll:function(){var e=this;e.$confirm({title:"确认操作",content:"是否全部标注已读?",onOk:function(){Object(i["g"])(e.url.readAllMsg).then((function(t){t.success&&(e.$message.success(t.message),e.loadData(),e.syncHeadNotic())}))}})}}},d=c,u=(n("e758"),n("2877")),h=Object(u["a"])(d,a,s,!1,null,"a80aaa5e",null);t["default"]=h.exports},e758:function(e,t,n){"use strict";n("f5cd")},f5cd:function(e,t,n){}}]);