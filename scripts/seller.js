app.controller('seller', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		$scope.id = $routeParams.id;
		$scope.cname = $routeParams.name;
		var api = $rootScope.site_url + 'seller';

		$http.get(api + '/view?c_id=' + $scope.id + '&data=s_id,name,address,logo').then(function (response) {
			$scope.sellers = response.data;
			console.log($scope.sellers);
		});
	},
]);
