/**
 * game-interface
 * game-interface-singleton
 */

var GameInterface = (function () {

  // Create initial instance of object
  var singletonInstance;
  return function () {
    if (!singletonInstance) singletonInstance = initInstance();
    return singletonInstance;
  };

  // Initialize Instance
  function initInstance() {
    // Library properties
    var props = {};
    props.version = '0.0.1';
    props.viewportWidth = 1024; // Todo Resize ?
    props.viewportHeight = 768; // Todo Resize ?
    props.canvasID = null;

    var cjs = {}; // CreateJS stuff
    cjs.stageCanvas = null; // canvas to render to

    // Update stage each tick for now
    var tickEventHandler = function (event) {
      cjs.stageCanvas.update();
    }

    // Expose GameInterface
    return    {
      initializeEnvironment: function (args) {
        args = args || {};
        if (typeof args.callBack != "function") throw new Error('callBack property required');
        if (typeof args.canvasID != "string") throw new Error('canvasID property required');
        props.canvasID = args.canvasID;
        cjs.stageCanvas = new createjs.Stage(props.canvasID);
        createjs.Ticker.addEventListener("tick", tickEventHandler)
        args.callBack();
      },
      getVersion: function () {
        return props.version;
      },
      getViewportWidth: function () {
        return props.viewportWidth;
      },
      getViewportHeight: function () {
        return props.viewportHeight;
      },
      loadResources: function (callBack) {
        if (typeof callBack != "function") throw new Error('callback required');
        // TODO: Load resources and invoke callback as follows:
        //    callBack(resourcesDefined, resourcesLoaded)
      },
      views: [],
      bitmaps: [],
      sounds: [],
      cjs: cjs
    };
  }

})();
// Library scoped ref to singleton
var I = GameInterface();
