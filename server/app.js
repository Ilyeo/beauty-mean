'use strict';

var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

var bcrypt = require('bcrypt');
const saltRounds = 10;

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
  var newRegister = request.body.registro || {};

  if(!newRegister.nombre || !newRegister.correo || !newRegister.contrasena){
    return response.sendStatus(500);
  }

  var users = mongoUtil.users();

  bcrypt.hash(newRegister.contrasena, saltRounds, function(err, hash){
    newRegister.contrasena = hash;

    users.insert(newRegister, {w: 1}, function(err, records){
      if(err){
        return response.sendStatus(500);
      }
      response.sendStatus(200);
    });
  });

});

app.listen(7777, function(){
  console.log('Server listening on port %d', 7777);
});
