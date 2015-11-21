'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:GeneroCtrl
 * @description
 * # GeneroCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('GeneroCtrl', function ($scope) {
    $scope.lista = [];

    $scope.add = function () {
      $scope.lista.push($scope.new);
      $scope.new = '';
    };

    $scope.deleteProducto = function (index) {
      $scope.categorias.splice(index, 1);
    };
  });
