// Problem: Maximum Product Subarray
/**
 * Same as Kadane Algorithm, but we have to handle one more case.
 * We need to loop twice, once from left to right, and once from right to left.
 * Why?
 * Because if the array contains odd no. of negative elements. In that case, we have to reject anyone negative element so that we can even no. of negative elements and their product can be positive.
 * Now since we are considering subarray, We have to either reject the first negative element or the last negative element.
 * traverse from starting then only the last negative element can be rejected.
 * So we will traverse from left to right, and then from right to left.
 */

function maxSubarrayProduct(arr, n) {
  let max_so_far = -Infinity;
  let curr_product = 1;

  for (let i = 0; i < n; i++) {
    curr_product *= arr[i];
    max_so_far = Math.max(max_so_far, curr_product);

    if (arr[i] === 0) {
      curr_product = 1;
    }
  }

  curr_product = 1;

  for (let i = n - 1; i >= 0; i--) {
    curr_product *= arr[i];
    max_so_far = Math.max(max_so_far, curr_product);
    if (arr[i] === 0) {
      curr_product = 1;
    }
  }

  return max_so_far;
}

console.log(maxSubarrayProduct([6, -3, -10, 0, 2], 5));
console.log(maxSubarrayProduct([-1, -3, -10, 0, 60], 5));
console.log(maxSubarrayProduct([-2, 0], 2));
