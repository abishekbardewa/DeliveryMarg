const app = angular.module('DelMarg', ['ngRoute', 'ngSanitize']);

app.config([
	'$routeProvider',
	'$httpProvider',
	function config($routeProvider, $httpProvider) {
		$httpProvider.defaults.withCredentials = true;
		$routeProvider
			.when('/home', {
				templateUrl: 'pages/home.html',
				controller: 'home',
			})
			.when('/profile', {
				templateUrl: 'pages/profile.html',
				controller: 'profile',
			})
			.when('/seller/:id/:name', {
				templateUrl: 'pages/seller.html',
				controller: 'seller',
			})
			.when('/products/:cat_id/:s_id/:name/:p_name', {
				templateUrl: 'pages/products.html',
				controller: 'products',
			})
			.when('/cart', {
				templateUrl: 'pages/cart.html',
				controller: 'cart',
			})
			.when('/category/:c_id/:s_id/:name', {
				templateUrl: 'pages/category.html',
				controller: 'category',
			})
			.otherwise('/home');
	},
]);

app.run(function ($rootScope) {
	$rootScope.site_url = 'http://127.0.0.1/DeliveryApi/index.php/';
	$rootScope.img_url = 'http://127.0.0.1/DeliveryApi/assets/';
});
