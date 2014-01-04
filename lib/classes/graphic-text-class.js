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

  //createjs
  this.cjs = new createjs.Text(
    this.text,
    "bold 20px Arial",
    "Black"
  );
  this.viewPort.cjs.addChild(this.cjs);
  this.update_cjs_properties();
}
GraphicText.prototype = T.inheritPrototype(Graphic.prototype);
/*
 * Methods
 */
GraphicText.prototype.update_cjs_properties = function() {
    this.cjs.x = this.x;
    this.cjs.y = this.y;
    this.cjs.visible = this.visible;
    this.cjs.text = this.text;
};
GraphicText.prototype.toString = function () {
  return 'GraphicText';
};
GraphicText.prototype.setProperties = function (args) {
  Graphic.prototype.setProperties.call(this, args, ['visible', 'x', 'y', 'width', 'height', 'text']);
  this.update_cjs_properties();
  /*
   * Todo after calling graphic to reposition then do here if need ...
   * IF NOT DELETE THIS COMMENT
   */
  return this;
};

//createjs to do
/*
 todo: set property: viewport?
 todo: properties: fonts, text color, bold/underline/italic
 todo: word wrapping
 */