messages = require('./src/messages');
accounts = require('./src/accounts');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.route('/')
    .get(function(req, res) {
      res.send(messages.getGenericMessage());
    });
app.route('/balance')
    .get(function(req, res) {
      res.send(messages.sendBalanceMessage(parseInt(req.query.account)));
    });
app.listen(PORT, () => {
  console.log('Server running in port ' + PORT);
});
