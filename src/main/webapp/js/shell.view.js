sap.ui.jsview("js.shell", {

	getControllerName : function() {
		return "js.main";
	},

	createContent : function(oController) {

		var oShell = new sap.ui.ux3.Shell("oShell", {
			appTitle : "OpenUI5"
		});

		oShell.addWorksetItem(new sap.ui.ux3.NavigationItem({
			key : "js",
			text : "Toaster View"
		}));


		var mContent = {};
		// JSView Button
		mContent.js = sap.ui.view({
			viewName : "js.dashboard",
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
