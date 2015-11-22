'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:RolCtrl
 * @description
 * # RolCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('RolCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/rol/add/';
    var url_get = 'http://localhost:3000/roles';

    $scope.lista = [];

    $scope.add = function () {
      $http({
        method: 'POST',
        url: url_add + $scope.new
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.getAll();
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

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
