angularApp.controller('loginController', [
	'$scope',
	'service',
	'$location',
	function($scope, service, $location) {
		$scope.onLogin = function() {
			service.login($scope.user).then(
				(data) => {
					if ($scope.user.stayConnected) {
						localStorage.setItem('authorization', data.data.token);
					}
					$location.path('/techs');
				},
				(error) => {}
			);
		};
	}
]);
