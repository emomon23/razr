function Circle(radius) {
    var self = this;
    self.radius = radius;

    self.getArea = function () {
        return Math.pow(self.radius, 2) * 3.14159;
    }

    self.toString = function(){
        return 'Circle: Radius = ' + self.radius + ', Area = ' + self.getArea();
    }
        
    self.type = "circle";
}

function Square(sz) {
    var self = this;
    self.size = sz;

    self.getArea = function () {
        return self.size * self.size;
    }

    self.toString = function () {
        return 'Square: Size = ' + self.size + ', Area = ' + self.getArea();
    }
    
    self.type = "square";
}

function ShapeSorter() {
    var self = this;
    var _shapes = [];

    self.AddShape = function (shape){
        var insertedArea = shape.getArea();
        var gotIt = false;

        for (var i = 0; i < _shapes.length; i++) {
            if (_shapes[i].getArea() < insertedArea) {
                _shapes.splice(i, 0, shape);
                gotIt = true;
                break;
            }
        }

        if (!gotIt) {
            _shapes.push(shape);
        }
    }

    self.setShapes = function(shapes){
        //Could do a Donald Shell sort here or even a bubble sort, 
        //Want to get the rest of the functionality implemented, will
        //refactor if have time.

        shapes.forEach(function (shape) {
            self.AddShape(shape);
        })
    }

    self.getShapes = function() {
        return _shapes;
    }
}
