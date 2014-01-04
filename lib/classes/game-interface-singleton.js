/**
 * game-interface
 * game-interface-singleton
 */

var GameInterface = (function () {
  var singletonInstance;

  function initVendorLibrary() {
    return true;
  }

  function init() {
    // Private methods and variables
    var version = '0.0.1';
    var viewportWidth = 1024;
    var viewportHeight = 768;
    var stage = new createjs.Stage("stageCanvas");
    var resources = new createjs.LoadQueue(false);
    resources.installPlugin(createjs.Sound);

    // Initialize vendor lib
    if (!initVendorLibrary()) throw new Error('Vendor library failed to initialize');

    return    {
      // Public methods and variables
      getVersion: function () {
        return version;
      },
      getViewportWidth: function () {
        return viewportWidth;
      },
      getViewportHeight: function () {
        return viewportHeight;
      },
      defineStage: function(canvasName) {
          stage = new createjs.Stage(canvasName);
      },
      getStage: function() {
          return stage;
      },
      drawCanvas: function() {
          stage.update();
      },
      getResource: function(resourceID) {
          //todo: check if resource exists
          return resources.getResult(resourceID);
      },
      loadResources: function (resourcesToLoad, callback) {
        if (typeof callback != "function") throw new Error('callback required');
          function listen(e) {
              if(e.progress>= 1) resources.removeEventListener("progress", listen);
              return callback(e.progress)
          }

          resources.addEventListener("progress", listen);
          resources.loadManifest(resourcesToLoad);
      },
      views: [],
      bitmaps: [],
      sounds: []
    };
  }

  return function () {
    if (!singletonInstance) singletonInstance = init();
    return singletonInstance;
  };
})();
// Library scoped ref to singleton
var I = GameInterface();

//createjs to do:
//todo: how to implement stage.update(), using drawCanvas() temporarily
//todo: how to get resourcesDefined and resourcesLoaded, if necessary
//todo: add error checking on loadResources
//todo: no createjs graphic element has a width or height
//note: stage needs to be defined in init() to avoid errors in unit tests, then again at start of code to actually get drawings to appear
