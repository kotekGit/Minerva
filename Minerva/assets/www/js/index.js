$(document).ready(function() {
	mobileInit();
	appInit();
});



function appInit() {
	prepareLanguageSetting();
	prepareForm();
}

function success(msg) {
	alert("hello" + msg);
}
function fail() {
	alert("fail");
}



function prepareForm() {
	$("#formTitle").empty().append(getMessage("login"));
	$("#save").empty().append(getMessage("signin"));
	$("#save").unbind().click(function() {
		var url = "http://192.168.1.101:8080/RestFull/json/send";
		
		//var url = "http://10.5.100.178/Minerva/api/Account/Login";
		var data = '{ "Username" : "Mariusz", "Password" : "Pass" }';
		//var jData = JSON.stringify(data);
		

		
/*		$.ajax({
			   type: 'POST',
			    url: url,
			    async: false,
			    jsonpCallback: jsonCallback(
			    	    {
			    	        "sites":
			    	        [
			    	            {
			    	                "siteName": "JQUERY4U",
			    	                "domainName": "http://www.jquery4u.com",
			    	                "description": "#1 jQuery Blog for your Daily News, Plugins, Tuts/Tips &amp; Code Snippets."
			    	            },
			    	        ]
			    	    }
			    	),
			    contentType: "application/json",
			    dataType: 'jsonp',
			    success: function(json) {
			       console.dir(json.sites);
			    },
			    error: function(e) {
			       console.log(e.message);
			    }
			});*/
		
		$.ajax({
			  type: "POST",
			  async: "false",
			  contentType: "application/json",
			  dataType: "jsonp",
			  crossDomain: true,
			  url: url,
			  data: data,
			  success: function(msg) {
				  alert("hura: "+ msg);
			  },
			  error : function(msg) {
				  alert("bee: "+ msg.num);
			  }
			  
		});
		//ajaxPost(url, jData, 'jsonp', success, fail);
		console.log("poszło");
		//window.location.href='home.html';
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