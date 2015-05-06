'use strict';

/**
 * @ngdoc service
 * @name proyectodisenoApp.DividirControlador
 * @description
 * # DividirControlador
 * Service in the proyectodisenoApp.
 */
angular.module('proyectodisenoApp')
  .service('DividirControlador', function () {
    function DividirControlador($scope,$http) {
    	this.$scope = $scope;
    	this.$http = $http;
    }
    DividirControlador.prototype.operate = function () {
    	var _self = this;
		this.$http.post('/dividir', {operacionDTO: _self.$scope.structure}).
		success(function(data) {
	    	_self.$scope.actualizarResultado( data.result );
		}).
		error(function(data, status, headers) {
	    	_self.$scope.actualizarResultado( null );
			console.log(status + ' : ' + headers);
			alert('A ocurrido un error en el modelo. Por favor verifique la consola de la aplicación.');
		});
    };
    return DividirControlador;
  });
