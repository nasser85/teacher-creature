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

app.controller('CreateLessonCtrl', function($scope, user, $state, $rootScope) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

	$scope.user = user;
    $rootScope.title = {
        name: "Create Lesson",
        icon: "assignment",
        color: "cyan-text"
    };
})