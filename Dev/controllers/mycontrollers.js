angular.module('bookretrievalapp.controllers',[]).
	controller('bookcontroller', function($scope, returnapiresultservice) {
		returnapiresultservice.getbookdetails().then(function(data)
		{
			$scope.bookdata = data;
		});
});
 