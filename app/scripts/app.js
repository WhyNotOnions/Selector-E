'use strict';

/**
 * @ngdoc overview
 * @name selectorE
 * @description
 * # selectorE
 *
 * Main module of the application.
 */
angular
  .module('selectorE', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CardListCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'CardListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
