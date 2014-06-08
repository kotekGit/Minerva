/**
 * Tworzy nowy kontakt w książce adresowej.
 */
function createContact(userName, note) {

	var myContact = navigator.contacts.create({
		"displayName" : userName
	});
	myContact.note = note;
	console.log("The contact, " + myContact.displayName + ", note: "
			+ myContact.note);

}

/**
 * Wstawia w kodzie ikonę telefonu, po naciśnięciu można automatycznie zadzwonić
 * pod wskazany w parametrze numer.
 * 
 * @param number
 * @returns {String}
 */
function callNumber(number) {
	return '<a href="tel:' + number + '"><img src="img/call.png"/></a>';
}


function tmpWstawCalla() {
	$("#wrapper").append("<p>"+callNumber("501100952")+"</p>");
}
