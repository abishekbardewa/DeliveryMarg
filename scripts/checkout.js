app.controller('checkout', [
	'$scope',
	'$rootScope',
	'$http',
	function ($scope, $rootScope, $http) {
		var api = $rootScope.site_url + 'checkout';
	},
]);
