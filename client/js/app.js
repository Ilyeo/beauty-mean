(function(){

  var app = angular.module('beauty',[]);

  app.controller('productsController', function($http){
    $http.get('/ObtenerProductos').then((response) => {
      this.products = response.data;
    });
  });

})();
