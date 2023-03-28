start = null; //gloval variable

function f(curr) {
  if (curr == null) return true; //empty linked list is always a palindrome
  let res = f(curr.next); //rest of the linked list except the first, then second node

  if (res == false) return res;
  
  if (start.val == curr.val) {
    start = start.next;
    return true;
  } else {
    return false;
  }
}
var isPalindrome = function (head) {
  start = head;
  return f(head);
};
