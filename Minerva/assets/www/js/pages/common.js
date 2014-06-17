function mobileInit() {
	$( document ).bind( 'mobileinit', function(){
		  $.mobile.loader.prototype.options.text = getMessage("load");
		  $.mobile.loader.prototype.options.textVisible = false;
		  $.mobile.loader.prototype.options.theme = "b";
		  $.mobile.loader.prototype.options.html = "";
	});
	
	document.addEventListener("deviceready",onDeviceReady,false);
	
}


function onDeviceReady() {
	setCameraDefaults();
	tmpWstawCalla();
}


function organizeInputs() {
	$(document).bind('pageinit', function () {
        $('input,select').keypress(function(event) { 
        	return event.keyCode != 13; 
        });
    });
	
	$('input[type=text]').attr('autocomplete', 'off');
}