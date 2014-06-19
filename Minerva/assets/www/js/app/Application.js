(function() {
	var MinervaApp = {};
	window.MinervaApp = MinervaApp;

	// given the name of the template, it returns the compiled javascript of
	// that template.
	MinervaApp.template = function(name) {
		return Mustache.compile($('#' + name + '-template').html());
	};

	// This is the entry point to our client side application
	MinervaApp.boot = function(container, foldersUrl) {

		try{
			$.getJSON(foldersUrl, function(foldersDetails) {
				var FOLDERY = {};
				FOLDERY["folders"] = foldersDetails;
				container = $(container);
				var router = new MinervaApp.Router({
					el : container,
					folders : FOLDERY
				});
				Backbone.history.start();
			});
		} catch (e) {
			alert("ERROR CONNECTION");
		}
	};

})();