app.config(function ($stateProvider) {
    $stateProvider.state('singleClass', {
        url: '/class/:classId',
        templateUrl: 'js/class/single-class.html',
        controller: 'SingleClassCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	},
        	currentClass: function(ClassFactory, $stateParams) {
        		return ClassFactory.fetchById($stateParams.classId);
        	}
        }
    });
});

app.controller('SingleClassCtrl', function($scope, user, currentClass, $rootScope) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""
    $scope.currentClass = currentClass;
    $scope.buttons = [
        {
            label: "Students",
            icon: "supervisor_account"
        },
        {
            label: "Assignments",
            icon: "note_add"
        },
        {
            label: "Exams",
            icon: "spellcheck"
        },
        {
            label: "Resources",
            icon: "https"
        },
        {
            label: "All Classes",
            icon: "recent_actors"
        },
        {
            label: "Mailbox",
            icon: "markunread_mailbox"
        }
    ];
    $rootScope.title = {
        name: currentClass.name,
        icon: "stars",
        color: "green-text"
    };
})