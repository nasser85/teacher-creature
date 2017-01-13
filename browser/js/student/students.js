app.config(function ($stateProvider) {
    $stateProvider.state('students', {
        url: '/:classId/students',
        templateUrl: 'js/student/students.html',
        controller: 'StudentsCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
            classes: function(ClassFactory, user) {
                return ClassFactory.fetchByUser(user);
            }
        }
    });
});

app.controller('StudentsCtrl', function($scope, user, classes, $state, $rootScope, UtilsFactory) {
	UtilsFactory.init(user);

	$scope.user = user;
    $scope.classes = classes;
    $rootScope.title = {
        name: "View Classes",
        icon: "supervisor_account",
        color: "orange-text"
    };
})
