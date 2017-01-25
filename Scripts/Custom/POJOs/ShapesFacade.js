function ShapesFacadeFnc(httpService, locationService, getCirclesURL, getSquaresURL, getBothURL) {
    var self = this;
    var sqaures = null;
    var circles = null;
    var allShapes = null;

    self.getSquaresList = function (callBack) {
        if (sqaures == null) {
            httpService.get(getSquaresURL)
                 .success(function (arrayOfSquares) {
                     sqaures = arrayOfSquares;
                     callBack(sqaures)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(sqaures);
        }
    }

    self.getCirclesList = function (callBack) {
        if (circles == null) {
            httpService.get(getCirclesURL)
                 .success(function (arrayOfCircles) {
                     circles = arrayOfCircles;
                     callBack(circles)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(circles);
        }
    }

    self.getAllShapes = function (callBack) {
        if (allShapes == null) {
            httpService.get(getBothURL)
                 .success(function (arrayOfShapes) {
                     allShapes = arrayOfShapes;
                     callBack(allShapes)
                 })
                 .error(function (error) {
                     //Dosomething = error.status;
                 });
        }
        else {
            callBack(allShapes);
        }
    }

    self.getAllShapeTypes = function (callback) {
        callback(new Array("All", "Circles", "Squares"));
    }
}