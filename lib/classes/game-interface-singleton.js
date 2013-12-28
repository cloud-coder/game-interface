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
      getResource: function(resourceID) {
          //todo: check if resource exists
          return resources.getResult(resourceID);
      },
      loadResources: function (callback) {
        if (typeof callback != "function") throw new Error('callback required');
          resources.addEventListener("complete", function(e) { //todo: multiple calls of loadResources() will result in multiple callbacks building up
              console.log("all resources loaded");

              // TODO: Load resources and invoke callback as follows:
              //    callBack(resourcesDefined, resourcesLoaded)
              return callback(1,1)
          });
          resources.addEventListener("fileload", function(e) {
              console.log("file loaded");

              // TODO: Load resources and invoke callback as follows:
              //    callBack(resourcesDefined, resourcesLoaded)
              //return callback(1,1)
          });
          resources.loadManifest([      //todo: contains temporary hard-coded resources
              //Images
              {id: "toastImage",      src: "resources/images/toast.png"},
              {id: "miniToastImage",  src: "resources/images/toast_mini.png"},

              //Sounds
              {id: "hiSound",         src: "resources/sounds/hi.mp3"}
          ]);
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
