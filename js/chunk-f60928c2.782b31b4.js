(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f60928c2","chunk-2d0bdf09"],{"2a70":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"85%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("template",{slot:"footer"},[e.isReadOnly?a("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("\n      关闭\n    ")]):e._e()],1),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["name",e.validatorRules.name],expression:"[ 'name', validatorRules.name]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入角色名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",e.validatorRules.type],expression:"[ 'type', validatorRules.type]"}],attrs:{placeholder:"请选择数据类型"}},[a("a-select-option",{attrs:{value:"全部数据"}},[e._v("全部数据")]),a("a-select-option",{attrs:{value:"本机构数据"}},[e._v("本机构数据")]),a("a-select-option",{attrs:{value:"个人数据"}},[e._v("个人数据")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",e.validatorRules.description],expression:"[ 'description', validatorRules.description ]"}],attrs:{rows:5,placeholder:"请输入描述"}})],1)],1)],1)],2)},i=[],l=a("88bc"),o=a.n(l),r=a("4ec3"),s={name:"RoleModal",data:function(){return{title:"操作",visible:!1,model:{},isReadOnly:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{name:{rules:[{required:!0,message:"请输入角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"},{validator:this.validateRoleName}]},type:{rules:[{required:!0,message:"请选择数据类型!"}]},description:{rules:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"name","type","description"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var i,l=Object.assign(e.model,n);i=e.model.id?Object(r["M"])(l):Object(r["f"])(l),i.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateRoleName:function(e,t,a){var n={name:t,id:this.model.id?this.model.id:0};Object(r["x"])(n).then((function(e){e&&200===e.code?e.data.status?a("名称已经存在"):a():a(e.data)}))}}},c=s,d=a("2877"),u=Object(d["a"])(c,n,i,!1,null,"2ac5038e",null);t["default"]=u.exports},"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},i=[],l=a("c1df"),o=a.n(l),r={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD HH:mm:ss",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?o()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?o()(e,this.dateFormat):null}},methods:{moment:o.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);t["default"]=d.exports},"3c56":function(e,t,a){"use strict";a("d1bb")},"4fa6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"角色名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入角色名称查询"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e(),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e()],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n            批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleSetFunction(n)}}},[e._v("分配功能")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleSetPushBtn(n.id)}}},[e._v("分配按钮")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),e.btnEnableList.indexOf(1)>-1?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])]):e._e()],1)}}])})],1),a("role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("role-function-modal",{ref:"roleFunctionModal",on:{ok:e.roleFunctionModalFormOk}}),a("role-push-btn-modal",{ref:"rolePushBtnModal",on:{ok:e.modalFormOk}}),a("a-modal",{attrs:{title:"操作提示"},on:{ok:e.handleTipOk},model:{value:e.roleFunctionModalVisible,callback:function(t){e.roleFunctionModalVisible=t},expression:"roleFunctionModalVisible"}},[a("p",[e._v("分配功能已经操作成功！现在继续"),a("b",[e._v("分配按钮")]),e._v("吗？")])])],1)],1)],1)},i=[],l=a("2a70"),o=a("dad5"),r=a("e77b"),s=a("b65a"),c=a("2dab"),d={name:"RoleList",mixins:[s["a"]],components:{RoleModal:l["default"],RoleFunctionModal:o["default"],RolePushBtnModal:r["default"],JDate:c["default"]},data:function(){return{description:"角色管理页面",roleFunctionModalVisible:!1,currentRoleId:"",queryParam:{name:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"角色名称",align:"center",dataIndex:"name",width:100},{title:"数据类型",align:"center",dataIndex:"type",width:100},{title:"描述",align:"center",dataIndex:"description",width:100},{title:"操作",dataIndex:"action",align:"center",width:150,scopedSlots:{customRender:"action"}}],url:{list:"/role/list",delete:"/role/delete",deleteBatch:"/role/deleteBatch"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handleSetFunction:function(e){this.$refs.roleFunctionModal.edit(e),this.$refs.roleFunctionModal.title="分配功能【分配之后请继续分配按钮】",this.$refs.roleFunctionModal.disableSubmit=!1},handleSetPushBtn:function(e){this.$refs.rolePushBtnModal.edit(e),this.$refs.rolePushBtnModal.title="分配按钮",this.$refs.rolePushBtnModal.disableSubmit=!1},roleFunctionModalFormOk:function(e){this.loadData(),this.roleFunctionModalVisible=!0,this.currentRoleId=e},handleTipOk:function(){this.currentRoleId&&(this.roleFunctionModalVisible=!1,this.handleSetPushBtn(this.currentRoleId))},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1,-1===this.btnEnableList.indexOf(1)&&(this.$refs.modalForm.isReadOnly=!0)}}},u=d,h=(a("3c56"),a("2877")),m=Object(h["a"])(u,n,i,!1,null,"554e9d92",null);t["default"]=m.exports},d1bb:function(e,t,a){},dad5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"95%","overflow-y":"hidden"},attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1)],1),a("a-col",{attrs:{md:10,sm:24}},[[a("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.roleFunctionTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:!0},on:{check:e.onCheck,expand:e.onExpand}})]],2)],1)],1)},i=[],l=a("88bc"),o=a.n(l),r=a("4ec3"),s=a("0fea"),c={name:"RoleFunctionModal",data:function(){return{title:"操作",width:"800px",visible:!1,model:{},roleId:0,iExpandedKeys:[],roleFunctionTree:[],checkedKeys:[],selectedKeys:[],checkStrictly:!1,hiding:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"name","type","description"))})),this.roleId=e.id,this.checkedKeys=[],this.loadTree(e.id)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var i,l=Object.assign(e.model,n);l.type="RoleFunctions",l.keyId=e.roleId,l.value=e.checkedKeys,Object(r["D"])({type:"RoleFunctions",keyId:e.roleId}).then((function(a){a.data&&a.data.id?(l.id=a.data.id,i=Object(r["T"])(l)):i=Object(r["l"])(l),i.then((function(a){200===a.code?t.$emit("ok",e.roleId):t.$message.warning(a.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))}}))},handleCancel:function(){this.close()},loadTree:function(e){var t=this,a=this;a.treeData=[],a.roleFunctionTree=[];Object(s["c"])("/function/findRoleFunction?UBType=RoleFunctions&UBKeyId="+e).then((function(e){if(e){t.allTreeKeys=[];for(var n=0;n<e.length;n++){var i=e[n];a.treeData.push(i),a.roleFunctionTree.push(i),a.setThisExpandedKeys(i),a.getAllKeys(i)}t.loading=!1}}))},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},setThisExpandedKeys:function(e){if(1==e.checked&&this.checkedKeys.push(e.key),e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},onExpand:function(e){this.iExpandedKeys=e}}},d=c,u=a("2877"),h=Object(u["a"])(d,n,i,!1,null,"d06878c0",null);t["default"]=h.exports}}]);