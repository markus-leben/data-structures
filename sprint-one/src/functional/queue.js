var Queue = function() {
  // I: nothin
  // O: A queue, a data structure with values and functions. It stores stuff at the end of it, and returns stuff from the start of it.
  // C: Lots, specified in doc, basically don't use non-functional stuff
  // E: Dequeue from empty


  // Use an object with numeric keys to store values
  // add an index so you can dequeue without having to shift a bunch

  // I'm just gonna put storage and index in from the start
  var someInstance = {'storage': {}, 'index': 0};


  // Implement the methods below

  // same as stack, the F in FIFO and FILO are the same
  someInstance.enqueue = function(value) {
    // I: value
    // O: Add (key:value) where key is the size of the dictionary and value is the input
    someInstance.storage[someInstance.size() + someInstance.index] = value;
  };

  someInstance.dequeue = function() {
    // I: nothin
    // O: Remove the oldest item from the queue and return it. Then increment the index so that you can still find the oldest item.

    var toReturn = someInstance.storage[someInstance.index];
    delete someInstance.storage[someInstance.index];
    someInstance.index += 1;
    return toReturn;
  };

  // same as stack
  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
