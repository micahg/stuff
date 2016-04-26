var stuffCompanies = angular.module('stuffCompanies', []);

stuffCompanies.controller('CompanyController', ['$scope', '$http', function($scope, $http) {
   $scope.companies = [];

   $http.get('/companies')
      .success(function(data) {
         $scope.companies = data;
      })
      .error(function(data) {
      });
}]);