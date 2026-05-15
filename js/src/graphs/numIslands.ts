function toEdgeKey(row, col) {
  return `${row},${col}`;
}

const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];
export function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const visited: Set<string> = new Set<string>();

  const dfs = (row, col) => {
    for (const [drow, dcol] of DIRECTIONS) {
      const nrow = row + drow;
      const ncol = col + dcol;
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < rows &&
        ncol < cols &&
        !visited.has(toEdgeKey(nrow, ncol)) &&
        grid[nrow][ncol] === "1"
      ) {
        visited.add(toEdgeKey(nrow, ncol));
        dfs(nrow, ncol);
      }
    }
  };

  for (let rowI = 0; rowI < rows; rowI++) {
    for (let colI = 0; colI < cols; colI++) {
      if (!visited.has(toEdgeKey(rowI, colI)) && grid[rowI][colI] === "1") {
        count++;
        visited.add(toEdgeKey(rowI, colI));
        dfs(rowI, colI);
      }
    }
  }
  return count;
}
