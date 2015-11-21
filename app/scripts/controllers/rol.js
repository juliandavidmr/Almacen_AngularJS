'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:RolCtrl
 * @description
 * # RolCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('RolCtrl', function ($scope) {
    $scope.lista = [];

    $scope.add = function () {
      $scope.lista.push($scope.new);
      $scope.new = '';
    };

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
