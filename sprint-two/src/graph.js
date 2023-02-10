// Instantiate a new graph
var Graph = function() {
  this.nodes = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push new node to graph
  this.nodes.push(new graphNode(node));
};

// This solution would pass test, but it blows apart the second we have any unique nodes:
// graph = {
//   this.nodes[1,2,2,3,4]
//   this.edges = [[1,2], [2,3]]
// }

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(checkValue) {
  // loop through nodes array
  if (this.getNodeIndex(checkValue) !== -1) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(deleteValue) {
  var deleteNode = this.nodes[this.getNodeIndex(deleteValue)];

  //loop through edges
  for (let index in deleteNode.edges) {
    var partnerNodeEdges = deleteNode.edges[index].edges;
    partnerNodeEdges.splice(partnerNodeEdges.indexOf(deleteNode), 1);
  }

  // loop through nodes array
  this.nodes.splice(this.getNodeIndex(deleteValue), 1);

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {

  var fromNode = this.nodes[this.getNodeIndex(fromValue)];
  // Some sort of test of undefined-ness of fromNode and toNode
  // if tonode is in from node edges
  for (let index in fromNode.edges) {
    if (fromNode.edges[index].value === toValue) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  var fromNode = this.nodes[this.getNodeIndex(fromValue)];
  var toNode = this.nodes[this.getNodeIndex(toValue)];
  // push the node with toValue into fromNodes edges
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
  // if we wanted to be fancy, we could do: push fromNode into the nodes edges that is the last of fromNodes edges
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  var fromNode = this.nodes[this.getNodeIndex(fromValue)];
  var toNode = this.nodes[this.getNodeIndex(toValue)];
  // get index of toNode in fromnode edges and splice it
  fromNode.edges.splice(fromNode.edges.indexOf(toNode), 1);
  // get index of fromnode in tonode edges and splice it
  toNode.edges.splice(toNode.edges.indexOf(fromNode), 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // call for each with this.nodes as array
  this.nodes.forEach(function(node) {
    cb(node.value);
  });
  //  (inside the fuction passed in now)
  //   call callback function on each value


};

Graph.prototype.getNodeIndex = function(nodeValue) {
  for (let index in this.nodes) {
    if (this.nodes[index].value === nodeValue) {
      return index;
    }
  }
  return -1;
};

// Instantiate a node
var graphNode = function(value) {
  this.value = value;
  this.edges = [];
};

// Instantiate the graph
// var newGraph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */

