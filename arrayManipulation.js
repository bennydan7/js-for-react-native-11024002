// arrayManipulation.js

function processArray(arr) {
  return arr.map((num) => {
    if (num % 2 === 0) {
      return num * num; // Square even numbers
    } else {
      return num * 3; // Triple odd numbers
    }
  });
}

// example
arr1 = [2, 3, 4, 5, 2, 2, 3];
console.log(processArray(arr1));
