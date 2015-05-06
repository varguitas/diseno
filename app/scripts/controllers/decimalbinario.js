'use strict';

/**
 * @ngdoc function
 * @name proyectodisenoApp.controller:DecimalbinarioCtrl
 * @description
 * # DecimalbinarioCtrl
 * Controller of the proyectodisenoApp
 */
angular.module('proyectodisenoApp')
  .controller('DecimalbinarioCtrl', function ($scope, DecimalBinarioControlador, $http) {
  	$scope.$on('$viewContentLoaded', function() {
  		$scope.Controlador = new DecimalBinarioControlador($scope,$http);
  		$scope.result = null;
  	});
    $scope.structure = [
    	{name: 'input_01', type: 'text', label: 'Número 1', validation: 'integer', minValue: 0}
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
