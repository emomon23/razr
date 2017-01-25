angular.module("RazrTestApp")
.config(function ($routeProvider) {
  
    $routeProvider.when('/Squares',
      { templateUrl: "/html/Squares.html" });

    $routeProvider.when('/Circles',
      { templateUrl: "/html/Circles.html" })

    $routeProvider.otherwise({
        templateUrl: '/html/CirclesAndSquares.html'
    });

    ;
});