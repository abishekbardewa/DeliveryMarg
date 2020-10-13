app.controller('address', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.name = 'Login';
		var api = $rootScope.site_url + 'user';
		// $http.get(api + '/shipping_address').then(function (response) {
		// 	// console.log(response);
		// 	$scope.orders = response.data;
		// 	console.log($scope.orders);
		// });
	},
]);
