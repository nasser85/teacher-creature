app.config(function ($stateProvider) {
    $stateProvider.state('viewClasses', {
        url: '/view-classes',
        templateUrl: 'js/class/view-classes.html',
        controller: 'ViewClassesCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.controller('ViewClassesCtrl', function($scope, user, $state, $rootScope) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""

	$scope.user = user;
    $rootScope.title = {
        name: "View Classes",
        icon: "supervisor_account"
    };
})