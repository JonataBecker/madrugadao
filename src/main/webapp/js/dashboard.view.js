var oNavContainer  = null; 

var airConditioning;
var radio;
var toaster;
var breadMachine;
var coffeeMachine;
var digitalPhotoFrame;

sap.ui.jsview("js.dashboard", {

	getControllerName : function() {
		return "js.dashboard";
	},

	createContent : function(oController) {
            
            var oLayout = new sap.ui.commons.layout.VerticalLayout({width:"100%"});
            
            airConditioning = new sap.m.Switch({change: oController.airConditioningChange});
            var iAirConditioning = new sap.m.InputListItem({
                 label:"Ar condicionado",
            });
            iAirConditioning.addContent(airConditioning);
            radio = new sap.m.Switch({change: oController.radioChange});
            var iRadio = new sap.m.InputListItem({
                 label:"Rádio",
            });
            iRadio.addContent(radio);
            toaster = new sap.m.Switch({change: oController.toasterChange});
            var iToaster = new sap.m.InputListItem({
                 label:"Torradeira",
            });
            iToaster.addContent(toaster);
            breadMachine = new sap.m.Switch({change: oController.breadMachineChange});
            var iBreadMachine = new sap.m.InputListItem({
                 label:"Panificadora",
            });
            iBreadMachine.addContent(breadMachine);
            coffeeMachine = new sap.m.Switch({change: oController.coffeeMachineChange});
            var iCoffeeMachine = new sap.m.InputListItem({
                 label:"Máquina de café",
            });
            iCoffeeMachine.addContent(coffeeMachine);
            digitalPhotoFrame = new sap.m.Switch({change: oController.digitalPhotoFrameChange});
            var iDigitalPhotoFrame = new sap.m.InputListItem({
                 label:"Porta Retrato Digital",
            });
            iDigitalPhotoFrame.addContent(digitalPhotoFrame);
            
            var list = new sap.m.List({
                items : [
                    iAirConditioning,
                    iRadio,
                    iToaster,
                    iBreadMachine,
                    iCoffeeMachine,
                    iDigitalPhotoFrame,
                ]
            });

            oLayout.addContent(list);
            
            return oLayout;
            
	},
        
        getNavigator : function() {
            return oNavContainer;
        },
        
        getAirConditioning : function() {
            return airConditioning;
        },
        getRadio : function() {
            return radio;
        },
        getToaster : function() {
            return toaster;
        },
        getBreadMachine : function() {
            return breadMachine;
        },
        
        getCoffeeMachine : function() {
            return coffeeMachine;
        },
        getDigitalPhotoFrame: function(){
            return digitalPhotoFrame;
        }
        
  
});
