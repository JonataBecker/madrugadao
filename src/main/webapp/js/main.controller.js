var urlDevices = "/TomcatServices/webresources/devices/";
var temperatures = [];

sap.ui.controller("madrugadao.main", {
	getAddress: function() {
	      sap.ui.commons.MessageBox.show(urlDevices);
	},


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testpluginui5.main
*/
	onInit: function() {
		this.model = new sap.ui.model.json.JSONModel();
		this.getView().setModel(this.model);
	},
        
});