(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-014f9c04","chunk-2d0ae8ce","chunk-2d0e9773"],{"0b17":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-card",{attrs:{bordered:!1}},[e("j-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:a.title,width:a.width,visible:a.visible,maskClosable:!1,keyboard:!1,forceRender:!0,wrapClassName:"ant-modal-cust-warp"},on:{cancel:a.handleCancel}},[e("template",{slot:"footer"},["收预付款"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#advanceInPrint",expression:"'#advanceInPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),"转账"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#giroPrint",expression:"'#giroPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),"收入"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#itemInPrint",expression:"'#itemInPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),"支出"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#itemOutPrint",expression:"'#itemOutPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),"收款"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#moneyInPrint",expression:"'#moneyInPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),"付款"===a.financialType?e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#moneyOutPrint",expression:"'#moneyOutPrint'"}],attrs:{ghost:"",type:"primary"}},[a._v("打印")]):a._e(),e("a-button",{key:"back",on:{click:a.handleCancel}},[a._v("取消")])],1),e("a-form",{attrs:{form:a.form}},["收预付款"===a.financialType?[e("section",{ref:"print",attrs:{id:"advanceInPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"付款会员"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.organName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1)],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.advanceInColumns,dataSource:a.dataSource}}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"合计金额"}},[a._v("\n                "+a._s(a.model.totalPrice)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"收款金额"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1),e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:6}})],1)],1)]:a._e(),"转账"===a.financialType?[e("section",{ref:"print",attrs:{id:"giroPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1),e("a-col",{attrs:{span:6}})],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.giroColumns,dataSource:a.dataSource}}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"付款账户"}},[a._v("\n                "+a._s(a.model.accountName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"实付金额"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1),e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:6}})],1)],1)]:a._e(),"收入"===a.financialType?[e("section",{ref:"print",attrs:{id:"itemInPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"往来单位"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.organName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1)],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.itemInColumns,dataSource:a.dataSource}}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"收入账户"}},[a._v("\n                "+a._s(a.model.accountName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"收入金额"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1),e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:6}})],1)],1)]:a._e(),"支出"===a.financialType?[e("section",{ref:"print",attrs:{id:"itemOutPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"往来单位"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.organName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1)],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.itemOutColumns,dataSource:a.dataSource}}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"支出账户"}},[a._v("\n                "+a._s(a.model.accountName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"支出金额"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1),e("a-col",{attrs:{span:6}}),e("a-col",{attrs:{span:6}})],1)],1)]:a._e(),"收款"===a.financialType?[e("section",{ref:"print",attrs:{id:"moneyInPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"客户"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.organName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1)],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.moneyInColumns,dataSource:a.dataSource},scopedSlots:a._u([{key:"numberCustomRender",fn:function(t,l){return e("span",{},[e("a",{on:{click:function(t){return a.myHandleDetail(l)}}},[a._v(a._s(l.billNumber))])])}}],null,!1,2876634935)}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"收款账户"}},[a._v("\n                "+a._s(a.model.accountName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"合计收款"}},[a._v("\n                "+a._s(a.model.totalPrice)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"优惠金额"}},[a._v("\n                "+a._s(a.model.discountMoney)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"实际收款"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1)],1)],1)]:a._e(),"付款"===a.financialType?[e("section",{ref:"print",attrs:{id:"moneyOutPrint"}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"供应商"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}}),a._v("\n                "+a._s(a.model.organName)+"\n              ")],1)],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"经手人"}},[a._v("\n                "+a._s(a.model.handsPersonName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据日期"}},[a._v("\n                "+a._s(a.model.billTimeStr)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"单据编号"}},[a._v("\n                "+a._s(a.model.billNo)+"\n              ")])],1)],1),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",pagination:!1,columns:a.moneyOutColumns,dataSource:a.dataSource}}),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{lg:24,md:24,sm:24}},[e("a-form-item",{staticStyle:{padding:"20px 10px"},attrs:{labelCol:a.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a._v("\n                "+a._s(a.model.remark)+"\n              ")])],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"付款账户"}},[a._v("\n                "+a._s(a.model.accountName)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"合计付款"}},[a._v("\n                "+a._s(a.model.totalPrice)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"优惠金额"}},[a._v("\n                "+a._s(a.model.discountMoney)+"\n              ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"实际付款"}},[a._v("\n                "+a._s(a.model.changeAmount)+"\n              ")])],1)],1)],1)]:a._e(),a.fileList.length>0?[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:21}},label:"附件"}},[e("ul",{staticStyle:{"list-style-type":"none"}},a._l(a.fileList,(function(t,l){return e("li",{key:l},[e("a",{attrs:{href:t.url,target:"_blank"}},[a._v(a._s(t.name))])])})),0)])],1),e("a-col",{attrs:{span:12}})],1)]:a._e()],2)],2),e("bill-detail",{ref:"modalDetail"})],1)},r=[],o=e("88bc"),n=e.n(o),s=e("9be9"),i=e("0fea"),d=e("4ec3"),m={name:"FinancialDetail",components:{BillDetail:s["default"]},data:function(){return{title:"详情",width:"1200px",visible:!1,model:{},financialType:"",fileList:[],labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}},form:this.$form.createForm(this),loading:!1,dataSource:[],url:{detailList:"/accountItem/getDetailList"},advanceInColumns:[{title:"账户名称",dataIndex:"accountName",width:"30%"},{title:"金额",dataIndex:"eachAmount",width:"30%"},{title:"备注",dataIndex:"remark",width:"30%"}],giroColumns:[{title:"账户名称",dataIndex:"accountName",width:"30%"},{title:"金额",dataIndex:"eachAmount",width:"30%"},{title:"备注",dataIndex:"remark",width:"30%"}],itemInColumns:[{title:"收入项目",dataIndex:"inOutItemName",width:"30%"},{title:"金额",dataIndex:"eachAmount",width:"30%"},{title:"备注",dataIndex:"remark",width:"30%"}],itemOutColumns:[{title:"支出项目",dataIndex:"inOutItemName",width:"30%"},{title:"金额",dataIndex:"eachAmount",width:"30%"},{title:"备注",dataIndex:"remark",width:"30%"}],moneyInColumns:[{title:"销售单据编号",dataIndex:"billNumber",width:"20%",scopedSlots:{customRender:"numberCustomRender"}},{title:"应收欠款",dataIndex:"needDebt",width:"10%"},{title:"已收欠款",dataIndex:"finishDebt",width:"10%"},{title:"本次收款",dataIndex:"eachAmount",width:"10%"},{title:"备注",dataIndex:"remark",width:"20%"}],moneyOutColumns:[{title:"采购单据编号",dataIndex:"billNumber",width:"20%"},{title:"应付欠款",dataIndex:"needDebt",width:"10%"},{title:"已付欠款",dataIndex:"finishDebt",width:"10%"},{title:"本次付款",dataIndex:"eachAmount",width:"10%"},{title:"备注",dataIndex:"remark",width:"20%"}]}},created:function(){},methods:{show:function(a,t){var e=this;this.financialType=t;var l=a.fileName;if(l){var r=l.split(",");this.fileList=[];for(var o=0;o<r.length;o++){var s={};s.name=r[o].replace("financial/",""),s.url=window._CONFIG["domianURL"]+"/systemConfig/static/"+r[o],this.fileList.push(s)}}else this.fileList=[];this.visible=!0,this.model=Object.assign({},a),this.$nextTick((function(){e.form.setFieldsValue(n()(e.model,"id"))}));var i={headerId:this.model.id},d=(this.readOnly,this.url.detailList);this.requestSubTableData(d,i)},requestSubTableData:function(a,t,e){var l=this;this.loading=!0,Object(i["c"])(a,t).then((function(a){a&&200===a.code&&(l.dataSource=a.data.rows,"function"===typeof e&&e(a))})).finally((function(){l.loading=!1}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1},myHandleDetail:function(a){var t=this;Object(d["V"])({number:a.billNumber}).then((function(a){a&&200===a.code&&(t.$refs.modalDetail.show(a.data,a.data.subType+a.data.type),t.$refs.modalDetail.title=a.data.subType+a.data.type+"-详情")}))}}},p=m,c=e("2877"),b=Object(c["a"])(p,l,r,!1,null,"d0308fd4",null);t["default"]=b.exports},"105d":function(a,t,e){"use strict";e("aa90")},"8e3c":function(a,t,e){"use strict";e.r(t),e.d(t,"FinancialListMixin",(function(){return l}));var l={computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)},isBatchDelEnabled:function(){for(var a=0;a<this.selectedRowKeys.length;a++)if(!this.selectionRows[a].actionsEnabled.delete)return!1;return!0}},methods:{myHandleAdd:function(){this.$refs.modalForm.action="add",this.handleAdd()},myHandleEdit:function(a){this.$refs.modalForm.action="edit",this.handleEdit(a)},myHandleDetail:function(a,t){this.handleDetail(a,t)},handleApprove:function(a){this.$refs.modalForm.action="approve",this.$refs.modalForm.edit(a),this.$refs.modalForm.title="审核"},searchReset:function(){this.queryParam={type:this.queryParam.type},this.loadData(1)},onDateChange:function(a,t){this.queryParam.beginTime=t[0],this.queryParam.endTime=t[1]},onDateOk:function(a){}}}},aa90:function(a,t,e){},fc83:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:24}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.searchQuery.apply(null,arguments)}}},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:6,sm:8}},[e("a-form-item",{attrs:{label:"单据编号",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-input",{attrs:{placeholder:"请输入单据编号"},model:{value:a.queryParam.billNo,callback:function(t){a.$set(a.queryParam,"billNo",t)},expression:"queryParam.billNo"}})],1)],1),e("a-col",{attrs:{md:5,sm:10}},[e("a-form-item",{attrs:{label:"单据日期",labelCol:a.labelCol,wrapperCol:a.wrapperCol}},[e("a-range-picker",{staticStyle:{width:"210px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:a.onDateChange,ok:a.onDateOk},model:{value:a.queryParam.createTimeRange,callback:function(t){a.$set(a.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),e("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-button",{attrs:{type:"primary"},on:{click:a.searchQuery}},[a._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:a.searchReset}},[a._v("重置")])],1)],1)],1)],1)],1),e("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[a.btnEnableList.indexOf(1)>-1?e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:a.myHandleAdd}},[a._v("新增")]):a._e(),a.selectedRowKeys.length>0?e("a-dropdown",[e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a.btnEnableList.indexOf(1)>-1?e("a-menu-item",{key:"1",on:{click:a.batchDel}},[e("a-icon",{attrs:{type:"delete"}}),a._v("删除")],1):a._e()],1),e("a-button",{staticStyle:{"margin-left":"8px"}},[a._v("\n            批量操作 "),e("a-icon",{attrs:{type:"down"}})],1)],1):a._e(),e("a-tooltip",{attrs:{slot:"action",placement:"left",title:"收款单所收金额只对付款单位的应收应付产生影响，可以在回款统计中进行查看。\n        收款单的优惠金额会对利润产生影响，但不影响付款单位的应收应付。优惠金额计入收入类的收款优惠中。"},slot:"action"},[a.btnEnableList.indexOf(1)>-1?e("a-icon",{staticStyle:{"font-size":"20px",float:"right"},attrs:{type:"info-circle"}}):a._e()],1)],1),e("div",[e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:a.columns,dataSource:a.dataSource,pagination:a.ipagination,loading:a.loading,rowSelection:{selectedRowKeys:a.selectedRowKeys,onChange:a.onSelectChange}},on:{change:a.handleTableChange},scopedSlots:a._u([{key:"action",fn:function(t,l){return e("span",{},[e("a",{on:{click:function(t){return a.myHandleDetail(l,"收款")}}},[a._v("查看")]),a.btnEnableList.indexOf(1)>-1?e("a-divider",{attrs:{type:"vertical"}}):a._e(),a.btnEnableList.indexOf(1)>-1?e("a",{on:{click:function(t){return a.myHandleEdit(l)}}},[a._v("编辑")]):a._e(),a.btnEnableList.indexOf(1)>-1?e("a-divider",{attrs:{type:"vertical"}}):a._e(),a.btnEnableList.indexOf(1)>-1?e("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return a.handleDelete(l.id)}}},[e("a",[a._v("删除")])]):a._e()],1)}}])})],1),e("money-in-modal",{ref:"modalForm",on:{ok:a.modalFormOk}}),e("financial-detail",{ref:"modalDetail"})],1)],1)],1)},r=[],o=e("243d"),n=e("0b17"),s=e("b65a"),i=e("8e3c"),d=e("2dab"),m={name:"MoneyInList",mixins:[s["a"],i["FinancialListMixin"]],components:{MoneyInModal:o["default"],FinancialDetail:n["default"],JDate:d["default"]},data:function(){return{queryParam:{billNo:"",searchMaterial:"",type:"收款"},labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(a,t,e){return parseInt(e)+1}},{title:"客户",dataIndex:"organName",width:140},{title:"单据编号",dataIndex:"billNo",width:160},{title:"操作员",dataIndex:"userName",width:80},{title:"单据日期 ",dataIndex:"billTimeStr",width:160},{title:"合计收款",dataIndex:"totalPrice",width:80},{title:"优惠金额",dataIndex:"discountMoney",width:80},{title:"实际收款",dataIndex:"changeAmount",width:80},{title:"备注",dataIndex:"remark",width:200},{title:"操作",dataIndex:"action",width:200,align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/accountHead/list",delete:"/accountHead/delete",deleteBatch:"/accountHead/deleteBatch"}}},computed:{},methods:{}},p=m,c=(e("105d"),e("2877")),b=Object(c["a"])(p,l,r,!1,null,"3bc36b48",null);t["default"]=b.exports}}]);