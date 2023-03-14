//calculate a^n in logn instead of n

function fastexp(a, n) {
  let ans = 1;
  while (n > 0) {
    if ((n & 1) != 0) {
      //set bit
      ans = ans * a;
    }
    a = a * a;
    n = n >> 1; //removing last bit
  }
  return ans;
}

console.log(fastexp(3,5));