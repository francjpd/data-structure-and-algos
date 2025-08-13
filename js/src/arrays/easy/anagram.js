const isValidAnagram = (s, t) => {
  if (s.length != t.length) return false;
  const h = new Map();
  for (let i = 0; i < s.length; i++) {
    if (h.has(s[i])) {
      h.set(s[i], h.get(s[i]) + 1);
    } else {
      h.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (h.has(t[i])) {
      if (h.get(t[i]) === 0) return false;
      h.set(t[i], h.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
};
