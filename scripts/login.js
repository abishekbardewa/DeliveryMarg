app.controller('login', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'login';
		$scope.errorClass = 'red-text';

		//Login User
		$scope.loginSubmit = function (data) {
			console.log(data);
			$http({
				method: 'POST',
				url: api + '/userLogin',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: data,
			}).then(function (response) {
				if (response.data === '1') {
					window.location.reload();
				} else if (response.data === '0') {
					$scope.errorMsg = 'Unauthorise User !!!';
				} else {
					$scope.errorMsg = response.data;
				}
			});
		};

		//Sign Up User
		$scope.signUpSubmit = (data) => {
			console.log(data);
			$http({
				method: 'post',
				url: api + '/register',
				data: data,
				header: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}).then(function (response) {
				if (response.data === '1') {
					swal('Good Job!', 'Sign up Completed!', 'success');
				} else {
					$scope.errorMsg = response.data;
				}
			});
		};
		//Change Password
		$scope.changePass = (data) => {
			$http({
				method: 'post',
				url: api + '/change_password',
				data: data,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}).then(function (response) {
				if (response.data === '1') {
					M.toast({
						html: 'Password Changed Successfully',
						outDuration: 375,
						classes: 'green accent-4',
					});
				} else if (response.data === '0') {
					M.toast({
						html: 'Unauthorise User !!!',
						outDuration: 375,
						classes: 'red',
					});
				} else {
					$scope.errorMsg = response.data;
				}
			});
		};
		//User SignOut
		$scope.signOut = () => {
			$http.get(api + '/logout').then(function (response) {
				if (response.data === '1') {
					window.location.reload();
				} else {
					M.toast({
						html: 'Somthing went Wrong',
						outDuration: 375,
						classes: 'red',
					});
				}
			});
		};
		//Password Match Validation
		$scope.passCheck = () => {
			const pass = document.getElementById('pass').value;
			const cPass = document.getElementById('cPass').value;
			const msg = document.getElementById('msg');
			const msg2 = document.getElementById('msg2');
			if (pass !== cPass || pass === '' || cPass === '') {
				msg.innerHTML = '<strong>Password Not Matched!</strong>';
				msg.classList.remove('green-text');
			} else {
				msg.classList.toggle('green-text');
				msg.innerHTML = '<strong>Password Matched!</strong>';
			}
		};

		//Getting Session Info
		$http.get(api + '/sessionData').then(function (response) {
			$scope.sData = response.data;
			console.log('Session: ', $scope.sData);
		});
	},
]);
