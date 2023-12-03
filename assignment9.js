// 1st command:- npm init
// 2nd:-  npm install express
// 3rd:- node index.js



var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("ExpressJS Example1!");
});

app.listen(3000);
