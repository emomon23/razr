/*
var mockHttp = new MockHttp();
mockHttp.addPostResult('url', 'Mike Emo');
mockHttp.addPostResult('url2', 'Tony');

mockHttp.post('url2', 'data')
	.error(function (error) {
	    alert(error.message);
	})
  .success(function (value) {
      alert(value);
  })
  .finally(function () {
      alert('finally called')
  });


mockHttp.addGetResult('url', 'Product list');

mockHttp.get('url')
   .error(function (error) {
       alert(error.message);
   })
 .success(function (list) {
     alert(list);
 });


*/


function MockHttp() {
    var self = this;

    var postSuccessResults = {};
    var getSuccessResult = {};

    self.addGetResult = function (url, result) {
        var key = cleanUrl(url);
        getSuccessResult[key] = result;
    }

    self.addPostResult = function (url, result) {
        var key = cleanUrl(url);
        postSuccessResults[key] = result;
    }

    self.errorMessage = 'An unexpected error occurred';

    self.post = function (url, data) {
        var key = cleanUrl(url);

        return {
            error: function (callback) {
                var successResult = postSuccessResults[key];

                if (!successResult) {
                    callback({ message: self.errorMessage });
                }

                return this;
            },
            success: function (callback) {
                var successResult = postSuccessResults[key];

                if (successResult) {
                    callback(successResult);
                }
                return this;
            },
            finally: function (callback) {
                callback();
                return this;
            }

        };
    }


    self.get = function (endpointUrl) {
        var key = cleanUrl(endpointUrl);
        
        return {
            error: function (callback) {
                var getResult = getSuccessResult[key];

                if (getResult == undefined) {
                    callback({ message: self.errorMessage });
                }
                return this;
            },
            success: function (callback) {
                var getResult = getSuccessResult[key];

                if (getResult != undefined) {
                    callback(getResult);
                }

                return this;
            }
        }
    }

    function cleanUrl(url) {
        while (url.indexOf('/') >= 0) {
            url = url.replace('/', '');
        }

        return url;
    }
}

var dummyData = {
    promotionalMessage: "Fishing Lures on sale, 50% off!",
    products: [
                { name: "DD Blake and Decker Drill", price: 43.23, description: "Mid level drill (Dummy data)", category: "Tools" },
                { name: "DD Mikita Cordless Saw", price: 159.72, description: "3.5 inch cordless saw (Dummy data)", category: "Tools" },
                { name: "DD Rapala Copper #4", price: 9.89, description: "crank bait, 8-12 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Rapala Fire Tiger #6", price: 9.89, description: "crank bait, 8-12 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Rapala Fire Tiger #14", price: 19.89, description: "crank bait, 15-22 feet (Dummy data)", category: "Fishing Lures" },
                { name: "DD Yozury Fire Tiger", price: 42.89, description: "Japaneese crank bait, 10-17 feet (Dummy data)", category: "Fishing Lures" },
    ]
};

function CreateNewMockHttpService(circlesUrl, squaresUrl, bothUrl) {
    var http = new MockHttp();
    http.addGetResult('api/products/getproducts', dummyData);
    http.addPostResult('api/Products/SaveOrder', 'ABC123');

    var randomShapesGenerator = new RandomShapeGenerator();

    http.addGetResult(circlesUrl, randomShapesGenerator.getRandomCircles(50));
    http.addGetResult(squaresUrl, randomShapesGenerator.getRandomSquares(50));
    http.addGetResult(bothUrl, randomShapesGenerator.getRandomShapes(50));

    return http;
}



