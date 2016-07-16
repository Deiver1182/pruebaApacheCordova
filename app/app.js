'used strict';

var aplicacion = angular.module('appPrueba', []);

aplicacion.controller('controlador', function ($scope) {
    $scope.nombre = "Deiver";
    $scope.apellido = "Velez Puello";

    $scope.cambiarNombre = function (newNombre, newApellido) {
        $scope.nombre = newNombre;
        $scope.apellido = newApellido;
    };

    $scope.estado = false;
    $scope.showInput = function () {
        $scope.estado = !$scope.estado;
    };

    $scope.listaPersonas = [{ identificacion: '1', nombre: 'Luis' },
                            { identificacion: '2', nombre: 'Pedro' },
                            { identificacion: '3', nombre: 'Maria' },
                            { identificacion: '4', nombre: 'Juan' },
                            { identificacion: '5', nombre: 'Mario' },
                            { identificacion: '6', nombre: 'Luisa' },
                            { identificacion: '7', nombre: 'Alejandra' },
                            { identificacion: '8', nombre: 'Carmen' }];

    });