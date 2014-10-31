'use strict'

require('./helloWorld/helloWorld.module')

var RootController = require('./root.ctrl')

function config($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/app");
	$stateProvider
		.state('app', {
			url: "/app",
			controller: 'RootController'
		})
}

angular.module('app', [
	'templates',
	'helloWorld'
])
.config(config)
.controller('RootController', RootController)

