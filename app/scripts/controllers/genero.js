'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:GeneroCtrl
 * @description
 * # GeneroCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('GeneroCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/genero/add/';
    var url_get = 'http://localhost:3000/generos';

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
          $scope.lista.push(d.Descripcion);
        }, this);
      });
    }

    $scope.delete = function (index) {
      $scope.lista.splice(index, 1);
    };
  });
