'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:ProductoCtrl
 * @description
 * # ProductoCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('ProductoCtrl', function ($scope, $http) {

    var url_add = 'http://localhost:3000/producto/add/';
    var url_getProductos = 'http://localhost:3000/productos';
    var url_getCategorias = 'http://localhost:3000/categorias';

    $scope.categorias = [];

    $scope.addProducto = function () {
      //:Nombre/:Medida/:IVA/:fk_idCategoria
      var s = '/';
      $http({
        method: 'POST',
        url: url_add + $scope.producto.Nombre + s + $scope.producto.Medida + s + $scope.producto.IVA + s + $scope.producto.fk_idCategoria
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.getAllProductos();
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("ERROR: " + response);
      });
    };

    $scope.getAllCategorias = function () {
      $http.get(url_getCategorias).success(function (data) {
        //alert(data);
        $scope.categorias = [];
        data.forEach(function (d) {
          $scope.categorias.push(d);
        }, this);
      });
    }

    $scope.getAllProductos = function () {
      $http.get(url_getProductos).success(function (data) {
        //alert(data);
        $scope.productos = [];
        data.forEach(function (d) {
          $scope.productos.push(d.Nombre);
        }, this);
      });
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
