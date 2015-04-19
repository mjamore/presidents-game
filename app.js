var presidentsApp = angular.module('presidentsApp', ['ngRoute']);

presidentsApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'index.html',
		controller: 'mainController'
	});
});


presidentsApp.controller('mainController', ['$scope', '$timeout', 'presidentsService', function($scope, $timeout, presidentsService) {

	// Get presidents JSON array
	$scope.presidents = presidentsService.getPresidents();

	// Store president names in array to be randomized
	$scope.presNames = [];
	for( var i = 0; i < $scope.presidents.length; i ++ )
	{
		$scope.presNames.push($scope.presidents[i].fname + ' ' + $scope.presidents[i].lname);
	}

	// Randomize president names
	$scope.presNames = shuffle($scope.presNames);

	// Set default values to first president in the array
	$scope.curNum = 1;
	$scope.curIndex = 0;
	$scope.curFname = $scope.presidents[$scope.curNum - 1].fname;
	$scope.curLname = $scope.presidents[$scope.curNum - 1].lname;
	$scope.curYears = $scope.presidents[$scope.curNum - 1].years;
	$scope.curImage = $scope.presidents[$scope.curNum - 1].image;
	$scope.userScore = 0;
	$scope.curDigit = getDigit($scope.curNum);
	$scope.properGrammer = getProperGrammer($scope.curNum, $scope.curDigit);
	$scope.cheatActivated = true;

	console.log($scope.curFname + ' ' + $scope.curLname);

	// Run each time the user submits an answer
	$scope.checkPresident = function(presNames) {

		if( $scope.curNum === 44 )
		{
			return
		}

		var userInput = $scope.userInput.toLowerCase(),
			fname = $scope.curFname.toLowerCase(),
			lname = $scope.curLname.toLowerCase();

		// Support 'fname + lname' && 'lname'
		if( userInput === fname + ' ' + lname || userInput === lname )
		{
			// Remove that president name from the list of presidents remaining
			for(var i = 0; i < presNames.length; i++) {
				if( presNames[i] === $scope.curFname + ' ' + $scope.curLname )
				{
					presNames.splice(i, 1);
				}
			}

			// Iterate one time through presidents array and update local $scope variables
			$scope.curNum++;
			$scope.curIndex++;
			$scope.userScore++;
			$scope.curFname = $scope.presidents[$scope.curIndex].fname;
			$scope.curLname = $scope.presidents[$scope.curIndex].lname;
			$scope.curYears = $scope.presidents[$scope.curIndex].years;
			$scope.curImage = $scope.presidents[$scope.curIndex].image;
			$scope.curDigit = getDigit($scope.curNum);
			$scope.properGrammer = getProperGrammer($scope.curNum, $scope.curDigit);
			$scope.userInput = '';

			console.log($scope.curFname + ' ' + $scope.curLname);
		}
	}

	var easter_egg = new Konami();
	easter_egg.code = function() {
		$scope.cheatActivated = true;
		$scope.$apply();
	}
	easter_egg.load();

	$scope.cheat = function(presNames) {
		for(var i = 0; i < presNames.length - 1; i++)
		{
			$timeout(function() {
				$scope.userInput = $scope.curLname;
				$scope.checkPresident($scope.presNames);
				$scope.$apply();
			}, 1000);
		}
	}
}]);