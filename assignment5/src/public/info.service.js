(function() {
  'use strict';

  angular.module('public')
  .service('CustomerDetailsService', CustomerDetailsService)

  CustomerDetailsService.$inject = [];
  function CustomerDetailsService () {
    var service = this;
    var customerDetails = null;

    service.storeCustomerDetails = function (userDetails) {
        customerDetails = userDetails;
    };

    service.getCustomerDetails = function () {
      // NOTE: REMOVE BEFORE PUBLISHING!!
        // customerDetails = {
        //   firstName: "firstName",
        //   lastName: "lastName",
        //   email: "user@domain",
        //   phoneNumber: "123-123-1234",
        //   favItem: "A2",
        //   mealName: "test meal",
        //   mealDescription: "test description"
        // }
      return customerDetails;
    };

  }
}());
