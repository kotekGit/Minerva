$(document).ready(function() {
	mobileInit();
	appInit();
});



function appInit() {
	prepareLanguageSetting();
	prepareForm();
	organizeInputs();
}


function prepareForm() {
	$("#formTitle").empty().append(getMessage("login"));
	$("#save").empty().append(getMessage("signin"));
	$("#save").unbind().click(function() {
/*		var url = "http://192.168.1.101:8080/RestFull/json/send";
		
		//var url = "http://10.5.100.178/Minerva/api/Account/Login";
		var data = '{ "Username" : "Mariusz", "Password" : "Pass" }';
		//var jData = JSON.stringify(data);
		
		try {
			$.ajax({
				  type: "POST",
				  async: "false",
				  contentType: "application/json;",
				  dataType: "json",
				  url: url,
				  data: data,
				  success: function(msg) {
						algert("OK");
						window.location.href='home.html';
				  },
				  error : function(err) {
						alert(getMessage("connectionError"));
				  },
			});
		} catch(e) {
			alert("ERROR AJAX CALL!");
		}*/
		
		
		window.location.href='home.html';
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