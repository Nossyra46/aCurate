myApp.controller('TestController', ['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory) {
	// body...
	var self = this;
	this.videos = [];

	$http.get(ApiFactory.api + 'videos')
	.then(
		function(res) {
			console.log(res);

			res.data.videos.map(function(video) {
				$http.get(ApiFactory.api + 'videos/'+video.programId)
				.then(
					function(res) {
						console.log(res);
						self.videos.push(res.data.videoJsonPlayer);
						
					},
					function(err) {
						console.log(err);
					});
			});
		},
		function(err) {
			console.log(err);
		}
	);
}]);