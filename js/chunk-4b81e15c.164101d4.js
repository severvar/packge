(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b81e15c","chunk-81928aa8"],{"0f9d":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("j-select-biz-component",e._g(e._b({attrs:{value:e.value,ellipsisLength:25,listUrl:e.url.list,columns:e.columns}},"j-select-biz-component",e.attrs,!1),e.$listeners))},a=[],i=n("b296"),s={name:"JSelectMultiUser",components:{JSelectBizComponent:i["default"]},props:["value"],data:function(){return{url:{list:"/sys/user/list"},columns:[{title:"姓名",align:"center",width:"25%",widthRight:"70%",dataIndex:"realname"},{title:"账号",align:"center",width:"25%",dataIndex:"username"},{title:"电话",align:"center",width:"20%",dataIndex:"phone"},{title:"出生日期",align:"center",width:"20%",dataIndex:"birthday"}],default:{name:"用户",width:1200,displayKey:"realname",returnKeys:["id","username"],queryParamText:"账号"}}},computed:{attrs:function(){return Object.assign(this.default,this.$attrs)}}},o=s,u=n("2877"),c=Object(u["a"])(o,l,a,!1,null,"050d9629",null);t["default"]=c.exports},3595:function(e,t,n){},"942c":function(e,t,n){"use strict";n("3595")},b296:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",{staticClass:"j-select-biz-component-box",attrs:{type:"flex",gutter:8}},[n("a-col",{staticClass:"left",class:{full:!e.buttons}},[e._t("left",(function(){return[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:e.placeholder,options:e.selectOptions,allowClear:"",disabled:e.disabled,open:e.selectOpen},on:{dropdownVisibleChange:e.handleDropdownVisibleChange},nativeOn:{click:function(t){e.visible=!e.buttons||e.visible}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})]}))],2),e.buttons?n("a-col",{staticClass:"right"},[n("a-button",{attrs:{type:"primary",icon:"search",disabled:e.disabled},on:{click:function(t){e.visible=!0}}},[e._v(e._s(e.selectButtonText))])],1):e._e(),n("j-select-biz-component-modal",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t},options:e.handleOptions},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},"j-select-biz-component-modal",e.modalProps,!1))],1)},a=[],i=n("b16a"),s={name:"JSelectBizComponent",components:{JSelectBizComponentModal:i["default"]},props:{value:{type:String,default:""},returnId:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},displayKey:{type:String,default:null},returnKeys:{type:Array,default:function(){return["id","id"]}},selectButtonText:{type:String,default:"选择"}},data:function(){return{selectValue:[],selectOptions:[],dataSourceMap:{},visible:!1,selectOpen:!1}},computed:{valueKey:function(){return this.returnId?this.returnKeys[0]:this.returnKeys[1]},modalProps:function(){return Object.assign({valueKey:this.valueKey,multiple:this.multiple,returnKeys:this.returnKeys,displayKey:this.displayKey||this.valueKey},this.$attrs)}},watch:{value:{immediate:!0,handler:function(e){this.selectValue=e?e.split(","):[]}},selectValue:{deep:!0,handler:function(e){var t=this,n=e.map((function(e){return t.dataSourceMap[e]}));this.$emit("select",n);var l=e.join(",");this.$emit("input",l),this.$emit("change",l)}}},methods:{handleOptions:function(e,t){this.selectOptions=e,this.dataSourceMap=t},handleDropdownVisibleChange:function(){var e=this;this.selectOpen=!0,this.$nextTick((function(){e.selectOpen=!1}))}}},o=s,u=(n("942c"),n("2877")),c=Object(u["a"])(o,l,a,!1,null,"11dfb11e",null);t["default"]=c.exports}}]);