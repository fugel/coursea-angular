(function() {
  'use strict';

  angular.module('myMenuPage')
  .component('categoryDetailList', {
    templateUrl: 'views/itemDetail.component.html',
    bindings: {
      items: '<'
    }
  });

}());
