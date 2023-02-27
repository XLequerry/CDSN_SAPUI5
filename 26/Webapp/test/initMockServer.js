sap.ui.define([
    "../localService/mockserver"//从local service中导入js实现
],function (mockserver){
    "use strict";

    mockserver.init();//创建实例

    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});