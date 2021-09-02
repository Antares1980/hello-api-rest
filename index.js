genericMessage = require('./routes/generic');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.route('/')
    .get(function(req, res) {
      res.send(genericMessage.getGenericMessage());
    });
app.listen(PORT, () => {
  console.log('Server running in port ' + PORT);
});
