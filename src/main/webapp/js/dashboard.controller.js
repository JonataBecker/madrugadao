var urlDevices = "/TomcatServices/webresources/devices/";
var temperatures = [];
var that = null;

sap.ui.controller("js.dashboard", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testpluginui5.main
*/
	onInit: function() {
                that = this;
                
                var url = "http://localhost:8080/TomcatServices/webresources/devices/airconditionertemperature";
                
                console.log(this.getView().getLabel());
                
                this.getView().getLabel().text = "teste";
                
                
	},


});