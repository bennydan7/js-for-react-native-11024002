// userInfo.js

// Import functions from arrayManipulation.js
const { processArray, formatArrayStrings } = require("./arrayManipulation");

// Function to create user profiles
function createUserProfiles(names, processedNumbers) {
  const modifiedNames = formatArrayStrings(names, processedNumbers);
  return names.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNames[index],
    id: index + 1,
  }));
}

// Example usage:
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let numbers = [1, 2, 3, 4, 5];
let processedNumbers = processArray(numbers);
let userProfiles = createUserProfiles(names, processedNumbers);
console.log(userProfiles);
// Output:
// [
//   { originalName: "Alice", modifiedName: "alice", id: 1 },
//   { originalName: "Bob", modifiedName: "BOB", id: 2 },
//   { originalName: "Charlie", modifiedName: "charlie", id: 3 },
//   { originalName: "David", modifiedName: "DAVID", id: 4 },
//   { originalName: "Eve", modifiedName: "eve", id: 5 }
// ]
