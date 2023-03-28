var addTwoNumbers = function (l1, l2) {
  l1 = reverse(l1);
  l2 = reverse(l2);
  return reverse(add(l1, l2));
};

function add(l1, l2) {
  let dummy = new ListNode();
  let temp = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry == 1) {
    let sum = 0;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;

    carry = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    temp.next = node;
    temp = temp.next;
  }

  return dummy.next;
}

function reverse(head) {
  let current = head;
  let previous = null;
  while (current != null) {
    let nextAdjacent = current.next;
    current.next = previous;
    previous = current;
    current = nextAdjacent;
  }
  return previous;
}
