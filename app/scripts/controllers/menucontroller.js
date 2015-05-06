'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:MenucontrollerCtrl
 * @description
 * # MenucontrollerCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('MenucontrollerCtrl', function ($scope, $location) {
  	$scope.actualView = $location.path();
    $scope.operators = [
    	{name: 'Inicio', value: '/'},
    	{name: 'Sumar', value: '/sumar'},
    	{name: 'Restar', value: '/restar'},
    	{name: 'Dividir', value: '/dividir'},
    	{name: 'Multiplicar', value: '/multiplicar'},
    	{name: 'Potencias', value: '/elevar'},
    	{name: 'Raiz', value: '/raiz'},
    	{name: 'Decimal -> Binario', value: '/decimalbinario'},
    	{name: 'Decimal -> Hexadecimal', value: '/decimalhexadecimal'},
    	{name: 'Decimal -> Octal', value: '/decimaloctal'}
    ];

    $scope.setView = function() {
    	$location.path($scope.actualView);
    };
  });
