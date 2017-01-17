app.config(function ($stateProvider) {
    $stateProvider.state('students', {
        url: '/:classId/students',
        templateUrl: 'js/student/students.html',
        controller: 'StudentsCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
            currentClass: function(ClassFactory, user, $stateParams) {
                return ClassFactory.fetchById($stateParams.classId, user);
            }
        }
    });
});

app.controller('StudentsCtrl', function($scope, user, currentClass, $state, $rootScope, UtilsFactory, StudentFactory) {
	UtilsFactory.init(user);
    
    if (!currentClass) {
        $state.go('home');
    } else {
        $rootScope.title = {
            name: currentClass.name,
            icon: "stars",
            color: "green-text"
        };
    }

    $scope.currentClass = currentClass;
	$scope.user = user;
    $scope.students = $scope.currentClass.students;
    console.log($scope.currentClass);
})
