sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],function (Controller,MessageToast){
    "use strict"

    return Controller.extend("sap.ui5.walkthrough.controller.HelloPanel",{
        onShowHello:function (){
            var oBundle=this.getView().getModel("i18n").getResourceBundel();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            MessageToast.show(sMsg);
        },
        onOpenDialog:function (){
            if ((!this.pDialog)){
                this.pDialog = this.loadFragment({
                    name:"sap.ui5.walkthrough.view.HelloDialog"
                });
                this.pDialog.then(function (oDialog){
                    oDialog.open();
                });
            }
        },
        onCloseDialog:function (){
            this.byId("helloDialog").close();
        }
    })
})