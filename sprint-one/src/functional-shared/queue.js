var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //time I'm gonna try writing the queue first, where last time I did stack first.

  //IOCE should be the same, I'm gonna see what I can do from memory, but I'll rewrite them if I start to feel myself not being specific enough.

  var someInstance = {'storage': {}, 'index':0};
  $.extend(someInstance, queueMethods);

  return someInstance;
};

// using properties like the powerpoint showed
var queueMethods = {

  enqueue: function(value) {
    this.storage[this.size()+this.index] = value;
  },
  dequeue: function() {
    var toReturn = this.storage[this.index];
    delete this.storage[this.index];
    this.index++;
    return toReturn;

  },
  size: function() {
    return Object.keys(this.storage).length;
  },
};


