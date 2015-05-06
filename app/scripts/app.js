'use strict';

/**
 * @ngdoc overview
 * @name proyectodisenoApp
 * @description
 * # proyectodisenoApp
 *
 * Main module of the application.
 */
angular
  .module('proyectodisenoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sumar', {
        templateUrl: 'views/sumar.html',
        controller: 'SumarCtrl'
      })
      .when('/restar', {
        templateUrl: 'views/restar.html',
        controller: 'RestarCtrl'
      })
      .when('/multiplicar', {
        templateUrl: 'views/multiplicar.html',
        controller: 'MultiplicarCtrl'
      })
      .when('/dividir', {
        templateUrl: 'views/dividir.html',
        controller: 'DividirCtrl'
      })
      .when('/elevar', {
        templateUrl: 'views/elevar.html',
        controller: 'ElevarCtrl'
      })
      .when('/raiz', {
        templateUrl: 'views/raiz.html',
        controller: 'RaizCtrl'
      })
      .when('/decimalbinario', {
        templateUrl: 'views/decimalbinario.html',
        controller: 'DecimalbinarioCtrl'
      })
      .when('/decimalhexadecimal', {
        templateUrl: 'views/decimalhexadecimal.html',
        controller: 'DecimalhexadecimalCtrl'
      })
      .when('/decimaloctal', {
        templateUrl: 'views/decimaloctal.html',
        controller: 'DecimaloctalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
