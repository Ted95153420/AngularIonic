angular.module('bookretrievalapp.controllers',[]).
	controller('bookcontroller', function($scope, returnapiresultservice) {
		
		$scope.isbnnumber = '';
		
		
		
		$scope.register = function(isbn)
		{
			returnapiresultservice.getbookdetails(isbn).then(function(data)
			{
				$scope.bookdata = data;
				//$scope.bookInfo();
			});
		}
});
 