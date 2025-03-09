const pow = (x, y) => {
  if (y === 0) return 1;
  const base = y >= 0 ? x : 1 / x;

  return calc(base, Math.abs(y));
};

const calc = (x, y) => {
  if (y === 0) return 1;
  if (y === 1) return x;
  if (y % 2 === 0) {
    return calc(x * x, Math.floor(y / 2));
  }
  return x * calc(x, y - 1);
};

console.log(pow(2, 5));
console.log(pow(2, 0));
console.log(pow(2, -2));
