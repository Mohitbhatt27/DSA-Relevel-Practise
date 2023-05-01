function fib(n) {
  /**
   * TC : O(2^n)
   * SC : O(n)
   */
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40));
