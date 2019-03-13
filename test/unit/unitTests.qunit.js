/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kerem/test/Test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});