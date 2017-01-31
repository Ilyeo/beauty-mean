'use strict';

var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();
// lib for encrypt
// var bcrypt = require('bcrypt');
// const saltRounds = 10;

app.use(express.static(__dirname + '/../client'));

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/ObtenerProductos', function(request, response){
  var products = mongoUtil.products();
  products.find().toArray(function(err, docs){
    if (err) {
      return response.status(500).json({msg: "Error al obtener los productos"});
    }
    // console.log(JSON.stringify(docs));
    response.json(docs);
  });
  // response.json(articles);
});

app.post('/Registro', jsonParser, function(request, response){
  var newRegister = request.body.registro || {};

  if(!newRegister.nombre || !newRegister.correo || !newRegister.contrasena){
    // return response.sendStatus(500);
    return response.status(500).json({msg: "Error al registrar"});
  }

  var users = mongoUtil.users();
  users.insert(newRegister, function (err, doc) {
    if (err) {
      return response.status(500).json({msg: "Error al registrar"});
    }
    return response.status(200).json({msg: "Registro exitoso"});
  });

  /** encrypt the password
  bcrypt.hash(newRegister.contrasena, saltRounds, function(err, hash){
    newRegister.contrasena = hash;
    users.insert(newRegister, {w: 1}, function(err, records){
      if(err){
        return response.sendStatus(500);
      }
      response.sendStatus(200);
    });
  });
  */
});

app.post('/Login', jsonParser, function(request, response){
  var loginData = request.body.login || {};

  if(!loginData.correo || !loginData.contrasena){
    return response.status(500).json({msg: "Error en login"});
  }

  var users = mongoUtil.users();

  var query = {correo: loginData.correo, contrsena: loginData.contrsena};
  var options = {"_id": false, "correo": false, "contrasena": false};

  users.find(query, options).each(function(err, doc){
    if (err) {
      return response.status(500).json({msg: "Error en login"});
    }
    if(doc != null){
      response.json(doc);
    }
    //response.json(docs);
  });
  /*
  bcrypt.compare(loginData.contrasena, doc.contrasena, function(err, res){
    if(res){
      console.log('Buen pass');
    }
  });
  */
  // var hash = users.find({ correo: loginData.correo })
});
app.listen(7777, function(){
  console.log('Server listening on port %d', 7777);
});
