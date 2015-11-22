'use strict';

/**
 * @ngdoc function
 * @name frutasApp.controller:FacturaCtrl
 * @description
 * # FacturaCtrl
 * Controller of the frutasApp
 */
angular.module('frutasApp')
    .controller('FacturaCtrl', function ($scope, $http) {
        var url_getProductos = 'http://localhost:3000/productos';

        $scope.empleados = [
            { id: 1, nombres: 'Julian', apellidos: 'Mora Ramos', correo: 'anlijudavid@gmail.com', direccion: 'florencia', celular: '3144774531' },
            { id: 2, nombres: 'Roland', apellidos: 'Arenas', correo: 'r.roland@udla.edu.co', direccion: 'florenciaa', celular: '31234355' }];

        $scope.proveedores = [
            { id: 1, nombre: 'Fruteria el coco', ciudad: 'Florencia', correo: 'fruteria@gmail.com', direccion: 'florencia', telefonos: '3144774531' }];

        $scope.productos_seleccionados_visible = [];
        $scope.productos_seleccionados_datos = [];

        $scope.total = 0;

        $scope.addProducto = function () {
            $scope.productos_seleccionados_datos.push($scope.factura.producto_select);
            $scope.productos_seleccionados_visible.push($scope.factura.producto_select);
            
            //alert($scope.total + "    " + $scope.factura.producto_select.precio + "   " + $scope.factura.producto_select);
            $scope.total += $scope.factura.producto_select.precio;
            console.log($scope.total + "    " + $scope.factura.producto_select.precio);
        };

        $scope.deleteProducto = function (index) {
            $scope.productos_seleccionados_datos.splice(index, 1);
            $scope.productos_seleccionados_visible.splice(index, 1);
            $scope.total = 0;
            $scope.productos_seleccionados_datos.forEach(function (p) {
                $scope.total += p.precio;
            }, this);
            console.log($scope.total);
            alert($scope.total);
        };

        $scope.getAllProductos = function () {
            $http.get(url_getProductos).success(function (data) {
                //alert(data);
                $scope.productos = [];
                data.forEach(function (d) {
                    $scope.productos.push(d);
                }, this);
            });
        }

        $scope.init = function () {
            $scope.getAllProductos();
        }


    });
