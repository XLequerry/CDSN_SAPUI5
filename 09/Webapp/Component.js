sap.ui.define([
    "sap/ui/core/UIComponent",//sap标准Component实现
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function (UIComponent,JSONModel,ResourceModel){
    "use strict"
    return UIComponent.extend("sap.ui5.walkthrough.Component",{//此为路径
        //json对象，实现再js被解析时，框架应该执行什么逻辑或是去渲染什么内容
        metadata:{
            //通过接口的方式，向其中添加元数据（metadata）
            "interface":["sap.ui.core.IAsyncContentCreation"],//这是啥
            //“请加载这个视图（根视图）”
            "rootView":{
                "viewName":"sap.ui5.walkthrough.view.app",
                "type":"XML",
                "id":"app"
            }
        },
        init:function (){
            UIComponent.prototype.init.apply(this,arguments);//类似ABAP中的CALL METHOD 是UIComponent标准初始化方法
            var oData = {
                recipient:{
                    name:"第九章，创建component"
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