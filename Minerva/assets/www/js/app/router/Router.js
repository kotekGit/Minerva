var FILES = {};

MinervaApp.Router = Backbone.Router.extend({
	initialize : function(options) {
		this.el = options.el;
		this.folders = options.folders;
	},
	routes : {
		"" : "index",
		"dirFiles/:id" : "showDirectoryFilesList",
		"filesByTag/:id" : "showFilesByTag",
		"file/:id" : "showFileDetail",
		"dirAdd" : "addFolder",
		"dirEdit/:id" : "editFolder",
		"fileAdd/:dirId" : "addFile",
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
		document.addEventListener("backbutton", function(e) {
			e.preventDefault();
		});
		changeLang();
	},

	showDirectoryFilesList : function(id) {
		var filesURL = PATH + "Directory/" + id + "/files";
		var success = function(directoryFiles) {
			FILES["files"] = directoryFiles;

			var directoryFilesListView = new MinervaApp.DirectoryFilesListView({
				files : FILES
			});
			var directoryFilesListPage = directoryFilesListView.render();

			$("#mainContent").empty();
			directoryFilesListPage.appendTo("#mainContent");

			$("#" + directoryFilesListView.directoryFilesContainerId())
					.listview();
			$.mobile.changePage($("#mainPage"));
			changeLang();
		};

		$.runAJAX(filesURL, null, "GET", success);

	},
	
	showFilesByTag : function(tag) {
		var filesURL = PATH + "file/findbytag/" + tag;
		var success = function(directoryFiles) {
			FILES["files"] = directoryFiles;

			var directoryFilesListView = new MinervaApp.DirectoryFilesListView({
				files : FILES
			});
			var directoryFilesListPage = directoryFilesListView.render();

			$("#mainContent").empty();
			directoryFilesListPage.appendTo("#mainContent");

			$("#" + directoryFilesListView.directoryFilesContainerId())
					.listview();
			$.mobile.changePage($("#mainPage"));
			changeLang();
		};

		$.runAJAX(filesURL, null, "GET", success);

	},

	showFileDetail : function(id) {
		var fileDetailView = new MinervaApp.FileDetailView({
			files : FILES,
			fileID : id
		});
		var fileDetailsPage = fileDetailView.render();

		fileDetailsPage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(fileDetailsPage);
		changeLang();
	},

	addFolder : function() {
		var addFolderView = new MinervaApp.AddFolderView({});
		var addFolderPage = addFolderView.render();

		addFolderPage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(addFolderPage);
		changeLang();
	},

	editFolder : function(id) {
		var editFolderView = new MinervaApp.EditFolderView({
			folderID : id,
		});
		var editFolderPage = editFolderView.render();

		editFolderPage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(editFolderPage);
		changeLang();
	},

	addFile : function(dirID) {
		var addFileView = new MinervaApp.AddFileView({
			parentID : dirID
		});
		var addFilePage = addFileView.render();

		addFilePage.appendTo($.mobile.pageContainer);

		$.mobile.changePage(addFilePage);
		changeLang();
	},

	editFile : function(id) {
		/*
		 * var editFileView = new MinervaApp.EditFolderView({ folderID : id, });
		 * var editFilePage = editFileView.render();
		 * 
		 * editFilePage.appendTo($.mobile.pageContainer);
		 * 
		 * $.mobile.changePage(editFilePage);
		 */
	},

});