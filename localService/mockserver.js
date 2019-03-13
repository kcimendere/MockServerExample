sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			// var uri = '/test1/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/';
			var sUrl = "/test1/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/";
			var oMockServer = new MockServer({
				rootUri:sUrl
			});
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter:  4000
			});
			// simulate
			var _sAppModulePath = "kerem.test.Test/";
			var sMetadataPath = "localService/metadata.xml";
			var mockDataPath = "localService/mockdata/";
			var sMockDataUrl = jQuery.sap.getModulePath(_sAppModulePath) + "/" + mockDataPath;
			var sMetadataUrl = jQuery.sap.getModulePath(_sAppModulePath) + "/" + sMetadataPath;
			oMockServer.simulate(sMetadataUrl,{
                
                "sMockdataBaseUrl" : sMockDataUrl,
                "bGenerateMissingMockData" : true
            });
			// start
			oMockServer.start();
		}
	};
});