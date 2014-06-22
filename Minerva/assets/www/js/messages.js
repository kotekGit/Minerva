var lang = "PL";

var messageENG = {
	back : "Back",
	edit : "Edit",
	del : "Delete",
	load : "Loading",
	login : "Login",
	user : "Username",
	pass : "Password",
	cancel : "Cancel",
	signin : "Sign in",
	connectionError : "Connection Error!",
	folderName : "Folder name: ",
	folderDesc : "Folder description",
	folders : "FOLDERS",
	langLV : "Language",
	search : "Search",
	addFolder : "Create",
	refresh : "Refresh",
	del : "Delete",
	edit : "Edit",
	clear : "Clear"
};

var messagePL = {
	back : "Cofnij",
	edit : "Edytuj",
	del : "Usuń",
	load : "Ładowanie",
	login : "Logowanie",
	user : "Nazwa użytkownika",
	pass : "Hasło",
	cancel : "Anuluj",
	signin : "Zaloguj się",
	connectionError : "Błąd połączenia!",
	folderName : "Nazwa folderu: ",
	folderDesc : "Opis folderu",
	folders : "FOLDERY",
	langLV : "Język",
	search : "Szukaj",
	addFolder : "Utwórz",
	refresh : "Odświerz",
	del : "Usuń",
	edit : "Edytuj",
	clear : "Wyczyść"
};

function getMessage(msg) {
	if (lang == "ENG") {
		return messageENG[msg];
	} else if (lang == "PL") {
		return messagePL[msg];
	} else {
		return messageENG[msg];
	}
}

function setLang(lg) {
	lang = lg;
	changeLang();
}

function getLang() {
	return lang;
}

function changeLang() {
	for (var i = 0; i < langItems.length; i++) {
		$("#" + langItems[i]).html(getMessage(langItems[i]));
	}
}

var langItems = [ "langLV", "folders", "search", "addFolder", "refresh", "edit", "del", "clear"];
