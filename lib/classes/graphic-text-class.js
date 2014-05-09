/**
 * game-interface
 * graphic-text-class
 */
/*
 * Constructor
 */
function GraphicText(args) {
  this.properties = ['viewPort', 'visible', 'x', 'y', 'width', 'height', 'text', 'lineWrap', 'font'];
  this.text = '';
  if (false === (this instanceof GraphicText)) throw new Error('new operator required');
  args = args || {};
  Graphic.call(this, args, this.properties);
  /*
  * Properties needed:
  *   - vertical and horizontal alignment
  *   - font name
  *   - font size
  *   - font weight
  */
  // CreateJS container used for viewports
  if (I.cjs.stageCanvas) {
    this.cjs = {};
    this.cjs.text = new createjs.Text(
      this.text,
      "16px Arial",
      "Black"
    );
    this.viewPort.cjs.container.addChild(this.cjs.text);
    this._cjsUpdateProperties();
  }
}
GraphicText.prototype = T.inheritPrototype(Graphic.prototype);
/*
 * Methods
 */
GraphicText.prototype.toString = function () {
  return 'GraphicText';
};
GraphicText.prototype.setProperties = function (args) {
  var i,a;
  args = args || {};
  Graphic.prototype.setProperties.call(this, args, this.properties);
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  if (this.cjs)
    this._cjsUpdateProperties();
  return this;
};
GraphicText.prototype.getMeasuredHeight = function () {
  return this.cjs.text.getMeasuredHeight();
};
GraphicText.prototype._cjsUpdateProperties = function () {
  this.cjs.text.x = this.x;
  this.cjs.text.y = this.y;
  this.cjs.text.visible = this.visible;
  this.cjs.text.text = this.text;
  this.cjs.text.font = this.font;
//    this.cjs.text.textAlign = 'center';
  // to wrap ...
  console.log('this.lineWrap = ' + this.lineWrap);
  if (this.lineWrap) {
    this.cjs.text.lineWidth = this.viewPort.width - this.x;
  } else {
    this.cjs.text.lineWidth = undefined
  }
  return this;
};