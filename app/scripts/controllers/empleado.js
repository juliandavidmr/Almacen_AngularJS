'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:EmpleadoCtrl
 * @description
 * # EmpleadoCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('EmpleadoCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/persona/add/';
    var url_getPersonas = 'http://localhost:3000/personas';
    var url_getRoles = 'http://localhost:3000/roles';
    var url_getSucursales = 'http://localhost:3000/sucursales';

    $scope.lista = [];

    //:Nombre1/:Nombre2/:Apellido1/:Apellido2/:Direccion/:Celular/:Correo/:fk_idGenero    
    $scope.add = function () {
      var s = '/';
      var inf = $scope.empleado.fk_idPersona + s + $scope.empleado.fk_idRol + s + $scope.empleado.fk_idSucursal;
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

    $scope.getAllPersonas = function () {
      $http.get(url_getPersonas).success(function (data) {
        $scope.personas = [];
        data.forEach(function (d) {
          $scope.personas.push(d);
        }, this);
      });
    }

    $scope.getAllRoles = function () {
      $http.get(url_getRoles).success(function (data) {
        $scope.roles = [];
        data.forEach(function (d) {
          $scope.roles.push(d);
        }, this);
      });
    }

    $scope.getAllSucursales = function () {
      $http.get(url_getSucursales).success(function (data) {
        $scope.sucursales = [];
        data.forEach(function (d) {
          $scope.sucursales.push(d);
        }, this);
      });
    }

    $scope.init = function () {
      $scope.getAllPersonas();
      $scope.getAllRoles();
      $scope.getAllSucursales();
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });

