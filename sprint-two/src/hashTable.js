

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// refactor this to separate chaining?

HashTable.prototype.insert = function(k, v) {
  // get the index
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // now that we have the index, set storage at that index to value

  // don't overwrite other values, but do overwrite values with the same key

  // pseudo for open addressing
  // if index is empty do one thing
  // if not, do another thing
  if (bucket === undefined) {
    // make a new array where the first item is a tuple of key:value
    this._storage.set(index, [[k, v]]);
  } else {
    // make an array of the keys
    let keys = bucket.map(bucketTuple => bucketTuple[0]); // Indices will stay the same [[1,n][2,f][3,q]] => [1,2,3,]
    // if our key is in
    let keyIndex = keys.indexOf(k); // will be -1 if not in array
    if (keyIndex === -1) { // if we don't find the key, push the value
      bucket.push([k, v]);
    } else { // if we do find the key,
      bucket[keyIndex][1] = v;
    }


    // push tuple of key:value to the array
  }

  // old linear probing approach code
  // while (this._storage.get(index) !== undefined && this._storage.get(index)[0] !== k) {
  //   index += 1;
  //   index = index % this._limit;
  // }
  // this._storage.set(index, [k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //loop through the items in the bucket
  for (let bucketIndex in bucket) {
    // if key matches current tuple [0] (i.e. the tuple key)
    if (k === bucket[bucketIndex][0]) {
      // return the value
      return bucket[bucketIndex][1];
    }
  }
  // once you're done looping, return undefined (cause you didn't find it)
  return undefined;

  // old linear probing code
  // // like instert, but returning and using get instead of set
  // var originalIndex = index;
  // while (this._storage.get(index) === undefined || this._storage.get(index)[0] !== k) {
  //   index += 1;
  //   index = index % this._limit;
  //   // escape the loop if we've gotten back to the original index
  //   if (index === originalIndex) {
  //     break;
  //   }
  // }

  // if (this._storage.get(index) === undefined) {
  //   return (undefined);
  // }
  // return this._storage.get(index)[1];
};

// remove whole pair given key
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }

  var keys = bucket.map(bucketTuple => bucketTuple[0]);
  let keyIndex = keys.indexOf(k);
  if (keyIndex !== -1) {
    bucket.splice(keyIndex, 1);
  }

  // old linear probing code
  // var index = getIndexBelowMaxForKey(k, this._limit);
  // // like the others, but set the array at that value equal to undefined

  // this._storage.set(index, undefined);
};


// LimitedArray ends up with these really wild indexes.

/*
 * Complexity: What is the time complexity of the above functions?
 */


