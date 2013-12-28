/**
 * game-interface
 * audio-resource-class
 */
function AudioResource(resource) {
  if (false === (this instanceof AudioResource)) throw new Error('new operator required');
  if (typeof resource !== 'string' || !resource) throw new Error('error creating AudioResource: resource string required');
  this.resourceName = resource;
}
/*
 * Methods
 */
AudioResource.prototype.load = function (callBack) {
  if (typeof callBack != "function") throw new Error('callback required');
  // TODO actually load it if not do this ...
  callBack(new Error('audio resource "' + this.resourceName + '" not found'));
};
AudioResource.prototype.isLoaded = function () {
  return false;
};
AudioResource.prototype.play = function () {

    createjs.Sound.play(this.resourceName); //todo: temporarily placed here until isLoaded works

  if (!this.isLoaded()) throw new Error('audio resource "' + this.resourceName + '" not loaded');
};

//createjs to do
//todo: need a check if audio file was not loaded yet