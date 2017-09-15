angular
  .module("assessment")
  .controller("productDetailsCtrl", function(
    $scope,
    shopService,
    $stateParams
  ) {
    shopService.shopInfo($stateParams.id).then(function(data) {
      console.log($stateParams);
      for (var key in data) {
        if (data[key].id === $stateParams.id) {
          console.log(data[key].id);
          $scope.shopInfo = data[key];
          console.log($scope.shopInfo);
        }
      }
    });
  });
