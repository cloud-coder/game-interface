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

    //createjs conversion
    /*
     todo: add to setProperties function
     todo: implement setting optional Graphic class as parent
     */
    this.cjs = new createjs.Text(
        this.text,
        "bold 20px Arial",
        "Black"
    );
    this.cjs.x = this.x;
    this.cjs.y = this.y;
    this.viewPort.cjs.addChild(this.cjs);
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
};