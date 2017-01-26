(function() {
  'use strict';

  angular.module('myPage')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Default Route
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'views/home.template.html',
      controller: 'mainController as mainCtrl'
    });
  }
}());
