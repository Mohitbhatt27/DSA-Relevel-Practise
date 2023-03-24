class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
  }

  isEmpty() {
    return this.front == this.arr.length;
  }

  enqueue(data) {
    this.arr.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    this.front++;
  }

  getFront() {
    if (this.arr.length == 0) {
      return;
    }
    return this.arr[this.front];
  }
}

module.exports = {
  //param A : string
  //return a strings
  solve: function (str) {
    let qu = new Queue();
    let obj = {};
    let ans = '';

    for (let i = 0; i < str.length; i++) {
      let ch = str[i];

      if (!obj[ch]) {
        obj[ch] = 1;
        qu.enqueue(ch); //we enqueue only when the freq is 1
      } else {
        obj[ch]++;
      }

      while (obj[qu.getFront()] > 1) {
        qu.dequeue();
      }

      if (qu.getFront() != undefined) {
        ans += qu.getFront();
      } else {
        ans += '#';
      }
    }

    return ans;
  },
};
