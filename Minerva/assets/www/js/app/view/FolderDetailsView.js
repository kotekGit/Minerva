//Todo - add a logic here to see if the MinervaApp is defined before doing this.
MinervaApp.FolderDetailView = Backbone.View.extend({
  template: MinervaApp.template("FolderDetails"),

  initialize : function(options){
  	this.folders = options.folders["folders"];
  	this.currentFolderName = options.folderName;
  	this.currentFolder = this.getCurrentFolderObject(this.folders,this.currentFolderName);
  },
  
  render : function(){

    var folderDetailsPage = $(this.template(this));
    return folderDetailsPage;
  },

  //Define variables for the template
  folderName: function(){
  	return this.currentFolder.name;
  },

  folderPicUrl: function(){
  	return this.currentFolder.picUrl;
  },

  trailerUrl: function(){
  	return this.currentFolder.trailerUrl;
  },

  folderDetailPageId: function(){
  	return "FolderDetailPageId";
  },

  //iterates through all folders and sets the current folder Object 
  //Todo - What happens if you dont find the folder
  getCurrentFolderObject: function(folders, currentFolderName){
  	var currentFolder;
  	$.each(folders, function(i, folder){
  		if(folder.name == currentFolderName){
  			currentFolder = folder;
  			return false;
  		}
  	});
  	return currentFolder;
  }
});