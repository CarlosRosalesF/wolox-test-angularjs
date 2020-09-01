angularApp.controller('landingController', [
	'$scope',
	'$location',
	'$window',
	function($scope, $location, $window) {
		$scope.benefits = [
			{
				path: '../../../assets/img/Ic_Hour.svg',
				description: 'Flexibilidad\nHoraria'
			},
			{
				path: '../../../assets/img/IC_HomeOffice.svg',
				description: 'Home Office'
			},
			{
				path: '../../../assets/img/Ic_Workshops.svg',
				description: 'Capacitaciones\ny workshops'
			},
			{
				path: '../../../assets/img/Ic_DrinkSnacks.svg',
				description: 'Snacks, frutas\ny bebidas gratis'
			},
			{
				path: '../../../assets/img/Ic_laptop.svg',
				description: 'Semana\nRemota'
			},
			{
				path: '../../../assets/img/Ic_brain.svg',
				description: 'Trabajar\nen ultimas\ntecnologías'
			}
		];
		$scope.authorization = localStorage.getItem('authorization');
		$scope.toLogin = function() {
			$location.path('/login');
		};
		$scope.toTechList = function() {
			$location.path('/techs');
		};
		$scope.redirectToTwitter = function() {
			$window.open('https://twitter.com/Wolox', '_blank');
		};
		$scope.redirectToWolox = function() {
			$window.open('https://www.wolox.com.ar/', '_blank');
		};
	}
]);
