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
      templateUrl: 'views/registro.html',
      controller: function($stateParams, $state){
        this.guardarRegistro = function(registro){
          console.log('registro object', registro);

          // $state.go('perfil', {})
        };
      },
      controllerAs: 'registroCtrl'
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
