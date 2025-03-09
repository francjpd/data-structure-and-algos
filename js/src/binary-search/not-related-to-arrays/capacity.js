const transportLoad = (weights, ship) => {
  let days = 1;
  let count = ship;
  weights.forEach((weight) => {
    if (weight <= count) {
      count -= weight;
    } else {
      days++;
      count = ship - weight;
    }
  });
  return days;
};

const capacity = (weights, days) => {
  let l = Math.max(...weights);
  let h = weights.reduce((acc, weight) => acc + weight);
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    let result = transportLoad(weights, m);
    if (result <= days) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};
console.log(capacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

/**
 * The complexity time is O(n*log(sum(weights) - max(weights))
 */
