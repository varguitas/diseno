'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:RestarCtrl
 * @description
 * # RestarCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('RestarCtrl', function ($scope, RestarControlador, $http) {
  	$scope.$on('$viewContentLoaded', function() {
  		$scope.Controlador = new RestarControlador($scope,$http);
  		$scope.result = null;
  	});
    $scope.structure = [
    	{name: 'input_01', type: 'text', label: 'Número 1', validation: 'integer', minValue: 0},
    	{name: 'input_02', type: 'text', label: 'Número 2', validation: 'integer', minValue: 0}
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
