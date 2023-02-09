var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // again skipping ioce and pseudo due to them being basically the same as the prior time.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var queueMethods = {
  size: function () { return Object.keys(this.storage).length },
  enqueue: function (input) { this.storage[this.size() + this.index] = input; },
  dequeue: function () {
    var toReturn = this.storage[this.index];
    delete this.storage[this.index];
    ++this.index;
    return toReturn;
  }
};


