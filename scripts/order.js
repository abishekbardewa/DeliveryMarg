app.controller('order', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'order';

		//Getting All Orders of a user
		$http.get(api + '/view?data').then(function (response) {
			$scope.orders = response.data;
		});

		//Getting all order on single order id
		$scope.getOrders = function (o_id) {
			console.log(o_id);
			$http.get(api + '/view?o_id=' + o_id).then(function (response) {
				// console.log(response);
				$scope.orderItem = response.data;
				console.log($scope.orderItem);
			});
		};
	},
]);
