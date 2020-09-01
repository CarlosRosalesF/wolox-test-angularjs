angularApp.controller('landingController', [
	'$scope',
	'$location',
	'$window',
	function($scope, $location, $window) {
		$scope.toLogin = function() {
			$location.path('/login');
		};
		$scope.redirectToTwitter = function() {
			$window.open('https://twitter.com/Wolox', '_blank');
		};
		$scope.redirectToWolox = function() {
			$window.open('https://www.wolox.com.ar/', '_blank');
		};
	}
]);
