app.controller('cart', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'cart';

		$http.post(api + '/fetchJson').then(function (response) {
			$scope.cart = response.data;
			// console.log($scope.cart);
			$('#cartTotal1').html(response.data.rows);
			$('#cartTotal2').html(response.data.rows);
		});
		$http.post(api + '/view').then(function (response) {
			// console.log(response.data);
			$scope.cartItem = response.data;
			console.log($scope.cartItem);
		});
	},
]);
