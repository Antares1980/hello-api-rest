generic_message = require("./routes/generic");
const express = require("express");
const app = express();
const app_port = 3000;


app.route("/")
    .get(function(req, res) {
        res.send(generic_message.getGenericMessage());
    });
app.listen(app_port, () => {
    console.log("Server running in port " + app_port);
})
