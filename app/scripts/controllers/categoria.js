'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:CategoriaCtrl
 * @description
 * # CategoriaCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
    .controller('CategoriaCtrl', function ($scope) {


        $scope.lista = [];

        $scope.add = function () {
            $scope.lista.push($scope.new);
            $scope.new = '';

            try {

                var database = require('./database.json');
                var mysql = require('mysql');

                var connection = mysql.createConnection(database.local);

                connection.connect(function (err) {
                    if (!err) {
                        console.log("Database conectada ...\n");
                        alert("Database conectada ...\n");
                        $scope.lista.push("Database conectada ...\n");
                    } else {
                        console.log("Error al conectar database ... \n\n");
                        alert("Error al conectar database ... \n\n");
                        $scope.lista.push("Error al conectar database ... \n\n");
                    }
                });
            } catch (error) {
                alert(error);
            }
        };

        $scope.delete = function (index) {
            $scope.lista.splice(index, 1);
        };
    });
