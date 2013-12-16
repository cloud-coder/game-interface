/**
 * game-interface
 * audio-resource-test
 */
test.runnerAudioResource = function () {
  test.heading('AudioResource Class', function () {
    test.paragraph('');

    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of AudioResource', true, function () {
        return new AudioResource('!') instanceof AudioResource;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        AudioResource();
      });
      test.example('resource name required', Error('error creating AudioResource: resource string required'), function () {
        new AudioResource();
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('resourceName', function () {
        test.paragraph('resource file name');
        test.example('returns value set in constructer', 'picture', function () {
          return new AudioResource('picture').resourceName;
        });
      });
    });
    test.heading('METHODS', function () {
      test.heading('load', function () {
        test.paragraph('Load resource and invoke callback when done');
        test.example('callback function required', Error('callback required'), function () {
          new AudioResource('me').load();
        });
        test.example('returns error when resource not found', test.asyncResponse(Error('audio resource "me" not found')), function (testNode, returnResponse) {
          new AudioResource('me').load(function(err){
            returnResponse(testNode, err);
          });
        });
      });
      test.heading('play', function () {
        test.paragraph('bool indicates if resource is loaded');
        test.example('resource must be loaded', Error('audio resource "me" not loaded'), function () {
          new AudioResource('me').play();
        });
      });
    });
  });
};