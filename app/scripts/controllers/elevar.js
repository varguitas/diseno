'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:ElevarCtrl
 * @description
 * # ElevarCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('ElevarCtrl', function ($scope, ElevarControlador, $http) {
    $scope.$on('$viewContentLoaded', function() {
  		$scope.Controlador = new ElevarControlador($scope,$http);
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
