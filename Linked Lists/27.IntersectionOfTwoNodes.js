var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let i = headA;
  let j = headB;
  while (i != j) {
    if (i == null) {
      i = headB;
    } else {
      i = i.next;
    }

    if (j == null) {
      j = headA;
    } else {
      j = j.next;
    }
  }

  return i;
};
