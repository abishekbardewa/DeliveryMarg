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

		$scope.addToCart = function (p_id) {
			console.log(p_id);
			$http.post(cartApi + '/add/' + p_id).then(function (response) {
				// $scope.products = response.data;
				console.log(response);
			});
		};
	},
]);
