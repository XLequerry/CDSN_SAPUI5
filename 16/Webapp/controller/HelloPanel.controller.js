sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],function (Controller,MessageToast){
    "use strict"

    return Controller.extend("sap.ui5.walkthrough.controller.HelloPanel",{
        onShowHello:function (){
            var oBundle = this.getView().getModel("i18n")//先拿到下方起好名的模型
                .getResourceBundle();//再由模型拿到文件中存的实例
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");//拿到下方oData中的name的值
            var sMsg = oBundle.getText("helloMsg" , [sRecipient]);//得到12行的Text，同时传入sRecipient（数组）变量中的内容，替换掉hello {0} 的{0}
            MessageToast.show(sMsg);
        },
        onOpenDialog: function (){
            if (!this.pDialog){//用来指定dialog的控件和路径
                this.pDialog = this.loadFragment({//加载一个对话框控件
                    name:"sap.ui5.walkthrough.view.HelloDialog"//dialog的路径
                });
            }
            this.pDialog.then(function (oDialog){//这才是真正的打开dialog的方法
                oDialog.open();
            })
        },
        onCloseDialog:function (){
            this.byId("helloDialog").close();
        }
    });
})