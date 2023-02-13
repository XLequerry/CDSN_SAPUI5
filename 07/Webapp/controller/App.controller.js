sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"//因为在XML界面的模型绑定语句属于json所以要导入json模块进行实现
], function (Controller,MessageToast,JSONModel){
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.App",{
        onShowHello : function (){
            MessageToast.show("hello World")
        },

        onInit:function (){
            var oData={
                recipient:{
                    name:"World"//对应{/recipient/name}
                }
            };
            /*
           为JSONModel的实现，oModel为jsonModel，
           传入oData纯js对象，构造函数，将JsonModel与XML进行绑定
            */
            var oModel = new JSONModel(oData);//用对象构造模型
            this.getView().setModel(oModel);//用模型绑定XML
        }
    })
})