app.controller('cart', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',
	'$window',

	function ($scope, $rootScope, $http, $routeParams, $window) {
		var api = $rootScope.site_url + 'cart';

		//Items Added in cart
		// $scope.loader = () => {
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
							swal('Poof! Your cart has been deleted!', {
								icon: 'success',
							});
							// $scope.loader();
							$scope.loaderInit();
						});
					} else {
						swal('Your cart file is safe!');
					}
				});
			} else {
				swal('Your cart is empty! Nothing to delete');
			}
		};

		//Proceed to Shipping
		// $scope.proceedToShip = (data) => {
		// 	console.log('hello');
		$http.get(api + '/shipping?addr' + $scope.addr).then(function (response) {
			// console.log(response);
		});
		// };

		//Proceed to Payment
		$scope.proceedToPayment = () => {
			// const checked = document.getElementById('address-checked').value;
			$('#form').submit(function () {
				$.ajax({
					type: 'POST',
					url: api + '/shipping',
					data: $('#form').serialize(),
					// beforeSend: function () {
					// 	$('#result').html('<font color="orange">Submitting your informations... Please Wait...</font>');
					// },
					success: function (data) {
						// $('#result').empty();
						// $('#result').html(data);

						if (data === '1') {
							console.log(data);
							$window.location.href = 'http://127.0.0.1/deliveryMarg/#!/payment';
						} else if (data === '0') {
							console.log(data);
							$scope.shipErrorMsg = 'Please select a shipping address';
						}
					},
				});
			});
		};
	},
]);
