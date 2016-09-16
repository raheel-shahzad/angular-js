(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";

  $scope.checkList = function () {
    // split on comma and check the count
    var length = $scope.lunchMenu.split(",").filter(function(string) {
      return string;
    }).length;

    if(length == 0) {

      $scope.message = "Please enter data first";
      $scope.messageClass = "alert-danger";
      return; //retun if error

    } else if(length > 3) {

      $scope.message = "Too much!";

    } else {

      $scope.message = "Enjoy!";

    }
    $scope.messageClass = "alert-success";
  };
}

})();
