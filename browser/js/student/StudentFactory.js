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
	//*************************************************************************
	// For deleting students we need to figure out if we want to delete students
	// as soon as a user decides to delete one, or rather, keep a record of students
	// in an array like object and then as soon as the user clicks save, we iterate
	// through the array, deleting each student individually.
	//**************************************************************************
	studentFactory.deleteStudent = function(student) {
		return $http.delete(baseUrl + student.id)
			.then(function(deletedStudent) {
				return deletedStudent.data;
			})	
	}

	studentFactory.studentsToAdd = function(newStudents) {
		return newStudents.filter(function(el) {
			return !el.createdAt;
			
		});
	}

	return studentFactory;
})