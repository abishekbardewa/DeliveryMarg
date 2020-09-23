app.controller('category', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		// // console.log($routeParams);
		$scope.c_id = $routeParams.c_id;
		$scope.s_id = $routeParams.s_id;
		$scope.s_name = $routeParams.name;

		var api = $rootScope.site_url + 'category';

		$http.get(api + '/view?parentid=' + $scope.c_id).then(function (response) {
			// console.log(response);
			$scope.categories = response.data;
			console.log($scope.categories);
		});
	},
]);
