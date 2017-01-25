angular.module('RazrTestApp')
    .directive('shapeList', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/custom/directives/ShapeList.tpl.html',
            link: function (scope, element, attrs) {
                var propertyExpression = attrs['src'];
                scope.shapeList = scope.$eval(propertyExpression);
               
                scope.getShapeClass = function (shape) {
                    return shape.type;
                }
            }
        };
    });