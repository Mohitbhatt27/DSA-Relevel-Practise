class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  addAtHead(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  addAtTail(val) {
    let node = new ListNode(val);
    if (this.length == 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  addAtIndex(index, val) {
    if (index > this.length) {
      return;
    } else if (index == 0) {
      this.addAtHead(val);
    } else if (index == this.length) {
      this.addAtTail(val);
    } else {
      let node = new ListNode(val);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.length++;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else if (index == 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.length--;
  }
}
