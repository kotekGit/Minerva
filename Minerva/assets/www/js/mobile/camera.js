var TMP_FILE_ID = 0;
var pictureSource;
var destinationType;

var CAMERA = {
	getPicture : function() {
	    document.addEventListener("deviceready",function onDeviceReady() {
	        pictureSource=navigator.camera.PictureSourceType;
	        destinationType=navigator.camera.DestinationType;
	    },false);
	    
	    getPhoto(pictureSource.PHOTOLIBRARY);
	},

	setFileID : function(id) {
		TMP_FILE_ID = id;
	}
};

function win(r) {
	console.log("Code = " + r.responseCode);
	console.log("Response = " + r.response);
	console.log("Sent = " + r.bytesSent);
}

function fail(error) {
	alert("An error has occurred: Code = " + error.code);
}

 
function getPhoto(source) {
    navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;
    alert(imageURI);
    var ft = new FileTransfer();
    var url = PATH + "file/"+TMP_FILE_ID+"/upload";
    ft.upload(imageURI, url, win, fail, options);
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
}