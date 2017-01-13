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

	classFactory.fetchByUser = function(user) {
		return $http.post(baseUrl + 'all', user)
			.then(function(userClasses) {
				return userClasses.data;
			})
	}

	classFactory.fetchById = function(id, user) {
		return $http.post(baseUrl + 'all', user)
			.then(function(userClasses) {
				return userClasses.data.filter(function(el) {
					return el.id == id;
				})[0];
			})
	}

	return classFactory;
})