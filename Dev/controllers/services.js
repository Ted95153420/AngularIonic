angular.module('f1driverapp.services', []).
  factory('returnapiresultservice', function($http) {

    var testingAPI = {};

    testingAPI.getDrivers = function() {
		return 'Proof Of Concept';
      /*return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      }); */
    }

    return testingAPI;
  });