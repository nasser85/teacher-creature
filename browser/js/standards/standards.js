app.config(function ($stateProvider) {
    $stateProvider.state('standards', {
        url: '/standards',
        templateUrl: 'js/standards/standards.html',
        controller: 'StandardsCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
            commonCore: function(StandardsFactory) {
                return StandardsFactory.getOneJurisdiction();
            }
        }
    });
});

app.controller('StandardsCtrl', function($scope, user, AuthService, $state, $rootScope, UtilsFactory, InterfaceFactory, commonCore) {
	UtilsFactory.init("something");
    $scope.subjects = ["English", "Math", "Science/Technical"];
	$scope.user = user;
    $scope.features = InterfaceFactory.siteFeatures();
    $scope.standards = commonCore;
    console.log(commonCore);
})