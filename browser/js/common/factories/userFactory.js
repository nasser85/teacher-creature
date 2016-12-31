app.factory('UserFactory', function($http, $state) {
	var userFactory = {};
	var baseUrl = "/api/users/";

	userFactory.create = function(user) {
		return $http.post(baseUrl, user)
			.then(function(createdUser) {
				return createdUser.data;
			})
	}

	userFactory.fetchAll = function() {
		return $http.get(baseUrl)
			.then(function(users) {
				return users.data;
			})
	}

	return userFactory;
})