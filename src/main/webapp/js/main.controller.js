var urlDevices = "/TomcatServices/webresources/devices/";
var temperatures = [];
var that = null;
var page = 1;

sap.ui.controller("js.main", {
	back: function() {
            page--;
            if(page < 1) page = 1;
            that.getView().getNavigator().back("page" + page, "slide");
	},
	next: function() {
            page++;
            if(page > 3) page = 3;
            that.getView().getNavigator().to("page" + page, "slide");
	},


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testpluginui5.main
*/
	onInit: function() {
                that = this;
		this.model = new sap.ui.model.json.JSONModel();
		this.model.setData({modelData: temperatures});
		this.getView().setModel(this.model);
	},
/**
* update temperature of the toaster
* @memberOf testpluginui5.main
*/		
	updateProgressTemp: function(){
		var url = urlDevices + "toastertemperature";
		var temp = 0;	
		$.getJSON(url, {format:"json"}, function(data){
			temp = parseInt(data.temperature);
			var percentInt = parseInt(temp/3);
			sap.ui.getCore().byId("ProgInd1").setPercentValue(percentInt);
			sap.ui.getCore().byId("ProgInd1").setDisplayValue(data.temperature + " ºC");
			var d = new Date();
			var n = d.getTime();
			var tempdata = {time: n, temperature: data.temperature + " ºC", power: true};
			temperatures.push(tempdata);
			sap.ui.getCore().byId("table1").bindRows("/modelData");
			if(data.temperature!=0 && data.temperature!=300){
				setTimeout(sap.ui.controller("js.main").updateProgressTemp, 1000);
			}
		});
		
	},
/**
* Called to turnon or turnoff the toaster
* @memberOf testpluginui5.main
*/	
	powerToaster: function(oEvent){
		var isPressed = oEvent.getParameter("pressed");
		var url = urlDevices;
		if (isPressed == true){
			url = url + "toasterturnon";
		}else{
			url = url + "toasterturnoff";
		}
		$.getJSON(url, {format:"json"}, sap.ui.controller("js.main").updateProgressTemp);
		;
		
	},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf testpluginui5.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf testpluginui5.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf testpluginui5.main
*/
//	onExit: function() {
//
//	}

});