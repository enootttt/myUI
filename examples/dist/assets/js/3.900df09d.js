(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(t,s,e){},275:function(t,s,e){"use strict";e(253)},283:function(t,s,e){"use strict";e.r(s);e(95);var i={name:"m-button",props:{type:{type:String,default:"",Validator:t=>["primary","success","warning","danger"].includes(t)},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{type:String,default:""}},computed:{styleClass(){return{["r-button--"+this.type]:this.type,"is-round":this.round,"is-disabled":this.disabled}}},methods:{handleClick(){this.$emit("click")}}},n=(e(275),e(16)),l=Object(n.a)(i,(function(){return(0,this._self._c)("button",{staticClass:"r-button",class:this.styleClass,attrs:{disabled:this.disabled},on:{click:this.handleClick}},[this._t("default")],2)}),[],!1,null,null,null);s.default=l.exports}}]);