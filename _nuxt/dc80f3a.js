(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,n){t.exports=n.p+"img/spinner.8d6fc3e.svg"},211:function(t,e,n){"use strict";n.r(e);var l=n(1).default.extend({props:{src:{required:!0,type:String},imgClass:{default:"",type:String}},data:function(){return{imageHasLoaded:!1}},methods:{onLoadImage:function(){this.imageHasLoaded=!0,this.$emit("load")}}}),o=n(30),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"img-loading",class:{"is-loading":!t.imageHasLoaded}},[l("img",{staticClass:"spinner",attrs:{alt:"Loading",src:n(173)}}),t._v(" "),l("img",{class:t.imgClass,attrs:{src:t.src,alt:t.src.split("/")[t.src.split("/").length-1]},on:{load:t.onLoadImage}})])}),[],!1,null,null,null);e.default=component.exports}}]);