'use strict';

/**
 * @ngdoc service
 * @name proyectodisenoApp.SumarControlador
 * @description
 * # SumarControlador
 * Service in the proyectodisenoApp.
 */
angular.module('proyectodisenoApp')
  .service('SumarControlador', function () {
    function SumarControlador($scope,$http) {
    	this.$scope = $scope;
    	this.$http = $http;
    }
    SumarControlador.prototype.operate = function () {
    	var _self = this;
		this.$http.post('/sumar', {operacionDTO: _self.$scope.structure}).
		success(function(data) {
	    	_self.$scope.actualizarResultado( data.result );
		}).
		error(function(data, status, headers) {
	    	_self.$scope.actualizarResultado( null );
			console.log(status + ' : ' + headers);
			alert('A ocurrido un error en el modelo. Por favor verifique la consola de la aplicación.');
		});
    };
    return SumarControlador;
  });
