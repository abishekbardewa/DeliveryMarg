app.controller('checkout', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',
	function ($scope, $rootScope, $http) {
		var api = $rootScope.site_url + 'checkout';

		// 		$http.get('login/check_valid_session').success(function (data) {
		// 			if (data != 1) {

		// 			}
		// 		});
		// 		if(!user.name){
		// window.location.assign('<?=site_url("login")?>');
		// 		}
	},
]);
