'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:CategoriaCtrl
 * @description
 * # CategoriaCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
  .controller('CategoriaCtrl', function ($scope, $http) {
    var url_add = 'http://localhost:3000/categoria/add/';
    var url_get = 'http://localhost:3000/categorias';

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


/**
 * 

var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.get('data/posts.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});


 */