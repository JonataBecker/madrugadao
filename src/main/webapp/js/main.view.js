var oNavContainer  = null; 


sap.ui.jsview("js.main", {

	getControllerName : function() {
		return "js.main";
	},

	createContent : function(oController) {
            var oLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
            
            var view = sap.ui.view({
                id : "dashboard",
                viewName : "js.dashboard",
                type : sap.ui.core.mvc.ViewType.JS
            });
            
            var settings = sap.ui.view({
                id : "settings",
                viewName : "js.settings",
                type : sap.ui.core.mvc.ViewType.JS
            });
            
            var analitics = sap.ui.view({
                id : "analitics",
                viewName : "js.analitics",
                type : sap.ui.core.mvc.ViewType.JS
            });
            
            oNavContainer = new sap.m.NavContainer("container", {
                pages: [
                    new sap.m.Page({id:"page1",title: "Dashboard", content: view}),
                    new sap.m.Page({id:"page2",title: "Preferências", content: settings}),
                    new sap.m.Page({id:"page3",title: "Análise", content: analitics})
                ],
                width: '100%',
                height: '500px'
            });
            
            var oToolbar = new sap.m.Bar("bar", {
                mode:"Navigation",
                contentLeft: [new sap.m.Button({type:sap.m.ButtonType.Up, press: oController.back})],
                contentRight: [new sap.m.Button({type:sap.m.ButtonType.Back, press: oController.next})] 
            });
            toolbar = oToolbar;

            oLayout.addContent(oNavContainer);
            oLayout.addContent(oToolbar);
            return oLayout;
            
	},
        
        getNavigator : function() {
            return oNavContainer;
        }

});
