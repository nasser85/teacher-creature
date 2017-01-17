app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.controller('HomeCtrl', function($scope, user, AuthService, $state, $rootScope, UtilsFactory) {
	UtilsFactory.init(user);

	$scope.user = user;
    console.log($scope.user)
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

