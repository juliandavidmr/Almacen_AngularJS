'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:EmpresaCtrl
 * @description
 * # EmpresaCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('EmpresaCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/empresa/add/';
    var url_getEmpresas = 'http://localhost:3000/empresas';

    $scope.lista = [];

    //:Nombre1/:Nombre2/:Apellido1/:Apellido2/:Direccion/:Celular/:Correo/:fk_idGenero     
    $scope.add = function () {
      var s = '/';
      var inf = $scope.empresa.Nombre + s + $scope.empresa.DIAN + s + $scope.empresa.Correo;
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
      
      $scope.getAllEmpresas();
    };

    $scope.getAllEmpresas = function () {
      $http.get(url_getEmpresas).success(function (data) {
        $scope.empresas = [];
        data.forEach(function (d) {
          $scope.empresas.push(d);
        }, this);
      });
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
