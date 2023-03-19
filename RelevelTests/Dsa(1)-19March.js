class LinkedList {
  constructor() {
    this.head = null;
  }

  createList(arr) {
    this.head = new Node(arr[0]);
    let tail = this.head;
    for (let i = 1; i < arr.length; i++) {
      tail.next = new Node(arr[i]);
      tail = tail.next;
    }
  }

  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  printList() {
    let head = this.head;
    while (head != null) {
      process.stdout.write(head.data + ' ');
      head = head.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

let dataString = '';

process.stdin.on('data', function (chunk) {
  dataString += chunk.toString();
});

process.stdin.on('end', function () {
  let lines = dataString.split('\n');
  let n = parseInt(lines[0]);
  let arr = lines[1].split(',').map(Number);

  let list = new LinkedList();
  list.createList(arr);

  list.printList();
  console.log();

  list.reverseLinkedList();

  list.printList();
});
