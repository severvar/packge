(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6c8b42","chunk-2d237ac5"],{"0df9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"单据编号",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入单据编号"},model:{value:e.queryParam.number,callback:function(t){e.$set(e.queryParam,"number",t)},expression:"queryParam.number"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"商品信息",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入名称、规格、型号"},model:{value:e.queryParam.materialParam,callback:function(t){e.$set(e.queryParam,"materialParam",t)},expression:"queryParam.materialParam"}})],1)],1),a("a-col",{attrs:{md:5,sm:10}},[a("a-form-item",{attrs:{label:"单据日期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-range-picker",{staticStyle:{width:"210px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onDateChange,ok:e.onDateOk},model:{value:e.queryParam.createTimeRange,callback:function(t){e.$set(e.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.myHandleAdd}},[e._v("新增")]):e._e(),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e()],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n            批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e(),a("a-tooltip",{attrs:{slot:"action",placement:"left",title:"采购入库单可以由采购订单转过来，也可以单独创建。\n        采购入库单据中的仓库列表只显示当前用户有权限的仓库。采购入库单可以使用多账户付款。"},slot:"action"},[e.btnEnableList.indexOf(1)>-1?a("a-icon",{staticStyle:{"font-size":"20px",float:"right"},attrs:{type:"info-circle"}}):e._e()],1)],1),a("div",[a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.myHandleDetail(n,"采购入库")}}},[e._v("查看")]),e.btnEnableList.indexOf(1)>-1?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?a("a",{on:{click:function(t){return e.myHandleEdit(n)}}},[e._v("编辑")]):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])]):e._e()],1)}}])})],1),a("purchase-in-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("bill-detail",{ref:"modalDetail"})],1)],1)],1)},i=[],r=a("1536"),o=a("9be9"),l=a("b65a"),s=a("fbb5"),d=a("2dab"),c=a("2b0e"),u={name:"PurchaseInList",mixins:[l["a"],s["BillListMixin"]],components:{PurchaseInModal:r["default"],BillDetail:o["default"],JDate:d["default"]},data:function(){return{queryParam:{number:"",searchMaterial:"",type:"入库",subType:"采购",roleType:c["a"].ls.get("roleType")},labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"供应商名称",dataIndex:"organName",width:120},{title:"单据编号",dataIndex:"number",width:160,customRender:function(e,t,a){return t.linkNumber?e+"[转]":e}},{title:"商品信息",dataIndex:"materialsList",width:220,ellipsis:!0,customRender:function(e,t,a){if(e)return e.replace(",","，")}},{title:"单据日期",dataIndex:"operTimeStr",width:145},{title:"操作员",dataIndex:"userName",width:80},{title:"金额合计",dataIndex:"totalPrice",width:80},{title:"含税合计",dataIndex:"totalTaxLastMoney",width:80,customRender:function(e,t,a){return(t.discountMoney+t.discountLastMoney).toFixed(2)}},{title:"待付金额",dataIndex:"needInMoney",width:80,customRender:function(e,t,a){var n=t.discountLastMoney+t.otherMoney;return n?n.toFixed(2):""}},{title:"付款",dataIndex:"changeAmount",width:60},{title:"欠款",dataIndex:"debt",width:60,customRender:function(e,t,a){var n=t.discountLastMoney+t.otherMoney-t.changeAmount;return n?n.toFixed(2):""}},{title:"操作",dataIndex:"action",align:"center",width:150,scopedSlots:{customRender:"action"}}],url:{list:"/depotHead/list",delete:"/depotHead/delete",deleteBatch:"/depotHead/deleteBatch"}}},computed:{},methods:{}},m=u,p=(a("6da2"),a("2877")),f=Object(p["a"])(m,n,i,!1,null,"7d717ee2",null);t["default"]=f.exports},"6da2":function(e,t,a){"use strict";a("6e6e")},"6e6e":function(e,t,a){},fbb5:function(e,t,a){"use strict";a.r(t),a.d(t,"BillListMixin",(function(){return n}));var n={computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)},isBatchDelEnabled:function(){for(var e=0;e<this.selectedRowKeys.length;e++)if(!this.selectionRows[e].actionsEnabled.delete)return!1;return!0}},methods:{myHandleAdd:function(){this.$refs.modalForm.action="add",this.handleAdd()},myHandleEdit:function(e){this.$refs.modalForm.action="edit",this.handleEdit(e)},myHandleDetail:function(e,t){this.handleDetail(e,t)},handleApprove:function(e){this.$refs.modalForm.action="approve",this.$refs.modalForm.edit(e),this.$refs.modalForm.title="审核"},searchReset:function(){this.queryParam={type:this.queryParam.type,subType:this.queryParam.subType},this.loadData(1)},onDateChange:function(e,t){this.queryParam.beginTime=t[0],this.queryParam.endTime=t[1]},onDateOk:function(e){},removeStatusColumn:function(){-1===this.btnEnableList.indexOf(2)&&this.columns.splice(7,1)}}}}}]);