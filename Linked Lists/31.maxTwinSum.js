var pairSum = function (head) {
  let middle = middleOfAList(head);
  let lastHalfReversedList = reverse(middle.next);
  let maxSum = -Infinity;
  let temp1 = head,
    temp2 = head;
  while (head <= lastHalfReversedList) {
    let currSum = head.val + lastHalfReversedList.val;
    maxSum = Math.max(maxSum, currSum);
    head = head.next;
    lastHalfReversedList = lastHalfReversedList.next;
  }
  return maxSum;
};

function reverse(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newHead = reverse(head.next);
  let nextOfOriginalHead = head.next;
  nextOfOriginalHead.next = head;
  head.next = null;
  return newHead;
}

function middleOfAList(head) {
  let hare = head;
  let tortoise = head;
  while (hare.next != null && hare.next.next != null) {
    //returns 1st middle in case of even
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return tortoise;
}
