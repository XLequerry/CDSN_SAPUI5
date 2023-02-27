sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],function (Controller,JSONModel,formatter){
    "use strict";

    return Controller.extend("sap.ui5.walkthrough.controller.InvoiceList",{
        formatter:formatter,//前一个for表示的是控制器内定义的属性名，后一个表示model文件夹中formatter文件实现的格式器（就是fun里的那个）
        onInit:function (){
            var oViewModel = new JSONModel({
                currency:"EUR"
            });
            this.getView().setModel(oViewModel,"view");
        }
    });
});