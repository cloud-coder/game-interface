/**
 * game-interface
 * bitmap-resource-test
 */
test.runnerBitmapResource = function () {
  test.heading('BitmapResource Class', function () {
    test.paragraph('');

    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of BitmapResource', true, function () {
        return new BitmapResource('!') instanceof BitmapResource;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        BitmapResource();
      });
      test.example('resource name required', Error('error creating BitmapResource: resource string required'), function () {
        new BitmapResource();
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('resourceName', function () {
        test.paragraph('resource file name');
        test.example('returns value set in constructer', 'picture', function () {
          return new BitmapResource('picture').resourceName;
        });
      });
    });
    test.heading('METHODS', function () {
      test.heading('load', function () {
        test.paragraph('Load resource and invoke callback when done');
        test.example('callback function required', Error('callback required'), function () {
          new BitmapResource('me').load();
        });
        test.example('returns error when resource not found', test.asyncResponse(Error('graphic resource "me" not found')), function (testNode, returnResponse) {
          new BitmapResource('me').load(function(err){
            returnResponse(testNode, err);
          });
        });
      });
      test.heading('isLoaded', function () {
        test.paragraph('bool indicates if resource is loaded');
        test.example('Initial state is not loaded when created', false, function () {
          return new BitmapResource('me').isLoaded();
        });
      });
    });
  });
};