app.config(function ($stateProvider) {
    $stateProvider.state('singleClass', {
        url: '/class/:classId',
        templateUrl: 'js/class/single-class.html',
        controller: 'SingleClassCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
        	currentClass: function(ClassFactory, $stateParams) {
        		return ClassFactory.fetchById($stateParams.classId);
        	}
        }
    });
});

app.controller('SingleClassCtrl', function($scope, currentClass, ClassFactory) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

})