myApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {
	this.goContent = function() {
		$state.go("content", {}, {reload: true});
		// window.location.href= "#/content";
	}
}]);