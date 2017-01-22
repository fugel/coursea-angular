(function() {
  'use strict';

  angular.module('narrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope:{
        list: '<foundItems',
        onRemove: '&'
      }
    };

    return ddo;

  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = ""
    ctrl.items = []

    ctrl.getMatchedMenuItems = function(){
      if(ctrl.searchTerm) {

        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        console.log(ctrl.searchTerm)

        promise.then(function (foundItems) {
          // console.log(foundItems)
          ctrl.items = foundItems;
          if(ctrl.items.length === 0) {
            ctrl.noItems = true
          } else {
            ctrl.noItems = false
          };
        })
        .catch (function (error) {
          console.log(error);
        });

      } else {
        ctrl.noItems = true
      };
    }

    ctrl.removeItem = function(itemIndex){
      console.log('Removing: '+itemIndex);
      ctrl.items.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {

    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath+'/menu_items.json')
      }).then(function(result) {

        var data  = result.data;
        var found = [];

        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            found.push(data.menu_items[i]);
          }
        }
        return found;
      });
    };

  }

})();
