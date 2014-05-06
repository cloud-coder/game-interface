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
;
/**
 * game-interface
 * game-state-class
 */
;
/**
 * game-interface
 * graphic-class
 */
/*
 * Constructor
 */
function Graphic(args, validProperties) {
  var i, a;
  if (false === (this instanceof Graphic)) throw new Error('new operator required');
  args = args || {};
  validProperties = validProperties || ['viewPort', 'visible', 'x', 'y', 'width', 'height'];
  var unusedProperties = T.getInvalidProperties(args, validProperties);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error creating ' + this.toString() + ': multiple errors');
  if (badJooJoo.length) throw new Error('error creating ' + this.toString() + ': ' + badJooJoo[0]);
  // Set defaults
  this.visible = true;
  this.viewPort = null
  this.x = 0;
  this.y = 0;
  this.width = I.getViewportWidth();
  this.height = I.getViewportHeight();
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  // Must have valid viewport
  if (false === (this.viewPort instanceof ViewPort)) throw new Error('error creating ' + this.toString() + ': viewport required');
}
/*
 * Methods
 */
Graphic.prototype.toString = function () {
  return 'Graphic';
};
Graphic.prototype.setProperties = function (args, validProperties) {
  var i, a;
  args = args || {};
  validProperties = validProperties || ['visible', 'x', 'y', 'width', 'height'];
  var unusedProperties = T.getInvalidProperties(args, validProperties);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error setting ' + this.toString() + ' properties: multiple errors');
  if (badJooJoo.length) throw new Error('error setting ' + this.toString() + ' properties: ' + badJooJoo[0]);
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  return this;
};
;
/**
 * game-interface
 * graphic-bitmap-class
 */
/*
 * Constructor
 */
function GraphicBitmap(args) {
  if (false === (this instanceof GraphicBitmap)) throw new Error('new operator required');
  args = args || {};
  Graphic.call(this, args, ['viewPort', 'visible', 'x', 'y', 'width', 'height', 'bitmapResource']);
  // todo set width & height from graphic file
  // Must have valid bitmapResource
  if (!(this.bitmapResource instanceof BitmapResource)) throw new Error('error creating ' + this.toString() + ': bitmapResource required');
}
GraphicBitmap.prototype = T.inheritPrototype(Graphic.prototype);
/*
 * Methods
 */
GraphicBitmap.prototype.toString = function () {
  return 'GraphicBitmap';
};
GraphicBitmap.prototype.setProperties = function (args) {
  Graphic.prototype.setProperties.call(this, args);
  /*
  * Todo after calling graphic to reposition then do here if need ...
  * IF NOT DELETE THIS COMMENT
  */
  return this;
};;
/**
 * game-interface
 * graphic-text-class
 */
/*
 * Constructor
 */
function GraphicText(args) {
  if (false === (this instanceof GraphicText)) throw new Error('new operator required');
  args = args || {};
  this.text = '';
  Graphic.call(this, args, ['viewPort', 'visible', 'x', 'y', 'width', 'height', 'text']);
}
GraphicText.prototype = T.inheritPrototype(Graphic.prototype);
/*
 * Methods
 */
GraphicText.prototype.toString = function () {
  return 'GraphicText';
};
GraphicText.prototype.setProperties = function (args) {
  Graphic.prototype.setProperties.call(this, args, ['visible', 'x', 'y', 'width', 'height', 'text']);
  /*
   * Todo after calling graphic to reposition then do here if need ...
   * IF NOT DELETE THIS COMMENT
   */
  return this;
};;
/**
 * game-interface
 * bitmap-resource-class
 */
function BitmapResource(resource) {
  if (false === (this instanceof BitmapResource)) throw new Error('new operator required');
  if (typeof resource !== 'string' || !resource) throw new Error('error creating BitmapResource: resource string required');
  this.resourceName = resource;
}
/*
 * Methods
 */
BitmapResource.prototype.load = function (callBack) {
  if (typeof callBack != "function") throw new Error('callback required');
  // TODO actually load it if not do this ...
  callBack(new Error('graphic resource "' + this.resourceName + '" not found'));
};
BitmapResource.prototype.isLoaded = function () {
  return false;
};
;
/**
 * game-interface
 * audio-resource-class
 */
function AudioResource(resource) {
  if (false === (this instanceof AudioResource)) throw new Error('new operator required');
  if (typeof resource !== 'string' || !resource) throw new Error('error creating AudioResource: resource string required');
  this.resourceName = resource;
}
/*
 * Methods
 */
AudioResource.prototype.load = function (callBack) {
  if (typeof callBack != "function") throw new Error('callback required');
  // TODO actually load it if not do this ...
  callBack(new Error('audio resource "' + this.resourceName + '" not found'));
};
AudioResource.prototype.isLoaded = function () {
  return false;
};
AudioResource.prototype.play = function () {
  if (!this.isLoaded()) throw new Error('audio resource "' + this.resourceName + '" not loaded');
};
