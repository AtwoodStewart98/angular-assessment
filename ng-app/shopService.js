angular.module("assessment").service("shopService", function($http, $q) {
  this.shopInfo = function() {
    var defer = $q.defer();
    $http
      .get("https://practiceapi.devmountain.com/products")
      .success(function(resp) {
        defer.resolve(resp);
      });
    return defer.promise;
  };
});
