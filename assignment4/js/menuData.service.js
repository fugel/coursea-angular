(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      var menuItems = [];
      return $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json')
      }).then(function(result) {
        menuItems = result.data;
        // console.log(menuItems);
        return menuItems;
      });
    };
  }
}());
