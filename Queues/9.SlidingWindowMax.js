class Deque {
  constructor() {
    this.items = [];
  }

  addFront(element) {
    this.items.unshift(element);
  }

  addBack(element) {
    this.items.push(element);
  }

  removeFront() {
    if (this.items.length == 0) {
      return null;
    } else {
      return this.items.shift();
    }
  }

  removeBack() {
    if (this.items.length == 0) {
      return null;
    } else {
      return this.items.pop();
    }
  }

  getFront() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  getBack() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }

  isEmpty() {
    return this.items.length == 0;
  }
}


var maxSlidingWindow = function (nums, k) {
  let dq = new Deque();
  for (let i = 0; i < k; i++) {
    while (!dq.isEmpty() && nums[dq.getBack()] < nums[i]) {
      dq.removeBack();
    }
    dq.addBack(i);
  }
  let result = [];
  result.push(nums[dq.getFront()]);
  for (let i = k; i < nums.length; i++) {
    if (dq.getFront() == i - k) {
      dq.removeFront();
    }
    while (!dq.isEmpty() && nums[dq.getBack()] < nums[i]) {
      dq.removeBack();
    }
    dq.addBack(i);
    result.push(nums[dq.getFront()]);
  }
  return result;
};
