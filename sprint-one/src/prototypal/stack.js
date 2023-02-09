var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // I'm skipping IOCE and pseudo because the only differences between these and prior functions are the changes in class creation.
  // Let me know if that's super bad practice here.
  var someInstance = Object.create(stackMethods)

  someInstance.storage = {}
  return someInstance;
};

var stackMethods = {
  size: function() { return Object.keys(this.storage).length; },
  push: function(input) { this.storage[this.size()] = input; },
  pop: function() {
    var toReturn = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return toReturn;
  },
};


