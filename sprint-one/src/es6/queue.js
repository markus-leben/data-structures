class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  size() { return Object.keys(this.storage).length; };
  enqueue(input) { this.storage[this.size() + this.index] = input; };
  dequeue() {
    let toReturn = this.storage[this.index];
    delete this.storage[this.index];
    this.index++;
    return toReturn;
  };
}
