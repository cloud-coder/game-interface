/**
 * game-interface
 * viewPort-test
 */
test.runnerViewPort = function () {
  test.heading('ViewPort Class', function () {
    test.paragraph('The ViewPort class defines a rectangular region where all graphic elements are drawn inside.' +
      ' It defines a container and controls the placement and visibility of all elements in it.');

    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of ViewPort', true, function () {
        return new ViewPort() instanceof ViewPort;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        ViewPort();
      });
      test.example('should make sure properties are valid', Error('error creating ViewPort: invalid property: sex'), function () {
        new ViewPort({sex: 'female'});
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('visible', function () {
        test.paragraph('indicates if viewPort is visible');
        test.example('default is true', true, function () {
          return new ViewPort().visible;
        });
        test.example('can be set in constructor', false, function () {
          return new ViewPort({visible: false}).visible;
        });
      });
      test.heading('x', function () {
        test.paragraph('coordinate view specifies horizontal location of viewport');
        test.example('defaults is 0', 0, function () {
          return new ViewPort().x;
        });
        test.example('can be set in constructor', 7, function () {
          return new ViewPort({x: 7}).x;
        });
      });
      test.heading('y', function () {
        test.paragraph('coordinate view specifies vertical location of viewport');
        test.example('defaults is 0', 0, function () {
          return new ViewPort().y;
        });
        test.example('can be set in constructor', 77, function () {
          return new ViewPort({y: 77}).y;
        });
      });

      test.heading('width', function () {
        test.paragraph('horizontal size of viewport');
        test.example('default is I.getViewportWidth()', I.getViewportWidth(), function () {
          return new ViewPort().width;
        });
        test.example('can be set in constructor', 7, function () {
          return new ViewPort({width: 7}).width;
        });
      });

      test.heading('height', function () {
        test.paragraph('vertical size of viewport');
        test.example('default is I.getViewportHeight()', I.getViewportHeight(), function () {
          return new ViewPort().height;
        });
        test.example('can be set in constructor', 77, function () {
          return new ViewPort({height: 77}).height;
        });
      });

    });
    test.heading('METHODS', function () {
      test.heading('setProperties', function () {
        test.paragraph('Call this to set viewport properties');
        test.example('should make sure properties are valid', Error('error creating ViewPort: invalid property: sex'), function () {
          new ViewPort().setProperties({sex: 'female'});
        });
        test.example('can set x', 7, function () {
          return new ViewPort().setProperties({x: 7}).x;
        });
        test.example('can set y', 77, function () {
          return new ViewPort().setProperties({y: 77}).y;
        });
        test.example('can set width', 777, function () {
          return new ViewPort().setProperties({width: 777}).width;
        });
        test.example('can set width', 123, function () {
          return new ViewPort().setProperties({height: 123}).height;
        });
        test.example('can set visibility', false, function () {
          return new ViewPort().setProperties({visible: false}).visible;
        });
      });
      test.heading('bringToTop', function () {
        test.paragraph('reposition viewPort on top of all others');
        test.example('only text is that it exists', undefined, function () {
          new ViewPort().bringToTop();
        });

      });

    });
  });
};