(function() {
  'use strict';
  angular.module('public')
  .controller('SignUpController', SignUpController)

  SignUpController.$inject = ['CustomerDetailsService', 'MenuService']
  function SignUpController (CustomerDetailsService, MenuService) {
    var $signUpCtrl = this;

    $signUpCtrl.do = function (userDetails) {
      // console.log(userDetails);
      MenuService.checkItem(userDetails.favItem)

      CustomerDetailsService.storeCustomerDetails(userDetails);
    };
  }

}());
