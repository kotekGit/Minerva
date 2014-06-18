MinervaApp.Router = Backbone.Router.extend({
	initialize : function(options) {
		this.el = options.el;
		this.folders = options.folders;
	},
	routes : {
		"" : "index",
		"detail/:name" : "showFolderDetail",
		"dirFiles/:id" : "showDirectoryFilesList",
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

	showFolderDetail : function(name) {
		var folderDetailView = new MinervaApp.FolderDetailView({
			folders : this.folders,
			folderName : name
		});
		var folderDetailsPage = folderDetailView.render();

		folderDetailsPage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(folderDetailsPage);
	},
	
	showDirectoryFilesList : function(id) {
		var FILES = {};
		var filesURL = PATH + "Directory/" + id + "/files";
		$.getJSON(filesURL, function(directoryFiles) {
												console.log(directoryFiles);
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
		
		
	}

});