var app = angular.module("DelMarg", ["ngRoute"]);

app.config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "pages/home.html",
        controller: "home",
      })
      .when("/login", {
        templateUrl: "pages/login.html",
        controller: "login",
      })
      .when("/profile/:id", {
        templateUrl: "pages/profile.html",
        controller: "profile",
      })

      .when("/seller/:id", {
        templateUrl: "pages/seller.html",
        controller: "seller",
      })
      .when("/products", {
        templateUrl: "pages/products.html",
        comtroller: "products",
      })

      .when("/cart", {
        templateUrl: "pages/cart.html",
        controller: "cart",
      })
      .otherwise("/home");
  },
]);

app.run(function($rootScope) {
	$rootScope.site_url="http://127.0.0.1/deli_api/index.php/";
	$rootScope.img_url="http://127.0.0.1/deli_api/assets/";
});
