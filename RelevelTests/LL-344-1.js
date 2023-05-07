var distinctDifferenceArray = function (nums) {
  let n = nums.length;
  let diff = [];
  for (let i = 0; i < n; i++) {
    let prefix = nums.slice(0, i + 1);
    let suffix = nums.slice(i + 1, n);
    let prefixLength = new Set(prefix).size;
    let suffixLength = new Set(suffix).size;
    diff.push(prefixLength - suffixLength);
  }
  return diff;
};
