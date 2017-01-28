(function() {
  'use strict';

  angular.module('myMenuPage')
  .component('categoryList', {
    templateUrl: 'views/menuList.component.html',
    bindings: {
      items: '<'
    }
  });

}());
