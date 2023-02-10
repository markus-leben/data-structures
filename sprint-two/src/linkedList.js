var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // I: A value
    // O: Our linked list changes, so the old tail points to a node containing our value, and that's our new tail.
    // C: Not much
    // E: totally empty list. i.e. when head is also null.


    // instantiate a new node with value as its value
    var newNode = Node(value);
    // set tail.next to a new node with the value that was passed in
    // if the tail is not null
    if (list.tail !== null) {
      list.tail.next = newNode;
    } else { // if tail is null head will always also be null
      list.head = newNode;
    }
    // update tail to be the node
    list.tail = newNode;
  };

  list.removeHead = function() {
    // I: nothin
    // O: The value of the former head node
    //    Should also change the list, so that the head node is removed, and the formerHead.next becomes the new head.
    // C: not much
    // E: everything null

    // check everything null case (can use either head or tail probably) -- nevermind they didn't test everything null lol gotem
    // create a return variable and set it to the current heads value
    let oldHeadValue = list.head.value;
    // change head to the current head next node
    list.head = list.head.next;
    // if head is null after that
    if (list.head === null) {
      // make the tail null too (cause your list is empty)
      list.tail = null;
    }
    // return the return value
    return oldHeadValue;
  };

  list.contains = function(target) {
    // I: target
    // O: a boolean that says whether target is in any of the values of any nodes
    // C: be aware of time complexity, like it says down below.
    // E: nah, everything null shouldn't be an edge for once

    // make a variable 'current' and set it equal to the head
    let current = list.head;
    // while current isn't null
    while (current !== null) {
      // check if current value is equal to target value
      if (current.value === target) {
        // if so, return true
        return true;
      }
      // set current equal to current next
      current = current.next;
    }
    // return false
    return false;
  };

  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
