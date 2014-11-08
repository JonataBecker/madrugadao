var urlDevices = "/TomcatServices/webresources/devices/";
var temperatures = [];
var dashboardView = null;

sap.ui.controller("js.dashboard", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testpluginui5.main
*/
	onInit: function() {
                dashboardView = this.getView();
               

                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/airconditionerison",
                    function(data){
                        dashboardView.getAirConditioning().setState(data);
                    }
                );
                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/toasterison",
                    function(data){
                        dashboardView.getToaster().setState(data);
                    }
                );
                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/breadmachineison",
                    function(data){
                        dashboardView.getBreadMachine().setState(data);
                    }
                );
                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/coffeemachineison",
                    function(data){
                        dashboardView.getCoffeeMachine().setState(data);
                    }
                );
                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/digitalphotoframeimage",
                    function(data){
                        if(data.image=="http://localhost:8080/TomcatServices/images/off.jpg"){
                            dashboardView.getDigitalPhotoFrame().setState(false);
                        }else{
                            dashboardView.getDigitalPhotoFrame().setState(true);
                        }
                    }
                );

                $.getJSON("http://localhost:8080/TomcatServices/webresources/devices/radiocurrentsong",
                    function(data){
                        if(data.currentSong == "Radio is OFF!") {
                            dashboardView.getRadio().setState(false);
                        } else {
                            dashboardView.getRadio().setState(true);
                        }
                    }
                );
                
//                var oModel = new sap.ui.model.json.JSONModel("http://localhost:8080/TomcatServices/webresources/devices/airconditionertemperature");
//                this.getView().getTable().setModel(oModel);  
//                console.log(this.getView().getLabel());
//                
//                this.getView().getLabel().setText("teste");
                
                
	},
        
        airConditioningChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/airconditionerturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/airconditionerturnoff");
            }
        },
        
        radioChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/radioturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/radioturnoff");
            }
        },
        
        toasterChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/toasterturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/toasterturnoff");
            }
        },
        
        breadMachineChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/breadmachineturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/breadmachineturnoff");
            }
        },
        
        coffeeMachineChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/coffeemachineturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/coffeemachineradioturnoff");
            }
        },
        
        digitalPhotoFrameChange : function(button) {
            if(button.mParameters.state) {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/digitalphotoframeturnon");
            } else {
                $.get("http://localhost:8080/TomcatServices/webresources/devices/digitalphotoframeturnoff");
            }
        }



});