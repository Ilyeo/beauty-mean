'use strict';

var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + '/../client'));

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/ObtenerProductos', function(request, response){
  var products = mongoUtil.products();
  products.find().toArray(function(err, docs){
    // console.log(JSON.stringify(docs));
    response.json(docs);
  });
  // response.json(articles);
});

app.post('/Registro', jsonParser, function(request, response){
  var newRegister = request.body.registro;

  console.log('Registro: ', newRegister);

  response.sendStatus(200);
});

app.listen(7777, function(){
  console.log('Server listening on port %d', 7777);
});
