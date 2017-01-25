var dummyCirclesURL = 'api/shapes/circles';
var dummySquaresURL = 'api/shapes/squares';
var dummuyBothURL = 'api/shapes/both';

angular.module('RazrTestApp')
  .constant('getCirclesURL', dummyCirclesURL)
  .constant('getSquaresURL', dummySquaresURL)
  .constant('getAllShapesURL', dummuyBothURL)
  .factory('localServer', function ($http, $location, getCirclesURL, getSquaresURL, getAllShapesURL) {

      //we're not going to use the $http service for now,
      //let's use the mockHttpService
      $http = CreateNewMockHttpService(dummyCirclesURL, dummySquaresURL, dummuyBothURL);
      
      var shapesFacadeInst = new ShapesFacadeFnc($http, $location, getCirclesURL, getSquaresURL, getAllShapesURL);

      return {
         shapesFacade: shapesFacadeInst
      }
  });