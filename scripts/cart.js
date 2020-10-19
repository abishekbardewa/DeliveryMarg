app.controller('cart', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'cart';
		// $scope.cartItem = {};
		// if ($scope.cartItem !== {}) {
		// 	$('#cart').css('display', 'block');
		// 	$('#empty-cart').css('display', 'none');
		// }
		//Total cart contents and Total Cart Price
		$scope.fetchJson = () => {
			$http.post(api + '/fetchJson').then(function (response) {
				$scope.cart = response.data;
				$('#cartTotal1').html(response.data.rows);
				$('#cartTotal2').html(response.data.rows);
			});
		};
		$scope.fetchJson();

		//Items Added in cart
		$scope.loader = () => {
			$http.post(api + '/view').then(function (response) {
				// console.log(response.data);
				if (response.data) {
					$('#cart').css('display', 'block');
					$('#empty-cart').css('display', 'none');
					$scope.cartItem = response.data;
				} else {
					$('#cart').css('display', 'none');
					$('#empty-cart').css('display', 'block');
				}
			});
		};
		$scope.loader();

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
					$scope.loader();
					$scope.fetchJson();
					// $('#cart').css('display', 'none');
					// $('#empty-cart').css('display', 'block');
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
							$scope.loader();
							$scope.fetchJson();
							// $('#cart').css('display', 'none');
							// $('#empty-cart').css('display', 'block');
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
// $http.get(api + '/deleteCart').then(function (response) {

// 	$scope.loader();
// 	$scope.fetchJson();
// 	// $('#cart').css('display', 'none');
// 	// $('#empty-cart').css('display', 'block');
// });
