/*
 * Time complexity: O(n), where n is the number of sorted intervals
 * Space complexity: O(n)
 */

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  //ASSUMPTION: The array given to us is already sorted. This assumption is made to make sure the complexity of our algorithm is O(n)

  let mergedIntervals = [];
  let currentInterval = intervals[0];
  mergedIntervals.push(currentInterval);

  // merge any overlapping intervals and add non-overlapping intervals to the result
  for (let i = 1; i < intervals.length; i++) {
    let currentStart = currentInterval[0];
    let currentEnd = currentInterval[1];
    let nextStart = intervals[i][0];
    let nextEnd = intervals[i][1];

    if (currentEnd >= nextStart) {
      // intervals overlap, so merge them
      currentInterval[1] = Math.max(currentEnd, nextEnd); 
    } else {
      // intervals do not overlap, so add the current interval to the result
      currentInterval = intervals[i];
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals);
