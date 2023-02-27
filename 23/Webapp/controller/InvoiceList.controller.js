sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],function (Controller,JSONModel,formatter,Filter,FilterOperator){
    "use strict";

    return Controller.extend("sap.ui5.walkthrough.controller.InvoiceList",{
        formatter:formatter,//前一个for表示的是控制器内定义的属性名，后一个表示model文件夹中formatter文件实现的格式器（就是fun里的那个）
        onInit:function (){
            var oViewModel = new JSONModel({
                currency:"EUR"
            });
            this.getView().setModel(oViewModel,"view");
        },
        onFilterInvoices:function (oEvent){
            var aFilter = [];//过滤接口，用一个数组变量储存过滤请求
            var sQuery = oEvent.getParameter("query");//储存用户输入请求，就是用户在搜索框输入的，自动生成querry事件对象
            if (sQuery){
                aFilter.push(new Filter("ProductName",
                                FilterOperator.Contains,sQuery));
                /*
                构造filter请求，用来过滤ProductName。
                其中，Filter Operator.Contains作用：只要Product Name包含了用户输入的值，就不去过滤这个数据（保留下来）
                 */
            }
            var oList = this.byId("TiminvoiceList");//根据id拿到列表控件实例
            var oBinding = oList.getBinding("items");//拿到之后，调用个体Binding拿到列表行项目的绑定数据，这里是items，来源是xml中List标签的items
            oBinding.filter(aFilter);//将filter传入方法，执行过滤
        }
    });
});