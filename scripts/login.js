app.controller('login', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'users';

		//Login User
		$scope.loginSubmit = function (data) {
			$http({
				method: 'POST',
				url: api + '/login',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: data,
			}).then(function (response) {
				$scope.errorClass = 'red-text';
				if (response.data === '1') {
					window.location.reload();
				} else if (response.data === '0') {
					$scope.errorMsg = 'Unauthorise User !!!';
					
				} else {
					$scope.errorMsg = response.data;
				}
			});
		};

		//Getting Session Info
		$http.get(api + '/sessionData').then(function (response) {
			$scope.sData = response.data;
//			console.log($scope.sData);
		});
	},
]);
