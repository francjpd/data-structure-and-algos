const longRepeating = (s, k) => {
  let nchar = 0;
  let cchar = s[0];
  let left = 0;
  let maxL = 0;

  for (let right = 1; right < s.length; right++) {
    if (s[right] != cchar) nchar++;
    if (nchar > k) {
      while (s[left + 1] == cchar) {
        left++;
      }
      cchar = s[left + 1];
      nchar = k === 0 ? 0 : 1;
      right = left + 1;
    }

    const currentLength = right - left + 1;
    maxL = Math.max(currentLength, maxL);
  }
  return maxL;
};
//
// console.log(longRepeating("ABBA", 2));
// console.log(longRepeating("ABBB", 2));
// console.log(longRepeating("ABAB", 2));
console.log(longRepeating("ABAB", 0));
// console.log(longRepeating("ABBCAA", 1));
// console.log(longRepeating("AABABBA", 1));
// console.log(longRepeating("AABABBA", 1));
