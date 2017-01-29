(function() {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController)

MyInfoController.$inject = ['customerDetails'];
function MyInfoController(customerDetails) {
  var $myInfoCtrl = this;
  $myInfoCtrl.customerDetails = customerDetails
}

}());
