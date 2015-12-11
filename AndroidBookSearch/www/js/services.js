angular.module('bookretrievalapp.services',[]).factory('returnapiresultservice', function($http) {
    return {
		getbookdetails: function(isbnnumber) 
		{
            var bookDetailPromise =  $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnnumber)
            .then(function(response) 
			{
                return response.data;
            },
			function(error)
			{
				alert("Error Details : " + error.status);
			}
			);
            // Return the promise to the controller
            return bookDetailPromise;
        }
    }
});
