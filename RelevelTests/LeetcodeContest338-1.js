var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  while (k && numOnes) {
    sum += 1;
    numOnes--;
    k--;
  }
  while (k && numZeros) {
    numZeros--;
    k--;
  }
  while (k && numNegOnes) {
    sum -= 1;
    k--;
  }
  return sum;
};



console.log(kItemsWithMaximumSum(3,2,0,4))