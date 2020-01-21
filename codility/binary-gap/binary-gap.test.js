'use strict';

const binaryGap = require('./binary-gap');

describe('binaryGap', function() {
  describe('task requirements', function() {
    it('examples', () => {
      expect.hasAssertions();
      expect(binaryGap(9)).toBe(2);
      expect(binaryGap(529)).toBe(4);
      expect(binaryGap(20)).toBe(1);
      expect(binaryGap(15)).toBe(0);
      expect(binaryGap(32)).toBe(0);
      expect(binaryGap(1041)).toBe(5);
      expect(binaryGap(1041)).toBe(5);
    });
  });
});
