var express = require('express');
var app = express();
var path = require("path");

//    var app = require('express')();
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

    app.get('/',function(request,response){
       response.sendFile(__dirname+'/index.html');
    });

    app.listen('8000');
