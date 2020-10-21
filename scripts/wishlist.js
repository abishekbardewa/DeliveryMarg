app.controller('wishlist', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'wishlist';

		//List of WishList
		$scope.loader = () => {
			$http.get(api + '/view').then(function (response) {
				$scope.wish = response.data;
				$scope.wl = $scope.wish[0];
				console.log('WISHLIST', $scope.wl);
				console.log('WISHLIST', $scope.wish);
			});
		};
		$scope.loader();

		//Count of WishList
		$scope.count = () => {
			$http.get(api + '/count').then(function (response) {
				$scope.wishCount = response.data;
			});
		};
		$scope.count();

		//Add to wishlist
		$scope.addToWishlist = (data) => {
			$http.get(api + '/add/' + data).then(function (response) {
				if (response.data === '1') {
					M.toast({
						html: 'Added to Wishlist',
						outDuration: 375,
						classes: 'green accent-4',
					});
				} else if (response.data === '0') {
					M.toast({
						html: 'Item not added to wishlist',
						outDuration: 375,
						classes: 'red',
					});
				} else if (response.data === '4') {
					M.toast({
						html: 'Please Sign In to add wishlist',
						outDuration: 375,
						classes: 'pink darken-1',
					});
				} else {
					M.toast({
						html: 'Item already exists in wishlist',
						outDuration: 375,
						classes: 'pink darken-1',
					});
				}
			});
		};
		//Remove Single Items from Wish
		$scope.deleteWish = (data) => {
			console.log(data);
			$http.get(api + '/delete/' + data).then(function (response) {
				if (response.data === '1') {
					M.toast({
						html: 'Poof! Your Wishlist has been deleted!',
						outDuration: 375,
						classes: 'pink darken-1',
					});
					$scope.count();
					$scope.loader();
				} else if (response.data === '0') {
					M.toast({
						html: 'Your wishlist is safe!',
						outDuration: 375,
						classes: 'green accent-4',
					});
				}
			});
		};
	},
]);
