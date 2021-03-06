/**
 * game-interface
 * graphic-test
 */
test.runnerGraphic = function () {
  test.heading('Graphic Class', function () {
    test.paragraph('Base class for visual elements. This will render bounding rectangle.' +
      ' Subclassed elements must retain this for design purposes.' +
      ' Subclasses include Bitmap, Video, Text, Animation, Button, Group.');

    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of Graphic', true, function () {
        return new Graphic({viewPort: new ViewPort()}) instanceof Graphic;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        Graphic();
      });
      test.example('should make sure properties are valid', Error('error creating Graphic: invalid property: sex'), function () {
        new Graphic({sex: 'female'});
      });
      test.example('viewPort must be supplied in constructor', Error('error creating Graphic: viewport required'), function () {
        new Graphic({});
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('visible', function () {
        test.paragraph('indicates if graphic is visible');
        test.example('default is true', true, function () {
          return new Graphic({viewPort: new ViewPort()}).visible;
        });
        test.example('can be set in constructor', false, function () {
          return new Graphic({viewPort: new ViewPort(), visible: false}).visible;
        });
      });
      test.heading('x', function () {
        test.paragraph('coordinate view specifies horizontal location of viewport');
        test.example('defaults is 0', 0, function () {
          return new Graphic({viewPort: new ViewPort()}).x;
        });
        test.example('can be set in constructor', 7, function () {
          return new Graphic({viewPort: new ViewPort(), x: 7}).x;
        });
      });
      test.heading('y', function () {
        test.paragraph('coordinate view specifies vertical location of viewport');
        test.example('defaults is 0', 0, function () {
          return new Graphic({viewPort: new ViewPort()}).y;
        });
        test.example('can be set in constructor', 77, function () {
          return new Graphic({viewPort: new ViewPort(), y: 77}).y;
        });
      });

      test.heading('width', function () {
        test.paragraph('horizontal size of viewport');
        test.example('default is I.getViewportWidth()', I.getViewportWidth(), function () {
          return new Graphic({viewPort: new ViewPort()}).width;
        });
        test.example('can be set in constructor', 7, function () {
          return new Graphic({viewPort: new ViewPort(), width: 7}).width;
        });
      });

      test.heading('height', function () {
        test.paragraph('vertical size of viewport');
        test.example('default is I.getViewportHeight()', I.getViewportHeight(), function () {
          return new Graphic({viewPort: new ViewPort()}).height;
        });
        test.example('can be set in constructor', 77, function () {
          return new Graphic({viewPort: new ViewPort(), height: 77}).height;
        });
      });

    });
    test.heading('METHODS', function () {
      test.heading('setProperties', function () {
        test.paragraph('Call this to set viewport properties');
        test.example('should make sure properties are valid', Error('error setting Graphic properties: invalid property: sex'), function () {
          new Graphic({viewPort: new ViewPort()}).setProperties({sex: 'female'});
        });
        test.example('can set x', 7, function () {
          return new Graphic({viewPort: new ViewPort()}).setProperties({x: 7}).x;
        });
        test.example('can set y', 77, function () {
          return new Graphic({viewPort: new ViewPort()}).setProperties({y: 77}).y;
        });
        test.example('can set width', 777, function () {
          return new Graphic({viewPort: new ViewPort()}).setProperties({width: 777}).width;
        });
        test.example('can set width', 123, function () {
          return new Graphic({viewPort: new ViewPort()}).setProperties({height: 123}).height;
        });
        test.example('can set visibility', false, function () {
          return new Graphic({viewPort: new ViewPort()}).setProperties({visible: false}).visible;
        });
      });
  
    });
  });
};