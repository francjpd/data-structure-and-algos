const eatAll = (piles, hProposal) =>
  piles.reduce((total, pile) => {
    total += Math.ceil(pile / hProposal);
    return total;
  }, 0);

const koko = (piles, h) => {
  let l = 1;
  let r = Math.max(...piles);
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let proposal = eatAll(piles, m);

    if (proposal <= h) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

console.log(koko([30, 11, 23, 4, 20], 6));
console.log(koko([30, 11, 23, 4, 20], 5));
console.log(koko([3, 6, 7, 11], 8));
console.log(
  koko(
    [
      332484035, 524908576, 855865114, 632922376, 222257295, 690155293,
      112677673, 679580077, 337406589, 290818316, 877337160, 901728858,
      679284947, 688210097, 692137887, 718203285, 629455728, 941802184,
    ],
    823855818,
  ),
);
console.log(koko([312884470], 312884469));
