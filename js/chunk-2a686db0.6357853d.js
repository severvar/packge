(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a686db0","chunk-81928aa8","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-60be34d3","chunk-2d225b46"],{3595:function(e,t,a){},"418f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("template",{slot:"footer"},[e.isReadOnly?a("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("\n      关闭\n    ")]):e._e()],1),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"登录名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["loginName",e.validatorRules.loginName],expression:"[ 'loginName', validatorRules.loginName]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入登录名称",readOnly:!!e.model.id,suffix:"初始密码：123456"}})],1),a("a-form-item",{attrs:{label:"用户姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["username",e.validatorRules.username],expression:"[ 'username', validatorRules.username]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入用户姓名"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色"}},["租户"!=e.model.roleName?a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleId"],expression:"[ 'roleId' ]"}],attrs:{placeholder:"选择角色",dropdownMatchSelectWidth:!1}},e._l(e.roleList,(function(t,i){return a("a-select-option",{key:i,attrs:{value:t.id}},[e._v("\n            "+e._s(t.text)+"\n          ")])})),1):e._e(),"租户"==e.model.roleName?a("a-col",[a("a-row",[e._v("租户")])],1):e._e()],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgaId"],expression:"[ 'orgaId' ]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:e.orgaTree,placeholder:"请选择机构"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"职位"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["position"],expression:"[ 'position' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入职位"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电话号码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["phonenum"],expression:"[ 'phonenum' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入电话号码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电子邮箱"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["email"],expression:"[ 'email' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入电子邮箱"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["userBlngOrgaDsplSeq"],expression:"[ 'userBlngOrgaDsplSeq' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入排序"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"[ 'description' ]"}],attrs:{rows:1,placeholder:"请输入描述"}})],1)],1)],1)],2)},l=[],n=a("88bc"),r=a.n(n),o=a("2b0e"),s=a("61fc"),c=a("9fb0"),u=(a("0fea"),a("4ec3"));var d=a("e610"),p={name:"UserModal",components:{JImageUpload:d["default"],JSelectPosition:s["default"]},data:function(){return{title:"操作",visible:!1,modalWidth:800,drawerWidth:700,orgaTree:[],roleList:[],userId:"",isReadOnly:!1,disableSubmit:!1,dateFormat:"YYYY-MM-DD",validatorRules:{loginName:{rules:[{required:!0,message:"请输入登录名称!"}]},username:{rules:[{required:!0,message:"请输入用户姓名!"}]}},model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},uploadLoading:!1,confirmLoading:!1,headers:{},form:this.$form.createForm(this)}},created:function(){this.loadOrgaData(),this.loadRoleData();var e=o["a"].ls.get(c["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(){this.edit({})},edit:function(e){var t=this,a=this;a.form.resetFields(),a.userId=e.id,a.visible=!0,a.model=Object.assign({},e),a.$nextTick((function(){a.form.setFieldsValue(r()(t.model,"loginName","username","roleId","orgaId","position","phonenum","email","userBlngOrgaDsplSeq","description"))}))},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,i){if(!a){t.confirmLoading=!0;var l,n=Object.assign(e.model,i);e.model.id?l=Object(u["S"])(n):(n.id=e.userId,l=Object(u["k"])(n)),l.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},loadOrgaData:function(){var e=this,t={id:""};Object(u["qb"])(t).then((function(t){t&&(e.orgaTree=t)}))},loadRoleData:function(){var e=this,t={UBType:"UserRole",UBKeyId:""};Object(u["cb"])(t).then((function(t){t&&(e.roleList=t)}))}}},f=p,h=a("2877"),m=Object(h["a"])(f,i,l,!1,null,"480105b0",null);t["default"]=m.exports},"61fc":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-select-biz-component",e._g(e._b({attrs:{width:1e3}},"j-select-biz-component",e.configs,!1),e.$listeners))},l=[],n=a("b296"),r={name:"JSelectPosition",components:{JSelectBizComponent:n["default"]},props:["value"],data:function(){return{settings:{name:"职务",displayKey:"name",returnKeys:["id","code"],listUrl:"/sys/position/list",queryParamCode:"name",queryParamText:"职务名称",columns:[{title:"职务名称",dataIndex:"name",align:"center",width:"30%",widthRight:"70%"},{title:"职务编码",dataIndex:"code",align:"center",width:"35%"},{title:"职级",dataIndex:"rank_dictText",align:"center",width:"25%"}]}}},computed:{configs:function(){return Object.assign({value:this.value},this.settings,this.$attrs)}}},o=r,s=a("2877"),c=Object(s["a"])(o,i,l,!1,null,"09d7ae7b",null);t["default"]=c.exports},"88bc":function(e,t,a){(function(t){var a=1/0,i=9007199254740991,l="[object Arguments]",n="[object Function]",r="[object GeneratorFunction]",o="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,i=e?e.length:0,l=Array(i);while(++a<i)l[a]=t(e[a],a,e);return l}function f(e,t){var a=-1,i=t.length,l=e.length;while(++a<i)e[l+a]=t[a];return e}var h=Object.prototype,m=h.hasOwnProperty,b=h.toString,v=u.Symbol,g=h.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,y=Math.max;function C(e,t,a,i,l){var n=-1,r=e.length;a||(a=j),l||(l=[]);while(++n<r){var o=e[n];t>0&&a(o)?t>1?C(o,t-1,a,i,l):f(l,o):i||(l[l.length]=o)}return l}function O(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var i=-1,l=t.length,n={};while(++i<l){var r=t[i],o=e[r];a(o,r)&&(n[r]=o)}return n}function k(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var a=arguments,i=-1,l=y(a.length-t,0),n=Array(l);while(++i<l)n[i]=a[t+i];i=-1;var r=Array(t+1);while(++i<t)r[i]=a[i];return r[t]=n,d(e,this,r)}}function j(e){return _(e)||S(e)||!!(w&&e&&e[w])}function L(e){if("string"==typeof e||M(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function S(e){return U(e)&&m.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==l)}var _=Array.isArray;function I(e){return null!=e&&N(e.length)&&!$(e)}function U(e){return z(e)&&I(e)}function $(e){var t=V(e)?b.call(e):"";return t==n||t==r}function N(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function z(e){return!!e&&"object"==typeof e}function M(e){return"symbol"==typeof e||z(e)&&b.call(e)==o}var B=k((function(e,t){return null==e?{}:O(e,p(C(t,1),L))}));e.exports=B}).call(this,a("24aa"))},"942c":function(e,t,a){"use strict";a("3595")},b296:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{staticClass:"j-select-biz-component-box",attrs:{type:"flex",gutter:8}},[a("a-col",{staticClass:"left",class:{full:!e.buttons}},[e._t("left",(function(){return[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:e.placeholder,options:e.selectOptions,allowClear:"",disabled:e.disabled,open:e.selectOpen},on:{dropdownVisibleChange:e.handleDropdownVisibleChange},nativeOn:{click:function(t){e.visible=!e.buttons||e.visible}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})]}))],2),e.buttons?a("a-col",{staticClass:"right"},[a("a-button",{attrs:{type:"primary",icon:"search",disabled:e.disabled},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.selectButtonText))])],1):e._e(),a("j-select-biz-component-modal",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t},options:e.handleOptions},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"j-select-biz-component-modal",e.modalProps,!1))],1)},l=[],n=a("b16a"),r={name:"JSelectBizComponent",components:{JSelectBizComponentModal:n["default"]},props:{value:{type:String,default:""},returnId:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},displayKey:{type:String,default:null},returnKeys:{type:Array,default:function(){return["id","id"]}},selectButtonText:{type:String,default:"选择"}},data:function(){return{selectValue:[],selectOptions:[],dataSourceMap:{},visible:!1,selectOpen:!1}},computed:{valueKey:function(){return this.returnId?this.returnKeys[0]:this.returnKeys[1]},modalProps:function(){return Object.assign({valueKey:this.valueKey,multiple:this.multiple,returnKeys:this.returnKeys,displayKey:this.displayKey||this.valueKey},this.$attrs)}},watch:{value:{immediate:!0,handler:function(e){this.selectValue=e?e.split(","):[]}},selectValue:{deep:!0,handler:function(e){var t=this,a=e.map((function(e){return t.dataSourceMap[e]}));this.$emit("select",a);var i=e.join(",");this.$emit("input",i),this.$emit("change",i)}}},methods:{handleOptions:function(e,t){this.selectOptions=e,this.dataSourceMap=t},handleDropdownVisibleChange:function(){var e=this;this.selectOpen=!0,this.$nextTick((function(){e.selectOpen=!1}))}}},o=r,s=(a("942c"),a("2877")),c=Object(s["a"])(o,i,l,!1,null,"11dfb11e",null);t["default"]=c.exports},e610:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-upload",{attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?a("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):a("div",[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},l=[],n=a("2b0e"),r=a("9fb0"),o=a("0fea"),s=a("4ec3"),c=function(){return"-"+parseInt(1e4*Math.random()+1,10)},u=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},d={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/systemConfig/upload",uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1,sizeLimit:0,uploadGoOn:!0}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e)}},created:function(){this.initFileSizeLimit();var e=n["a"].ls.get(r["a"]);this.headers={"X-Access-Token":e}},methods:{initFileSizeLimit:function(){var e=this;Object(s["U"])().then((function(t){200===t.code&&(e.sizeLimit=t.data)}))},initFileList:function(e){if(!e||0==e.length)return this.fileList=[],void(this.picUrl=!1);this.picUrl=!0;for(var t=[],a=e.split(","),i=0;i<a.length;i++){var l=Object(o["d"])("systemConfig/static/"+a[i]);t.push({uid:c(),name:u(a[i]),status:"done",url:l,response:{code:"history",data:a[i]}})}this.fileList=t},beforeUpload:function(e){this.uploadGoOn=!0;var t=e.type,a=e.size;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),this.uploadGoOn=!1,!1;if(a>this.sizeLimit){var i=(this.sizeLimit/1024/1024).toFixed(2);return this.$message.warning("抱歉，图片大小不能超过"+i+"M"),this.uploadGoOn=!1,!1}return!0},handleChange:function(e){e.file.status||!1!==this.uploadGoOn||e.fileList.pop(),this.picUrl=!1;var t=e.fileList;"done"===e.file.status?200===e.file.response.code&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.data),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return e}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var a=[];if(this.isMultiple)for(var i=0;i<e.length;i++)a.push(e[i].response.data);else a.push(e[e.length-1].response.data);a.length>0&&(t=a.join(",")),this.$emit("change",t)},handleDelete:function(e){},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},p=d,f=a("2877"),h=Object(f["a"])(p,i,l,!1,null,"2b496df3",null);t["default"]=h.exports}}]);