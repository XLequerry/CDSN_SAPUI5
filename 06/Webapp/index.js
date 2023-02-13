//[]数组，存储UI5库的url，function回调函数，加载库成功后自动调用函数Text为传给回调函数的参数
sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";//代码严格模式

    XMLView.create({
        viewName:"sap.ui5.walkthrough.view.App"
    }).then(function (oView){
        oView.placeAt("content");
    })
})