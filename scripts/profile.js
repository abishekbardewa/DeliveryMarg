app.controller('profile', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.u_id = $routeParams.id;

		var api = $rootScope.site_url + 'order';
		// const userApi = $rootScope.site_url + 'users';

		//Getting All Orders of a user
		// $http.get(api + '/view?id=' + $scope.u_id + '&data').then(function (response) {
		$http.get(api + '/view?data').then(function (response) {
			// console.log(response);
			$scope.orders = response.data;
			// console.log($scope.orders);
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
		$('.datepicker').datepicker();
	},
]);
