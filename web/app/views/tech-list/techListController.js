angularApp.controller('techListController', [
	'$scope',
	'service',
	'$location',
	function($scope, service, $location) {
		$scope.loading = true;
		$scope.tech = 'tech';
		function getInfo() {
			service.getTech().then((resp) => {
				$scope.techList = resp.data;
				$scope.loading = false;
			});
		}
		getInfo();
		$scope.logout = function() {
			localStorage.clear();
			$location.path('/');
		};
	}
]);
