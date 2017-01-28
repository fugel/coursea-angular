(function() {
  'use strict';

  angular.module('myMenuPage')
  .controller('menuController', menuController);

  menuController.$inject = []
  function menuController() {
    var mainCtrl = this;

    mainCtrl.welcome = "Menu Data Service";
  };
}());
