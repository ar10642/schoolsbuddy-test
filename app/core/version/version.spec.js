'use strict';

describe('schoolsBuddyTest.version module', function() {
  beforeEach(module('schoolsBuddyTest.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
