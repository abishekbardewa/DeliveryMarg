app.controller('profile', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.u_id = $routeParams.id;

		var api = $rootScope.site_url + 'order';

		$http.get(api + '/view?id=' + $scope.u_id + '&data').then(function (response) {
			// console.log(response);
			$scope.orders = response.data;
			console.log($scope.orders);
		});

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
