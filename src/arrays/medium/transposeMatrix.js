/**
 * knowledge to solve the rotateMatrix problem with ease
/*
Example 1:
Input:      {{4,5,6},
             {7,8,9},
             {10,11,12}}
Output:
              4 7 10
              5 8 11
              6 9 12
 *
 * */
const transposeMatrix = (matrix) => {
  const transposed = new Array(matrix.length).fill().map(() => []);
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    let m = matrix[i].length;
    for (let j = 0; j < m; j++) {
      // transposed[j][i] = matrix[i][j];
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
};

const transposeMatrixOpt = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    let m = matrix[i].length;
    for (let j = i + 1; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

describe("transposeMatrixOpt", () => {
  it.each([
    [
      [
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
      ],
      JSON.stringify([
        [4, 7, 10],
        [5, 8, 11],
        [6, 9, 12],
      ]),
    ],
  ])("transposeMatrixOpt", (input, expected) => {
    expect(JSON.stringify(transposeMatrixOpt(input))).toEqual(expected);
  });
});
