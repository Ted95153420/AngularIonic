angular.module('bookretrievalapp.controllers',[]).
	controller('bookcontroller', function($scope, returnapiresultservice) {
		
		$scope.isbnnumber = '';
		
		
		
		$scope.register = function()
		{
			returnapiresultservice.getbookdetails($scope.isbnnumber).then(function(data)
			{
				alert("YAY");
				$scope.bookdata = data;
			});
		}
});
 