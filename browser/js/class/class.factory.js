app.factory('ClassFactory', function($http, $state) {
	var classFactory = {};
	var baseUrl = "/api/classes/";

	classFactory.create = function(newClass) {
		return $http.post(baseUrl, newClass)
			.then(function(createdClass) {
				return createdClass.data;
			})
			.then(function(created) {
				$state.go('singleClass', {classId: created.id})
			})
	}

	classFactory.fetchAll = function() {
		return $http.get(baseUrl)
			.then(function(classes) {
				return classes.data;
			})
	}

	classFactory.fetchById = function(id) {
		return $http.get(baseUrl + id)
			.then(function(foundClass) {
				return foundClass.data
			})
	}

	return classFactory;
})