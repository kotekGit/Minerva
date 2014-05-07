function createPageForFolder(folder, id) {
	var page = '<div data-role="page" class="ui-responsive-panel" data-theme="b" '+
		'id="'+id+'" '+
		'data-title="'+folder.name+'" '+
		'data-url="'+id+'">'+
		'<div data-role="header" data-theme="b"><h1>'+folder.name+'</h1>'+
		'<a href="#home" data-icon="back" data-transition="slideup">'+getMessage("back")+'</a></div></div>';
	$(page).appendTo("body");
	if (folder1.length > 0) {
		fillFolderPage(id);
	}
}

function fillFolderPage(id) {
	//dodanie listy plików
	var listView = '<ul data-role="listview" id="LVFolder_'+id+'" data-theme="a" data-inset="true"></ul>';
	var inListView = $("#"+id).append(listView);
	for (var i = 0; i<folder1.length; i++) {
		$("#LVFolder_"+id).append(fillFolderListView(folder1[i]));
	}
}

function fillFolderListView(folder) {
	var src = checkExtension(folder.ext);
	var img = '<img src="'+src+'" class="ui-li-icon ">';
	return '<li><a href="#">'+img+folder.name+'</a></li>';
}


function checkExtension(ext) {
	
	if (ext == "doc" || ext == "docx") {
		return 'img/ext-icons/doc.png';
	} else if (ext == "xls" || ext == "xlsx") {
		return 'img/ext-icons/xls.png';
	}else if (ext == "jpg" || ext == "png") {
		return 'img/ext-icons/paint.png';
	}else if (ext == "pdf") {
		return 'img/ext-icons/pdf.png';
	}else {
		return 'img/ext-icons/file.png';
	}
}