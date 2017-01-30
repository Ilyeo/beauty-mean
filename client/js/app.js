(function(){

  var articles = [
    {
      "Id": "12342",
      "Nombre": "Lentes de Sol",
      "Marca": "Via Vanilla Tonic",
      "Color": "Azul",
      "Imagen": "https://images-na.ssl-images-amazon.com/images/I/31dLhJLpMUL._AA160_.jpg",
      "Precio": "$500",
      "Unidades": "14"
    },
    {
      "Id": "12345",
      "Nombre": "Bolso de mano",
      "Marca": "Coofit",
      "Color": "Multicolor",
      "Imagen": "https://images-na.ssl-images-amazon.com/images/I/71f4ykr7n9L._SL1050_.jpg",
      "Precio": "$400",
      "Unidades": "10"
    }
  ];

  var app = angular.module('beauty',[]);

  app.controller('productsController', function(){
    this.products = articles;
  });

})();
