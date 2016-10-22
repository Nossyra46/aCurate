// Dependencies

var express = require("express");
var app = express();
var path = require("path");

// Statically serving Angular application
app.use(express.static(__dirname + "/app"));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/app/views/index.html"));
});

// Start server
app.listen(process.env.PORT || 3000);