(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,n,e){"use strict";e.r(n);var l=e(1).default.extend({data:function(){return{isOpen:!1}},methods:{onClickButton:function(){this.isOpen||this.$parent.$emit("onOpenCollapsible"),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}}}),c=e(30),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["collapsible",{open:t.isOpen}],on:{click:t.onClickButton}},[e("h3",{staticClass:"p mb-0"},[t._t("label")],2),t._v(" "),e("div",{staticClass:"content"},[e("p",{staticClass:"mt-3"},[t._t("content")],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);