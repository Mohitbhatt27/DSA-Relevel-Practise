/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let start = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (start[1] >= intervals[i][0]) {
      start[1] = (start[1] >= intervals[i][1]) ? start[1] : intervals[i][1];
    } else {
      ans.push(start);
      start = intervals[i];
    }
  }
  ans.push(start);
  return ans;
};

let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(arr));

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  // sort the intervals based on their start values
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let curr_interval = intervals[0];
  result.push(curr_interval);
  for (let interval of intervals) {
    if (curr_interval[1] >= interval[0]) {
      // overlapping intervals, merge them
      curr_interval[1] = Math.max(curr_interval[1], interval[1]);
    } else {
      // non-overlapping interval, add it to the result
      curr_interval = interval;
      result.push(curr_interval);
    }
  }
  return result;
}