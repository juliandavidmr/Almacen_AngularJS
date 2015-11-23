'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:ProveedorCtrl
 * @description
 * # ProveedorCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('ProveedorCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/proveedor/add/';
    var url_getProveedores = 'http://localhost:3000/proveedores';

    $scope.lista = [];

    //Nombre/:Ciudad/:Direccion/:Correo/:Telefono1/:Telefono2  
    $scope.add = function () {
      var s = '/';
      var inf = $scope.proveedor.Nombre + s + $scope.proveedor.Ciudad + s + $scope.proveedor.Direccion + s + $scope.proveedor.Correo + s + $scope.proveedor.Telefono1 + s + $scope.proveedor.Telefono2;
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

      $scope.getAllProveedores();
    };

    $scope.getAllProveedores = function () {
      $http.get(url_getProveedores).success(function (data) {
        $scope.proveedores = [];
        data.forEach(function (d) {
          $scope.proveedores.push(d);
        }, this);
      });
    }
    
    $scope.init = function () {
      $scope.getAllProveedores();
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
