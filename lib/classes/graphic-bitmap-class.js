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

  //createjs
  this.cjs = new createjs.Bitmap(I.getResource(this.bitmapResource.resourceName));
  this.viewPort.cjs.addChild(this.cjs);
  this.update_cjs_properties();
}
GraphicBitmap.prototype = T.inheritPrototype(Graphic.prototype);
/*
 * Methods
 */
GraphicBitmap.prototype.update_cjs_properties = function() {
    this.cjs.x = this.x;
    this.cjs.y = this.y;
    this.cjs.visible = this.visible;
};
GraphicBitmap.prototype.toString = function () {
  return 'GraphicBitmap';
};
GraphicBitmap.prototype.setProperties = function (args) {
  Graphic.prototype.setProperties.call(this, args);
  this.update_cjs_properties();
  /*
  * Todo after calling graphic to reposition then do here if need ...
  * IF NOT DELETE THIS COMMENT
  */
  return this;
};

//createjs to do
/*
 todo: add properties: bitmapResource
 todo: need a check if bitmap was not loaded yet
 */