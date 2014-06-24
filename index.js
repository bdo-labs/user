var angular = require('angular');
require('angular-router-browserify')(angular);
/**
 * Module dependencies.
 */
var user = angular.module('user', ['ngRoute']);

user.config('$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', {
			controller: 'UserController'
		});
});


user.controller('UserController', ['$scope', function ($scope) {
	$scope.boxes = {
		name: 'login-module'
	}
}]);

user.directive('loginModule', function () {
	return {
		template: require('./login.html')
	}
});

module.exports = user;
