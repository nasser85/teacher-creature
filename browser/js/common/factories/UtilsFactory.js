app.factory('UtilsFactory', function() {
	var utilsFactory = {};

	utilsFactory.init = function(user) {
		window.scroll(0,0);
		document.body.style.backgroundImage = "";
		if (user) {
			document.body.style.backgroundColor = 'white';
		} else {
			document.body.style.backgroundColor = 'green';
		}
		
	}

	return utilsFactory;
})