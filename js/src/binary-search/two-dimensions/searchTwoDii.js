const search = (matrix, target) => {
  const t = target;
  let r = matrix.length - 1;
  let c = 0;
  while (r >= 0 && c <= matrix[0].length - 1) {
    if (t === matrix[r][c]) return true;
    else if (t >= matrix[r][c]) {
      c++;
    } else {
      r--;
    }
  }
};
