sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller,History) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();//获取之前的跳转记录

			if (sPreviousHash !== undefined) {//如果存在跳转记录
				window.history.go(-1);//直接调用浏览器的返回按钮api
			} else {//如果不存在
				var oRouter = this.getOwnerComponent().getRouter();//跳转manifest。json定义的overview路由规则指定的target，即overviewXML视图
				oRouter.navTo("overview", {}, true);
			}
		}
	});
});