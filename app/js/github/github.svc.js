'use strict'

// @ngInject
module.exports = function GithubService($http) {
	return {
		fetchStories: function () {
			return $http.get('https://api.github.com/users')
		}
	}
}
