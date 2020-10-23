app.controller('products', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var cat_id = $routeParams.cat_id;
		var s_id = $routeParams.s_id;
		$scope.s_name = $routeParams.name;
		$scope.p_name = $routeParams.p_name;
		var api = $rootScope.site_url + 'product';
		var cartApi = $rootScope.site_url + 'cart';

		$http.get(api + '/view?c_id=' + cat_id + '&s_id=' + s_id + '&data=name,p_id,mrp,sp,type,img').then(function (response) {
			$scope.products = response.data;
			console.log($scope.products);
		});

		//Adding product to cart
		$scope.addToCart = function (data) {
			console.log(data);
			$http.get(cartApi + '/add/' + data).then(function (response) {
				if (response.data === '1') {
					// $scope.loader();
					$scope.loaderInit();
					M.toast({
						html: 'Added to cart',
						outDuration: 375,
						classes: 'green accent-4',
					});
				} else if (response.data === '0') {
					M.toast({
						html: 'Item not added to cart',
						outDuration: 375,
						classes: 'red',
					});
				}
			});
		};
	},
]);
