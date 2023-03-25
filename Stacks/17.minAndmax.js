class Stack {
  #arr;
  constructor() {
    this.#arr = [];
  }
  push(x) {
    this.#arr.push(x);
  }
  pop() {
    return this.#arr.pop();
  }
  isEmpty() {
    return this.#arr.length == 0;
  }
  findMaxAndMin() {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    while (!this.isEmpty()) {
      let current = this.pop();

      if (current > max) {
        max = current;
      }

      if (current < min) {
        min = current;
      }
    }

    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
  }
}

let myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(5);
myStack.push(7);
myStack.push(8);
myStack.findMaxAndMin();
