app.factory('StudentFactory', function($http, $state) {
	var studentFactory = {};
	var baseUrl = "/api/students/";

	studentFactory.create = function(students) {
		return $http.post(baseUrl, students)
			.then(function(createdStudents) {
				return createdStudents.data;
			})
		
	}

	studentFactory.update = function(student) {
		return $http.put(baseUrl + 'update', student)
			.then(function(updatedStudent) {
				return updatedStudent.data;
			})	
	}

	studentFactory.delete = function(student) {
		return $http.delete(baseUrl + student.id)
			.then(function(deletedStudent) {
				return deletedStudent.data;
			})	
	}

	studentFactory.studentsToAdd = function(newStudents, oldStudents) {
		return newStudents.filter(function(el) {
			oldStudents.indexOf(el) == -1;
		});
	}

	return studentFactory;
})