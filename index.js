const express = require("express");
const app = express();
const app_port = 3000;


app.get('/', function(req, res){
    res.send("Generic response");
});
app.listen(app_port, () => {
    console.log("Server running in port " + app_port);
})
