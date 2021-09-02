genericMessage = require('./routes/generic');
const express = require('express');
const app = express();
const appPort = 3000;


app.route('/')
    .get(function(req, res) {
      res.send(genericMessage.getGenericMessage());
    });
app.listen(appPort, () => {
  console.log('Server running in port ' + appPort);
});
