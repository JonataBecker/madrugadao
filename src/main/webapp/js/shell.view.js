sap.ui.jsview("madrugadao.shell", {

	getControllerName : function() {
		return "testpluginui5.main";
	},

	createContent : function(oController) {

		var oShell = new sap.ui.ux3.Shell("oShell", {
			appTitle : "OpenUI5"
		});
                
		var mContent = {};
		// JSView Button
		mContent.js = sap.ui.view({
			viewName : "madrugadao.dashboardView",
			type : sap.ui.core.mvc.ViewType.JS
		});

		oShell.setContent(mContent.js);
		oShell.attachWorksetItemSelected(function(evt) {
			var key = evt.getParameter("key");
			oShell.setContent(mContent[key]);

		});

		return oShell;

	}

});
