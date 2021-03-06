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
    $(document).ready(function() {
        setTimeout(function() {
            $('select').material_select();
        }, 1000);
        
    });
    $scope.student = {};
    $scope.updateClass = false;
    $scope.studentsToDelete = [];
    
    if (!currentClass) {
        $state.go('home');
    } else {
        $rootScope.title = {
            name: currentClass.name,
            icon: "stars",
            color: "green-text"
        };
    }

    $scope.add = function() {
        var obj = $scope.student;
        $scope.student.classroomId = currentClass.id;
        $scope.students.push(obj);
        $scope.student = {};
    }

    $scope.removeStudent = function(index) {
        var deletedStudent = $scope.students.splice(index, 1);
        $scope.studentsToDelete.push(deletedStudent[0]);
    }

    $scope.update = function() {
        $scope.updateClass = true;
    }
    $scope.save = function() {
        var addThese = StudentFactory.studentsToAdd($scope.students);
        console.log($scope.studentsToDelete[0])
        $scope.studentsToDelete.forEach(function(el) {StudentFactory.deleteStudent(el)})
        if (addThese.length) {
            StudentFactory.create(addThese);
        }
        $scope.updateClass = false;
        $scope.studentsToDelete = [];
        
    }

    $scope.edit = function() {
        $scope.updateClass = true;
    }
    $scope.currentClass = currentClass;
	$scope.user = user;
    $scope.students = $scope.currentClass.students;
    console.log($scope.currentClass);
})
