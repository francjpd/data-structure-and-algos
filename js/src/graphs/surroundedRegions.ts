const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];

function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue: [number, number][] = [];

  // find adjacent 0s

  for (let col = 0; col < cols; col++) {
    if (board[0][col] === "O") {
      queue.push([0, col]);
    }
    if (board[rows - 1][col] === "O") {
      queue.push([rows - 1, col]);
    }
  }

  for (let row = 1; row < rows; row++) {
    if (board[row][0] === "O") {
      queue.push([row, 0]);
    }
    if (board[row][cols - 1] === "O") {
      queue.push([row, cols - 1]);
    }
  }

  const dfs = (row: number, col: number, visited: boolean[][]) => {
    visited[row][col] = true;
    for (const [nrow, ncol] of DIRECTIONS) {
      const xrow = row + nrow;
      const xcol = col + ncol;

      if (
        xrow >= 0 &&
        xrow < rows &&
        xcol >= 0 &&
        xcol < cols &&
        !visited[xrow][xcol] &&
        board[xrow][xcol] === "O"
      ) {
        dfs(xrow, xcol, visited);
      }
    }
  };

  console.log(queue);
  while (queue.length) {
    const [row, col] = queue.shift()!;
    dfs(row, col, visited);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board[row][col] = !visited[row][col] ? "X" : "O";
    }
  }
}

// const test = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ];
// console.log(test);
// solve(test);
// console.log(test);
//
const testa = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
console.log(testa);
solve(testa);
console.log(testa);
