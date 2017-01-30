(function() {
  'use strict';
  angular.module('public')
  .controller('SignUpController', SignUpController)

  SignUpController.$inject = ['CustomerDetailsService', 'MenuService']
  function SignUpController (CustomerDetailsService, MenuService) {
    var $signUpCtrl = this;
    // var noMenuItem = "";

    $signUpCtrl.do = function (userDetails) {
      // console.log(userDetails);
      var promise = MenuService.checkItem(userDetails.favItem);

      promise.then(function (response){
        userDetails.mealName = response.name;
        userDetails.mealDescription = response.description;
        $signUpCtrl.noMenuItem = "";
        $signUpCtrl.successMsg = "Your information has been saved";
        CustomerDetailsService.storeCustomerDetails(userDetails);
      },
      function (error){
        // console.log('e: ', error);
        $signUpCtrl.noMenuItem = "No such menu number exists";
      })
    };
  }

}());
