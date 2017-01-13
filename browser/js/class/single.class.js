app.config(function ($stateProvider) {
    $stateProvider.state('singleClass', {
        url: '/class/:classId',
        templateUrl: 'js/class/single-class.html',
        controller: 'SingleClassCtrl',
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

app.controller('SingleClassCtrl', function($scope, user, currentClass, $rootScope, $state, InterfaceFactory) {
	window.scroll(0,0);
	document.body.style.backgroundImage = "";
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
    $scope.buttons = InterfaceFactory.classButtons();

    
})