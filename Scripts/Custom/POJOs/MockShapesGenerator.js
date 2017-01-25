function CreateNewMockHttpService(circlesUrl, squaresUrl, bothUrl) {
    var _http = new MockHttp();
    var _randomShapesGenerator = new RandomShapeGenerator();

    _http.addGetResult(circlesUrl, _randomShapesGenerator.getRandomCircles(50));
    _http.addGetResult(squaresUrl, _randomShapesGenerator.getRandomSquares(50));
    _http.addGetResult(bothUrl, _randomShapesGenerator.getRandomShapes(50));

    return _http;
}


function RandomShapeGenerator() {
    var self = this;
    var _rnd = new Randomizer();

    self.getRandomCircles = function (numberOfCicles) {
        var sorter = new ShapeSorter();

        for (var i = 0; i < numberOfCicles; i++) {
            var size = _rnd.nextNumber(1, 50);

            var newCircle = new Circle(size);
            sorter.AddShape(newCircle);
        }

        return sorter.getShapes();
    }

    self.getRandomSquares = function (numberOfSquares) {
        var sorter = new ShapeSorter();

        for (var i = 0; i < numberOfSquares; i++) {
            var size = _rnd.nextNumber(1, 100);

            var newSquare = new Square(size);
            sorter.AddShape(newSquare);
        }

        return sorter.getShapes();
    }

    self.getRandomShapes = function (numberOfShapesEach) {
        var sorter = new ShapeSorter();

        for (var i = 0; i < numberOfShapesEach; i++) {
            var newShape = new Circle(_rnd.nextNumber(1, 50));
            sorter.AddShape(newShape);

            newShape = new Square(_rnd.nextNumber(1, 100));
            sorter.AddShape(newShape);
        }

        return sorter.getShapes();
    }
}

function Randomizer() {
    var self = this;

    self.nextNumber = function (min, max) {
        var randomNumber = Math.floor(Math.random() * max);
        while (randomNumber < min) {
            randomNumber = Math.floor(Math.random() * max);
        }

        return randomNumber;
    };

    self.nextScreenPosition = function () {
        var yPosition = self.nextNumber(0, 15000);
        var xPosition = self.nextNumber(0, 15000);

        return { x: xPosition, y: yPosition }
    }
}
