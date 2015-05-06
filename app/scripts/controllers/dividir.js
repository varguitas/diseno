'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:DividirCtrl
 * @description
 * # DividirCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('DividirCtrl', function ($scope, DividirControlador, $http) {
    $scope.$on('$viewContentLoaded', function() {
  		$scope.Controlador = new DividirControlador($scope,$http);
  		$scope.result = null;
  	});
    $scope.structure = [
    	{name: 'input_01', type: 'text', label: 'Número 1', validation: 'integer', minValue: 0},
    	{name: 'input_02', type: 'text', label: 'Número 2', validation: 'integer', minValue: 1}
    ];
    $scope.operate = function() {
  		var $validator = $('.validation-form').parsley();
    	$validator.validate();
    	if ($validator.isValid()) {
    		$scope.Controlador.operate($scope.structure);
    	} else {
    		$scope.result = null;
    	}
    };
    $scope.actualizarResultado = function(resultado) {
    	$scope.result = resultado;
    };
  });
