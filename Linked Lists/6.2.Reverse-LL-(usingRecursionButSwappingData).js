start = null;

function f(curr) {
  if (curr == null) return false;
  let result = f(curr.next);

  if (result == false) {
    // swapping using deconstructing assignment
    [start.val,curr.val] = [curr.val,start.val];

    let response = (start == curr || start.next == curr);
    start = start.next;
    return response;

  } else {
    return result;
  }
}

var reverseList = function (head) {
  start = head;
  f(head);
  return head;
};

// So to swap values recursively in a LL, for every node we need to access it’s opposite counter part. Whenever in LL we want to access an opposite counterpart like for index i we want n-i-1 in recursion, we can maintain a global kind of variable to act as start and we can have a variable in recursive function that can act as end. Then every time we can swap the values and before we return from recursion we move start to next node. Because returning from recursion will bring back the end variable to previous node as it moved forward recursively so when recursion comes back it also comes back.
