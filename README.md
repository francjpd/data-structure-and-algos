## Algorithms

The purpose from this project is to serve as a respository of the problems i've been solving.

The project only uses two libraries:

- Standard lint
- Vitest to include unit test for each problem I encounter. So you can actually implement the test within the problem and its cleaner. ie

```js
function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

describe("isArraySorted", () => {
  it.each([
    [[2, 5, 1, 3, 0], false],
    [[8, 10, 5, 7, 9], false],
    [[1, 2, 2, 3, 4], true],
  ])("isArraySorted", (input, expected) => {
    expect(isArraySorted(input)).toBe(expected);
  });
});
```
