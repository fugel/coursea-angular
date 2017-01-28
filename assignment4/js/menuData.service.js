(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
      var categories = [];
      return $http({
        method: "GET",
        url: (ApiBasePath+'categories.json')
      }).then(function(result) {
        categories = result.data;
        // console.log(menuItems);
        return categories;
      });
    };

    service.getItemsForCategory = function(catId) {
      var menuItems = [];
      return $http({
        method: "GET",
        url: (ApiBasePath+'menu_items.json?category='+catId)
      }).then(function(result) {
        menuItems = result.data;
        // console.log(menuItems);
        return menuItems;
      });
    };
  }
}());
