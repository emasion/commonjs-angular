/**
 * Created by Davinci28 on 2014-10-30.
 */
'use strict'

// @ngInject
module.exports = function RootController($log, $scope, $rootScope, $state) {
	$log.info('RootController');

	//화면 이동 link
	$rootScope.goURL = function (url) {
		switch (url) {
			//helloWorld
			case 'helloWorld' :
				$state.go('helloWorld', {loadDefault: true})
				break

			case 'helloWorld-list' :
				$state.go('helloWorld.list', {loadDefault: true})
				break

			default :
				break
		}
	}
}