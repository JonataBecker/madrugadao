var oNavContainer  = null; 

var label;

sap.ui.jsview("js.dashboard", {

	getControllerName : function() {
		return "js.dashboard";
	},

	createContent : function(oController) {
            
            
            label = new sap.m.Label({text: "oi"});
            
            var oLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
            
            var table = new sap.m.Table({columns: [new sap.m.Column()]});
            
            oLayout.addContent(label);
//            oLayout.addContent(table);
            
            return oLayout;
            
	},
        
        getNavigator : function() {
            return oNavContainer;
        },
        
        getLabel : function() {
            return label;
        }

});
