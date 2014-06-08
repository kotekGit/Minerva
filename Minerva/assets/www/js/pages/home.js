
$(document).ready(function() {
	printListFolders(foldersList);
});

function printListFolders(folders) {
	for (var i=0; i<folders.length; i++) {
		var id = folders[i].name+'_'+i;
		fillFolderList(folders[i], id);
		createPageForFolder(folders[i], id);
	}
	$("#foldery").listview("refresh");
}

function fillFolderList(folder, id) {
	//rysuje element listy (Folder) 
	var src = folder.img;
	var insert = '<li><a href="#'+id+'" data-transition="slide">'+
	'<img src="'+src+'">'+
	'<h2>'+folder.name+'</h2>'+
	'<p>'+folder.name+'</p>'+
	'<a href="#'+id+'_panel" >'+getMessage("edit")+'</a></li>'; 
	$(insert).appendTo("#foldery");
	
	//tworzy panelBoczny dla Folderu
	
	
	
	
	
	
/*	var panel = '<div data-role="panel" data-position="right" data-display="reveal" data-theme="a" id="'+id+'_panel"></div>';
	$(panel).appendTo("body");
	var inPanel = '<ul data-role="listview">'+
	'<li data-icon="delete"><a href="#" data-rel="close">'+getMessage("del")+'</a></li>'+
	'<li><a href="#panel-responsive-page2">Accordion</a></li><li><a href="#panel-responsive-page2">Ajax Navigation</a></li></ul>';
	$(inPanel).appendTo("#"+id+"_panel");*/
}