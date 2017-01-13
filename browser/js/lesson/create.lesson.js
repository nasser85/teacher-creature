app.config(function ($stateProvider) {
    $stateProvider.state('createLesson', {
        url: '/create-lesson',
        templateUrl: 'js/lesson/create-lesson.html',
        controller: 'CreateLessonCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.controller('CreateLessonCtrl', function($scope, user, $state, $rootScope, UtilsFactory) {
	UtilsFactory.init(user);

	$scope.user = user;
    $rootScope.title = {
        name: "Create Lesson",
        icon: "assignment",
        color: "cyan-text"
    };
})