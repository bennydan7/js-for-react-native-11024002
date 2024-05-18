// arrayManipulation.js

// Function to process array of numbers
function processArray(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? num * num : num * 3));
}

// Function to format strings based on corresponding numbers
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

// Export the functions
module.exports = { processArray, formatArrayStrings };

// Example usage:
let strings = ["hello", "lads", "javascript", "is", "cool"];
let processedNumbers = processArray([1, 2, 3, 4, 5]);
let formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "LADS", "javascript", "IS", "cool"]
