const randomMessages = require('../src/random_messages');
const assert = require('assert');
// require('should');

describe('random', function() {
  describe('randomHello', function() {
    it('It should return a random hello', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(true, randomMessages.randomHello().startsWith('Hello: '));
    });
  });
});
