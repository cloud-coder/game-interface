/**
 * game-interface
 * after-unit-tests
 */

test.afterUnitTests = function () {
  // Turn visual on / off
  var skipVisual = false;
  if (skipVisual) {
    $('#visualTestDiv').hide();
    return;
  }

  // Hello world
  var sup = 'This is a test of the GraphicText class.  The question is';
  for (var i = 0; i < 99; i++) {
    sup = sup + ' was it a cat I saw'
  }
  sup += '?';

  I.initializeEnvironment({canvasID: "stageCanvas", callBack: function () {
    test.viewPort = new ViewPort({});

    var lineY = 0;

    test.title = new GraphicText({
      viewPort: test.viewPort,
      text: 'GAME INTERFACE - GraphicText',
      font: 'bold 18px Georgia, serif',
      y: lineY
    });

    lineY += (10 + test.title.getMeasuredHeight());

    test.text = new GraphicText({
      viewPort: test.viewPort,
      text: sup,
      font: '16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });

    lineY += (10 + test.text.getMeasuredHeight());

    test.text2 = new GraphicText({
      viewPort: test.viewPort,
      text: sup,
      font: '16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });

    lineY += (10 + test.text.getMeasuredHeight());

    test.text3 = new GraphicText({
      viewPort: test.viewPort,
      text: 'Click buttons below this frame to run other visual tests',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });


  }});
};

test.click = function (label) {
  test.viewPort.setProperties({visible: false});
  switch (label) {
    case 'Text':
      test.viewPort.setProperties({visible: true});
      break;

    case 'Loader':
      break;
    default:
      console.log("I don't know how to '" + label + "'.");
  }
};
