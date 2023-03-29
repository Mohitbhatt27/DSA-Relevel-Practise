var reorderList = function (head) {
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //slow is at the middle of the LL, second list starts from slow.next
  let second = slow.next;
  slow.next = null;

  //reverse the second list
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //merge the two LL
  let first = head;
  second = prev;
  
  while (second) {
    let [temp1, temp2] = [first.next, second.next];
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};