angular.module('f1driverapp.services', []).
  factory('returnapiresultservice', function($http) {

    var testingAPI = {};

    testingAPI.getDrivers = function() {
       //Just use the API to get any old book.
	   return $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699').then
		(function(response)
		{
			alert(YES);
			//return response.data;
		},
		function(error)
		{
			//return 'something went wrong';
			alerd("NOPE");
		});
    }

    return testingAPI;
  });