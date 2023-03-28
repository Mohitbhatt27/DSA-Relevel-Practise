function countNodesinLoop(head) {
  let hare = head,
    tortoise = head;
  while (hare != null && hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare == tortoise) {
      //loop exists
      let count = 1;
      tortoise = tortoise.next;
      while (tortoise != hare) {
        count++;
        tortoise = tortoise.next;
      }
      return count;
    }
  }
  return 0;
}


