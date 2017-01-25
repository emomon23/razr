angular.module("RazrTestApp")
    .controller("ShapesCTRL", function ($scope, localServer) {
      
        var _shapesFacade = localServer.shapesFacade;
        var _currentlySelectedCategory = 'All';

        initializeController();

        $scope.getCategoryClass = function (selectedCategory) {
            return selectedCategory == _currentlySelectedCategory ? 'btn-primary' : '';
        }

        $scope.selectCategory = function (selectedCategory) {
            _currentlySelectedCategory = selectedCategory;
        }

        function initializeController() {
            $scope.data = {};

            _shapesFacade.getAllShapeTypes(function (shapeCategories) {
                $scope.data.shapeCategories = shapeCategories;
            });


            _shapesFacade.getSquaresList(function (squareList) {
                $scope.data.squareList = squareList;
            });

            _shapesFacade.getCirclesList(function (circleList) {
                $scope.data.circleList = circleList;
            });

            _shapesFacade.getAllShapes(function (allShapes) {
                $scope.data.allShapes = allShapes;
            });
        }
    });