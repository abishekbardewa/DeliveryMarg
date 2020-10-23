app.controller('shipping', [
	'$scope',
	'$rootScope',
	'$http',
	function ($scope, $rootScope, $http) {
		var api = $rootScope.site_url + 'category';

		$http.get(api + '/view?data=cat_id,name,img&parent=1').then(function (response) {
			// console.log(response);
			$scope.categories = response.data;
		});
		$('.materialboxed').materialbox();
	},
]);
