(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yihurenyuan/add-or-update"],{"1a4c":function(n,e,t){},7822:function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},"81a6":function(n,e,t){"use strict";t.r(e);var i=t("bd54"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},9364:function(n,e,t){"use strict";(function(n){t("83dc"),t("921b");i(t("66fd"));var e=i(t("a627"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a627:function(n,e,t){"use strict";t.r(e);var i=t("7822"),r=t("81a6");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("aa3a");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"265c2000",null,!1,i["a"],u);e["default"]=s.exports},aa3a:function(n,e,t){"use strict";var i=t("1a4c"),r=t.n(i);r.a},bd54:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var o=n[a](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function o(n){a(u,i,r,o,s,"next",n)}function s(n){a(u,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b416"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{yihugonghao:"",mima:"",yihuxingming:"",xingbie:"",nianling:"",yihuzhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yihugonghao:!1,mima:!1,yihuxingming:!1,xingbie:!1,nianling:!1,yihuzhaopian:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var r,a,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("yihurenyuan",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(!t.cross){e.next=45;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(o=e.t1.value,"yihugonghao"!=o){e.next=23;break}return this.ruleForm.yihugonghao=u[o],this.ro.yihugonghao=!0,e.abrupt("continue",17);case 23:if("mima"!=o){e.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("yihuxingming"!=o){e.next=31;break}return this.ruleForm.yihuxingming=u[o],this.ro.yihuxingming=!0,e.abrupt("continue",17);case 31:if("xingbie"!=o){e.next=35;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,e.abrupt("continue",17);case 35:if("nianling"!=o){e.next=39;break}return this.ruleForm.nianling=u[o],this.ro.nianling=!0,e.abrupt("continue",17);case 39:if("yihuzhaopian"!=o){e.next=43;break}return this.ruleForm.yihuzhaopian=u[o],this.ro.yihuzhaopian=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange();case 46:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},yihuzhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.yihuzhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.yihugonghao){n.next=3;break}return this.$utils.msg("医护工号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){n.next=9;break}return this.$utils.msg("年龄应输入整数"),n.abrupt("return");case 9:if(!this.ruleForm.id){n.next=14;break}return n.next=12,this.$api.update("yihurenyuan",this.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,this.$api.add("yihurenyuan",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])}},[["9364","common/runtime","common/vendor"]]]);