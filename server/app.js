'use strict';

var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + '/../client'));

app.get('/ObtenerProductos', function(request, response){
  var products = mongoUtil.products();
  products.find().toArray(function(err, docs){
    // console.log(JSON.stringify(docs));
    response.json(docs);
  });
  // response.json(articles);
});

app.listen(7777, function(){
  console.log('Server listening on port %d', 7777);
});
