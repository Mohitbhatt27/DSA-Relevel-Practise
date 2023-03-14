function removeLoop(head) {
  //detect the loop
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) break; //loop detected
  }

  if (slow != fast) return; //case of no loop, just return



//corner case, when the loop starts at first position itself, we keep our slow as it is, and bring of fast to the next of head node, and then do it's next null, meaning breaking the connection
  if (head == slow) {
    while (fast.next != head) { 
      fast = fast.next;
    }
    fast.next = null;
    return;
  }

  //rest of the cases, where there is some node before intersection, we keep the slow at head and move our fast one point before the point of intersection and then make fast.next as null to remove the cycle

  slow = head;
  while (slow.next != fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove cycle
  fast.next = null;
}
