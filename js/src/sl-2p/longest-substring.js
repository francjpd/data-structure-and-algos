// No window but intuition

const longestSs = (s) => {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    let j = i;
    let counter = 0;
    while (s[j] && !set.has(s[j])) {
      set.add(s[j]);
      j++;
      counter++;
    }
    longest = Math.max(longest, counter);
  }
  return longest;
};

// console.log(longestSs("bbbbb"));
// console.log(longestSs("abcabcaa"));

const longest = (s) => {
  let start = 0;
  let end = 0;
  let longest = 0;
  const seenChars = {};

  while (end < s.length) {
    const currentChar = s[end];
    const positionFromSeenChar = seenChars[currentChar];
    // The idea is to move the start pointer until the seen char is not longer seen and we can keep counting
    if (positionFromSeenChar >= start) {
      start = positionFromSeenChar + 1;
    }

    const currentLength = end - start + 1;
    longest = Math.max(currentLength, longest);
    seenChars[currentChar] = end;
    end++;
  }
  return longest;
};

console.log(longest("bbbbb"));
console.log(longest("abba"));
console.log(longest("abcabcaa"));
