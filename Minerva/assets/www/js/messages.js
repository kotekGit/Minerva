var lang = "PL";

var messageENG = {
	back : "Back",
	edit : "Edit",
	del : "Delete",
	load : "Loading",
	login : "Login",
	user : "Username",
	pass: "Password",
	cancel : "Cancel",
	signin : "Sign in",
	connectionError : "Connection Error!"
};

var messagePL = {
	back : "Cofnij",
	edit : "Edytuj",
	del : "Usuń",
	load : "Ładowanie",
	login : "Logowanie",
	user : "Nazwa użytkownika",
	pass: "Hasło",
	cancel : "Anuluj",
	signin : "Zaloguj się",
	connectionError : "Błąd połączenia!"
		
};

function getMessage(msg) {
	if (lang == "ENG"){
		return messageENG[msg];
	} else if (lang == "PL"){
		return messagePL[msg];
	} else {
		return messageENG[msg];
	}
}

function setLang(lg) {
	lang = lg;
}

function getLang() {
	return lang;
}