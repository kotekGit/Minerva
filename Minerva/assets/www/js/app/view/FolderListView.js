/*Podstrona 1 - Foldery*/
MinervaApp.FolderListView = Backbone.View.extend({

	folderListViewTemplate : MinervaApp.template("FolderListView"),

	initialize : function(options) {
		this.folders = options.folders["folders"];
	},

	render : function() {
		var folderListItems = $(this.folderListViewTemplate(this));
		return folderListItems;
	},

	folderContainerId : function() {
		return "FolderContainer";
	},

	folderItemDetails : function() {
		var folderItemDetailsArray = [];
		var self = this;

		$.each(this.folders, function(i, folder) {
			var obj = {};
			obj["folderName"] = folder.name;
			obj["folderDescription"] = folder.description;
			obj["folderFilesUrl"] = self.getFolderFilesUrl(folder.id);
			obj["editFolderUrl"] = self.getEditFolderUrl(folder.id);
			folderItemDetailsArray.push(obj);
		});
		return folderItemDetailsArray;
	},

	getFolderFilesUrl : function(folderID) {
		return "#dirFiles/" + folderID;
	},
	
	getEditFolderUrl : function(folderID) {
		return "#dirEdit/" + folderID;
	},

	getAddFolderURL : function() {
		return "#dirAdd";
	}

});

MinervaApp.AddFolderView = Backbone.View.extend({
	template : MinervaApp.template("AddFolder"),

	initialize : function(options) {
	},

	render : function() {
		var addFolderPage = $(this.template(this));
		return addFolderPage;
	}
});


MinervaApp.EditFolderView = Backbone.View.extend({
	template : MinervaApp.template("EditFolder"),

	initialize : function(options) {
		this.folderID = options.folderID;
	},

	render : function() {
		var editFilePage = $(this.template(this));
		return editFilePage;
	},
	
	folderID : function() {
		return this.folderID();
	}
});

