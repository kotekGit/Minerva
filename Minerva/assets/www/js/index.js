$(document).ready(function() {
	mobileInit();
	appInit();
});

function mobileInit() {
	$( document ).bind( 'mobileinit', function(){
		  $.mobile.loader.prototype.options.text = "loading";
		  $.mobile.loader.prototype.options.textVisible = false;
		  $.mobile.loader.prototype.options.theme = "a";
		  $.mobile.loader.prototype.options.html = "";
	});
}

function appInit() {
	printListFolders(foldersList);
}

