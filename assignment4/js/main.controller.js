(function() {
  'use strict';

  angular.module('myPage')
  .controller('mainController', mainController);

  mainController.$inject = []
  function mainController() {
    var mainCtrl = this;

    mainCtrl.welcome = "Hello World";
  };

}());
