myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',function($stateProvider, $urlRouterProvider, $httpProvider) {
	// CORS
	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.useXDomain = true;

	// Default route
	$urlRouterProvider.otherwise('/');

	// ROUTES
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "../views/pages/home.html"
	})
	.state('game', {
		url: "/game",
		templateUrl: "../views/pages/game.html"
	})
	.state('content', {
		url: "/content",
		templateUrl: "../views/pages/game.html"
	})
	.state('test', {
		url: "/test",
		templateUrl: "../views/pages/test.html"
	});
}]);