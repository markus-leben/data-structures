var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Queue.prototype.size = function() { return Object.keys(this.storage).length; };
Queue.prototype.enqueue = function(input) { this.storage[this.size() + this.index] = input; };
Queue.prototype.dequeue = function () {
  var toReturn = this.storage[this.index];
  delete this.storage[this.index];
  this.index++;
  return toReturn;
};


