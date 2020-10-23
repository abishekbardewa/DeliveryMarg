app.controller('payment', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',
	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'category';
		$scope.shipData = $routeParams.a;
		console.log('Payment Controller', $scope.shipData);
		// $scope.paymentHandler = (data) => {
		// 	console.log(data);
		// };
	},
]);
