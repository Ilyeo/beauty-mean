'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));

var articles = [
  {
    id: 12342,
    nombre: "Lentes de Sol",
    marca: "Via Vanilla Tonic",
    color: "Azul",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/31dLhJLpMUL._AA160_.jpg",
    precio: 500.00,
    unidades: 14
  },
  {
    id: "12345",
    nombre: "Bolso de mano",
    marca: "Coofit",
    color: "Multicolor",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/71f4ykr7n9L._SL1050_.jpg",
    precio: 400.00,
    unidades: 10
  }
];

app.get('/ObtenerProductos', function(request, response){
  response.json(articles);
});

app.listen(7777, function(){
  console.log('Server listening on port %d', 7777);
});
