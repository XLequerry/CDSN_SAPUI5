sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function (UIComponent,JSONModel,ResourceModel){
    "use strict"

    return UIComponent.extend("sap.ui5.walkthrough.Component",{
        metadata:{
            "interface":["sap.ui.core.IAsyncContentCreation"],
            manifest:"json"
        },
        init:function (){
            UIComponent.prototype.init.apply(this,arguments);
            var oData={
                recipient:{
                    name:"一些新东西~"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            var i18nModel = new ResourceModel({
                bundleName:"sap.ui5.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel,"i18n")
        }
    })
})