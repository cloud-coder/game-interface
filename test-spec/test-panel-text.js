/**
 * game-interface
 * test-panel-text
 */

test.panelText = function() {

  // Lazy create view
  if (!test.panelTextViewPort) {
    console.log('creating panelTextViewPort');
    test.panelTextViewPort = new ViewPort();

    // Hello world
    var sup = 'This is a test of the GraphicText class.  The question is';
    for (var i = 0; i < 99; i++) {
      sup = sup + ' was it a cat I saw'
    }
    sup += '?';


    var lineY = 0;

    test.title = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'GAME INTERFACE - GraphicText',
      font: 'bold 18px Georgia, serif',
      y: lineY
    });

    lineY += (10 + test.title.getMeasuredHeight());

    test.text = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: sup,
      font: '16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });
    lineY += (10 + test.text.getMeasuredHeight());

    test.text2 = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: sup,
      font: '16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });
    lineY += (10 + test.text2.getMeasuredHeight());

    test.textR = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'RED',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });
    test.textR = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'GREEN',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      x: 100,
      y: lineY
    });
    test.textR = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'BLUE',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      x: 200,
      y: lineY
    });
    lineY += (10 + test.textR.getMeasuredHeight());

    test.text3 = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'Click buttons below this frame to run other visual tests',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });


    lineY += (10 + test.text.getMeasuredHeight());
    test.text3 = new GraphicText({
      viewPort: test.panelTextViewPort,
      text: 'Click buttons below this frame to run other visual tests',
      font: 'bold 16px arial,sans-serif',
      lineWrap: true,
      y: lineY
    });




  } else {
    test.panelTextViewPort.setProperties({visible:true});
  }
}