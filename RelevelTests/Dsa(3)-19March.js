// Once upon a time, in a faraway land, there lived a great ruler who had divided his kingdom into several intervals. Each interval had a starting and ending point. The ruler was very particular about the management of these intervals, and he kept a list of all the intervals in his kingdom. One day, a great storm hit the kingdom, and due to the storm, the intervals got shuffled, and some of them overlapped. This caused a great problem for the ruler, as he was unable to manage his kingdom efficiently. Therefore, he summoned the greatest programmer in the land to solve this problem. You are that programmer and were given a list of intervals represented as pairs of integers [start, end]. Your task is to merge all overlapping intervals and return the result.

// Note: Keep the complexity of the program as n log n

// Input: An array of intervals represented as pairs of integers [start, end]. The intervals may not be in any particular order.

// Output: A new array of non-overlapping intervals, where each interval in the output is a combination of one or more intervals from the input.

// Sample Input:
// intervals = [[1,3],[2,6],[8,10],[15,18]]
// Sample Output: [[1,6],[8,10],[15,18]]

// Explanation:

// The intervals [1,3] and [2,6] overlap, so they can be merged into [1,6]. The interval [8,10] does not overlap with any other interval, so it remains unchanged. The interval [15,18] also does not overlap with any other interval, so it remains unchanged.

/*
 * Time complexity: O(n log n), where n is the number of intervals
 * Space complexity: O(n)
 */

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // sort the intervals based on their start values
  intervals.sort((a, b) => a[0] - b[0]); 
  

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
      currentInterval[1] = Math.max(currentEnd, nextEnd); //[1,4] [3,7] = [1,7]
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
