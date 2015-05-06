'use strict';

/**
 * @ngdoc service
 * @name proyectodisenoApp.RestarControlador
 * @description
 * # RestarControlador
 * Service in the proyectodisenoApp.
 */
angular.module('proyectodisenoApp')
  .service('RestarControlador', function () {
    function RestarControlador($scope,$http) {
    	this.$scope = $scope;
    	this.$http = $http;
    }
    RestarControlador.prototype.operate = function () {
    	var _self = this;
		this.$http.post('/restar', {operacionDTO: _self.$scope.structure}).
		success(function(data) {
	    	_self.$scope.actualizarResultado( data.result );
		}).
		error(function(data, status, headers) {
	    	_self.$scope.actualizarResultado( null );
			console.log(status + ' : ' + headers);
			alert('A ocurrido un error en el modelo. Por favor verifique la consola de la aplicación.');
		});
    };
    return RestarControlador;
  });
