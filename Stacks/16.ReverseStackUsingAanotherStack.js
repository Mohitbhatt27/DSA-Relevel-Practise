// Given a stack S, you need to reverse the element in the stack using another empty stack S’
// Input: 2,4,5,7,8
// Output: 8,7,5,4,2

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
  display() {
    for (let i = this.#arr.length - 1; i >= 0; i--) {
      console.log(this.#arr[i]);
    }
  }
}

function reverseStack(stack) {
  let tempSt = new Stack();
  let reversedStack = new Stack();

  while (!stack.isEmpty()) tempSt.push(stack.pop());

  while (!tempSt.isEmpty()) reversedStack.push(tempSt.pop());

  while (!reversedStack.isEmpty()) stack.push(reversedStack.pop());

  return stack;
}

let newst = new Stack();
newst.push(2);
newst.push(4);
newst.push(5);
newst.push(7);
newst.push(8);
newst.display();
reverseStack(newst);
newst.display();
