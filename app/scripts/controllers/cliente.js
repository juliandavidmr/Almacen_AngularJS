'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:ClienteCtrl
 * @description
 * # ClienteCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('ClienteCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/cliente/add/';
    var url_get = 'http://localhost:3000/roles';
    var url_getGeneros = 'http://localhost:3000/generos';

    $scope.lista = [];

    //:Nombre1/:Nombre2/:Apellido1/:Apellido2/:Direccion/:Celular/:Correo/:fk_idGenero    
    $scope.add = function () {
      var s = '/';
      var inf = $scope.persona.Nombre1 + s + $scope.persona.Nombre2 + s + $scope.persona.Apellido1 + s + $scope.persona.Apellido2 + s + $scope.persona.Direccion + s + $scope.persona.Celular + s + $scope.persona.Correo + s + $scope.persona.fk_idPersona;
      //alert("Ingresando cliente\n" + inf);
      $http({
        method: 'POST',
        url: url_add + inf
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        alert("Registro llevado con exito." + response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("ERROR: " + response);
      });
    };

    $scope.getAll = function () {
      $http.get(url_get).success(function (data) {
        //alert(data);
        $scope.lista = [];
        data.forEach(function (d) {
          $scope.lista.push(d.Nombre);
        }, this);
      });
    }

    $scope.getAllGeneros = function () {
      $http.get(url_getGeneros).success(function (data) {
        $scope.generos = [];
        data.forEach(function (d) {
          $scope.generos.push(d);
        }, this);
      });
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
