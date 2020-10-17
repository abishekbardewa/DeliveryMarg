app.controller('profile', [
	'$scope',
	'$rootScope',
	'$http',
	'$routeParams',

	function ($scope, $rootScope, $http, $routeParams) {
		var api = $rootScope.site_url + 'users';
		$scope.errorClass = 'red-text';
		//View User
		$http.get(api + '/view?data=user_id,name,email,gender,phone,dob,img').then(function (response) {
			var uInfo = response.data;
			for (let user of uInfo) {
				user.dob = new Date(user.dob);
				$scope.u = user;
			}
		});

		//Update Profile
		$scope.updateProfile = (data) => {
			console.log(data);
			$http({
				method: 'post',
				url: api + '/profile',
				data: data,
				header: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}).then(function (response) {
				console.log(response.data);
				if (response.data === '1') {
					swal('Good Job!', 'Profile Updated!', 'success');
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
				url: api + '/signUp',
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

		//Password Match Validation
		$scope.passCheck = () => {
			const pass = document.getElementById('pass').value;
			const cPass = document.getElementById('cPass').value;
			const msg = document.getElementById('msg');
			if (pass !== cPass || pass === '' || cPass === '') {
				msg.innerHTML = '<strong>Password Not Matched!</strong>';
			} else {
				msg.classList.toggle('green-text');
				msg.innerHTML = '<strong>Password Matched!</strong>';
			}
		};
		$('.datepicker').datepicker();
	},
]);
