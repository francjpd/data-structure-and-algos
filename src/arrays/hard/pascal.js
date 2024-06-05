// Example 1:
//
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
//
// Input: numRows = 1
// Output: [[1]]
//
const pascal = (numRows) => {
  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result = new Array([1], [1, 1]);
  for (let i = 2; i < numRows; i++) {
    let currentRow = new Array(i + 1);
    currentRow[0] = 1;
    currentRow[i] = 1;
    for (let j = 1; j < i; j++) {
      currentRow[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    result[i] = currentRow;
  }
  return result;
};

/**
 * The complexity analysis for the space its O(numRows) and the time is O(numRows^2) because we need to iterate for each rows based on the input
 */

describe("pascal", () => {
  test.each([
    [1, [[1]]],
    [2, [[1], [1, 1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
  ])("pascal", (numRows, expected) => {
    expect(pascal(numRows)).toEqual(expected);
  });
});
