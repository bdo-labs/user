
/**
 * Module dependencies.
 */
// var angular = require('angular');

/**
 * Expose user.
 */
var user = module.exports = angular.module('user', ['ui.router']);

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

module.exports = user;
