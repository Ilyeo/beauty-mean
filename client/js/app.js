(function(){

  var app = angular.module('beauty',['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('productos',{
      url: '/productos',
      templateUrl: 'views/productos.html'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'views/login.html',
      controller: function($stateParams, $state, $http){
        this.revisar = function(login){
          // console.log('login object', login);

          $http({method: 'POST', url: '/Login', data: {login}}).then(function(){
            $state.go('productos');
          });
        };
      },
      controllerAs: 'loginCtrl'
    })
    .state('registro',{
      url: '/registro',
      templateUrl: 'views/registro.html',
      controller: function($stateParams, $state, $http){
        this.guardarRegistro = function(registro){
          // console.log('registro object', registro);

          $http({method: 'POST', url: '/Registro', data: {registro}}).then(function(){
            $state.go('login');
          });
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
