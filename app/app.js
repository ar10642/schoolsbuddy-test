'use strict';

// Declare app level module which depends on views, and core components
angular.module('schoolsBuddyTest', [
  'ngRoute',
  'schoolsBuddyTest.userdata',
  'schoolsBuddyTest.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/userdata'});
}]);
