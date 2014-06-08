
function menuButton() {
	document.addEventListener("menubutton", onMenuKeyDown, false);
}

function onMenuKeyDown() {
	alert("Menu in progress");
}

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
}


function ajaxPost(url, data, success, fail) {
	$.ajax({
		  type: "POST",
		  async: "false",
		  contentType: "application/json;",
		  dataType: "jsonp",
		  url: url,
		  data: data,
		  success: success,
		  error : fail,
	});
}