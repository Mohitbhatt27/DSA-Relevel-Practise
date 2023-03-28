class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  addAtTail(val) {
    let node = new ListNode(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  addAtIndex(index, val) {
    if (index > this.length) {
      return;
    } else if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else {
      let node = new ListNode(val);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.prev = current;
      node.next = current.next;
      current.next.prev = node;
      current.next = node;
      this.length++;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }
}
