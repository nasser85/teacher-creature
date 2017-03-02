app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
            standards: function(StandardsFactory) {
                return StandardsFactory.fetchAll();
            },
            juris: function(StandardsFactory) {
                return StandardsFactory.getJurisdictions();
            },
            commonCore: function(StandardsFactory) {
                return StandardsFactory.getOneJurisdiction();
            }
        }
    });
});

app.controller('HomeCtrl', function($scope, user, AuthService, $state, $rootScope, UtilsFactory, InterfaceFactory, standards, juris, commonCore) {
	UtilsFactory.init(user);

	$scope.user = user;
    $scope.features = InterfaceFactory.siteFeatures();
    console.log(standards);
    console.log(juris);
    console.log(commonCore);
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

