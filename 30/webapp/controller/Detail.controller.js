sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);//当发现有匹配的路由时，调用底下的函数
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({//给控制器对应的xml创建一个心得绑定上下文invoice，使程序可以使用{invoice>Shipper Name}
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		}
	});
});