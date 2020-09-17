app.controller("profile", function ($scope, $http, $routeParams) {
  $scope.name = "Profile of " + $routeParams.id;
});
