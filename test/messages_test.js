const messages = require('../src/messages');
const assert = require('assert');
require('should');

describe('messages', function() {
  describe('getGenericMessage', function() {
    it('Should return Hello entity. It\'s ', function() {
      const message = messages.getGenericMessage();
      const comparison = message.match(
          'Hello entity. It\'s\\s\\d{1,2}\\sh\\s\\d{1,2}\\sm') == '';
      assert.equal(false, comparison);
    });
  });
  describe('sendBalanceMessage', function() {
    it('It should return a json with account and balance', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(
          true,
          messages.sendBalanceMessage(453612345678).startsWith('{"account'));
    });
    it('It should return a json with an error message', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(true,
          messages.sendBalanceMessage(453687654321).startsWith('{"error'));
      assert.equal(
          true,
          messages.sendBalanceMessage('453687654321').startsWith('{"error'));
    });
    it('It should return a json which constains a hello field', function() {
      assert.equal(true,
          messages.sendBalanceMessage(453617654321).includes('Hello:'));
    });
    it('It should return a json which constains a name field', function() {
      assert.equal(true,
          messages.sendBalanceMessage(453617654321).includes('Name:'));
    });
  });
});

