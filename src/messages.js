const accounts = require('../src/accounts');
const randomMessages = require('../src/random_messages');
exports.getGenericMessage = () => {
  return 'Hello entity. It\'s ' +
  new Date().getHours() + ' h ' + new Date().getMinutes() + ' m';
};

exports.sendBalanceMessage = function(account) {
  if (accounts.validateAccount(account)) {
    console.log('validated');
    if (null != accounts.getBalance(account)) {
      return '{"account":" + account +","balance":' +
      accounts.getBalance(account) + ',"message: "' +
      randomMessages.randomHello() + ',"Name: "'+
      accounts.getName(account)+ '}';
    };
  };
  return '{"error": "account not available}';
};
