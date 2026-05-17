const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

type Possible = typeof ROTTEN | typeof FRESH | typeof EMPTY;

const toKey = (row: number, col: number) => `${row},${col}`;

const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];

function orangesRotting(grid: number[][]): number {
  if (!grid.length) return -1;
  const rows = grid.length;
  const cols = grid[0].length;
  let minutes = 0;
  let freshTotal = 0;
  const queue: [number, number][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value: Possible = grid[row][col] as Possible;
      if (value === FRESH) {
        freshTotal++;
      }
      if (value === ROTTEN) {
        queue.push([row, col]);
      }
    }
  }
  if (freshTotal === 0) return 0;

  while (queue.length) {
    let size = queue.length;
    let rottedThisMinute = false;
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift()!;

      for (const [nrow, ncol] of DIRECTIONS) {
        const xrow = row + nrow;
        const xcol = col + ncol;
        if (
          xrow >= 0 &&
          xrow < rows &&
          xcol >= 0 &&
          xcol < cols &&
          grid[xrow][xcol] === FRESH
        ) {
          rottedThisMinute = true;
          queue.push([xrow, xcol]);
          grid[xrow][xcol] = ROTTEN;
          freshTotal--;
        }
      }
    }
    if (rottedThisMinute) {
      minutes++;
    }
  }

  return freshTotal === 0 ? minutes : -1;
}

const test = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
