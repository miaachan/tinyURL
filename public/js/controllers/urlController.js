var app = angular.module('tinyUrlApp');

app.controller('urlController', [
	'$scope',
	'$http',
	'$routeParams',
	function($scope, $http, $routeParams) {
		$http
			.get('/api/v1/urls/' + $routeParams.shortUrl)
			.then(function(response) {
				$scope.shortUrl = response.data.shortUrl;
				$scope.longUrl = response.data.longUrl;
				$scope.shortUrlToShow =
					'http://localhost:3000/' + response.data.shortUrl;
			});
	}
]);