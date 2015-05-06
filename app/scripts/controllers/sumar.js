'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:SumarCtrl
 * @description
 * # SumarCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('SumarCtrl', function ($scope, SumarControlador, $http) {
  	$scope.$on('$viewContentLoaded', function() {
  		$scope.validator = $('.validation-form').parsley();
  		$scope.Controlador = new SumarControlador($scope,$http);
  		$scope.result = null;
  	});
    $scope.structure = [
    	{name: 'input_01', type: 'text', label: 'Número 1', validation: 'integer', minValue: 0},
    	{name: 'input_02', type: 'text', label: 'Número 2', validation: 'integer', minValue: 0}
    ];
    $scope.operate = function() {
    	$scope.validator.validate();
    	if ($scope.validator.isValid()) {
    		$scope.Controlador.operate($scope.structure);
    	} else {
    		$scope.result = null;
    	}
    };
    $scope.actualizarResultado = function(resultado) {
    	$scope.result = resultado;
    };
  });