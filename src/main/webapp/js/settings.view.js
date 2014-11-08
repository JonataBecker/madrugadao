sap.ui.jsview("js.settings", {

	getControllerName : function() {
		return "js.settings";
	},

	createContent : function(oController) {
            
            var oLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
            
//            oLayout.addContent(table);
            
            return oLayout;
            
	},

});
