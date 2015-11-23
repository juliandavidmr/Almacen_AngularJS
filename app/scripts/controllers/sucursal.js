'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:SucursalCtrl
 * @description
 * # SucursalCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('SucursalCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/sucursal/add/';
    var url_getEmpresas = 'http://localhost:3000/empresas';
    var url_getSucursales = 'http://localhost:3000/sucursales';

    $scope.lista = [];

    $scope.add = function () {
      var s = '/';
      var inf = $scope.sucursal.Nombre + s + $scope.sucursal.Direccion + s + $scope.sucursal.fk_idEmpresa;
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
      
      $scope.getAllSucursales();
    };

    $scope.getAllEmpresas = function () {
      $http.get(url_getEmpresas).success(function (data) {
        $scope.empresas = [];
        data.forEach(function (d) {
          $scope.empresas.push(d);
        }, this);
      });
    }

    $scope.getAllSucursales = function () {
      $http.get(url_getSucursales).success(function (data) {
        $scope.lista = [];
        data.forEach(function (d) {
          $scope.lista.push(d);
        }, this);
      });
    }

    $scope.init = function () {
      $scope.getAllEmpresas();
      $scope.getAllSucursales();
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });