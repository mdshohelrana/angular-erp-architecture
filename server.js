"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Would normally copy necessary scripts into src folder (via grunt/gulp) but serving
//node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(__dirname + '/node_modules')); 

//The src folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/src')); 

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

//Open browser
var opn = require('opn');

opn('http://localhost:3000').then(() => {
    console.log('Browser closed.');
});