var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // IOCE should be the same as prior stack function. I intentionally avoided referring back to it when I did queue. I feel pretty confident that I know the IOCE now on these functions.
  var someInstance = {'storage': {}};
  $.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var toReturn = this.storage[this.size()-1];
    delete this.storage[this.size()-1];
    return toReturn;
  },
};



