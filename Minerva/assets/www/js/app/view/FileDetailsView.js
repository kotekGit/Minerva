//Todo - add a logic here to see if the MinervaApp is defined before doing this.
MinervaApp.FileDetailView = Backbone.View.extend({
  template: MinervaApp.template("FilesDetails"),

  initialize : function(options){
  	this.files = options.files["files"];
  	this.currentFileID = options.fileID;
  	this.currentFile = this.getCurrentFileObject(this.files,this.currentFileID);
  },
  
  render : function(){
    var fileDetailsPage = $(this.template(this));
    return fileDetailsPage;
  },

  //Define variables for the template
  fileID: function(){
  	return this.currentFile.id;
  },

  fileCreator: function(){
  	return this.currentFile.creator;
  },
  
  fileExt: function(){
	  	return this.currentFile.ext;
  },
  
  fileDescription: function(){
	  	return this.currentFile.description;
  },

  fileName: function(){
	  	return this.currentFile.name;
  },
  
  filePhone: function(){
	  	return this.currentFile.phone;
  },

  fileURL: function(){
	  	return this.currentFile.url;
  },

  fileTags: function(){
	  	return this.currentFile.description;
  },
  
  fileLastModification: function(){
	  	return this.currentFile.last_modification;
  },

  
  fileDetailPageId: function(){
  	return "FileDetailPageId";
  },

  //iterates through all folders and sets the current folder Object 
  //Todo - What happens if you dont find the folder
  getCurrentFileObject: function(files, curentID){
  	var currentFile = null;
  	$.each(files, function(i, file){
  		if(file.id == curentID){
  			currentFile = file;
  			console.log(currentFile);
  			return currentFile;
  		}
  	});
  	return currentFile;
  }
});