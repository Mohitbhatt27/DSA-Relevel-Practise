class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
  }

  isEmpty() {
    return this.front == this.arr.length;
  }

  enqueue(data) {
    /**
     * Time: O(1)
     */
    this.arr.push(data);
  }

  dequeue() {
    /**
     * Time: O(1)
     */
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot delete from an empty queue');
      return;
    }
    this.front++;
  }

  getFront() {
    /**
     * Time: O(1)
     */
    if (this.arr.length == 0) {
      console.log('No element is present as the queue is empty');
      return;
    }
    return this.arr[this.front];
  }
}

let qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.dequeue();
console.log(qu.getFront());
qu.display();
