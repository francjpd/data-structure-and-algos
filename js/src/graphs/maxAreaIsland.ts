const toEdge = (row, col) => `${row},${col}`;
const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
//clock wise
const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];
export function maxAreaOfIsland(grid: number[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  let maxArea = 0;
  let current = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set<string>();

  const dfs = (row, col) => {
    for (const [drow, dcol] of DIRECTIONS) {
      const nrow = row + drow;
      const ncol = col + dcol;
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < rows &&
        ncol < cols &&
        !visited.has(toEdge(nrow, ncol)) &&
        grid[nrow][ncol] === 1
      ) {
        current++;
        visited.add(toEdge(nrow, ncol));
        dfs(nrow, ncol);
      }
    }
  };
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = grid[row][col];
      if (!visited.has(toEdge(row, col)) && x === 1) {
        current = 1;
        visited.add(toEdge(row, col));
        dfs(row, col);
      }
      maxArea = Math.max(maxArea, current);
    }
  }
  return maxArea;
}
