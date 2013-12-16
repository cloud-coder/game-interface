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
};