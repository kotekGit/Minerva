
$(document).ready(function() {
	//printListFolders(foldersList);
	organizeInputs();
});

function printListFolders(folders) {
	for (var i=0; i<folders.length; i++) {
		var id = folders[i].name+'_'+i;
		fillFolderList(folders[i], id);
		createPageForFolder(folders[i], id);
	}
	$("#foldery").listview().listview("refresh");
}

function fillFolderList(folder, id) {
	//rysuje element listy (Folder) 
	var src = folder.img;
	var insert = '<li><a href="#'+id+'" data-transition="slide">'+
	'<img src="'+src+'">'+
	'<h2>'+folder.name+'</h2>'+
	'<p>'+folder.name+'</p>'+
	'<a href="#folderPopup" data-rel="popup" data-position-to="window" data-transition="pop" >'+getMessage("edit")+'</a></li>'; 
	$(insert).appendTo("#foldery");
}
