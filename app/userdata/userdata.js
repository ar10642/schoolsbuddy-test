'use strict';

angular.module('schoolsBuddyTest.userdata', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userdata', {
    templateUrl: 'userdata/userdata.html',
    controller: 'UserDataController'
  });
}])
.controller('UserDataController', UserDataController);

UserDataController.$inject = ['$scope', 'userDataService']; 

function UserDataController($scope, userDataService) {

  $scope.filter = '';
  $scope.userData = userDataService.getUserData();

  $scope.getDate = function(dateString) {
    return new Date(dateString.split(' ').join(''));
  }

  $scope.getNumber = function(numberString) {
    return parseFloat(numberString.replace(/\,/g, ''));
  }

};