$(document).ready(function() {
	mobileInit();
	appInit();
});

function appInit() {
	prepareLanguageSetting();
	prepareForm();
	organizeInputs();
}

function mobileInit() {
	// document.addEventListener("deviceready",onDeviceReady,false);

}

function onDeviceReady() {
	setCameraDefaults();
	tmpWstawCalla();
}

function organizeInputs() {
	$(document).bind('pageinit', function() {
		$('input,select').keypress(function(event) {
			return event.keyCode != 13;
		});
	});

	$('input[type=text]').attr('autocomplete', 'off');
}

function prepareForm() {
	$("#formTitle").empty().append(getMessage("login"));
	$("#save").empty().append(getMessage("signin"));
	$("#save").unbind().click(function() {
		var user = $("#un").val();
		var pass = $("#pw").val();
		sessionStorage.setItem("user", user);
		var data = new Object();
		data.userName = user;
		data.password = pass;
		data.confirmPassword = "";
		data.grant_type = "password";
		
		var token = "";
		var url = "http://192.168.1.101/Minerva/Token";
		try {
			$.ajax({
				type : "POST",
				async : "false",

				url : url,
				data : data,
				success : function(msg) {
					token = msg.access_token;
					sessionStorage.setItem("token", token);
					window.location.href = 'app.html';
				},
				error : function(xhr, options, err) {
					alert(getMessage("connectionError")+ xhr.status + " " + err);
				},
			});
		} catch (e) {
			alert("ERROR AJAX CALL!");
		}
	});
}

function prepareLanguageSetting() {
	$("#lgPL").unbind().click(function() {
		setLanguage("PL");
	});
	$("#lgEN").unbind().click(function() {
		setLanguage("ENG");
	});
	$("#lgDE").unbind().click(function() {
		setLanguage("DE");
	});
}

function setLanguage(lg) {
	setLang(lg);
	prepareForm();
}