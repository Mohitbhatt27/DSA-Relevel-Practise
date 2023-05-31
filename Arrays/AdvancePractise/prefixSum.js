let arr = [1, 2, 3, 4, 5, 6];
let prefixSum = [];
prefixSum.push(arr[0]);
for (i = 1; i < arr.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}
console.log(prefixSum);

//now sum of subarray arr(2,5) can be given as preficSum(5,2-1);

console.log(
  `sum of subarray from index 2 to 4 is = ${prefixSum[4] - prefixSum[1]}`
);
