'use strict';

/**
 * @ngdoc overview
 * @name frutasApp
 * @description
 * # frutasApp
 *
 * Main module of the application.
 */
angular
  .module('frutasApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/factura', {
        templateUrl: 'views/factura.html',
        controller: 'FacturaCtrl',
        controllerAs: 'factura'
      })
      .when('/producto', {
        templateUrl: 'views/producto.html',
        controller: 'ProductoCtrl',
        controllerAs: 'producto'
      })
      .when('/cliente', {
        templateUrl: 'views/cliente.html',
        controller: 'ClienteCtrl',
        controllerAs: 'cliente'
      })
      .when('/genero', {
        templateUrl: 'views/genero.html',
        controller: 'GeneroCtrl',
        controllerAs: 'genero'
      })
      .when('/rol', {
        templateUrl: 'views/rol.html',
        controller: 'RolCtrl',
        controllerAs: 'rol'
      })
      .when('/categoria', {
        templateUrl: 'views/categoria.html',
        controller: 'CategoriaCtrl',
        controllerAs: 'categoria'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/sucursal', {
        templateUrl: 'views/sucursal.html',
        controller: 'SucursalCtrl',
        controllerAs: 'sucursal'
      })
      .when('/empresa', {
        templateUrl: 'views/empresa.html',
        controller: 'EmpresaCtrl',
        controllerAs: 'empresa'
      })
      .when('/listaPrecios', {
        templateUrl: 'views/listaprecios.html',
        controller: 'ListapreciosCtrl',
        controllerAs: 'listaPrecios'
      })
      .when('/empleado', {
        templateUrl: 'views/empleado.html',
        controller: 'EmpleadoCtrl',
        controllerAs: 'empleado'
      })
      .when('/persona', {
        templateUrl: 'views/persona.html',
        controller: 'PersonaCtrl',
        controllerAs: 'persona'
      })
      .when('/persona', {
        templateUrl: 'views/persona.html',
        controller: 'PersonaCtrl',
        controllerAs: 'persona'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
