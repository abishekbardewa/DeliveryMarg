app.controller('main', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',
	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url;

		$scope.loaderInit = () => {
			//Total cart contents and Total Cart Price
			$http.post(api + '/cart/fetchJson').then(function (response) {
				$scope.cart = response.data;
				$('#cartTotal1').html(response.data.rows);
				$('#cartTotal2').html(response.data.rows);
			});
			$http.post(api + '/cart/view').then(function (response) {
				$scope.cartItem = response.data;
				console.log($scope.cartItem);
			});
			//User Details
			$http.post(api + '/users/view').then(function (response) {
				console.log(response.data[0]);
				$scope.user = response.data[0];
			});
			// //User Address
			// $http.get(api + '/users/viewAddress').then(function (response) {
			// 	console.log('Address', response.data);
			// 	$scope.address = response.data;
			// 	// console.log('Address 1', $scope.address[0]);
			// 	// console.log('Address 1', $scope.address[1]);
			// 	$scope.addr = $scope.address[0];
			// });
		};

		$scope.loaderInit();
	},
]);
