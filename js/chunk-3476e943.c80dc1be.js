(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3476e943","chunk-2d0ab2e6"],{"13d2":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-select",{attrs:{value:t.arrayValue,mode:"multiple",placeholder:t.placeholder},on:{change:t.onChange}},t._l(t.options,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.value}},[t._v("\n    "+t._s(e.text||e.label)+"\n  ")])})),1)},i=[],n={name:"JSelectMultiple",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},readOnly:{type:Boolean,required:!1,default:!1},options:{type:Array,required:!0},triggerChange:{type:Boolean,required:!1,default:!1}},data:function(){return{arrayValue:this.value?this.value.split(","):[]}},watch:{value:function(t){this.arrayValue=t?this.value.split(","):[]}},methods:{onChange:function(t){this.triggerChange?this.$emit("change",t.join(",")):this.$emit("input",t.join(","))}}},r=n,l=a("2877"),s=Object(l["a"])(r,o,i,!1,null,null,null);e["default"]=s.exports},"7c64":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:t.title,width:1e3,visible:t.visible,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange,type:t.getType},customRow:t.rowAction},on:{change:t.handleTableChange}})],1)},i=[],n=a("b65a"),r={name:"LinkBillList",mixins:[n["a"]],data:function(){return{title:"操作",visible:!1,disableMixinCreated:!0,selectedRowKeys:[],selectionRows:[],selectBillRows:[],selectBillIds:"",queryParam:{number:"",searchMaterial:"",type:"",subType:"",status:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(t,e,a){return parseInt(a)+1}},{title:"",dataIndex:"organName",width:120},{title:"单据编号",dataIndex:"number",width:150},{title:"商品信息",dataIndex:"materialsList",width:220,ellipsis:!0,customRender:function(t,e,a){if(t)return t.replace(",","，")}},{title:"单据日期",dataIndex:"operTimeStr",width:145},{title:"操作员",dataIndex:"userName",width:60},{title:"金额合计",dataIndex:"totalPrice",width:70}],url:{list:"/depotHead/list"}}},computed:{getType:function(){return"radio"}},created:function(){},methods:{show:function(t,e,a,o){this.queryParam.type=t,this.queryParam.subType=e,this.queryParam.status=o,this.columns[1].title=a,this.model=Object.assign({},{}),this.visible=!0,this.loadData(1)},close:function(){this.$emit("close"),this.visible=!1},handleCancel:function(){this.close()},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},handleOk:function(){this.getSelectBillRows(),this.$emit("ok",this.selectBillRows),this.close()},getSelectBillRows:function(){var t=this.dataSource,e="";this.selectBillRows=[];for(var a=0,o=t.length;a<o;a++)this.selectedRowKeys.includes(t[a].id)&&(this.selectBillRows.push(t[a]),e=e+","+t[a].id);this.selectBillIds=e.substring(1)},rowAction:function(t,e){var a=this;return{on:{click:function(){var e=[];e.push(t.id),a.selectedRowKeys=e},dblclick:function(){var e=[];e.push(t.id),a.selectedRowKeys=e,a.handleOk()}}}}}},l=r,s=a("2877"),c=Object(s["a"])(l,o,i,!1,null,"006f6296",null);e["default"]=c.exports},"80fd":function(t,e,a){"use strict";a.r(e),a.d(e,"BillModalMixin",(function(){return d}));a("e2e0");var o=a("4ec3"),i=a("0fea"),n=a("ca00"),r=a("2b0e");function l(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=s(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return r=t.done,t},e:function(t){l=!0,n=t},f:function(){try{r||null==a.return||a.return()}finally{if(l)throw n}}}}function s(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}var d={data:function(){return{action:"",manyAccountBtnStatus:!1,supList:[],cusList:[],retailList:[],personList:{options:[],value:""},depotList:[],accountList:[],accountIdList:[],accountMoneyList:[],billUnitPirce:"",spans:{labelCol1:{span:2},wrapperCol1:{span:22},labelCol1_5:{span:3},wrapperCol1_5:{span:21},labelCol2:{span:4},wrapperCol2:{span:20},labelCol3:{span:6},wrapperCol3:{span:18},labelCol6:{span:12},wrapperCol6:{span:12}}}},created:function(){this.initSupplier(),this.initCustomer(),this.initRetail(),this.initSalesman(),this.initDepot(),this.initAccount()},computed:{readOnly:function(){return"add"!==this.action&&"edit"!==this.action}},methods:{addInit:function(t){var e=this;Object(i["c"])("/sequence/buildNumber").then((function(a){a&&200===a.code&&e.form.setFieldsValue({number:t+a.data.defaultNumber})})),this.$nextTick((function(){e.form.setFieldsValue({operTime:Object(n["g"])(),discount:0,discountMoney:0,discountLastMoney:0,otherMoney:0,changeAmount:0,debt:0})})),this.$nextTick((function(){Object(o["db"])({}).then((function(t){if(t&&200===t.code){var a,o=l(t.data.accountList);try{for(o.s();!(a=o.n()).done;){var i=a.value;i.isDefault&&e.form.setFieldsValue({accountId:i.id})}}catch(n){o.e(n)}finally{o.f()}}}))})),this.accountIdList=[],this.accountMoneyList=[],this.manyAccountBtnStatus=!1},initSupplier:function(){var t=this;Object(o["Y"])({}).then((function(e){e&&(t.supList=e)}))},initCustomer:function(){var t=this;Object(o["W"])({}).then((function(e){e&&(t.cusList=e)}))},initRetail:function(){var t=this;Object(o["X"])({}).then((function(e){e&&(t.retailList=e)}))},initSalesman:function(){var t=this;Object(o["ib"])({type:1}).then((function(e){e&&(t.personList.options=e)}))},initDepot:function(){var t=this;Object(i["c"])("/depot/findDepotByCurrentUser").then((function(e){if(200===e.code)for(var a=e.data,o=0;o<a.length;o++){var i={};i.value=a[o].id+"",i.text=a[o].depotName,i.title=a[o].depotName;var n,r=l(t.materialTable.columns);try{for(r.s();!(n=r.n()).done;){var s=n.value;"depotId"!=s.key&&"anotherDepotId"!=s.key||s.options.push(i)}}catch(c){r.e(c)}finally{r.f()}}}))},initAccount:function(){var t=this;Object(o["db"])({}).then((function(e){if(e&&200===e.code){var a=e.data.accountList;a.splice(0,0,{id:0,name:"多账户"}),t.accountList=a}}))},handleManyAccount:function(){this.selectAccount(0)},selectAccount:function(t){0===t?(this.$refs.manyAccountModalForm.edit(this.accountIdList,this.accountMoneyList),this.$refs.manyAccountModalForm.title="多账户结算",this.manyAccountBtnStatus=!0):(this.accountIdList=[],this.accountMoneyList=[],this.manyAccountBtnStatus=!1)},manyAccountModalFormOk:function(t,e,a){var o=this;this.accountIdList=t,this.accountMoneyList=e;var i=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0,r=(i+n-a).toFixed(2);this.$nextTick((function(){o.form.setFieldsValue({changeAmount:a,debt:r})}))},onAdded:function(t){var e=t.row,a=t.target;Object(i["c"])("/depot/findDepotByCurrentUser").then((function(t){if(200===t.code)for(var o=t.data,i=0;i<o.length;i++)o[i].isDefault&&a.setValues([{rowKey:e.id,values:{depotId:o[i].id+""}}])}))},onValueChange:function(t){var e,a,i,l,s,c,d,u,m=this,h=(t.type,t.row),p=t.column,f=t.value,y=t.target;switch(p.key){case"depotId":h.barCode&&m.getStockByDepotBarCode(h,y);break;case"barCode":e={barCode:f,mpList:Object(n["f"])(r["a"].ls.get("materialPropertyList")),prefixNo:this.prefixNo},Object(o["gb"])(e).then((function(t){t&&200===t.code&&(y.setValues([{rowKey:h.id,values:{barCode:t.data.mBarCode,name:t.data.name,standard:t.data.standard,model:t.data.model,materialOther:t.data.materialOther,unit:t.data.commodityUnit,operNumber:1,unitPrice:t.data.billPrice,taxUnitPrice:t.data.billPrice,allPrice:t.data.billPrice,taxRate:0,taxMoney:0,taxLastMoney:t.data.billPrice}}]),m.getStockByDepotBarCode(h,y),y.recalcAllStatisticsColumns(),m.autoChangePrice(y))}));break;case"operNumber":a=f-0,c=h.taxRate-0,i=h.unitPrice-0,l=h.taxUnitPrice-0,s=(i*a).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:h.id,values:{allPrice:s,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),m.autoChangePrice(y);break;case"unitPrice":a=h.operNumber-0,i=f-0,c=h.taxRate-0,l=(i*(1+.01*c)).toFixed(2)-0,s=(i*a).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:h.id,values:{taxUnitPrice:l,allPrice:s,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),m.autoChangePrice(y);break;case"allPrice":a=h.operNumber-0,c=h.taxRate-0,s=f-0,i=(s/a).toFixed(2)-0,l=(i*(1+.01*c)).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:h.id,values:{unitPrice:i,taxUnitPrice:l,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),m.autoChangePrice(y);break;case"taxRate":a=h.operNumber-0,s=h.allPrice-0,i=h.unitPrice-0,c=f-0,l=(i*(1+.01*c)).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:h.id,values:{taxUnitPrice:l,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),m.autoChangePrice(y);break;case"taxLastMoney":a=h.operNumber-0,u=f-0,c=h.taxRate-0,l=(u/a).toFixed(2)-0,i=(l/(1+.01*c)).toFixed(2)-0,s=(i*a).toFixed(2)-0,d=(u-s).toFixed(2)-0,y.setValues([{rowKey:h.id,values:{unitPrice:i,taxUnitPrice:l,allPrice:s,taxMoney:d}}]),y.recalcAllStatisticsColumns(),m.autoChangePrice(y);break}},onDeleted:function(t,e){e.recalcAllStatisticsColumns(),this.autoChangePrice(e)},getStockByDepotBarCode:function(t,e){Object(o["bb"])({depotId:t.depotId,barCode:t.barCode}).then((function(a){a&&200===a.code&&(e.setValues([{rowKey:t.id,values:{stock:a.data.stock}}]),e.recalcAllStatisticsColumns())}))},autoChangePrice:function(t){var e=this,a=t.statisticsColumns.taxLastMoney-0,o=this.form.getFieldValue("discount")-0,i=this.form.getFieldValue("otherMoney")-0,n=(.01*o*a).toFixed(2)-0,r=(a-n).toFixed(2)-0,l=(r+i).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discount:o,discountMoney:n,discountLastMoney:r,changeAmount:l,debt:0})}))},onKeyUpDiscount:function(t){var e=this,a=t.target.value-0,o=this.form.getFieldValue("discountMoney")-0,i=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0,r=(o+i).toFixed(2)-0,l=(r*a*.01).toFixed(2)-0,s=(r-l).toFixed(2)-0,c=(s+n).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discountMoney:l,discountLastMoney:s,changeAmount:c,debt:0})}))},onKeyUpDiscountMoney:function(t){var e=this,a=t.target.value-0,o=this.form.getFieldValue("discount")-0,i=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0;if(100!==o){var r=(i/(1-o/100)).toFixed(2)-0,l=(a/r*100).toFixed(2)-0,s=(r-a).toFixed(2)-0,c=(s+n).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discount:l,discountLastMoney:s,changeAmount:c,debt:0})}))}},onKeyUpOtherMoney:function(t){var e=this,a=t.target.value-0,o=this.form.getFieldValue("discountLastMoney")-0,i=(o+a).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({changeAmount:i,debt:0})}))},onKeyUpChangeAmount:function(t){var e=this,a=t.target.value-0,o=this.form.getFieldValue("discountLastMoney")-0,i=this.form.getFieldValue("otherMoney")-0,n=(o+i-a).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({debt:n})}))}}}},"908e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("j-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:t.title,width:t.width,visible:t.visible,confirmLoading:t.confirmLoading,maskClosable:!1,keyboard:!1,forceRender:!0,switchFullscreen:"",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"客户"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["organId",t.validatorRules.organId],expression:"[ 'organId', validatorRules.organId ]"}],attrs:{placeholder:"选择客户",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children"}},t._l(t.cusList,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.id}},[t._v("\n                  "+t._s(e.supplier)+"\n                ")])})),1)],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"单据日期"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["operTime",t.validatorRules.operTime],expression:"['operTime', validatorRules.operTime]"}],attrs:{"show-time":!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"单据编号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["number"],expression:"[ 'number' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入单据编号",readOnly:!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"关联单据"}},[a("a-input-search",{directives:[{name:"decorator",rawName:"v-decorator",value:["linkNumber"],expression:"[ 'linkNumber' ]"}],attrs:{placeholder:"请选择关联单据",readOnly:!0},on:{search:t.onSearchLinkNumber}})],1)],1)],1),a("j-editable-table",{ref:t.refKeys[0],attrs:{loading:t.materialTable.loading,columns:t.materialTable.columns,dataSource:t.materialTable.dataSource,maxHeight:300,rowNumber:!1,rowSelection:!0,actionButton:!0},on:{valueChange:t.onValueChange,added:t.onAdded,deleted:t.onDeleted}}),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:24,md:24,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"[ 'remark' ]"}],staticStyle:{"margin-top":"8px"},attrs:{rows:2,placeholder:"请输入备注"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"优惠率"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["discount"],expression:"[ 'discount' ]",modifiers:{trim:!0}}],staticStyle:{width:"185px"},attrs:{placeholder:"请输入优惠率",suffix:"%"},on:{keyup:t.onKeyUpDiscount}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"退款优惠"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["discountMoney"],expression:"[ 'discountMoney' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入付款优惠"},on:{keyup:t.onKeyUpDiscountMoney}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"优惠后金额"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["discountLastMoney"],expression:"[ 'discountLastMoney' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入优惠后金额",readOnly:!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"其它费用"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["otherMoney"],expression:"[ 'otherMoney' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入其它费用"},on:{keyup:t.onKeyUpOtherMoney}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算账户"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["accountId",t.validatorRules.accountId],expression:"[ 'accountId', validatorRules.accountId ]"}],staticStyle:{width:"185px"},attrs:{placeholder:"选择结算账户",dropdownMatchSelectWidth:!1,allowClear:""},on:{select:t.selectAccount}},t._l(t.accountList,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.id}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),1),a("a-tooltip",{attrs:{title:"多账户明细"}},[a("a-button",{directives:[{name:"show",rawName:"v-show",value:t.manyAccountBtnStatus,expression:"manyAccountBtnStatus"}],staticStyle:{"margin-left":"8px"},attrs:{type:"default",icon:"folder",size:"small"},on:{click:t.handleManyAccount}})],1)],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"本次退款"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["changeAmount"],expression:"[ 'changeAmount' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入本次退款",readOnly:!0},on:{keyup:t.onKeyUpChangeAmount}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"本次欠款"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["debt"],expression:"[ 'debt' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入本次欠款",readOnly:!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"销售人员"}},[a("j-select-multiple",{attrs:{placeholder:"请选择销售人员",options:t.personList.options},model:{value:t.personList.value,callback:function(e){t.$set(t.personList,"value",e)},expression:"personList.value"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"附件"}},[a("j-upload",{attrs:{bizPath:"bill"},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1)],1)],1)],1)],1)],1),a("many-account-modal",{ref:"manyAccountModalForm",on:{ok:t.manyAccountModalFormOk}}),a("link-bill-list",{ref:"linkBillList",on:{ok:t.linkBillListOk}})],1)},i=[],n=a("88bc"),r=a.n(n),l=a("ddd3"),s=a("7c64"),c=a("e2e0"),d=a("d0ed"),u=a("80fd"),m=a("ca00"),h=a("0fea"),p=a("13d2"),f=a("cf74"),y=a("2dab"),b=a("2b0e");function v(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=w(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return r=t.done,t},e:function(t){l=!0,n=t},f:function(){try{r||null==a.return||a.return()}finally{if(l)throw n}}}}function w(t,e){if(t){if("string"===typeof t)return g(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}var C={name:"SaleBackModal",mixins:[d["a"],u["BillModalMixin"]],components:{ManyAccountModal:l["default"],LinkBillList:s["default"],JUpload:f["default"],JDate:y["default"],JSelectMultiple:p["default"]},data:function(){return{title:"操作",width:"1450px",moreStatus:!1,addDefaultRowNum:1,visible:!1,operTimeStr:"",prefixNo:"XSTH",fileList:[],model:{},labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},refKeys:["materialDataTable"],activeKey:"materialDataTable",materialTable:{loading:!1,dataSource:[],columns:[{title:"仓库名称",key:"depotId",width:"8%",type:c["a"].select,placeholder:"请选择${title}",options:[],validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"条码",key:"barCode",width:"10%",type:c["a"].popupJsh,multi:!1,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"名称",key:"name",width:"8%",type:c["a"].input,readonly:!0},{title:"规格",key:"standard",width:"5%",type:c["a"].input,readonly:!0},{title:"型号",key:"model",width:"5%",type:c["a"].input,readonly:!0},{title:"扩展信息",key:"materialOther",width:"6%",type:c["a"].input,readonly:!0},{title:"库存",key:"stock",width:"5%",type:c["a"].input,readonly:!0},{title:"单位",key:"unit",width:"4%",type:c["a"].input,readonly:!0},{title:"数量",key:"operNumber",width:"5%",type:c["a"].inputNumber,statistics:!0,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"单价",key:"unitPrice",width:"5%",type:c["a"].inputNumber},{title:"含税单价",key:"taxUnitPrice",width:"6%",type:c["a"].inputNumber,readonly:!0},{title:"金额",key:"allPrice",width:"5%",type:c["a"].inputNumber,statistics:!0},{title:"税率(%)",key:"taxRate",width:"6%",type:c["a"].inputNumber},{title:"税额",key:"taxMoney",width:"5%",type:c["a"].inputNumber,statistics:!0,readonly:!0},{title:"价税合计",key:"taxLastMoney",width:"6%",type:c["a"].inputNumber,statistics:!0},{title:"备注",key:"remark",width:"5%",type:c["a"].input}]},confirmLoading:!1,validatorRules:{operTime:{rules:[{required:!0,message:"请输入单据日期!"}]},organId:{rules:[{required:!0,message:"请选择客户!"}]},accountId:{rules:[{required:!0,message:"请选择结算账户!"}]}},url:{add:"/depotHead/addDepotHeadAndDetail",edit:"/depotHead/updateDepotHeadAndDetail",detailList:"/depotItem/getDetailList"}}},created:function(){},methods:{editAfter:function(){var t=this;if("add"===this.action)this.addInit(this.prefixNo),this.personList.value="",this.fileList=[];else{this.model.operTime=this.model.operTimeStr,this.model.debt=(this.model.discountLastMoney+this.model.otherMoney-this.model.changeAmount).toFixed(2),null==this.model.accountId||0==this.model.accountId?(this.model.accountId=0,this.manyAccountBtnStatus=!0,this.accountIdList=this.model.accountIdList,this.accountMoneyList=this.model.accountMoneyList):this.manyAccountBtnStatus=!1,this.personList.value=this.model.salesMan,this.fileList=this.model.fileName,this.$nextTick((function(){t.form.setFieldsValue(r()(t.model,"organId","operTime","number","linkNumber","remark","discount","discountMoney","discountLastMoney","otherMoney","accountId","changeAmount","debt","salesMan"))}));var e={headerId:this.model.id,mpList:Object(m["f"])(b["a"].ls.get("materialPropertyList"))},a=(this.readOnly,this.url.detailList);this.requestSubTableData(a,e,this.materialTable)}},classifyIntoFormData:function(t){var e=0,a=Object.assign(this.model,t.formValue),o=t.tablesValue[0].values;a.type="入库",a.subType="销售退货",a.defaultNumber=a.number;var i,n=v(o);try{for(n.s();!(i=n.n()).done;){var r=i.value;e+=r.allPrice-0}}catch(l){n.e(l)}finally{n.f()}return a.totalPrice=0-e,a.changeAmount=0-a.changeAmount,0===a.accountId&&(a.accountId=""),this.accountMoneyList=Object(m["a"])(this.accountMoneyList),a.accountIdList=this.accountIdList.length>0?JSON.stringify(this.accountIdList):"",a.accountMoneyList=this.accountMoneyList.length>0?JSON.stringify(this.accountMoneyList):"",this.fileList&&this.fileList.length>0&&(a.fileName=this.fileList),this.model.id&&(a.id=this.model.id),a.salesMan=this.personList.value,{info:JSON.stringify(a),rows:JSON.stringify(o)}},onSearchLinkNumber:function(){this.$refs.linkBillList.show("出库","销售","客户","0"),this.$refs.linkBillList.title="选择销售出库"},linkBillListOk:function(t){var e=this;if(t&&t.length>0){var a=t[0];this.$nextTick((function(){e.form.setFieldsValue({organId:a.organId,linkNumber:a.number,remark:a.remark,discountLastMoney:a.totalPrice,changeAmount:a.totalPrice})}));var o={headerId:a.id,mpList:Object(m["f"])(b["a"].ls.get("materialPropertyList"))};this.requestSubTableDataEx(this.url.detailList,o,this.materialTable)}},requestSubTableDataEx:function(t,e,a,o){a.loading=!0,Object(h["c"])(t,e).then((function(t){if(t&&200===t.code){for(var e=t.data.rows,i=[],n=0;n<e.length;n++){var r=e[n];r.taxMoney=0,r.taxLastMoney=r.allPrice,i.push(r)}a.dataSource=i,"function"===typeof o&&o(t)}})).finally((function(){a.loading=!1}))}}},x=C,L=a("2877"),A=Object(L["a"])(x,o,i,!1,null,"50f5feef",null);e["default"]=A.exports},d0ed:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var o=a("7550"),i=a("e2e0"),n=a("0fea"),r={components:{JEditableTable:o["default"]},data:function(){return{title:"操作",visible:!1,form:this.$form.createForm(this),confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}}},methods:{getAllTable:function(){var t=this;if(!(this.refKeys instanceof Array))throw this.throwNotArray("refKeys");var e=this.refKeys.map((function(e){return Object(i["c"])(t,e)}));return Promise.all(e)},eachAllTable:function(t){this.getAllTable().then((function(e){e.forEach((function(e,a){"function"===typeof t&&t(e,a)}))}))},add:function(){"function"===typeof this.addBefore&&this.addBefore();var t=this.addDefaultRowNum;"number"!==typeof t&&(t=1),this.eachAllTable((function(e){e.add(t)})),"function"===typeof this.addAfter&&this.addAfter(this.model),this.edit({})},edit:function(t){"function"===typeof this.editBefore&&this.editBefore(t),this.visible=!0,this.activeKey=this.refKeys[0],this.form.resetFields(),this.model=Object.assign({},t),"function"===typeof this.editAfter&&this.editAfter(this.model)},close:function(){this.visible=!1,this.eachAllTable((function(t){t.initialize()})),this.$emit("close")},requestSubTableData:function(t,e,a,o){a.loading=!0,Object(n["c"])(t,e).then((function(t){t&&200===t.code&&(a.dataSource=t.data.rows,"function"===typeof o&&o(t))})).finally((function(){a.loading=!1}))},request:function(t){var e=this,a=this.url.add,o="post";this.model.id&&(a=this.url.edit,o="put"),this.confirmLoading=!0,Object(n["e"])(a,t,o).then((function(t){200===t.code?(e.$emit("ok"),e.confirmLoading=!1,e.close()):(e.$message.warning(t.data.message),e.confirmLoading=!1)})).finally((function(){}))},handleChangeTabs:function(t){Object(i["c"])(this,t).then((function(t){t.resetScrollTop()}))},handleCancel:function(){this.close()},handleOk:function(){var t=this;this.getAllTable().then((function(e){return Object(i["d"])(t.form,e)})).then((function(e){if("function"!==typeof t.classifyIntoFormData)throw t.throwNotFunction("classifyIntoFormData");var a=t.classifyIntoFormData(e);return t.request(a)})).catch((function(e){e.error===i["b"]&&(t.activeKey=null==e.index?t.activeKey:t.refKeys[e.index])}))},throwNotFunction:function(t){return"".concat(t," 未定义或不是一个函数")},throwNotArray:function(t){return"".concat(t," 未定义或不是一个数组")}}}},ddd3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{staticStyle:{top:"20%",height:"60%","overflow-y":"hidden"},attrs:{title:t.title,width:650,visible:t.visible,confirmLoading:t.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算账户1"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["oneAccountId"],expression:"[ 'oneAccountId' ]"}],staticStyle:{width:"185px"},attrs:{placeholder:"请选择结算账户",dropdownMatchSelectWidth:!1,allowClear:""}},t._l(t.accountList,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),1)],1)],1),a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["oneAccountPrice"],expression:"[ 'oneAccountPrice' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入金额"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算账户2"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["twoAccountId"],expression:"[ 'twoAccountId' ]"}],staticStyle:{width:"185px"},attrs:{placeholder:"请选择结算账户",dropdownMatchSelectWidth:!1,allowClear:""}},t._l(t.accountList,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),1)],1)],1),a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["twoAccountPrice"],expression:"[ 'twoAccountPrice' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入金额"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算账户3"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["threeAccountId"],expression:"[ 'threeAccountId' ]"}],staticStyle:{width:"185px"},attrs:{placeholder:"请选择结算账户",dropdownMatchSelectWidth:!1,allowClear:""}},t._l(t.accountList,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])})),1)],1)],1),a("a-col",{attrs:{lg:12,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"结算金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["threeAccountPrice"],expression:"[ 'threeAccountPrice' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入金额"}})],1)],1)],1)],1)],1)],1)},i=[],n=a("88bc"),r=a.n(n),l=a("4ec3"),s={name:"ManyAccountModal",data:function(){return{title:"操作",visible:!1,model:{},accountList:[],accountIdList:[],accountMoneyList:[],labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this)}},created:function(){this.initAccount()},methods:{edit:function(t,e){var a=this;this.form.resetFields(),this.model=Object.assign({},{});var o=[],i=[];t&&t.indexOf(",")>-1?(o=t.split(","),i=e.split(",")):(o=t,i=e),o[0]&&(this.model.oneAccountId=o[0]-0),o[1]&&(this.model.twoAccountId=o[1]-0),o[2]&&(this.model.threeAccountId=o[2]-0),i[0]&&(this.model.oneAccountPrice=Math.abs(i[0])),i[1]&&(this.model.twoAccountPrice=Math.abs(i[1])),i[2]&&(this.model.threeAccountPrice=Math.abs(i[2])),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(r()(a.model,"oneAccountId","oneAccountPrice","twoAccountId","twoAccountPrice","threeAccountId","threeAccountPrice"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var t=this,e=this;this.form.validateFields((function(a,o){if(!a){var i=0;e.confirmLoading=!0,e.accountIdList=[],e.accountMoneyList=[];var n=Object.assign(t.model,o);void 0!==n.oneAccountId&&e.accountIdList.push(n.oneAccountId),void 0!==n.twoAccountId&&e.accountIdList.push(n.twoAccountId),void 0!==n.threeAccountId&&e.accountIdList.push(n.threeAccountId),void 0!==n.oneAccountPrice&&(e.accountMoneyList.push(n.oneAccountPrice),i+=n.oneAccountPrice),void 0!==n.twoAccountPrice&&(e.accountMoneyList.push(n.twoAccountPrice),i+=n.twoAccountPrice),void 0!==n.threeAccountPrice&&(e.accountMoneyList.push(n.threeAccountPrice),i+=n.threeAccountPrice),e.$emit("ok",e.accountIdList,e.accountMoneyList,i),e.confirmLoading=!1,e.close()}}))},handleCancel:function(){this.close()},initAccount:function(){var t=this;Object(l["db"])({}).then((function(e){e&&200===e.code&&(t.accountList=e.data.accountList)}))}}},c=s,d=a("2877"),u=Object(d["a"])(c,o,i,!1,null,"5173d216",null);e["default"]=u.exports}}]);