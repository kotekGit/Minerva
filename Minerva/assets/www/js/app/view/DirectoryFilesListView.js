/*Podstrona 2, pliki w danym folderze*/
MinervaApp.DirectoryFilesListView = Backbone.View.extend({

	directoryFilesListViewTemplate : MinervaApp.template("DirectoryFilesListView"),

	initialize : function(options) {
		this.files = options.files["files"];
	},

	render : function() {
		var directoryFilesListItems = $(this.directoryFilesListViewTemplate(this));
		return directoryFilesListItems;
	},

	directoryFilesContainerId : function() {
		return "DirectoryFilesContainer";
	},

	directoryFilesItemDetails : function() {
		var directoryFilesItemDetailsArray = [];
		var self = this;

		$.each(this.files, function(i, file) {
			var obj = {};
			obj["fileName"] = file.name;
			obj["fileDescription"] = file.description;
			obj["fileDetailUrl"] = self.getFileDetailUrl(file.id);
			directoryFilesItemDetailsArray.push(obj);
		});
		return directoryFilesItemDetailsArray;
	},

	getFileDetailUrl : function(fileID) {
		return "#file/" + fileID;
	},
	
	getAddFileURL : function() {
		var curentDirectoryID = this.getCurrentFolderID();
		return "#fileAdd/" + curentDirectoryID;
	},
	
	getCurrentFolderID : function() {
		var dest = window.location.href;
		dest = dest.substr(dest.lastIndexOf('/')+1);
		return dest;
	}

});

MinervaApp.AddFileView = Backbone.View.extend({
	template : MinervaApp.template("AddFile"),

	initialize : function(options) {
		this.parentID = options.parentID;
	},

	render : function() {
		var addFilePage = $(this.template(this));
		return addFilePage;
	},
	
	getParentID : function() {
		return this.parentID;
	},
	
	getCreator : function() {
		return sessionStorage.getItem("user");
	}
});