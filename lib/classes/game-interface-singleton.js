/**
 * game-interface
 * game-interface-singleton
 */

var GameInterface = (function () {
  var singletonInstance;

  function init() {
    // Private methods and variables
    var version = '0.0.1';
    var viewportWidth = 1024;
    var viewportHeight = 768;
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
      loadResources: function (callback) {
        if (typeof callBack != "function") throw new Error('callback required');
        // TODO: Load resources and invoke callback as follows:
        //    callBack(resourcesDefined, resourcesLoaded)
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
