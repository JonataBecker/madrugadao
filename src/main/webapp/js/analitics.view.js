sap.ui.jsview("js.analitics", {

	getControllerName : function() {
		return "js.analitics";
	},

	createContent : function(oController) {
            
            var oLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
            
//            oLayout.addContent(table);
            
            return oLayout;
            
	},

});
