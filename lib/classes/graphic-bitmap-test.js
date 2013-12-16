/**
 * game-interface
 * graphic-bitmap-test
 */

test.runnerGraphicBitmap = function () {
  test.heading('GraphicBitmap Class', function () {
    test.paragraph('Displays a bitmap.');
    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of GraphicBitmap', true, function () {
        return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}) instanceof GraphicBitmap;
      });
      test.example('objects created should be an instance of Graphic', true, function () {
        return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}) instanceof Graphic;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        GraphicBitmap();
      });
      test.example('should make sure properties are valid', Error('error creating GraphicBitmap: invalid property: sex'), function () {
        new GraphicBitmap({sex: 'female'});
      });
      test.example('viewPort must be supplied in constructor', Error('error creating GraphicBitmap: viewport required'), function () {
        new GraphicBitmap({});
      });
      test.example('bitmapResource must be supplied in constructor', Error('error creating GraphicBitmap: bitmapResource required'), function () {
        new GraphicBitmap({viewPort: new ViewPort()});
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('visible', function () {
        test.paragraph('indicates if graphic is visible');
        test.example('default is true', true, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).visible;
        });
        test.example('can be set in constructor', false, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), visible: false, bitmapResource: new BitmapResource('?')}).visible;
        });
      });
      test.heading('x', function () {
        test.paragraph('coordinate view specifies horizontal location of viewport');
        test.example('defaults is 0', 0, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).x;
        });
        test.example('can be set in constructor', 7, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), x: 7, bitmapResource: new BitmapResource('?')}).x;
        });
      });
      test.heading('y', function () {
        test.paragraph('coordinate view specifies vertical location of viewport');
        test.example('defaults is 0', 0, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).y;
        });
        test.example('can be set in constructor', 77, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), y: 77, bitmapResource: new BitmapResource('?')}).y;
        });
      });

      test.heading('width', function () {
        test.paragraph('horizontal size of viewport');
        test.example('default is I.getViewportWidth()', I.getViewportWidth(), function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).width;
        });
        test.example('can be set in constructor', 7, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), width: 7, bitmapResource: new BitmapResource('?')}).width;
        });
      });

      test.heading('height', function () {
        test.paragraph('vertical size of viewport');
        test.example('default is I.getViewportHeight()', I.getViewportHeight(), function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).height;
        });
        test.example('can be set in constructor', 77, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), height: 77, bitmapResource: new BitmapResource('?')}).height;
        });
      });

    });
    test.heading('METHODS', function () {
      test.heading('setProperties', function () {
        test.paragraph('Call this to set viewport properties');
        test.example('should make sure properties are valid', Error('error setting GraphicBitmap properties: invalid property: sex'), function () {
          new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({sex: 'female'});
        });
        test.example('can set x', 7, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({x: 7}).x;
        });
        test.example('can set y', 77, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({y: 77}).y;
        });
        test.example('can set width', 777, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({width: 777}).width;
        });
        test.example('can set width', 123, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({height: 123}).height;
        });
        test.example('can set visibility', false, function () {
          return new GraphicBitmap({viewPort: new ViewPort(), bitmapResource: new BitmapResource('?')}).setProperties({visible: false}).visible;
        });
      });

    });
  });
};