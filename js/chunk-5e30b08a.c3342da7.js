(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e30b08a","chunk-2d0c0a3a"],{"0d4b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{md:24}},[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{md:6,sm:12}},[n("a-form-item",{attrs:{label:"登录名称"}},[n("a-input",{attrs:{placeholder:"输入登录名称模糊查询"},model:{value:e.queryParam.loginName,callback:function(t){e.$set(e.queryParam,"loginName",t)},expression:"queryParam.loginName"}})],1)],1),n("a-col",{attrs:{md:6,sm:12}},[n("a-form-item",{attrs:{label:"用户姓名"}},[n("a-input",{attrs:{placeholder:"输入用户姓名模糊查询"},model:{value:e.queryParam.userName,callback:function(t){e.$set(e.queryParam,"userName",t)},expression:"queryParam.userName"}})],1)],1),n("a-col",{attrs:{md:6,sm:8}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),n("div",{staticClass:"table-operator",staticStyle:{"border-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e(),e.selectedRowKeys.length>0?n("a-dropdown",[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?n("a-menu-item",{key:"1",on:{click:e.batchDel}},[n("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e(),e.btnEnableList.indexOf(1)>-1?n("a-menu-item",{key:"2",on:{click:function(t){return e.batchSetStatus(0)}}},[n("a-icon",{attrs:{type:"check-square"}}),e._v("启用")],1):e._e(),e.btnEnableList.indexOf(1)>-1?n("a-menu-item",{key:"3",on:{click:function(t){return e.batchSetStatus(2)}}},[n("a-icon",{attrs:{type:"close-square"}}),e._v("禁用")],1):e._e()],1),n("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n            批量操作\n            "),n("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),n("div",[n("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[e.btnEnableList.indexOf(1)>-1&&"1"===e.depotFlag?n("a",{on:{click:function(t){return e.btnSetDepot(a)}}},[e._v("分配仓库")]):e._e(),e.btnEnableList.indexOf(1)>-1&&"1"===e.depotFlag?n("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1&&"1"===e.customerFlag?n("a",{on:{click:function(t){return e.btnSetCustomer(a)}}},[e._v("分配客户")]):e._e(),e.btnEnableList.indexOf(1)>-1&&"1"===e.customerFlag?n("a-divider",{attrs:{type:"vertical"}}):e._e(),n("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),e.btnEnableList.indexOf(1)>-1?n("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[n("a",[e._v("删除")])]):e._e(),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"确定重置密码为123456吗?"},on:{confirm:function(){return e.handleReset(a.id)}}},[n("a",[e._v("重置密码")])])],1)}},{key:"customRenderFlag",fn:function(t){return[0===t?n("a-tag",{attrs:{color:"green"}},[e._v("启用")]):e._e(),2===t?n("a-tag",{attrs:{color:"orange"}},[e._v("禁用")]):e._e()]}}])})],1),n("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),n("user-depot-modal",{ref:"userDepotModal",on:{ok:e.modalFormOk}}),n("user-customer-modal",{ref:"userCustomerModal",on:{ok:e.modalFormOk}})],1)],1)],1)},i=[],s=n("418f"),c=n("6b39"),r=n("e95b"),l=n("0fea"),o=n("4ec3"),d=n("b65a"),u=n("4349"),h={name:"UserList",mixins:[d["a"]],components:{UserModal:s["default"],UserDepotModal:c["default"],UserCustomerModal:r["default"],JInput:u["default"]},data:function(){return{queryParam:{},depotFlag:"0",customerFlag:"0",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(e,t,n){return parseInt(n)+1}},{title:"登录名称",dataIndex:"loginName",width:100,align:"center"},{title:"用户姓名",dataIndex:"username",width:100,align:"center"},{title:"用户类型",dataIndex:"userType",width:80,align:"center"},{title:"角色",dataIndex:"roleName",width:100,align:"center"},{title:"机构",dataIndex:"orgAbr",width:115,align:"center"},{title:"电话号码",dataIndex:"phonenum",width:120,align:"center"},{title:"排序",dataIndex:"userBlngOrgaDsplSeq",width:60,align:"center"},{title:"状态",dataIndex:"status",width:70,align:"center",scopedSlots:{customRender:"customRenderFlag"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:260}],url:{list:"/user/list",delete:"/user/delete",deleteBatch:"/user/deleteBatch",resetPwd:"/user/resetPwd",batchSetStatusUrl:"/user/batchSetStatus"}}},created:function(){this.getSystemConfig()},methods:{getSystemConfig:function(){var e=this;Object(o["fb"])().then((function(t){200===t.code&&t.data&&(e.depotFlag=t.data.depotFlag,e.customerFlag=t.data.customerFlag)}))},searchQuery:function(){this.loadData(1),this.getSystemConfig()},searchReset:function(){this.queryParam={},this.loadData(1),this.getSystemConfig()},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1,-1===this.btnEnableList.indexOf(1)&&(this.$refs.modalForm.isReadOnly=!0)},handleReset:function(e){var t=this;Object(l["f"])(t.url.resetPwd,{id:e}).then((function(e){200===e.code?(t.$message.info("重置密码成功！"),t.loadData()):t.$message.warning(e.data.message)}))},btnSetDepot:function(e){this.$refs.userDepotModal.edit(e),this.$refs.userDepotModal.title="分配仓库",this.$refs.userDepotModal.disableSubmit=!1},btnSetCustomer:function(e){this.$refs.userCustomerModal.edit(e),this.$refs.userCustomerModal.title="分配客户",this.$refs.userCustomerModal.disableSubmit=!1}}},m=h,f=(n("c4a4"),n("2877")),p=Object(f["a"])(m,a,i,!1,null,"4178b240",null);t["default"]=p.exports},"2fff":function(e,t,n){},4349:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-input",{attrs:{placeholder:e.placeholder,value:e.inputVal},on:{input:e.backValue}})},i=[],s="like",c="ne",r="ge",l="le",o={name:"JInput",props:{value:{type:String,required:!1},type:{type:String,required:!1,default:s},placeholder:{type:String,required:!1,default:""}},watch:{value:{immediate:!0,handler:function(){this.initVal()}},type:function(){this.backValue({target:{value:this.inputVal}})}},model:{prop:"value",event:"change"},data:function(){return{inputVal:""}},methods:{initVal:function(){if(this.value){var e=this.value;switch(this.type){case s:e=e.substring(1,e.length-1);break;case c:e=e.substring(1);break;case r:e=e.substring(2);break;case l:e=e.substring(2);break;default:}this.inputVal=e}else this.inputVal=""},backValue:function(e){var t=e.target.value;switch(this.type){case s:t="*"+t+"*";break;case c:t="!"+t;break;case r:t=">="+t;break;case l:t="<="+t;break;default:}this.$emit("change",t)}}},d=o,u=n("2877"),h=Object(u["a"])(d,a,i,!1,null,"23956376",null);t["default"]=h.exports},"6b39":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{staticStyle:{top:"5%",height:"95%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[n("div",{staticClass:"drawer-bootom-button"},[n("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),n("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),n("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),n("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),n("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),n("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),n("a-button",[e._v("\n          树操作 "),n("a-icon",{attrs:{type:"up"}})],1)],1)],1),n("a-col",{attrs:{md:10,sm:24}},[[n("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.roleFunctionTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:!0},on:{check:e.onCheck,expand:e.onExpand}})]],2)],1)],1)},i=[],s=n("88bc"),c=n.n(s),r=n("4ec3"),l=n("0fea"),o={name:"UserDepotModal",data:function(){return{title:"操作",visible:!1,model:{},roleId:0,iExpandedKeys:[],roleFunctionTree:[],checkedKeys:[],selectedKeys:[],checkStrictly:!1,hiding:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(c()(t.model,"name","type","description"))})),this.roleId=e.id,this.checkedKeys=[],this.loadTree(e.id)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(n,a){if(!n){t.confirmLoading=!0;var i,s=Object.assign(e.model,a);s.type="UserDepot",s.keyId=e.roleId,s.value=e.checkedKeys,Object(r["D"])({type:"UserDepot",keyId:e.roleId}).then((function(e){e.data&&e.data.id?(s.id=e.data.id,i=Object(r["T"])(s)):i=Object(r["l"])(s),i.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))}}))},handleCancel:function(){this.close()},loadTree:function(e){var t=this,n=this;n.treeData=[],n.roleFunctionTree=[];Object(l["c"])("/depot/findUserDepot?UBType=UserDepot&UBKeyId="+e).then((function(e){if(e){t.allTreeKeys=[];for(var a=0;a<e.length;a++){var i=e[a];n.treeData.push(i),n.roleFunctionTree.push(i),n.setThisExpandedKeys(i),n.getAllKeys(i)}t.loading=!1}}))},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},setThisExpandedKeys:function(e){if(1==e.checked&&this.checkedKeys.push(e.key),e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},onExpand:function(e){this.iExpandedKeys=e}}},d=o,u=n("2877"),h=Object(u["a"])(d,a,i,!1,null,"0e14ee9a",null);t["default"]=h.exports},c4a4:function(e,t,n){"use strict";n("2fff")},e95b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{staticStyle:{top:"5%",height:"95%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[n("div",{staticClass:"drawer-bootom-button"},[n("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),n("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),n("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),n("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),n("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),n("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),n("a-button",[e._v("\n          树操作 "),n("a-icon",{attrs:{type:"up"}})],1)],1)],1),n("a-col",{attrs:{md:10,sm:24}},[[n("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.roleFunctionTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:!0},on:{check:e.onCheck,expand:e.onExpand}})]],2)],1)],1)},i=[],s=n("88bc"),c=n.n(s),r=n("4ec3"),l=n("0fea"),o={name:"UserCustomerModal",data:function(){return{title:"操作",visible:!1,model:{},roleId:0,iExpandedKeys:[],roleFunctionTree:[],checkedKeys:[],selectedKeys:[],checkStrictly:!1,hiding:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(c()(t.model,"name","type","description"))})),this.roleId=e.id,this.checkedKeys=[],this.loadTree(e.id)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(n,a){if(!n){t.confirmLoading=!0;var i,s=Object.assign(e.model,a);s.type="UserCustomer",s.keyId=e.roleId,s.value=e.checkedKeys,Object(r["D"])({type:"UserCustomer",keyId:e.roleId}).then((function(e){e.data&&e.data.id?(s.id=e.data.id,i=Object(r["T"])(s)):i=Object(r["l"])(s),i.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))}}))},handleCancel:function(){this.close()},loadTree:function(e){var t=this,n=this;n.treeData=[],n.roleFunctionTree=[];Object(l["c"])("/supplier/findUserCustomer?UBType=UserCustomer&UBKeyId="+e).then((function(e){if(e){t.allTreeKeys=[];for(var a=0;a<e.length;a++){var i=e[a];n.treeData.push(i),n.roleFunctionTree.push(i),n.setThisExpandedKeys(i),n.getAllKeys(i)}t.loading=!1}}))},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},setThisExpandedKeys:function(e){if(1==e.checked&&this.checkedKeys.push(e.key),e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},onExpand:function(e){this.iExpandedKeys=e}}},d=o,u=n("2877"),h=Object(u["a"])(d,a,i,!1,null,"2bf7fd80",null);t["default"]=h.exports}}]);