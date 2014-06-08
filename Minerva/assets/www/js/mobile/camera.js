var pictureSource; // picture source
var destinationType; // sets the format of returned value

function setCameraDefaults() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

/**
 * Wywoływana gdy poprawnie pobrano zdjęcie.
 * @param imageData
 */
function onPhotoDataSuccess(imageData) {
	var smallImage = document.getElementById('smallImage');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64," + imageData;
}

/**
 * Wywoływana gdy pobrano z sukcesem zdjęcie z galerii.
 * @param imageURI
 */
function onPhotoURISuccess(imageURI) {
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
}


/**
 * Robi zdjęcie kamerką, potem zapisuje w galerii.
 */
function capturePhoto() {
	try{
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
			quality : 50,
			destinationType : destinationType.DATA_URL
		});
	} catch (err) {
		alert("ERR: SUPPORT ONLY FOR MOBILE DEVICE " + err);
	}
}

/**
 * Pobiera zdjęcie z galerii.
 * @param source pictureSource.SAVEDPHOTOALBUM or pictureSource.PHOTOLIBRARY
 */
function getPhoto(source) {
	navigator.camera.getPicture(onPhotoURISuccess, onFail, {
		quality : 50,
		destinationType : destinationType.FILE_URI,
		sourceType : source
	});
	
	
}

/**
 * Zwraca informację gdy coś nie działa.
 * @param message
 */
function onFail(message) {
    alert('Failed because: ' + message);
}