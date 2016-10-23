// Dependencies

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Statically serving Angular application
app.use(express.static(__dirname + "/app"));

app.use('/api', require(__dirname + '/app/routes/api.js'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/app/views/index.html"));
});

// Start server
app.listen(process.env.PORT || 3000);