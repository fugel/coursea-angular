(function() {
  'use strict';

  angular.module('data')
  .controller('menuController', menuController);

  menuController.$inject = ['MenuDataService', 'items']
  function menuController(MenuDataService, items) {
    var mainCtrl = this;

    mainCtrl.items = items;

  };
}());
