var app = angular.module('DelMarg', ['ngRoute']);

app.config([
	'$routeProvider',
	function config($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'pages/home.html',
				controller: 'home',
			})
			.when('/login', {
				templateUrl: 'pages/login.html',
				controller: 'login',
			})
			.when('/profile/:id', {
				templateUrl: 'pages/profile.html',
				controller: 'profile',
			})
			.when('/orders', {
				templateUrl: 'pages/orders.html',
				controller: 'profile',
			})
			.when('/address', {
				templateUrl: 'pages/address.html',
				controller: 'profile',
			})
			.when('/password', {
				templateUrl: 'pages/password.html',
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
	$rootScope.site_url = 'http://127.0.0.1/deli_api/index.php/';
	$rootScope.img_url = 'http://127.0.0.1/deli_api/assets/';
});
