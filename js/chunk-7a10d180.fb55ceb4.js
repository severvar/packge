(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a10d180"],{"9b33":function(e,t,i){},cf74:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"relative"},attrs:{id:e.containerId}},[i("div",{staticClass:"movety-container",staticStyle:{padding:"0 8px",position:"absolute","z-index":"91",height:"32px",width:"104px","text-align":"center"},style:{top:e.top+"px",left:e.left+"px",display:e.moveDisplay}},[i("div",{class:e.showMoverTask?"uploadty-mover-mask":"movety-opt",staticStyle:{"margin-top":"12px"},attrs:{id:e.containerId+"-mover"}},[i("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveLast}},[i("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-left"}})],1),i("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveNext}},[i("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-right"}})],1)])]),i("a-upload",{class:{"uploadty-disabled":e.disabled},attrs:{name:"file",multiple:!0,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,returnUrl:e.returnUrl,listType:e.complistType},on:{change:e.handleChange,preview:e.handlePreview}},[[e.isImageComp?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1):e.buttonVisible?i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v(e._s(e.text)+"\n      ")],1):e._e()]],2),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},n=[],a=i("2b0e"),l=i("9fb0"),r=i("0fea"),o=i("4ec3"),u="all",d="image",h=function(){return"-"+parseInt(1e4*Math.random()+1,10)},f=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},c={name:"JUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/systemConfig/upload",headers:{},fileList:[],newFileList:[],uploadGoOn:!0,previewVisible:!1,previewImage:"",containerId:"",top:"",left:"",moveDisplay:"none",showMoverTask:!1,moverHold:!1,currentImg:"",sizeLimit:0}},props:{text:{type:String,required:!1,default:"点击上传"},fileType:{type:String,required:!1,default:u},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},triggerChange:{type:Boolean,required:!1,default:!1},returnUrl:{type:Boolean,required:!1,default:!0},number:{type:Number,required:!1,default:0},buttonVisible:{type:Boolean,required:!1,default:!0}},watch:{value:{immediate:!0,handler:function(){var e=this.value;e instanceof Array?this.returnUrl?this.initFileList(e.join(",")):this.initFileListArr(e):this.initFileList(e)}}},computed:{isImageComp:function(){return this.fileType===d},complistType:function(){return this.fileType===d?"picture-card":"text"}},created:function(){this.initFileSizeLimit();var e=a["a"].ls.get(l["a"]);this.headers={"X-Access-Token":e},this.containerId="container-ty-"+(new Date).getTime()},methods:{initFileSizeLimit:function(){var e=this;Object(o["U"])().then((function(t){200===t.code&&(e.sizeLimit=t.data)}))},initFileListArr:function(e){if(e&&0!=e.length){for(var t=[],i=0;i<e.length;i++){var s=Object(r["d"])(e[i].filePath);t.push({uid:h(),name:e[i].fileName,status:"done",url:s,response:{code:"history",data:e[i].filePath}})}this.fileList=t}else this.fileList=[]},initFileList:function(e){if(e&&0!=e.length){for(var t=[],i=e.split(","),s=0;s<i.length;s++){var n=Object(r["d"])(i[s]);t.push({uid:h(),name:f(i[s]),status:"done",url:n,response:{code:"history",data:i[s]}})}this.fileList=t}else this.fileList=[]},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");for(var i=[],s=0;s<e.length;s++)i.push(e[s].response.data);i.length>0&&(t=i.join(",")),this.$emit("change",t)},beforeUpload:function(e){this.uploadGoOn=!0;var t=e.type,i=e.size;if(this.fileType===d&&t.indexOf("image")<0)return this.$message.warning("请上传图片"),this.uploadGoOn=!1,!1;if(i>this.sizeLimit){var s=(this.sizeLimit/1024/1024).toFixed(2);return this.$message.warning("抱歉，文件大小不能超过"+s+"M"),this.uploadGoOn=!1,!1}return!0},handleChange:function(e){e.file.status||!1!==this.uploadGoOn||e.fileList.pop();var t=e.fileList;if("done"===e.file.status?(this.number>0&&(t=t.slice(-this.number)),200===e.file.response.code&&(t=t.map((function(e){if(e.response){var t=e.response.data;e.url=Object(r["d"])(t)}return e})))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"===e.file.status||"removed"===e.file.status)if(this.returnUrl)this.handlePathChange();else{this.newFileList=[];for(var i=0;i<t.length;i++){var s={fileName:t[i].name,filePath:t[i].response.data,fileSize:t[i].size};this.newFileList.push(s)}this.$emit("change",this.newFileList)}},handleDelete:function(e){},handlePreview:function(e){this.fileType===d?(this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0):location.href=e.url},handleCancel:function(){this.previewVisible=!1},moveLast:function(){var e=this.getIndexByUrl();if(0==e)this.$message.warn("未知的操作");else{for(var t=this.fileList[e].url,i=this.fileList[e-1].url,s=[],n=0;n<this.fileList.length;n++)n==e-1?s.push(t):n==e?s.push(i):s.push(this.fileList[n].url);this.currentImg=i,this.$emit("change",s.join(","))}},moveNext:function(){var e=this.getIndexByUrl();if(e==this.fileList.length-1)this.$message.warn("已到最后~");else{for(var t=this.fileList[e].url,i=this.fileList[e+1].url,s=[],n=0;n<this.fileList.length;n++)n==e+1?s.push(t):n==e?s.push(i):s.push(this.fileList[n].url);this.currentImg=i,this.$emit("change",s.join(","))}},getIndexByUrl:function(){for(var e=0;e<this.fileList.length;e++)if(this.fileList[e].url===this.currentImg||encodeURI(this.fileList[e].url)===this.currentImg)return e;return-1}},mounted:function(){var e=this,t=document.getElementById(this.containerId+"-mover");t.addEventListener("mouseover",(function(){e.moverHold=!0,e.moveDisplay="block"})),t.addEventListener("mouseout",(function(){e.moverHold=!1,e.moveDisplay="none"}));var i=document.getElementById(this.containerId)?document.getElementById(this.containerId).getElementsByClassName("ant-upload-list-picture-card"):[];i&&i.length>0&&(i[0].addEventListener("mouseover",(function(t){t=t||window.event;var i=t.target||t.srcElement;if("ant-upload-list-item-info"==i.className){e.showMoverTask=!1;var s=i.parentElement;e.left=s.offsetLeft,e.top=s.offsetTop+s.offsetHeight-50,e.moveDisplay="block",e.currentImg=i.getElementsByTagName("img")[0].src}})),i[0].addEventListener("mouseout",(function(t){t=t||window.event;var i=t.target||t.srcElement;"ant-upload-list-item-info"==i.className&&(e.showMoverTask=!0,setTimeout((function(){!1===e.moverHold&&(e.moveDisplay="none")}),100)),"ant-upload-list-item ant-upload-list-item-done"!=i.className&&"ant-upload-list ant-upload-list-picture-card"!=i.className||(e.moveDisplay="none")})))},model:{prop:"value",event:"change"}},p=c,m=(i("de21"),i("2877")),v=Object(m["a"])(p,s,n,!1,null,null,null);t["default"]=v.exports},de21:function(e,t,i){"use strict";i("9b33")}}]);