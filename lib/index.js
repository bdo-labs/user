
/**
 * Module dependencies.
 */
require('angular');
require('ui-router');
require('services');
require('custom-elements');

/**
 * Expose user.
 */
var user = module.exports = angular.module('user', [
		'ui.router',
		'services',
		'customElements'
	]);

/**
 * Module dependencies.
 */

user.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'UserController'
    });
}]);


user.controller('UserController', ['$scope', function ($scope) {
  $scope.boxes = [{
    name: 'login-module'
  }]
}]);

user.directive('loginModule', function () {
  return {
    template: require('./partials/login.html')
  }
});

require('./userMenu.js');

module.exports = user;
