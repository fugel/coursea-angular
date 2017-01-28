(function() {
  'use strict';

  angular.module('myMenuPage')
  .controller('menuController', menuController);

  menuController.$inject = ['MenuDataService']
  function menuController(MenuDataService) {
    var mainCtrl = this;

    mainCtrl.welcome = "Menu Data Service";

    var promise = MenuDataService.getAllCategories();;

    promise.then(function(menuItems){
      mainCtrl.items = menuItems
      // console.log(mainCtrl.items);
    })
    .catch(function(error){
      console.log(error);
    });
  };
}());
