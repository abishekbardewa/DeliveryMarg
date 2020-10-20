app.controller('cart', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'cart';

		//Items Added in cart
		// $scope.loader = () => {
		// 	$scope.loaderInit();
		// 	$http.post(api + '/view').then(function (response) {
		// 		$scope.cartItem = response.data;
		// 		console.log($scope.cartItem);
		// 	});
		// };
		// $scope.loader();

		//Remove Single Items from Cart
		$scope.deleteItem = (data) => {
			console.log(data);
			$http.get(api + '/delete?id=' + data).then(function (response) {
				if (response.data === '1') {
					M.toast({
						html: `Poof! Your cart item has been deleted!`,
						outDuration: 375,
						classes: 'pink darken-1',
					});

					// $scope.loader();
					$scope.loaderInit();
				}
			});
		};

		//Remove All Items from Cart
		$scope.deleteCart = (data) => {
			if (data) {
				swal({
					title: 'Are you sure?',
					text: 'Once deleted, you will not be able to recover this!',
					icon: 'warning',
					buttons: true,
					dangerMode: true,
				}).then((willDelete) => {
					if (willDelete) {
						$http.get(api + '/deleteCart').then(function (response) {
							swal('Poof! Your address has been deleted!', {
								icon: 'success',
							});
							// $scope.loader();
							$scope.loaderInit();
						});
					} else {
						swal('Your address file is safe!');
					}
				});
			} else {
				swal('Your cart is empty! Nothing to delete');
			}
		};
	},
]);
