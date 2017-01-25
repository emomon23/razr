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

    var _postSuccessResults = {};
    var _getSuccessResult = {};

    self.addGetResult = function (url, result) {
        var key = cleanUrl(url);
        _getSuccessResult[key] = result;
    }

    self.addPostResult = function (url, result) {
        var key = cleanUrl(url);
        _postSuccessResults[key] = result;
    }

    self.errorMessage = 'An unexpected error occurred';

    self.post = function (url, data) {
        var key = cleanUrl(url);

        return {
            error: function (callback) {
                var successResult = _postSuccessResults[key];

                if (!successResult) {
                    callback({ message: self.errorMessage });
                }

                return this;
            },
            success: function (callback) {
                var successResult = _postSuccessResults[key];

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
                var getResult = _getSuccessResult[key];

                if (getResult == undefined) {
                    callback({ message: self.errorMessage });
                }
                return this;
            },
            success: function (callback) {
                var getResult = _getSuccessResult[key];

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


