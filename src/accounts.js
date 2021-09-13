exports.validateAccount = function(account) {
  let validated = false;
  const sortCode = Math.trunc(account/100000000);

  validated = Number.isInteger(account) &&
    (sortCode == 4536) && (Math.trunc(account/10000000000000) == 0);
  return validated;
};

exports.getBalance = function(account) {
  if (account == 453687654321) {
    return null;
  }
  return Math.trunc(Math.random()*1000);
};
