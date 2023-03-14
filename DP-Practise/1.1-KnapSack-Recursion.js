// 'Suppose you are a thief trying to steal items from a store with limited space in your backpack. You have a list of items with their respective weights and values, and you can only carry a maximum weight capacity of W. What is the maximum value of items you can steal from the store?'

function knapsack(capacity, weights, values, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }

  if (weights[n - 1] > capacity) {
    return knapsack(capacity, weights, values, n - 1);

  } else {
    return Math.max( values[n - 1] + knapsack(capacity - weights[n - 1], weights, values, n - 1), 
    knapsack(capacity, weights, values, n - 1));
  }
}

const capacity = 50;
const weights = [10, 20, 30];
const values = [60, 100, 120];
const n = values.length;

const result = knapsack(capacity, weights, values, n);
console.log(result); // Output: 220
