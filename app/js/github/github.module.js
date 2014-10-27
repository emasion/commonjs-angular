/**
 * Created by Davinci28 on 2014-10-27.
 */
'use strict'

var GithubController = require('./github.ctrl')
var GithubService = require('./github.svc')

// @ngInject
function config($routeProvider) {
	$routeProvider.
		when('/github', {
			templateUrl: 'templates/github/github.html',
			controller: 'GithubController as githubCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}

angular.module('app.github', [])
.config(config)
.controller('GithubController', GithubController)
.factory('GithubSvc', GithubService)