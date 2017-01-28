(function() {
  'use strict';

  angular.module('myMenuPage')
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
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'views/categories.template.html',
      controller: 'menuController as mainCtrl',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.detail', {
      url: '/category-detail/{itemId}',
      templateUrl: 'views/detail.template.html',
      controller: 'categoryItemsController as itemCtrl'
    });
  }
}());
