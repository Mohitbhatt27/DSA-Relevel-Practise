function createNode(value) {
  return {
    data: value,
    next: null,
  };
}

class CustomQueue {
  constructor() {
    this.head = null; // front
    this.tail = null; // back
  }
  enqueue(x) {
    let newNode = createNode(x);
    //add at tail
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head == null) return;
    let nextNode = this.head.next;
    this.head.next = null;
    this.head = nextNode;
    if (this.head == null) {
      this.tail = null;
    }
  }

  getfront() {
    if (this.head == null) return;
    return this.head.data;
  }

  getback() {
    if (this.tail == null) return;
    return this.tail.data;
  }

  isEmpty() {
    return this.head == null;
  }
}

function zigzagLevelOrder(root) {
  if (root == null) return [];
  const queue = new CustomQueue();
  queue.enqueue(root);
  queue.enqueue(null);
  //first level has been added
  //dont add root.val

  let left_right = true;

  let result = [];
  let currentLevel = [];

  while (true) {
    let front = queue.getfront();
    queue.dequeue();

    if (front == null) {
      if (queue.isEmpty()) {
        break;
      }
      //means now in the queue only the next level is present
      //so add a null to indicate the end of the current level

      queue.enqueue(null); //adding null to indicate the end of the current level

      if (left_right) {
        result.push(currentLevel); //adding the current level
        left_right = false;
      } else {
        result.push(currentLevel.reverse()); //adding the current level
        left_right = true;
      }

      currentLevel = [];

      continue;
    }

    currentLevel.push(front.val);
    if (front.left) {
      queue.enqueue(front.left);
    }
    if (front.right) {
      queue.enqueue(front.right);
    }
  }

  if (left_right) {
    result.push(currentLevel); //adding the current level
  } else {
    result.push(currentLevel.reverse()); //adding the current level
  }
  return result;
}
