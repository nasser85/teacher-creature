app.config(function ($stateProvider) {
    $stateProvider.state('grade', {
        url: '/standards/:subject/:grade/:id',
        templateUrl: 'js/standards/single-grade.html',
        controller: 'GradeCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
            standards: function(StandardsFactory, $stateParams) {
            	return StandardsFactory.getStandardsByGrade($stateParams.id)
            }

        }
    });
});

app.controller('GradeCtrl', function($scope, user, AuthService, $state, $rootScope, UtilsFactory, InterfaceFactory, standards, $stateParams, StandardsFactory) {
	UtilsFactory.init("something");

	$scope.user = user;
    $scope.features = InterfaceFactory.siteFeatures();
    $scope.subject = $stateParams.subject;
    $scope.grade = $stateParams.grade;
    $scope.standards = standards;
    console.log($scope.standards);
})
