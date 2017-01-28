(function() {
  'use strict';

  angular.module('data')
  .controller('categoryItemsController', categoryItemsController);

  categoryItemsController.$inject = ['$stateParams','items', 'MenuDataService']
  function categoryItemsController($stateParams, items, MenuDataService) {
    var itemCtrl = this;

    var item = items[$stateParams.itemId];
    itemCtrl.welcome = item.name;

    var shortname = item.short_name;
    var promise = MenuDataService.getItemsForCategory(shortname);
    promise.then(function(result){
      itemCtrl.items = []
      itemCtrl.items = result.menu_items;
    })

  };
}());
