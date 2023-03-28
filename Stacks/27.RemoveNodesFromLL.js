// Remove every node which has a node with a strictly greater value anywhere to the right side of it.

var removeNodes = function (head) {
  let st = [];
  while (head) {
    while (st.length > 0 && st[st.length - 1] < head.val) {
      st.pop();
    }
    st.push(head.val);
    head = head.next;
  }
  while (st.length > 0) {
    head = new ListNode(st.pop(), head);
  }
  return head;
};
