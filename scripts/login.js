app.controller('login', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.name = 'Login';
		var api = $rootScope.site_url + 'user';
		$http.get(api + '/view?id=' + $scope.u_id + '&data').then(function (response) {
			// console.log(response);
			$scope.orders = response.data;
			console.log($scope.orders);
		});
	},
]);
