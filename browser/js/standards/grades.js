app.config(function ($stateProvider) {
    $stateProvider.state('gradeLevels', {
        url: '/standards/:subject',
        templateUrl: 'js/standards/grade-levels.html',
        controller: 'GradeLevelsCtrl',
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

app.controller('GradeLevelsCtrl', function($scope, user, AuthService, $state, $rootScope, UtilsFactory, InterfaceFactory, commonCore, $stateParams, StandardsFactory) {
	UtilsFactory.init("something");

	$scope.user = user;
    $scope.features = InterfaceFactory.siteFeatures();
    $scope.subject = $stateParams.subject;
    $scope.gradeLevels = StandardsFactory.getGradeLevelsBySubject(commonCore, $stateParams.subject);
    console.log($scope.gradeLevels);
})