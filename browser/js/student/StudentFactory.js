app.factory('StudentFactory', function($http, $state) {
	var studentFactory = {};
	var baseUrl = "/api/students/";

	studentFactory.create = function(student) {
		return $http.post(baseUrl, student)
			.then(function(createdStudent) {
				return createdStudent.data;
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

	studentFactory.studentsToDelete = function(newStudents, oldStudents) {
		return oldStudents.filter(function(el) {
			newStudents.indexOf(el) == -1;
		});
	}

	return studentFactory;
})