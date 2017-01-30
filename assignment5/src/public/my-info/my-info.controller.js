(function() {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController)

MyInfoController.$inject = ['customerDetails', 'ApiPath'];
function MyInfoController(customerDetails, ApiPath) {
  var $myInfoCtrl = this;
  $myInfoCtrl.customerDetails = customerDetails;
  $myInfoCtrl.ApiPath = ApiPath;
}

}());
