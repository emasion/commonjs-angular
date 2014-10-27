'use strict'

// @ngInject
module.exports = function GithubController($scope, GithubSvc) {
	GithubSvc.fetchStories().success(function (users) {
		$scope.users = users
	})
}
