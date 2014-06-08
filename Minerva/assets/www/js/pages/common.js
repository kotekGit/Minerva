
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
}


function ajaxPost(url, data2, dataType, success2, fail) {
	$.ajax({
		  type: "POST",
		  async: "false",
		  url: url,
		  data: data2,
		  success: success2,
		  error : fail,
		  contentType: "application/json; charset=utf-8",
		  dataType: dataType
	});
}