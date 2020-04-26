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

  $scope.getDate = function(dateString) {
    return new Date(dateString.split(' ').join(''));
  }

  $scope.getNumber = function(numberString) {
    return parseFloat(numberString.replace(/\,/g, ''));
  }

  $scope.filterChanged = function() {
    $timeout.cancel(timeout);
    timeout = $timeout(function() {
      $scope.userData = userDataService.getUserData($scope.filter);
    }, 500);
  }

};