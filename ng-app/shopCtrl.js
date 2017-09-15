angular
  .module("assessment")
  .controller("shopCtrl", function($scope, shopService, $http) {
    shopService.shopInfo().then(function(data) {
      $scope.shopInfo = data;
    });
  });
