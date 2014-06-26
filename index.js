/**
 * Module dependencies.
 */

var user = angular.module('user', ['ui.router']);

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
    template: require('./login.html')
  }
});

module.exports = user;
