app.config(function ($stateProvider) {
    $stateProvider.state('createClass', {
        url: '/create-class',
        templateUrl: 'js/class/create-class.html',
        controller: 'CreateClassCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.controller('CreateClassCtrl', function($scope, user, $state, $rootScope) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

	$scope.user = user;
    $rootScope.title = {
        name: "Create Class",
        icon: "assignment_ind"
    };
})