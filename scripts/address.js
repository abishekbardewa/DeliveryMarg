app.controller('address', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.name = 'Login';
		var api = $rootScope.site_url + 'users';

		$scope.loader = () => {
			$http.get(api + '/viewAddress').then(function (response) {
				$scope.address = response.data;
			});
		};
		$scope.loader();

		//Getting List of all Country
		$http.get(api + '/viewCountry').then(function (response) {
			$scope.country = response.data;
		});

		//Getting List of All Zones
		$http.get(api + '/viewZone').then(function (response) {
			$scope.zone = response.data;
		});

		//Add New Address
		$scope.saveAddress = (data) => {
			$http({
				method: 'post',
				url: api + '/shipping_address',
				data: data,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}).then(function (response) {
				if (response.data === '1') {
					$scope.loader();
					M.toast({
						html: 'Address Saved Successfully',
						outDuration: 375,
						classes: 'green lighten-2',
					});
					// $scope.resetForm();
				} else if (response.data === '0') {
					M.toast({
						html: 'Address Not Saved',
						outDuration: 375,
						classes: 'red',
					});
				} else {
					$scope.errorMsg = response.data;
				}
			});
		};

		//Update User Address
		$scope.updateAddress = (data) => {
			document.getElementById('address-section').classList.add('visible');
			$scope.x = data;
		};

		//Delete Address
		$scope.deleteAddress = (data) => {
			swal({
				title: 'Are you sure?',
				text: 'Once deleted, you will not be able to recover this!',
				icon: 'warning',
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					$http.get(api + '/shipping_address?del=' + data + '&addr_id=' + data).then(function (response) {
						console.log(response.data);
						swal('Poof! Your address has been deleted!', {
							icon: 'success',
						});
						$scope.loader();
					});
				} else {
					swal('Your address file is safe!');
				}
			});
		};
	},
]);
