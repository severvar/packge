(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75948368","chunk-2d21e3e9"],{"16af":function(e,t,a){"use strict";a("20f1")},"20f1":function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("ca00"),i=a("0fea"),n=a("2b0e"),s=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":n["a"].ls.get(s["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,a).then((function(e){200===e.code&&(t.dataSource=e.data.rows,t.ipagination.total=e.data.total),510===e.code&&t.$message.warning(e.data),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t={};t.search=JSON.stringify(this.queryParam);var a=Object.assign(e,t,this.isorter,this.filters);return a.field=this.getQueryField(),a.currentPage=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(r["c"])(a)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(e){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",a=0;a<this.selectedRowKeys.length;a++)t+=this.selectedRowKeys[a]+",";var r=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){r.loading=!0,Object(i["f"])(r.url.batchSetStatusUrl,{status:e,ids:t}).then((function(e){200===e.code?(r.loadData(),r.onClearSelected()):r.$message.warning(e.data.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["a"])(a.url.deleteBatch,{ids:e}).then((function(e){200===e.code?(a.loadData(),a.onClearSelected()):a.$message.warning(e.data.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["a"])(t.url.delete,{id:e}).then((function(e){200===e.code?t.loadData():t.$message.warning(e.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e,t){this.$refs.modalDetail.show(e,t),this.$refs.modalDetail.title=t+"-详情"},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response){if(200===e.file.response.code)this.$message.success(e.file.response.data||"".concat(e.file.name," 文件上传成功"));else{var a=e.file.response,r=a.message,i=a.result,n=i.msg,s=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+s;this.$warning({title:r,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.data,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(i["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(i["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var e=n["a"].ls.get("funId"),t=n["a"].ls.get("winBtnStrList");if(this.btnEnableList="",e&&t)for(var a=0;a<t.length;a++)t[a].funId==e&&t[a].btnStr&&(this.btnEnableList=t[a].btnStr)}}}},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},i=[],n={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},s=n,o=a("2877"),l=Object(o["a"])(s,r,i,!1,null,"4de15389",null);t["default"]=l.exports},f855:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:4,sm:24}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"供应商"}},[a("a-select",{attrs:{placeholder:"选择供应商",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children"},model:{value:e.queryParam.organId,callback:function(t){e.$set(e.queryParam,"organId",t)},expression:"queryParam.organId"}},e._l(e.supList,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t.id}},[e._v("\n                    "+e._s(t.supplier)+"\n                  ")])})),1)],1)],1),a("a-col",{attrs:{md:4,sm:24}},[a("a-form-item",{attrs:{label:"仓库"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{showSearch:"",optionFilterProp:"children",placeholder:"请选择仓库"},model:{value:e.queryParam.depotId,callback:function(t){e.$set(e.queryParam,"depotId",t)},expression:"queryParam.depotId"}},e._l(e.depotList,(function(t,r){return a("a-select-option",{attrs:{value:t.id}},[e._v("\n                    "+e._s(t.depotName)+"\n                  ")])})),1)],1)],1),a("a-col",{attrs:{md:5,sm:24}},[a("a-form-item",{attrs:{label:"商品信息"}},[a("a-input",{attrs:{placeholder:"名称、规格、型号"},model:{value:e.queryParam.materialParam,callback:function(t){e.$set(e.queryParam,"materialParam",t)},expression:"queryParam.materialParam"}})],1)],1),a("a-col",{attrs:{md:5,sm:24}},[a("a-form-item",{attrs:{label:"单据日期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-range-picker",{staticStyle:{width:"210px"},attrs:{"default-value":e.defaultTimeStr,format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onDateChange},model:{value:e.queryParam.createTimeRange,callback:function(t){e.$set(e.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),a("a-col",{attrs:{md:4,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{directives:[{name:"print",rawName:"v-print",value:"#reportPrint",expression:"'#reportPrint'"}],staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"printer"}},[e._v("打印")])],1)])],1)],1)],1),a("section",{ref:"print",attrs:{id:"reportPrint"}},[a("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange}})],1)])],1)],1)},i=[],n=a("b65a"),s=a("ca00"),o=a("0fea"),l=a("4ec3"),c=a("d579"),u=a("c1df"),d=a.n(u),h={name:"BuyInReport",mixins:[n["a"]],components:{JEllipsis:c["default"]},data:function(){return{queryParam:{organId:"",materialParam:"",depotId:"",beginTime:Object(s["h"])()+"-01",endTime:d()().format("YYYY-MM-DD"),type:"入库"},dateFormat:"YYYY-MM-DD",currentDay:d()().format("YYYY-MM-DD"),defaultTimeStr:"",supList:[],depotList:[],tabKey:"1",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"名称",dataIndex:"mName",width:150},{title:"规格",dataIndex:"standard",width:100},{title:"型号",dataIndex:"model",width:100},{title:"类型",dataIndex:"categoryName",width:120},{title:"入库数量",dataIndex:"numSum",width:120},{title:"入库金额",dataIndex:"priceSum",width:120}],labelCol:{xs:{span:1},sm:{span:2}},wrapperCol:{xs:{span:10},sm:{span:16}},url:{list:"/depotHead/findInOutMaterialCount"}}},created:function(){this.getDepotData(),this.initSupplier(),this.defaultTimeStr=[d()(Object(s["h"])()+"-01",this.dateFormat),d()(this.currentDay,this.dateFormat)]},methods:{moment:d.a,getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.currentPage=this.ipagination.current,e.pageSize=this.ipagination.pageSize,e},onDateChange:function(e,t){this.queryParam.beginTime=t[0],this.queryParam.endTime=t[1]},initSupplier:function(){var e=this;Object(l["Y"])({}).then((function(t){t&&(e.supList=t)}))},getDepotData:function(){var e=this;Object(o["c"])("/depot/findDepotByCurrentUser").then((function(t){200===t.code?e.depotList=t.data:e.$message.info(t.data)}))},searchQuery:function(){""==this.queryParam.beginTime||""==this.queryParam.endTime?this.$message.warning("请选择单据日期！"):this.loadData(1)}}},m=h,f=(a("16af"),a("2877")),p=Object(f["a"])(m,r,i,!1,null,"67da4348",null);t["default"]=p.exports}}]);