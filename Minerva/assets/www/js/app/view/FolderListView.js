MinervaApp.FolderListView = Backbone.View.extend({

	folderListViewTemplate: MinervaApp.template("FolderListView"),

	initialize: function(options){
      this.folders = options.folders["folders"];
	},

	render: function(){
      var folderListItems = $(this.folderListViewTemplate(this));
      return folderListItems;
    },

	folderContainerId: function(){
	  return "FolderContainer";
	},

	folderItemDetails: function(){
      	var folderItemDetailsArray = [];
      	var self = this;

    	$.each(this.folders, function(i, folder){
			var obj = {};
			obj["folderName"] = folder.name;
			obj["folderDescription"] = folder.description;
			obj["folderDetailUrl"] = self.getFolderDetailUrl(folder.name);
			obj["folderFilesUrl"] = self.getFolderFilesUrl(folder.id);
			folderItemDetailsArray.push(obj);
		});
		return folderItemDetailsArray;
	},

	getFolderDetailUrl: function(folderName){
      return "#detail/"+folderName;
	},
	
	getFolderFilesUrl: function(folderID){
	      return "#dirFiles/"+folderID;
	}

});