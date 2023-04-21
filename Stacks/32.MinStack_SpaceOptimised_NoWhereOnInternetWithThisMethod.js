class MinStack {
  constructor() {
    this.stack = [];
    this.currentMin = +Infinity;
  }

  push(x) {
    /*
     * if stack is empty, push the element and set currentMin to x
     * else,
     * if the incoming elem is less than currentMin, push the difference between currentMin and x
     * and set currentMin to x
     * if the incoming elem is greater than currentMin, push the difference between currentMin and x
     * and do not change currentMin
     */

    if (this.stack.length == 0) {
      this.stack.push(x);
      this.currentMin = x;
    } else {
      if (x < this.currentMin) {
        this.stack.push(x - this.currentMin);
        this.currentMin = x;
      } else {
        this.stack.push(x - this.currentMin);
      }
    }
  }

  pop() {
    /*
     * if stack is empty, return
     * else,
     * if the top element is greater than 0, pop the element, do not change currentMin
     * if the top element is less than 0, pop the element and set currentMin to currentMin - top element
     */
    if (this.stack.length == 0) return;
    if (this.stack[this.stack.length - 1] >= 0) this.stack.pop();
    else {
      this.currentMin = this.currentMin - this.stack[this.stack.length - 1];
      this.stack.pop();
    }
  }

  top() {
    /*
     * if stack is of size 1, return the top element
     * if the top element is greater than 0, return currentMin + top element
     * if the top element is less than 0, return currentMin
     */
    if (this.stack.length == 1) {
      return this.stack[0];
    }
    if (this.stack[this.stack.length - 1] >= 0) {
      return this.currentMin + this.stack[this.stack.length - 1];
    } else {
      return this.currentMin;
    }
  }

  getMin() {
    /*
     * if stack is of size 1, return the top element
     * else, return currentMin
     */
    if (this.stack.length == 1) return this.stack[0];
    return this.currentMin;
  }
}
