// var addTwoNumbers = function (l1, l2) {
//   l1 = reverse(l1);
//   l2 = reverse(l2);
//   return reverse(add(l1, l2));
// };

// function add(l1, l2) {
//   let dummy = new ListNode();
//   let temp = dummy;
//   let carry = 0;

//   while (l1 != null || l2 != null || carry == 1) {
//     let sum = 0;

//     if (l1 != null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2 != null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     sum += carry;

//     carry = Math.floor(sum / 10);
//     let node = new ListNode(sum % 10);
//     temp.next = node;
//     temp = temp.next;
//   }

//   return dummy.next;
// }

// function reverse(head) {
//   let current = head;
//   let previous = null;
//   while (current != null) {
//     let nextAdjacent = current.next;
//     current.next = previous;
//     previous = current;
//     current = nextAdjacent;
//   }
//   return previous;
// }

var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  let carry = 0;
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let head = null;
  while (stack1.length || stack2.length || carry) {
    let sum = carry;
    if (stack1.length) {
      sum += stack1.pop();
    }
    if (stack2.length) {
      sum += stack2.pop();
    }
    carry = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    node.next = head;
    head = node;
  }
  return head;
};