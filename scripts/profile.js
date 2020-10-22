app.controller('profile', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'users';
		$scope.errorClass = 'red-text';
		//View User
		$scope.loader = () => {
			$http.get(api + '/view?data=user_id,name,email,gender,phone,dob,img').then(function (response) {
				var uInfo = response.data;
				for (let user of uInfo) {
					user.dob = new Date(user.dob);
					$scope.u = user;
				}
				// console.log(uInfo);
			});
		};

		$scope.loader();

		//Update Profile
		$scope.updateProfile = function (data) {
			console.log('console:', data);
			$('#form').ajaxForm({
				type: 'POST',
				url: api + '/profile',
				data: data,
				success: function (data) {
					if (data === '1') {
						$scope.loader();
						swal('Good Job!', 'Profile Updated!', 'success');
						$scope.errorMsg = '';
					} else {
						$scope.errorMsg = data;
					}
				},
			});
		};
	},
]);
