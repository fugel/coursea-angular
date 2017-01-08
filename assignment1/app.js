(function (){
  'use strict';

  angular.module('myApp', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject =['$scope'];

  function LunchCheckController($scope) {

    $scope.checkFood = function(data) {
      if (data) {
        var dataObj = data.split(",");
        if (dataObj.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    };

  };

})();
