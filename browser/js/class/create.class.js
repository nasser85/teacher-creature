app.config(function ($stateProvider) {
    $stateProvider.state('createClass', {
        url: '/create-class',
        templateUrl: 'js/class/create-class.html',
        controller: 'CreateClassCtrl',
        resolve: {
        	user: function(AuthService) {
        		return AuthService.getLoggedInUser();
        	}
        }
    });
});

app.controller('CreateClassCtrl', function($scope, user, $state, $rootScope, ClassFactory) {
	window.scroll(0,0);
	document.body.style.backgroundImage = ""
    document.getElementById('class_name').focus();

    $scope.user = user;
    $scope.section = "name";
    $scope.classroom = {};

    function makeGrades() {
        var arr = [];
        for (var i = 0; i < 13; i++) {
            if (i == 0) {
                arr.push("Kindergarten");
            } else if (i == 1) {
                arr.push("1st Grade");
            } else if (i == 2) {
                arr.push("2nd Grade");
            } else if (i == 3) {
                arr.push("3rd Grade");
            } else {
                arr.push(i.toString() + "th Grade");
            }
        }
        return arr;
    }
    $scope.grades = makeGrades();
    $(document).ready(function() {
        $('select').material_select();
    });


    $scope.continue = function() {
        $scope.classroom.grade = $('#grade-select').val();
        $scope.classroom.subject = $('#subject-select').val();
        if (($scope.classroom.grade == "" || !$scope.classroom.grade) || ($scope.classroom.subject == "" || !$scope.classroom.subject) || ($scope.classroom.name == "" || !$scope.classroom.name)) {
             alert("Please make sure all fields are filled out before you continue.");
        } else {
           console.log($scope.classroom);
           $scope.section = "description";
           setTimeout(function() {
                $('#description').focus()
            },0);
        }
   
    }
    $scope.back = function() {
        $scope.section = "name";
    }
    $scope.createClass = function() {
        $scope.classroom.userId = $scope.user.id;
        ClassFactory.create($scope.classroom);
    }

    
    $rootScope.title = {
        name: "Create Class",
        icon: "assignment_ind",
        color: "purple-text"
    };
})