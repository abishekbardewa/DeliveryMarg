app.controller('cart', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'cart';

		$http.get(api + '/fetchJson').then(function (response) {
			// console.log(response);
			// $scope.orders = response.data;
			// console.log($scope.orders);
		});
	},
]);
