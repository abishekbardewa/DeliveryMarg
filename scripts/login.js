app.controller('login', [
  '$scope',
  '$rootScope',
  '$http',
  '$routeParams',

  function ($scope, $rootScope, $http, $routeParams) {
    // $scope.name = 'Login';
    var api = $rootScope.site_url + 'users';

    $scope.loginSubmit = function (data) {
      $http({
        method: 'POST',
        url: api + '/login',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data,
      }).then(function (response) {
        if (response.data === '1') {
          window.location.reload();
        } else {
          $scope.errorMsg = 'Username & Password do not match.';
        }
      });
    };

    //Getting Session Info
    $http.get(api + '/sessionData').then(function (response) {
      $scope.sData = response.data;
      //   console.log($scope.sData);
    });
  },
]);
