function initModel() {
	var sUrl = "/test1/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}