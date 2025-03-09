/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]

      0   1
  0  [1,  3]   1
  1  [2,  6]   6
  2  [8,  10]
  3  [15, 18]

    // sort the array by the starts.
    // intervals
    // if (intervals[i-1][0] > intervals[i][0]  || intervals[i-1][1] < intervals[1])
    // result.push([intervals[i-1][0],intervals[1]])
     if()


Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * */
const mergeIntervals = (intervals) => {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1],
      );
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};

console.log(mergeIntervals([[1, 4]]));

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

/**
 *
 *
 * [[1,3],[2,6],[8,10],[15,18]]
 *
 *
 *
 * */
