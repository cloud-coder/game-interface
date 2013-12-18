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
  //createjs conversion
    /*
     todo: add to setProperties function
     todo: createjs.Container() has no width/height
     */
  this.cjs = new createjs.Container();
  this.cjs.x = this.x;
  this.cjs.y = this.y;
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
  return this;
};
ViewPort.prototype.bringToTop = function () {
};
