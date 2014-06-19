var FILES = {};

MinervaApp.Router = Backbone.Router.extend({
	initialize : function(options) {
		this.el = options.el;
		this.folders = options.folders;
	},
	routes : {
		"" : "index",
		"dirFiles/:id" : "showDirectoryFilesList",
		"file/:id" : "showFileDetail",
		"dirAdd" : "addFolder"
	},
	index : function() {
		var folderListView = new MinervaApp.FolderListView({
			folders : this.folders
		});
		var folderListPage = folderListView.render();

		this.el.empty();
		folderListPage.appendTo(this.el);

		$("#" + folderListView.folderContainerId()).listview();
		$.mobile.changePage($("#mainPage"));

	},
	
	showDirectoryFilesList : function(id) {
		var filesURL = PATH + "Directory/" + id + "/files";
		$.getJSON(filesURL, function(directoryFiles) {
			FILES["files"] = directoryFiles;
			
			var directoryFilesListView = new MinervaApp.DirectoryFilesListView({
				files : FILES
			});
			var directoryFilesListPage = directoryFilesListView.render();

			$("#mainContent").empty();
			directoryFilesListPage.appendTo("#mainContent");

			$("#" + directoryFilesListView.directoryFilesContainerId()).listview();
			$.mobile.changePage($("#mainPage"));
		});
	},

	showFileDetail : function(id) {
		var fileDetailView = new MinervaApp.FileDetailView({
			files : FILES,
			fileID : id
		});
		var fileDetailsPage = fileDetailView.render();

		fileDetailsPage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(fileDetailsPage);
	},
	
	addFolder : function() {
		
	}

});