/**
 * game-interface
 * viewPort-class
 */
/*
 * Constructor
 */
function ViewPort(args) {
  var i, a;
  if (false === (this instanceof ViewPort)) throw new Error('new operator required');
  args = args || {};
  var unusedProperties = T.getInvalidProperties(args, ['visible', 'x', 'y', 'width', 'height']);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error creating ViewPort: multiple errors');
  if (badJooJoo.length) throw new Error('error creating ViewPort: ' + badJooJoo[0]);
  // Set defaults
  this.visible = true;
  this.x = 0;
  this.y = 0;
  this.width = I.getViewportWidth();
  this.height = I.getViewportHeight();
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  // CreateJS container used for viewports
  if (I.cjs.stageCanvas) {
    this.cjs = {};
    this.cjs.container = new createjs.Container();
    I.cjs.stageCanvas.addChild(this.cjs.container);
    this._cjsUpdateProperties();
  }
}
/*
 * Methods
 */
ViewPort.prototype.setProperties = function (args) {
  var i,a;
  args = args || {};
  var unusedProperties = T.getInvalidProperties(args, ['visible','x', 'y', 'width', 'height']);
  var badJooJoo = [];
  for (i = 0; i < unusedProperties.length; i++) badJooJoo.push('invalid property: ' + unusedProperties[i]);
  if (badJooJoo.length > 1) throw new Error('error creating ViewPort: multiple errors');
  if (badJooJoo.length) throw new Error('error creating ViewPort: ' + badJooJoo[0]);
  // Copy any arg values
  for (a in args) {
    if (args.hasOwnProperty(a))
      this[a] = args[a];
  }
  if (this.cjs)
    this._cjsUpdateProperties();
  return this;
};

ViewPort.prototype.bringToTop = function () {
};

ViewPort.prototype._cjsUpdateProperties = function () {
  this.cjs.container.visible = this.visible;
  this.cjs.container.x = this.x;
  this.cjs.container.y = this.y;
};
