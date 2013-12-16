/**
 * game-interface
 * graphic-text-test
 */
test.runnerGraphicText = function () {
  test.heading('GraphicText Class', function () {
    test.paragraph('Displays text.');
    test.heading('CONSTRUCTOR', function () {
      test.example('objects created should be an instance of GraphicText', true, function () {
        return new GraphicText({viewPort: new ViewPort()}) instanceof GraphicText;
      });
      test.example('objects created should be an instance of Graphic', true, function () {
        return new GraphicText({viewPort: new ViewPort()}) instanceof Graphic;
      });
      test.example('should make sure new operator used', Error('new operator required'), function () {
        GraphicText();
      });
      test.example('should make sure properties are valid', Error('error creating GraphicText: invalid property: sex'), function () {
        new GraphicText({sex: 'female'});
      });
      test.example('viewPort must be supplied in constructor', Error('error creating GraphicText: viewport required'), function () {
        new GraphicText({});
      });
    });
    test.heading('PROPERTIES', function () {
      test.heading('visible', function () {
        test.paragraph('indicates if graphic is visible');
        test.example('default is true', true, function () {
          return new GraphicText({viewPort: new ViewPort()}).visible;
        });
        test.example('can be set in constructor', false, function () {
          return new GraphicText({viewPort: new ViewPort(), visible: false}).visible;
        });
      });
      test.heading('x', function () {
        test.paragraph('coordinate view specifies horizontal location of viewport');
        test.example('defaults is 0', 0, function () {
          return new GraphicText({viewPort: new ViewPort()}).x;
        });
        test.example('can be set in constructor', 7, function () {
          return new GraphicText({viewPort: new ViewPort(), x: 7}).x;
        });
      });
      test.heading('y', function () {
        test.paragraph('coordinate view specifies vertical location of viewport');
        test.example('defaults is 0', 0, function () {
          return new GraphicText({viewPort: new ViewPort()}).y;
        });
        test.example('can be set in constructor', 77, function () {
          return new GraphicText({viewPort: new ViewPort(), y: 77}).y;
        });
      });

      test.heading('width', function () {
        test.paragraph('horizontal size of viewport');
        test.example('default is I.getViewportWidth()', I.getViewportWidth(), function () {
          return new GraphicText({viewPort: new ViewPort()}).width;
        });
        test.example('can be set in constructor', 7, function () {
          return new GraphicText({viewPort: new ViewPort(), width: 7}).width;
        });
      });

      test.heading('height', function () {
        test.paragraph('vertical size of viewport');
        test.example('default is I.getViewportHeight()', I.getViewportHeight(), function () {
          return new GraphicText({viewPort: new ViewPort()}).height;
        });
        test.example('can be set in constructor', 77, function () {
          return new GraphicText({viewPort: new ViewPort(), height: 77}).height;
        });
      });

      test.heading('text', function () {
        test.paragraph('text displayed');
        test.example('default is empty string', '', function () {
          return new GraphicText({viewPort: new ViewPort()}).text;
        });
        test.example('can be set in constructor', 'spoon', function () {
          return new GraphicText({viewPort: new ViewPort(), text: 'spoon'}).text;
        });
      });

    });
    test.heading('METHODS', function () {
      test.heading('setProperties', function () {
        test.paragraph('Call this to set viewport properties');
        test.example('should make sure properties are valid', Error('error setting GraphicText properties: invalid property: sex'), function () {
          new GraphicText({viewPort: new ViewPort()}).setProperties({sex: 'female'});
        });
        test.example('can set x', 7, function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({x: 7}).x;
        });
        test.example('can set y', 77, function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({y: 77}).y;
        });
        test.example('can set width', 777, function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({width: 777}).width;
        });
        test.example('can set width', 123, function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({height: 123}).height;
        });
        test.example('can set visibility', false, function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({visible: false}).visible;
        });
        test.example('can set text', 'book', function () {
          return new GraphicText({viewPort: new ViewPort()}).setProperties({text: 'book'}).text;
        });
      });

    });
  });
};