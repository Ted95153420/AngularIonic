angular.module('f1driverapp.controllers',[]).
	controller('drivercontroller', function($scope, returnapiresultservice) {
	
		$scope.hardcodedbooktitle = "Harry Potter";
		$scope.stufffromservice = returnapiresultservice.getDrivers();
});

   
  /*$scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ]; 
}]); */