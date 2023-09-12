// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

// input = [0, 2, 4, 5, 1, 3, 6, 7]
// output = [0, 1, 2, 3, 4, 5, 6, 7]

const array = [0, 2, 4, 5, 1, 3, 6, 7];

// Assignment 2 - merge sort
function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Helper function
function merge(leftArray, rightArray) {
  const result = [];

  // while we have two valid arrays (sort) || else return
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }

  return [...result, ...leftArray, ...rightArray];
}

// console.log(merge([0, 1, 3], [2, 4, 5])); // ouput = [0, 1, 2, 3, 4, 5]
console.log(mergeSort(array)); // output = [0, 1, 2, 3, 4, 5, 6, 7]
