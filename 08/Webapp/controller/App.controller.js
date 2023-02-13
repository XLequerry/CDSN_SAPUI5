sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"//因为在XML界面的模型绑定语句属于json所以要导入json模块进行实现
    "sap/ui/model/resource/ResoueceModel"
], function (Controller,MessageToast,JSONModel,ResourceModel){
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.App",{
        onShowHello : function (){
            // MessageToast.show("hello World")
            var oBundle = this.getView().getModel("Timi18n")//先拿到下方起好名的模型
                .getResourceBundle();//再由模型拿到文件中存的实例
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");//拿到下方oData中的name的值
            var sMsg = oBundle.getText("helloMsg" , [sRecipient]);//得到12行的Text，同时传入sRecipient（数组）变量中的内容，替换掉hello {0} 的{0}
            MessageToast.show(sMsg);

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
            var i18nModel = new ResourceModel({
                bundleName : "sap.ui5.walkthrough.i18n.i18n"//第一个i18n指的是webapp下i18n的文件夹名，第二个i18n指的是i18n.properties
            });
            this.getView().setModel(i18nModel,"Timi18n")//将ResourceModel绑定到View中，并取名
        }
    })
})