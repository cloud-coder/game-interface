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

    //createjs conversion
    /*
     todo: add to setProperties function
     todo: createjs.Container() has no width/height
     todo: parenting with createjs works by the parent adding children rather than
            the children naming their parent, make the two work together better
     */
    this.cjs = new createjs.Container();
    this.cjs.x = this.x;
    this.cjs.y = this.y;
    this.viewPort.cjs.addChild(this.cjs);
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
