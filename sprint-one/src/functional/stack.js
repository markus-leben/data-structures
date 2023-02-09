var Stack = function() {
  // I: nothin
  // O: A stack, a data structure with values and functions. It stores stuff at the end of it, and returns stuff from the end of it.
  // C: Lots, specified in doc, basically don't use non-functional stuff
  // E: pop from empty

  // Use an object with numeric keys to store values
  // I'm just gonna put storage in from the start
  var someInstance = {'storage':{}};


  // Implement the methods below

  someInstance.push = function(value) {
    // I: value
    // O: Add (key:value) where key is the size of the dictionary and value is the input
    someInstance.storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    //I: Nothin
    //O: The value that's one less than the size of the dictionary, and also remove that key from the dictionary

    // put the last element in a storage variable
    var toReturn = someInstance.storage[someInstance.size()-1];

    // then delete the last element
    delete someInstance.storage[someInstance.size()-1];
    return toReturn;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };



  return someInstance;
};
