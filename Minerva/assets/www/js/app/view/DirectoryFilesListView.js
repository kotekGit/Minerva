MinervaApp.DirectoryFilesListView = Backbone.View.extend({

	directoryFilesListViewTemplate: MinervaApp.template("DirectoryFilesListView"),

	initialize: function(options){
      this.files = options.files["files"];
	},

	render: function(){
      var directoryFilesListItems = $(this.directoryFilesListViewTemplate(this));
      return directoryFilesListItems;
    },

	directoryFilesContainerId: function(){
	  return "DirectoryFilesContainer";
	},

	directoryFilesItemDetails: function(){
      	var directoryFilesItemDetailsArray = [];
      	var self = this;

    	$.each(this.files, function(i, file){
			var obj = {};
			obj["fileName"] = file.name;
			obj["fileDescription"] = file.description;
			obj["fileDetailUrl"] = self.getDirectoryFilesDetailUrl(file.name);
			directoryFilesItemDetailsArray.push(obj);
		});
    	console.log(directoryFilesItemDetailsArray);
		return directoryFilesItemDetailsArray;
	},

	getDirectoryFilesDetailUrl: function(folderID){
      return "#dirFiles/"+folderID;
	}

});