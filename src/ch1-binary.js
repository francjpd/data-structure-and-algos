const array = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 30, 31, 32, 41, 55, 76, 88, 89, 90, 91, 92, 93, 94, 96, 100, 200, 301, 302, 310];

let low = 0;
let high = array.length - 1;
let i = 0;
const binarySearch = (arr, itemToFind) => {
    i++;

    const middle = Math.round((low + high) / 2)

    const guess = arr[middle];

    if (guess === itemToFind) {
        console.log('found it', guess)
        return guess;
    }

    if (guess < itemToFind) {
        low = middle + 1;
    }

    if (guess > itemToFind) {
        high = middle -  1
    }
    binarySearch(arr, itemToFind)
}

console.log('value is', binarySearch(array, 32), i)
