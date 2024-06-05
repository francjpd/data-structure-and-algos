/**
 *Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]

 *
 * */
const majority = (nums) => {
  const result = [];
  let countOne = 0,
    countTwo = 0;
  let candidateOne = Number.NEGATIVE_INFINITY,
    candidateTwo = Number.NEGATIVE_INFINITY;

  for (let num of nums) {
    if (candidateOne === num) {
      countOne++;
    } else if (candidateTwo === num) {
      countTwo++;
    } else if (countOne === 0) {
      countOne = 1;
      candidateOne = num;
    } else if (countTwo === 0) {
      countTwo = 1;
      candidateTwo = num;
    } else {
      countOne--;
      countTwo--;
    }
  }
  countOne = 0;
  countTwo = 0;

  for (let num of nums) {
    if (num === candidateOne) countOne++;
    if (num === candidateTwo) countTwo++;
  }
  const min = Math.floor(nums.length / 3) + 1;
  if (countOne >= min) {
    result.push(candidateOne);
  }
  if (countTwo >= min) {
    result.push(candidateTwo);
  }
  return result;
};

describe("majority", () => {
  it.each([
    [[3, 2, 3], [3]],
    [[1, 2, 2, 3, 2], [2]],
    [
      [11, 33, 33, 11, 33, 11],
      [11, 33],
    ],
  ])("majority", (input, expected) => {
    expect(majority(input)).toEqual(expected);
  });
});
