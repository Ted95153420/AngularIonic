angular.module('bookretrievalapp.controllers',[]).
	controller('bookcontroller', function($scope, returnapiresultservice) {
		
		$scope.isbnnumber = '';
		
		
		
		$scope.register = function()
		{
			returnapiresultservice.getbookdetails($scope.isbnnumber).then(function(data)
			{
				$scope.bookdata = data;
				//$scope.bookInfo();
			});
		}
		
		/*$scope.bookInfo = function()
		{
			alert("called bookInfo");
			if($scope.bookdata.totalitems >= 1)
			{
				$scope.requestedBookdata = $scope.bookdata.items[0];
			}
			else
			{
				alert("Error - no book data found for ISBN " + $scope.isbnnumber)
			}
		}*/
});
 