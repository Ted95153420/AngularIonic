angular.module('f1driverapp.controllers',[]).
	controller('drivercontroller', function($scope, returnapiresultservice) {
	
		$scope.hardcodedbooktitle = "Harry Potter";
		$scope.stufffromservice = returnapiresultservice.getbookdetails();
});
 