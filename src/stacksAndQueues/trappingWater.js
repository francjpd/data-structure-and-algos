const trappingWater = (height) => {
  const postfix = new Map();
  const suffix = new Map();
  let maxLeft = 0;
  let maxRight = 0;
  let j = height.length - 1;
  let counter = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    postfix.set(i, maxLeft);

    maxRight = Math.max(maxRight, height[j]);
    suffix.set(j, maxRight);
    j--;
  }

  for (let i = 0; i < height.length; i++) {
    counter += Math.min(postfix.get(i), suffix.get(i)) - height[i];
  }
  return counter;
};

console.log(trappingWater([1, 2, 0, 2, 1, 3, 0, 1, 2]));
/**
      [1, 2, 0, 2, 1, 3, 0, 1, 2]
pf =   1, 2, 2, 2, 2, 3, 3  3, 3
sf =   3  3  3  3  3  3  2  2  2



 **/
