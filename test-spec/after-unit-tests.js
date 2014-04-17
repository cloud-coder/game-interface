/**
 * game-interface
 * after-unit-tests
 */

test.afterUnitTests = function () {


  // Turn visual on / off
  var skipVisual = true;
  if (skipVisual) {
    $('#stageCanvas').hide();
    return;
  }

  // Declare resources then launch visual test
  I.loadResources([
      //Images
      "resources/images/toast.png",
      "resources/images/toast_mini.png",

      //Sounds
      "resources/sounds/hi.mp3"
    ],
    function (progress) {
      if (progress >= 1) {
        console.log("Load is complete");
        main();
      }
      else {
        console.log("Load is " + (progress * 100).toFixed(2) + "% complete");
      }
    }
  );

  function main() {
    console.log("MAIN START");

    /*
     var eventManager = document.getElementById('stageCanvas');

     eventManager.addEventListener("someEvent", function(e) {
     console.log(e);
     });

     var someEvent = new CustomEvent("someEvent", {
     "bubbles":       { "default":true },
     "cancelable":    { "default":true },
     "detail":        { "thingA": true , "thingB": false }
     });

     eventManager.dispatchEvent(someEvent);
     */ //CUSTOM EVENTS EXAMPLE

    I.defineStage("stageCanvas");

    var mainViewPort = new ViewPort({
      x: 0,
      y: 0
    });

    var toastBR = new BitmapResource("resources/images/toast_mini.png");    //100x84
    var toastBitmap = new GraphicBitmap({
      viewPort: mainViewPort,
      bitmapResource: toastBR,
      x: 200,
      y: 200
    });

    var toastText = new GraphicText({
      viewPort: mainViewPort,
      text: "TOAST",
      x: 200,
      y: 200
    });

    var clickSound = new AudioResource("resources/sounds/hi.mp3");


    var someListOfWords = [
      "APPLE",
      "BANANA",
      "PICKLE",
      "TOAST"
    ];


    //todo: click event associated with bitmap until button class implemented
    toastBitmap.cjs.addEventListener("click", function (e) {
      //createjs.Sound.play("hiSound");
      toastBitmap.setProperties({
        x: Math.random() * 400 + 100,
        y: Math.random() * 200 + 100
      });
      toastText.setProperties({
        text: someListOfWords[ Math.floor((Math.random() * someListOfWords.length)) ]
      });
      toastText.setProperties({
        x: (toastBitmap.x),
        y: (toastBitmap.y)
      });
      toastText.cjs.regX = toastText.cjs.getMeasuredWidth() / 2;
      toastText.cjs.regY = toastText.cjs.getMeasuredHeight() / 2;
      I.drawCanvas();

      clickSound.play();
    });

    //I.drawCanvas();


    //Random tests
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick() {
      toastText.cjs.rotation = toastBitmap.cjs.rotation;
      I.drawCanvas();
    }

    toastBitmap.cjs.regX = 50;
    toastBitmap.cjs.regY = 42;
    toastText.cjs.regX = toastText.cjs.getMeasuredWidth() / 2;
    toastText.cjs.regY = toastText.cjs.getMeasuredHeight() / 2;
    createjs.Tween.get(toastBitmap.cjs).to({rotation: 10}, 450).call(goLeft);

    function goRight() {
      createjs.Tween.get(toastBitmap.cjs).to({rotation: 10}, 900).call(goLeft);
    }

    function goLeft() {
      createjs.Tween.get(toastBitmap.cjs).to({rotation: -10}, 900).call(goRight);
    }

    //toast rain

    var toastParticles = [];
    for (var limit = 0; limit < 50; limit++) {
      toastParticles.push(
        new GraphicBitmap({
          viewPort: mainViewPort,
          bitmapResource: new BitmapResource("resources/images/toast_mini.png"),
          x: 0,
          y: -100
        })
      );

      toastParticles[limit].cjs.scaleX = 0.3;
      toastParticles[limit].cjs.scaleY = 0.3;
      toastParticles[limit].cjs.regX = 50;
      toastParticles[limit].cjs.regY = 42;
      toastParticles[limit].cjs.rotation = Math.random() * 360;
      toastParticles[limit].cjs.x = Math.random() * I.getViewportWidth();

      createjs.Tween.get(toastParticles[limit].cjs, {loop: true}).wait(Math.random() * 20000).to({y: I.getViewportHeight() + 100, rotation: Math.random() * 360}, Math.random() * 6000 + 7000);
    }
    /*
     var mainViewPort = new createjs.Container();
     mainViewPort.x = 0;
     mainViewPort.y = 0;
     stage.addChild(mainViewPort);

     var toastButton = new createjs.Container();
     toastButton.addEventListener("click", function(e) {
     createjs.Sound.play("hiSound");
     });
     toastButton.x = 100;
     toastButton.y = 100;
     mainViewPort.addChild(toastButton);

     var toastBitmap = new createjs.Bitmap(queue.getResult("miniToastImage"));
     toastButton.addChild(toastBitmap);

     var toastText = new createjs.Text(
     "TOAST",
     "bold 20px Arial",
     "Black"
     );
     toastText.x = 16;
     toastText.y = 31;
     toastButton.addChild(toastText);

     stage.update();
     *///CREATEJS


    function printStuff() {
      console.log("stuff");
    }
  }
};
