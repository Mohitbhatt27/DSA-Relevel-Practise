function reverseQueue(q) {
  let stack = [];
  while (!q.isEmpty()) {
    stack.push(q.dequeue());
  }
  while (stack.length != 0) {
    q.enqueue(stack.pop());
  }
}
