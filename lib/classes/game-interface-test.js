/**
 * game-interface
 * game-interface-test
 */
test.runnerGameInterface = function () {
  test.heading('GameInterface Singleton', function () {
    test.paragraph('The GameInterface Singleton provides a namespace for the library.  In it is access to the classes ' +
      'that make up the library and a collection of helper methods.');

    test.heading('CONSTRUCTOR', function () {
      test.paragraph('The object is instantiated upon loading the source file.  Any call to GameInterface() will return a ' +
        'reference to the singleton.');
      test.example('multiple instances are deep equal', true, function () {
        return (GameInterface() === GameInterface() && GameInterface() === new GameInterface());
      });
      test.example('A reference is available internally to all modules in the library "T"', true, function () {
        return I === GameInterface();
      });
      test.example('The Tequila library is required.', undefined, function () {
        var tequilaVersion = T.getVersion();
        var gameInterfaceVersion = I.getVersion();
        test.show(tequilaVersion);
        test.show(gameInterfaceVersion);
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('views', function () {
        test.example('array of views created', true, function () {
          return I.views instanceof Array;
        });
      });
      test.heading('bitmaps', function () {
        test.example('array of bitmap resources', true, function () {
          return I.bitmaps instanceof Array;
        });
      });
      test.heading('sounds', function () {
        test.example('array of sound resources', true, function () {
          return I.sounds instanceof Array;
        });
      });
    });
    test.heading('METHODS', function () {
      test.heading('getViewportWidth', function () {
        test.example('returns default width for viewports', true, function () {
          test.show(I.getViewportWidth());
          return I.getViewportWidth()>0;
        });
      });
      test.heading('getViewportHeight', function () {
        test.example('returns default width for viewports', true, function () {
          test.show(I.getViewportHeight());
          return I.getViewportHeight()>0;
        });
      });
      test.heading('loadResources', function () {
        test.paragraph('callback expects 2 parameters: resourcesDefined, resourcesLoaded');
        test.example('callback function required', Error('callback required'), function () {
          I.loadResources();
        });
      });
    });
  });
};