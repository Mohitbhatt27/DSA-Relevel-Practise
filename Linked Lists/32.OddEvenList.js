function oddEvenList(head) {
  if (!head) return null;
  if (!head.next) return head;

  let oddHead = head;
  let oddTail = head;
  let evenHead = head.next;
  let evenTail = head.next;

  while (evenTail && evenTail.next) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;

    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }

  oddTail.next = evenHead;
  return oddHead;
}


/**
 * Intuition: Keeping 4 pointers, oddHead, oddTail, evenHead, evenTail to represent the odd and even LLs. 
 * At the end, we will connect the oddTail to the evenHead and return the oddHead.
 * Yes, instead of using 4 pointers, we can use 3 pointers, but I think this is more readable.
 * oddHead is the head of the oddLL or even the head of original LL
 * So that pointer can be avoided, but I kept it for readability.
 * 
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * 
 */