const accounts = require('../src/accounts');
const assert = require('assert');
require('should');

describe('accounts', function() {
  describe('validateAccount', function() {
    it('It should return true only when valid account', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(true, accounts.validateAccount(453612345678));
      assert.equal(false, accounts.validateAccount(53612345678));
      assert.equal(false, accounts.validateAccount('453612345678'));
    });
  });
  describe('getBalance', function() {
    it('It should return the balance as integer', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(true, Number.isInteger(accounts.getBalance(453612345678)));
    });
    it('It should return null is there is some error', function() {
      // 4 first digits are sort code sort code must be 0036
      // 8 final digits must be numeric
      // account length must be 12
      assert.equal(null, accounts.getBalance(453687654321));
    });
  });
});
