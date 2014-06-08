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

