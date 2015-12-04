angular.module('f1driverapp.services',[]).factory('returnapiresultservice', function($http) {
    return {
		getbookdetails: function() 
		{
            var bookDetailPromise =  $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
            .then(function(response) 
			{
				alert("YES");
                //return response.data;
            },
			function(error)
			{
				alert("NOPE");
				//eturn 'NOPE';
			}
			);
            // Return the promise to the controller
            return bookDetailPromise;
        }
    }
});
	