angular.module('f1driverapp.controllers',[]).
	controller('drivercontroller', function($scope, returnapiresultservice) {
	
		$scope.hardcodedbooktitle = "Harry Potter";
		returnapiresultservice.getbookdetails().then(function(data)
		{
			$scope.bookdata = data;
		});
});
 