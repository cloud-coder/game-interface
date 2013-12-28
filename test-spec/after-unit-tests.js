/**
 * game-interface
 * after-unit-tests
 */

test.afterUnitTests = function() {
  // launch test
    function main() {
        console.log("continue");
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
         */ //EVENTS EXAMPLE


        var stage = new createjs.Stage("stageCanvas");

        var mainViewPort = new ViewPort({
            x:  0,
            y:  0
        });

        /*
        var toastButton = new Graphic({
            viewPort:   mainViewPort,
            x:          100,
            y:          100
        });
        */ //Graphic

        var toastBR = new BitmapResource("resources/images/toast_mini.png");
        var toastBitmap = new GraphicBitmap({
            viewPort:       mainViewPort,
            bitmapResource: toastBR,
            x:          0,
            y:          0
        });

        var toastText = new GraphicText({
            viewPort:   mainViewPort,
            text:       "TOAST",
            x:          16,
            y:          31
        });

        var toastButton = {
            bitmap: toastBitmap,
            text:   toastText
        };

        var clickSound = new AudioResource("resources/sounds/hi.mp3");


        var someListOfWords = [
            "APPLE",
            "BANANA",
            "PICKLE",
            "TOAST"
        ];


        //todo: click event associated with bitmap until Graphic and events setup
        toastBitmap.cjs.addEventListener("click", function(e) {
            //createjs.Sound.play("hiSound");
            toastBitmap.setProperties({
                x:Math.random()*400,
                y:Math.random()*200
            });
            toastText.setProperties({
                text:   someListOfWords[ Math.floor((Math.random()*someListOfWords.length)) ]
            });
            toastText.setProperties({
                x:      (toastBitmap.x + 50 - toastText.cjs.getMeasuredWidth()/2),
                y:      (toastBitmap.y + 31)
            });
            stage.update();

            clickSound.play();
        });

        stage.addChild(mainViewPort.cjs);
        stage.update();





        //GAME-INTERFACE





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

    I.loadResources(function(resourcesDefined, resourcesLoaded) {   //todo: loadResources needs to be able to be passed resources to be loaded
        if(resourcesLoaded == resourcesDefined) {
            main();
        }
        else {
            //todo: loading bars and what not
        }
    });
};
