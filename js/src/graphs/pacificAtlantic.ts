const UP = [-1, 0];
const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const DIRECTIONS = [UP, RIGHT, DOWN, LEFT];
export function pacificAtlantic(heights: number[][]): number[][] {
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
