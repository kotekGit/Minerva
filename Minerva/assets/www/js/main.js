var PAGE = {
	reload : function() {
		location.reload();
		return false;
	},
	
	findByTag : function() {
		var tag = $("#search-basic").val();
		alert(tag);
		window.location.replace("#filesByTag/"+tag);
	}


};

var FOLDER_FORM = {
	add : function() {
		var url = PATH + "Directory";
		var data = new Object();
		data.name = $("#folderName").val();
		data.parent_id = 1;
		data.description = $("#description").val();
		$.runAJAX(url, data, "POST", this.success);
	},
	edit : function(id) {
		var url = PATH + "Directory/" + id;
		var data = new Object();
		data.name = $("#folderName").val();
		data.parent_id = 1;
		data.description = $("#description").val();
		$.runAJAX(url, data, "PUT", this.success);
	},
	del : function(id) {
		var url = PATH + "Directory/" + id;
		$.runAJAX(url, null, "DELETE", this.success);
	},
	clear : function() {
		$("#folderName").val("");
		$("#description").val("");
	},
	success : function(msg) {
		Backbone.history.history.back();
	}
};

var FILE_FORM = {
	add : function() {
		var url = PATH + "file";
		var data = new Object();
		data.name = $("#name").val();
		data.parent_id = $("#parentID").val();
		data.description = $("#description").val();
		$.runAJAX(url, data, "POST", this.successAdd);
	},
	del : function(id) {
		var url = PATH + "file/" + id;
		$.runAJAX(url, null, "DELETE", this.success);
	},
	clear : function() {
		$("#name").val("");
		$("#description").val("");
	},
	success : function(msg) {
		Backbone.history.history.back();
	},
	successAdd : function(id) {
		CAMERA.setFileID(id);
		CAMERA.getPicture();
		Backbone.history.history.back();
	}
	
};

$.runAJAX = function(url, data, type, success) {
	var auth = "Bearer " + sessionStorage.getItem("token");
	if (auth) {
		return jQuery.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json',
				"Authorization": auth
			},
			'type' : type,
			'url' : url,
			'data' : JSON.stringify(data),
			'dataType' : 'json',
			'success' : success,
			'error' : function(err) {
				alert(getMessage("connectionError"));
			},
		});
	} else {
		alert("AUTORIZATION ERROR");
		return false;
	}

};
