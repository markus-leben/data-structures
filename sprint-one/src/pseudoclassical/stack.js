var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
};

Stack.prototype.size = function() { return Object.keys(this.storage).length; };
Stack.prototype.push = function(input){ this.storage[this.size()] = input; };
Stack.prototype.pop = function(){
  var toReturn = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return toReturn;
};


