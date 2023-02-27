sap.ui.define([
    "sap/ui/core/util/MockServer"//从标准库导入Mock Serve标准实现
],function (MockServer){
    "use strict"

    return{
        init:function (){
            //创建实例
            var oMockServer = new MockServer({
                //指向真实的OData地址，目的是拦截UI5框架发送给这个地址的请求，并用本地测试文件做替换返回给框架
                rootUri:"https://services.odata.org/V2/Northwind/Northwind.svc/"
            });
            //在Mock拦截到请求之后，设置了500ms延迟，再返回本地数据去响应
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: 500
            });
            var sPath = sap.ui.require.toUrl("sap/ui5/walkthrough/localService");
            oMockServer.simulate(sPath + "/metadata.xml" , sPath + "/mockdata");

            oMockServer.start();
        }
    }
})