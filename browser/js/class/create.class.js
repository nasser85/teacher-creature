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

app.controller('CreateClassCtrl', function($scope, user, AuthService, $state) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

	$scope.user = user;

	$scope.logout = function() {
		AuthService.logout()
			.then(function() {
				console.log('hello')
				$state.go('login', {user: "Teacher"});
			})
			.catch(function () {
                $scope.error = 'Invalid login credentials.';
            });
	}
})