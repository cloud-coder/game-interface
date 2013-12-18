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

    //createjs conversion
    /*
        todo: add to setProperties function
        todo: implement setting optional Graphic class as parent
        todo: implement bitmapResource class if necessary
     */

    this.cjs = new createjs.Bitmap("resources/images/toast_mini.png");
    this.cjs.x = this.x;
    this.cjs.y = this.y;
    this.viewPort.cjs.addChild(this.cjs);
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
};