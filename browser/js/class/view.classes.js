app.config(function ($stateProvider) {
    $stateProvider.state('viewClasses', {
        url: '/view-classes',
        templateUrl: 'js/class/view-classes.html',
        controller: 'ViewClassesCtrl',
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

app.controller('ViewClassesCtrl', function($scope, user, classes, $state, $rootScope) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

	$scope.user = user;
    $scope.classes = classes;
    $rootScope.title = {
        name: "View Classes",
        icon: "supervisor_account",
        color: "orange-text"
    };
})