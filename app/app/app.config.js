myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
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
		templateUrl: "../views/pages/content.html"
	});
}]);