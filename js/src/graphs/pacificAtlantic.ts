const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];
export function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return [];
  }
  const rows = heights.length;
  const cols = heights[0].length;

  const pacificVisited = Array.from({ length: rows }, () =>
    Array(cols).fill(false),
  );
  const atlanticVisited = Array.from({ length: rows }, () =>
    Array(cols).fill(false),
  );
  const result = [];

  const dfs = (row: number, col: number, oceanGrid: boolean[][]) => {
    oceanGrid[row][col] = true;

    for (const [drow, dcol] of DIRECTIONS) {
      const nrow = row + drow;
      const ncol = col + dcol;

      if (
        nrow >= 0 &&
        nrow < rows &&
        ncol >= 0 &&
        ncol < cols &&
        !oceanGrid[nrow][ncol] &&
        heights[row][col] <= heights[nrow][ncol]
      ) {
        dfs(nrow, ncol, oceanGrid);
      }
    }
  };
  //

  // iterate from  vertically
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacificVisited);
    dfs(rows - 1, col, atlanticVisited);
  }

  // iterate horizontally
  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacificVisited);
    dfs(row, cols - 1, atlanticVisited);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (atlanticVisited[r][c] && pacificVisited[r][c]) {
        result.push([r, c]);
      }
    }
  }
  return result;
}

export function pacificAtlanticBF(heights: number[][]): number[][] {
  const result: number[][] = [];
  const rows = heights.length;
  const cols = heights[0].length;
  const visited = new Set();

  const dfs = (parentRow: number, parentCol: number) => {
    let itReachedPacific = false;
    let itReachedAtlantic = false;

    const pathVisited = new Set();
    const doDfs = (row: number, col: number) => {
      pathVisited.add(`${row},${col}`);
      for (const [nrow, ncol] of DIRECTIONS) {
        const xrow = row + nrow;
        const xcol = col + ncol;
        if (xrow < 0 || xcol < 0) {
          itReachedPacific = true;
        }
        if (xrow === rows || xcol === cols) {
          itReachedAtlantic = true;
        }
        if (
          itReachedAtlantic &&
          itReachedPacific &&
          !visited.has(`${parentRow},${parentCol}`)
        ) {
          result.push([parentRow, parentCol]);
          visited.add(`${parentRow},${parentCol}`);
        }

        const current = heights[row][col];
        if (
          xrow >= 0 &&
          xrow < rows &&
          xcol >= 0 &&
          xcol < cols &&
          !pathVisited.has(`${xrow},${xcol}`) &&
          current >= heights[xrow][xcol]
        ) {
          doDfs(xrow, xcol);
        }
      }
      pathVisited.delete(`${row},${col}`);
    };
    doDfs(parentRow, parentCol);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dfs(row, col);
    }
  }

  return result;
}

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));
