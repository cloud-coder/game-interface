/**
 * game-interface
 * after-unit-tests
 */

test.afterUnitTests = function () {

  // Turn visual on / off
  var skipVisual = false;
  if (skipVisual) {
    $('#stageCanvas').hide();
    return;
  }

  // Raw code for hello world
  var stage = new createjs.Stage("stageCanvas");
  var con = new createjs.Container();
  var text = new createjs.Text('Hello World', "bold 20px Arial", "Black");
  con.addChildAt(text);
  stage.addChild(con);
  stage.update();


//  // Create stage and viewport
//  I.defineStage("stageCanvas");
//  test.viewPort = new ViewPort({});
//
//  var loadingText = new GraphicText({
//    viewPort: test.viewPort,
//    text: "Loading, 0% ...",
//    x: test.viewPort.width/2,
//    y: test.viewPort.height/2
//  });
//
//  I.drawCanvas();

};

test.click = function(label) {
  console.log(label);
};
