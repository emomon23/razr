function ShapesFacadeFnc(httpService, locationService, getCirclesURL, getSquaresURL, getBothURL) {
    var self = this;
    var _sqaures = null;
    var _circles = null;
    var _allShapes = null;

    self.getSquaresList = function (callBack) {
        if (_sqaures == null) {
            httpService.get(getSquaresURL)
                 .success(function (arrayOfSquares) {
                     _sqaures = arrayOfSquares;
                     callBack(_sqaures)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(_sqaures);
        }
    }

    self.getCirclesList = function (callBack) {
        if (_circles == null) {
            httpService.get(getCirclesURL)
                 .success(function (arrayOfCircles) {
                     _circles = arrayOfCircles;
                     callBack(_circles)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(_circles);
        }
    }

    self.getAllShapes = function (callBack) {
        if (_allShapes == null) {
            httpService.get(getBothURL)
                 .success(function (arrayOfShapes) {
                     _allShapes = arrayOfShapes;
                     callBack(_allShapes)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(_allShapes);
        }
    }

    self.getAllShapeTypes = function (callback) {
        callback(new Array("All", "Circles", "Squares"));
    }
    
}