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




//createjs to do
//todo: need a check if bitmap was not loaded yet