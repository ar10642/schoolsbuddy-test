'use strict';

angular.module('schoolsBuddyTest.userdata', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userdata', {
    templateUrl: 'userdata/userdata.html',
    controller: 'UserDataController'
  });
}])
.controller('UserDataController', UserDataController);

UserDataController.$inject = ['$scope', '$timeout', 'userDataService']; 

function UserDataController($scope, $timeout, userDataService) {

  var timeout = $timeout(function() {});
  $scope.filter = '';
  $scope.userData = userDataService.getUserData($scope.filter);

  // This works on Chrome. Ideally I'd use a date lib like date-fns or moment here or fix the source data
  // but trying not to spend too long on this exercise
  $scope.getDate = function(dateString) {
    return new Date(dateString.split(' ').join(''));
  }

  // Again would ideally fix source data, but trying not to spend too long on the exercise
  $scope.getNumber = function(numberString) {
    return parseFloat(numberString.replace(/\,/g, ''));
  }

  // Debounce as in real life we'd probably be calling from a REST API or similar
  $scope.filterChanged = function() {
    $timeout.cancel(timeout);
    timeout = $timeout(function() {
      $scope.userData = userDataService.getUserData($scope.filter);
    }, 500);
  }

  $scope.resetBalances = function() {
    userDataService.resetBalances();
    $scope.userData = userDataService.getUserData($scope.filter);
  }

};