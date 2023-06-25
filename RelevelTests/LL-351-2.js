// You are given two integers num1 and num2.

// In one operation, you can choose integer i in the range [0, 60] and subtract ((2^i) + num2) from num1.

// Return the integer denoting the minimum number of operations needed to make num1 equal to 0.

// If it is impossible to make num1 equal to 0, return -1.

// Input: num1 = 3, num2 = -2
// Output: 3
// Explanation: We can make 3 equal to 0 with the following operations:
// - We choose i = 2 and substract 2^2 + (-2) from 3, 3 - (4 + (-2)) = 1.
// - We choose i = 2 and substract 2^2 + (-2) from 1, 1 - (4 + (-2)) = -1.
// - We choose i = 0 and substract 2^0 + (-2) from -1, (-1) - (1 + (-2)) = 0.
// It can be proven, that 3 is the minimum number of operations that we need to perform.

// Example 2:
// Input: num1 = 5, num2 = 7
// Output: -1
// Explanation: It can be proven, that it is impossible to make 5 equal to 0 with the given operation.
 

// Constraints:

// 1 <= num1 <= 10^9
// -10^9 <= num2 <= 10^9
class cQueue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.data[this.tail++] = item;
  }

  shift() {
    if (this.head === this.tail) return undefined;
    const item = this.data[this.head];
    delete this.data[this.head++];
    if (this.head * 2 >= this.tail) {
      this.data = this.data.slice(this.head);
      this.tail -= this.head;
      this.head = 0;
    }
    return item;
  }

  get length() {
    return this.tail - this.head;
  }
}

var makeTheIntegerZero = function (num1, num2) {
  if (num2 >= Math.pow(2, 60)) return -1;
  let q1 = new cQueue();
  let q2 = new cQueue();
  q1.push([num1, 0]);
  q2.push([0, 0]);
  let v1 = new Map();
  let v2 = new Map();
  let ans = Infinity;
  let max = 1000;
  let n = 0;
  while (q1.length > 0 && q2.length > 0 && n < max) {
    n++;
    let [fir, op1] = q1.shift();
    let [sec, op2] = q2.shift();
    if (v1.has(sec)) ans = Math.min(ans, op1 + v1.get(sec));
    if (v2.has(fir)) ans = Math.min(ans, op2 + v2.get(fir));
    if (v1.has(fir)) continue;
    if (v2.has(sec)) continue;
    v1.set(fir, op1);
    v2.set(sec, op2);
    for (let i = 0; i <= 60; i++) {
      let next1 = fir - (Math.pow(2, i) + num2);
      let next2 = sec + (Math.pow(2, i) + num2);
      q1.push([next1, op1 + 1]);
      q2.push([next2, op2 + 1]);
    }
  }
  return ans == Infinity ? -1 : ans;
};


console.log(makeTheIntegerZero(3, -2)); // 3
console.log(makeTheIntegerZero(5, 7)); // -1
console.log(makeTheIntegerZero(10, 2)); // 3
console.log(makeTheIntegerZero(100, 10)); // 3
console.log(makeTheIntegerZero(123456789, 987654321)); // -1
console.log(makeTheIntegerZero(1000000000, -1000000000)); // 1
console.log(makeTheIntegerZero(12345, -54321)); // 2