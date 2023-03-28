function reverseListUsingStack(head) {
  let stack = [];
  let current = head;

  //going through the linked list and pushing each node onto the stack
  while (current!=null) {
    stack.push(current);
    current = current.next;
  }
  //pop off the top node, and store it as new head
  let newHead = stack.pop();

  //now till our stack is not empty, we keep popping off nodes, and updating their next next pointer 
  current = newHead;
  while (stack.length > 0) {
    current.next = stack.pop();
    current = current.next;
  }

  //at the end, current points to original first node
  current.next = null;
  return newHead;
}
