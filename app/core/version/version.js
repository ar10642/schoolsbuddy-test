'use strict';

angular.module('schoolsBuddyTest.version', [
  'schoolsBuddyTest.version.interpolate-filter',
  'schoolsBuddyTest.version.version-directive'
])

.value('version', '0.1');
