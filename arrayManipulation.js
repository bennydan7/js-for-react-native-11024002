// arrayManipulation.js

// Function to process array of numbers
function processArray(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? num * num : num * 3));
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let processedNumbers = processArray(numbers);
console.log(processedNumbers); // [3, 4, 9, 16, 15]
