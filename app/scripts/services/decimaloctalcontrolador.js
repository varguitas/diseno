'use strict';

/**
 * @ngdoc service
 * @name proyectodisenoApp.DecimalOctalControlador
 * @description
 * # DecimalOctalControlador
 * Service in the proyectodisenoApp.
 */
angular.module('proyectodisenoApp')
  .service('DecimalOctalControlador', function () {
    function DecimalOctalControlador($scope,$http) {
    	this.$scope = $scope;
    	this.$http = $http;
    }
    DecimalOctalControlador.prototype.operate = function () {
    	var _self = this;
		this.$http.post('/decimaloctal', {operacionDTO: _self.$scope.structure}).
		success(function(data) {
	    	_self.$scope.actualizarResultado( data.result );
		}).
		error(function(data, status, headers) {
	    	_self.$scope.actualizarResultado( null );
			console.log(status + ' : ' + headers);
			alert('A ocurrido un error en el modelo. Por favor verifique la consola de la aplicación.');
		});
    };
    return DecimalOctalControlador;
  });
