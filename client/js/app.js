(function(){

  var app = angular.module('beauty',['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('productos',{
      url: '/productos',
      templateUrl: 'views/productos.html'
    })
    .state('registro',{
      url: '/registro',
      templateUrl: 'views/registro.html'
    })
  });

  app.controller('productsController', function($http){
    $http.get('/ObtenerProductos').then((response) => {
      this.products = response.data;
    });
  });

  $(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    Materialize.updateTextFields();

  });

})();
